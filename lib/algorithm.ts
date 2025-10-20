import type { TestDomain, TestResult } from "./test-data"

export interface UserAnswers {
  [questionId: string]: number
}

export function calculateMatches(test: TestDomain, answers: UserAnswers): TestResult[] {
  // Calculate segment scores for more nuanced matching
  const segmentScores: { [segment: string]: { score: number; weight: number } } = {}

  // Group questions by segment and calculate segment-level scores
  test.questions.forEach((question) => {
    const segment = question.segment
    if (!segmentScores[segment]) {
      segmentScores[segment] = { score: 0, weight: 0 }
    }

    const selectedOptionId = answers[question.id]
    if (selectedOptionId !== undefined) {
      const selectedOption = question.options[selectedOptionId]
      if (selectedOption) {
        segmentScores[segment].score += selectedOption.weight
        segmentScores[segment].weight += 1
      }
    }
  })

  // Calculate average segment scores
  const avgSegmentScores: { [segment: string]: number } = {}
  Object.entries(segmentScores).forEach(([segment, data]) => {
    avgSegmentScores[segment] = data.weight > 0 ? data.score / data.weight : 0
  })

  // Calculate compatibility for each result based on segment alignment
  const scores = test.results.map((result, resultIndex) => {
    let totalCompatibility = 0
    let segmentCount = 0

    Object.entries(avgSegmentScores).forEach(([segment, avgScore]) => {
      // Calculate how well this result matches the segment score
      const distance = Math.abs(avgScore - resultIndex)
      const segmentCompatibility = Math.max(0, 100 - distance * 25)
      totalCompatibility += segmentCompatibility
      segmentCount += 1
    })

    const compatibility = segmentCount > 0 ? Math.round(totalCompatibility / segmentCount) : 0

    return {
      ...result,
      compatibility: Math.min(100, Math.max(0, compatibility)),
    }
  })

  // Sort by compatibility and return top 5
  return scores.sort((a, b) => b.compatibility - a.compatibility).slice(0, 5)
}
