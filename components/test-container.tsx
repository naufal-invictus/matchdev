"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { TestDomain } from "@/lib/test-data"
import { TestQuestion } from "./test-question"
import { Navbar } from "./navbar"
import { Footer } from "./footer"

interface TestContainerProps {
  test: TestDomain
}

export function TestContainer({ test }: TestContainerProps) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: number }>({})

  const question = test.questions[currentQuestion]
  const isAnswered = answers[question.id] !== undefined
  const isLastQuestion = currentQuestion === test.questions.length - 1

  const handleSelectOption = (optionIndex: number) => {
    setAnswers({
      ...answers,
      [question.id]: optionIndex,
    })
  }

  const handleNext = () => {
    if (isLastQuestion) {
      // Store answers and navigate to results
      sessionStorage.setItem(`${test.id}-answers`, JSON.stringify(answers))
      router.push(`/results/${test.id}`)
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">{test.name}</h1>
            <p className="text-muted-foreground">{test.description}</p>
          </div>

          {/* Question Card */}
          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <TestQuestion
              question={question}
              questionNumber={currentQuestion + 1}
              totalQuestions={test.questions.length}
              selectedOption={answers[question.id]}
              onSelect={handleSelectOption}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLastQuestion ? "See Results" : "Next"}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
