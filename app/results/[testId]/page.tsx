"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ResultCard } from "@/components/result-card"
import { ResultHighlightBox } from "@/components/result-highlight-box"
import { FullResultsBreakdown } from "@/components/full-results-breakdown"
import { allTests } from "@/lib/test-data"
import { calculateMatches } from "@/lib/algorithm"
import Link from "next/link"
import { motion } from "framer-motion"
import type { TestResult } from "@/lib/test-data"

export default function ResultsPage() {
  const params = useParams()
  const router = useRouter()
  const testId = params.testId as string

  const [results, setResults] = useState<TestResult[]>([])
  const [allResults, setAllResults] = useState<TestResult[]>([])
  const [loading, setLoading] = useState(true)
  const [testName, setTestName] = useState("")
  const [showFullResults, setShowFullResults] = useState(false)

  useEffect(() => {
    const test = allTests.find((t) => t.id === testId)
    if (!test) {
      router.push("/tests")
      return
    }

    setTestName(test.name)

    const answersJson = sessionStorage.getItem(`${testId}-answers`)
    if (!answersJson) {
      router.push(`/tests/${testId}`)
      return
    }

    try {
      const answers = JSON.parse(answersJson)
      const matches = calculateMatches(test, answers)
      setResults(matches)
      setAllResults(test.results)
    } catch (error) {
      console.error("Error calculating results:", error)
      router.push(`/tests/${testId}`)
    } finally {
      setLoading(false)
    }
  }, [testId, router])

  const scrollToFullResults = () => {
    setShowFullResults(true)
    setTimeout(() => {
      document.getElementById("full-results")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto" />
            <p className="text-muted-foreground">Analyzing your results...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 gradient-bg opacity-40" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">Your Results</h1>
              <p className="text-xl text-muted-foreground">{testName}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ResultHighlightBox results={results} testName={testName} />
          </div>
        </section>

        {/* Top 5 Result Cards */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {results.map((result, index) => (
                <ResultCard key={result.id} result={result} rank={index + 1} delay={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Want to explore more?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Take another test to discover your matches across different domains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/tests"
                  className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Take Another Test
                </Link>
                <Link
                  href="/"
                  className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
