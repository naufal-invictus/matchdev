// File: lib/algorithm.ts

import type { TestDomain, TestResult } from "./test-data"

// Perbarui tipe UserAnswers
export interface UserAnswers {
  [questionId: string]: number[] // Array of selected option indices
}

// Asumsi skor maksimum per opsi tetap 5
const MAX_SCORE_PER_OPTION = 5;
// Karena user bisa memilih hingga 2 jawaban, skor maksimum per pertanyaan menjadi 2 * 5 = 10
const MAX_SCORE_PER_QUESTION = MAX_SCORE_PER_OPTION * 2; // Sesuaikan jika MAX_ANSWERS di TestContainer berubah

export function calculateMatches(test: TestDomain, answers: UserAnswers): TestResult[] {
  // 1. Initialize a score map for all possible results.
  const categoryScores: { [category: string]: number } = {}
  test.results.forEach(result => {
    categoryScores[result.id] = 0
  })

  // Hitung total skor maksimum teoritis berdasarkan jumlah pertanyaan dan skor maks per pertanyaan
  const totalMaxScore = test.questions.length * MAX_SCORE_PER_QUESTION

  // 2. Iterate through questions and aggregate scores for selected options.
  test.questions.forEach((question) => {
    const selectedOptionIndices = answers[question.id] // Ini sekarang array, bisa kosong

    if (selectedOptionIndices && selectedOptionIndices.length > 0) {
      // Iterasi melalui setiap indeks jawaban yang dipilih
      selectedOptionIndices.forEach(selectedIndex => {
        if (selectedIndex >= 0 && selectedIndex < question.options.length) {
          const selectedOption = question.options[selectedIndex]
          if (selectedOption && selectedOption.score) {
            // Tambahkan skor untuk setiap kategori yang disumbangkan oleh opsi ini
            Object.entries(selectedOption.score).forEach(([category, value]) => {
              if (categoryScores[category] !== undefined) {
                categoryScores[category] += value
              }
            })
          }
        }
      })
    }
  })

  // 3. Calculate compatibility percentage for each result.
  const scores = test.results.map((result) => {
    const rawScore = categoryScores[result.id]

    // Hitung persentase terhadap total skor maksimum yang telah disesuaikan.
    const compatibility = (totalMaxScore > 0)
      ? Math.round((rawScore / totalMaxScore) * 100)
      : 0

    return {
      ...result,
      // Pastikan kompatibilitas selalu antara 0 dan 100.
      compatibility: Math.min(100, Math.max(0, compatibility)),
    }
  })

  // 4. Sort by compatibility and return top results (misalnya top 5).
  // Jumlah hasil yang ditampilkan bisa disesuaikan jika perlu.
  return scores.sort((a, b) => b.compatibility - a.compatibility)// .slice(0, 5) // Sesuaikan jika ingin menampilkan lebih/kurang dari 5
}
