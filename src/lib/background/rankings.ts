/*
 *
 * NOTE: We need to work on a better strategy for background processing
 * This is a temporary solution to get the mentions working
 *
 */

import { db } from "@/db";
import { Status } from "@/types/prompt";
import { LLMResult } from "@/types/prompt";
import { getVisibilityScore } from "../utils";
import { prompts } from "@/db/schema";
import { eq } from "drizzle-orm";

// Simple timeout implementation without problematic timer usage
async function withSimpleTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  errorMessage = `Operation timed out after ${timeoutMs}ms`
): Promise<T> {
  let timeoutId: NodeJS.Timeout;
  
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(errorMessage));
    }, timeoutMs);
  });

  try {
    const result = await Promise.race([promise, timeoutPromise]);
    clearTimeout(timeoutId);
    return result;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Simple delay function
async function simpleDelay(ms: number): Promise<void> {
  return new Promise(resolve => {
    const start = Date.now();
    const check = () => {
      if (Date.now() - start >= ms) {
        resolve();
      } else {
        setImmediate(check);
      }
    };
    check();
  });
}

// Simple retry implementation without complex timer handling
async function withSimpleRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelayMs = 1000
): Promise<T> {
  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (attempt === maxRetries) {
        throw lastError;
      }

      const delayMs = baseDelayMs * Math.pow(2, attempt);
      console.warn(
        `Attempt ${attempt + 1} failed, retrying in ${delayMs}ms:`,
        lastError.message
      );
      await simpleDelay(delayMs);
    }
  }

  throw lastError!;
}

export async function processInBackground(
  promptId: string,
  content: string,
  geoRegion: string,
  topicName: string
) {
  const startTime = Date.now();

  try {
    const [{ processPromptWithAllProviders }, { modelResults }] =
      await Promise.all([import("@/lib/llm"), import("@/db/schema")]);

    const results = await withSimpleTimeout(
      processPromptWithAllProviders(content, geoRegion),
      180000,
      `Processing timeout for prompt ${promptId}`
    );

    const dbOperations = results.map((result) => ({
      promptId,
      model: result.provider,
      responseMetadata: result.metadata,
      status: result.error ? "failed" : ("completed" as Status),
      errorMessage: result.error ?? null,
      results: result.response,
      sources: result.sources ?? [],
      citations: result.citations ?? [],
      searchQueries: result.searchQueries ?? [],
      groundingMetadata: result.groundingMetadata ?? {},
      completedAt: new Date(),
    }));

    const dbResults = await Promise.allSettled(
      dbOperations.map((operation) =>
        db
          .insert(modelResults)
          .values(operation)
          .onConflictDoUpdate({
            target: [modelResults.promptId, modelResults.model],
            set: { ...operation, updatedAt: new Date() },
          })
          .returning()
      )
    );

    const { successCount, failureCount, allResults } = dbResults.reduce(
      (acc, result, index) => {
        if (result.status === "fulfilled") {
          acc.successCount++;
          acc.allResults.push(...result.value);
        } else {
          acc.failureCount++;
          console.error(
            `DB error for ${results[index].provider}:`,
            result.reason
          );
        }
        return acc;
      },
      { successCount: 0, failureCount: 0, allResults: [] as LLMResult[] }
    );

    const overallStatus = successCount > 0 ? "completed" : "failed";
    const visibilityScore = getVisibilityScore(allResults, topicName);

    await db
      .update(prompts)
      .set({
        status: overallStatus,
        completedAt: new Date(),
        updatedAt: new Date(),
        visibilityScore: visibilityScore.toString(),
      })
      .where(eq(prompts.id, promptId));

    console.log(
      `Completed prompt ${promptId} in ${
        Date.now() - startTime
      }ms. Success: ${successCount}, Failed: ${failureCount}`
    );
  } catch (error) {
    console.error(
      `Error processing prompt ${promptId} after ${Date.now() - startTime}ms:`,
      error
    );

    await db
      .update(prompts)
      .set({
        status: "failed",
        updatedAt: new Date(),
      })
      .where(eq(prompts.id, promptId))
      .catch((dbError) =>
        console.error(`Failed to update status for ${promptId}:`, dbError)
      );
  }
}