"use client"

import { useState, useEffect } from "react"

interface CarouselSlide {
  title: string
  description: string
  color: string
}

const slides: CarouselSlide[] = [
  {
    title: "Discover Your Language",
    description: "Find the programming language that matches your coding philosophy and style.",
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Find Your Linux Home",
    description: "Explore which Linux distribution aligns with your workflow and preferences.",
    color: "from-accent/20 to-secondary/20",
  },
  {
    title: "Identify Your Role",
    description: "Understand which team role brings out your best professional qualities.",
    color: "from-secondary/20 to-primary/20",
  },
  {
    title: "Optimize Your Workflow",
    description: "Learn your ideal workflow style and productivity patterns.",
    color: "from-primary/20 to-secondary/20",
  },
]

export function Carousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-card border border-border animate-scale-in">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-br ${slide.color} flex items-center justify-center`}>
              <div className="text-center space-y-4 px-6">
                <h2 className="text-4xl font-bold text-foreground">{slide.title}</h2>
                <p className="text-lg text-muted-foreground max-w-md">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-primary w-8" : "bg-primary/40 hover:bg-primary/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
