"use client"

import type { TestQuestion as TestQuestionType } from "@/lib/test-data"
import { motion } from "framer-motion"

interface TestQuestionProps {
  question: TestQuestionType
  questionNumber: number
  totalQuestions: number
  selectedOption: number | undefined
  onSelect: (optionIndex: number) => void
}

export function TestQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  onSelect,
}: TestQuestionProps) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>
            Question {questionNumber} of {totalQuestions}
          </span>
          <span>{Math.round((questionNumber / totalQuestions) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Question */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-8">{question.text}</h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={option.id}
              onClick={() => onSelect(index)}
              className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                selectedOption === index
                  ? "border-primary bg-gradient-to-r from-primary/20 to-accent/20 shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50 bg-card hover:bg-card/80"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                    selectedOption === index ? "border-primary bg-primary" : "border-border group-hover:border-primary"
                  }`}
                >
                  {selectedOption === index && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{option.text}</p>
                  <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
