"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Brain, 
  MessageSquare, 
  Sword, 
  Rocket,
  Star,
  Check,
  Zap,
  Shield,
  TrendingUp,
  Eye,
  Target,
  ChevronRight,
  Play,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">GEOfluence</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <Link href="/signin">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              The First AI Brand Visibility Platform
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              Your Brand Has an AI Footprint —<br />
              <span className="text-blue-400">Control It Before Your Competitor Does</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              GEOfluence tracks how AI models talk about you, compares it to competitors, 
              and gives you the playbook to win.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-5 h-5 mr-2" />
                Run a Free Visibility Scan
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl">
                <Play className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
            </div>

            {/* Animated LLM Interface */}
            <div className="max-w-2xl mx-auto">
              <Card className="bg-black/40 backdrop-blur-xl border-white/10 p-6 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">U</span>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-3 flex-1">
                      <p className="text-sm">What's the best sustainable shoe brand?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3 flex-1 border border-green-500/30">
                      <p className="text-sm">
                        Check out <span className="font-semibold text-blue-400">VibeStep</span> — they're eco-friendly and stylish with excellent customer reviews.
                      </p>
                      <div className={cn(
                        "mt-2 text-xs text-gray-400 transition-opacity duration-1000",
                        currentStep >= 1 ? "opacity-100" : "opacity-0"
                      )}>
                        <span className="text-blue-400">Powered by GEOfluence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            AI Is the New Front Page of the Internet
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { stat: "72%", text: "of consumers ask AI before making a purchase" },
              { stat: "Most", text: "brands are invisible in AI results" },
              { stat: "Next", text: "SEO battle is being fought inside LLMs" }
            ].map((item, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">{item.stat}</div>
                <p className="text-lg text-gray-300">{item.text}</p>
              </Card>
            ))}
          </div>

          <Button variant="outline" className="mt-12 border-white/20 text-white hover:bg-white/10">
            Learn About AI Influence
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="features" className="py-24 px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What GEOfluence Does
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Track Visibility",
                description: "See where and how often your brand is mentioned by AI",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: MessageSquare,
                title: "Analyze Sentiment",
                description: "Understand what AI thinks about your brand",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Sword,
                title: "Compare Competitors",
                description: "Know who's winning and why",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Rocket,
                title: "Boost Your AI Ranking",
                description: "Action steps to appear in the right queries",
                color: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
                <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-r mb-4 flex items-center justify-center", feature.color)}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Product Preview */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Get Your AI Brand Report in 60 Seconds
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">AI Visibility Score</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-400">74/100</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="font-semibold">Positive Keywords</span>
                  </div>
                  <div className="space-y-2">
                    {["trusted", "sustainable", "fast shipping"].map((keyword) => (
                      <Badge key={keyword} className="bg-green-500/20 text-green-300 border-green-500/30">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Mention Frequency</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>GPT-4: <span className="text-purple-400 font-semibold">4x/week</span></div>
                    <div>Perplexity: <span className="text-purple-400 font-semibold">2x/week</span></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <p className="text-lg text-gray-300 mt-8 max-w-2xl mx-auto">
            See exactly how AI is describing your business — and how to improve it.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Trusted by Forward-Thinking Brands
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
            {["CleanSkin", "BrikBar", "LoopLiving", "DataGlow"].map((brand) => (
              <div key={brand} className="bg-white/5 backdrop-blur-xl border-white/10 rounded-xl p-6 flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-300">{brand}</span>
              </div>
            ))}
          </div>
          
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 rounded-2xl max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-gray-300 mb-4 italic">
              "Before GEOfluence, we had no idea how invisible we were in ChatGPT. 
              Now we rank in the top 3 results weekly."
            </blockquote>
            <cite className="text-blue-400 font-semibold">— CMO, BrikBar</cite>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 mb-16">
            Start free. Upgrade when AI visibility becomes mission-critical.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                period: "/month",
                features: ["5 AI scans", "Basic visibility tracking", "Email support"],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Pro",
                price: "$99",
                period: "/month",
                features: ["Unlimited scans", "Advanced analytics", "Competitor tracking", "Priority support"],
                cta: "Start Pro Trial",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                features: ["Custom integrations", "Dedicated support", "Advanced reporting", "SLA guarantee"],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={cn(
                "bg-white/5 backdrop-blur-xl border-white/10 p-8 rounded-2xl relative",
                plan.popular && "border-blue-500/50 bg-blue-500/10"
              )}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={cn(
                  "w-full",
                  plan.popular 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                )}>
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Don't Let AI Misrepresent You
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Your competitors are already seeding LLMs. You should be too.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              <Zap className="w-5 h-5 mr-2" />
              Run a Free Scan Now
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl">
              Book a Demo
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">GEOfluence</span>
              </div>
              <p className="text-gray-400 text-sm">AI Brand Visibility, Redefined.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 GEOfluence. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}