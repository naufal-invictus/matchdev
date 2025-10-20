"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { Carousel } from "@/components/carousel"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: "💻",
      title: "Programming Language Match",
      description: "Discover which programming language aligns best with your coding style and preferences.",
    },
    {
      icon: "🐧",
      title: "Linux Distro Match",
      description: "Find the perfect Linux distribution that matches your workflow and technical needs.",
    },
    {
      icon: "👥",
      title: "Team Role Match",
      description: "Identify the team role that best suits your skills and professional aspirations.",
    },
    {
      icon: "⚙️",
      title: "Workflow Style Match",
      description: "Understand your ideal workflow style and productivity patterns.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32">
          <div className="absolute inset-0 gradient-bg opacity-40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">Find Your Perfect Match</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Discover your ideal programming language, Linux distro, team role, and workflow style through our
                interactive 18 question tests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/tests"
                  className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Testing
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Explore Our Tests</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each test is designed to help you understand yourself better through thoughtful questions.
              </p>
            </div>
            {mounted && <Carousel />}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Tests</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from four comprehensive tests designed to help you understand yourself better.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our intelligent algorithm analyzes your responses to provide personalized recommendations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">Answer Questions</h3>
                <p className="text-muted-foreground">
                  Complete 18 carefully crafted questions about your preferences and style.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">Intelligent Analysis</h3>
                <p className="text-muted-foreground">Our algorithm analyzes your responses using weighted scoring.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">Get Results</h3>
                <p className="text-muted-foreground">Receive your Top 5 matches with detailed explanations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Ready to Find Your Match?</h2>
            <p className="text-lg text-muted-foreground">Take any of our four tests to discover your perfect fit.</p>
            <Link
              href="/tests"
              className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
