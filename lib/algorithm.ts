// naufal-invictus/matchdev/matchdev-41eaeb3a310d9a30c1c8db682d04b81606537351/lib/algorithm.ts
import type { TestDomain, TestResult } from "./test-data"

export interface UserAnswers {
  [questionId: string]: number
}

export function calculateMatches(test: TestDomain, answers: UserAnswers): TestResult[] {
  // 1. Initialize a score map for all possible results.
  const categoryScores: { [category: string]: number } = {}
  test.results.forEach(result => {
    categoryScores[result.id] = 0
  })

  // We assume the "max" score for any question is 5.
  // This is the benchmark for 100% compatibility.
  const totalMaxScore = test.questions.length * 5
  
  // 2. Iterate through questions and aggregate scores.
  test.questions.forEach((question) => {
    const selectedOptionIndex = answers[question.id]
    
    if (selectedOptionIndex !== undefined) {
      const selectedOption = question.options[selectedOptionIndex]
      
      if (selectedOption && selectedOption.score) {
        // Add scores for each category this option contributes to
        Object.entries(selectedOption.score).forEach(([category, value]) => {
          if (categoryScores[category] !== undefined) {
            categoryScores[category] += value
          }
        })
      }
    }
  })

  // 3. Calculate compatibility percentage for each result.
  const scores = test.results.map((result) => {
    const rawScore = categoryScores[result.id]
    
    // Calculate percentage against the total theoretical max score.
    const compatibility = (totalMaxScore > 0) 
      ? Math.round((rawScore / totalMaxScore) * 100) 
      : 0

    return {
      ...result,
      // Ensure compatibility is always between 0 and 100.
      compatibility: Math.min(100, Math.max(0, compatibility)), 
    }
  })

  // 4. Sort by compatibility and return top 5.
  return scores.sort((a, b) => b.compatibility - a.compatibility).slice(0, 5)
}