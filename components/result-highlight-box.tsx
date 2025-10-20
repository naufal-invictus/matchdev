"use client"

import { motion } from "framer-motion"
import type { TestResult } from "@/lib/test-data"

interface ResultHighlightBoxProps {
  results: TestResult[]
  testName: string
}

const pastelColors = [
  "from-blue-100 to-blue-50 border-blue-200",
  "from-emerald-100 to-emerald-50 border-emerald-200",
  "from-pink-100 to-pink-50 border-pink-200",
  "from-amber-100 to-amber-50 border-amber-200",
  "from-purple-100 to-purple-50 border-purple-200",
]

export function ResultHighlightBox({ results, testName }: ResultHighlightBoxProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-background to-primary/5 rounded-3xl border-2 border-primary/20 p-8 mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Your Result:</h2>
          <p className="text-muted-foreground">{testName}</p>
        </div>

        {/* Top 5 Badge Chips */}
        <div className="flex flex-wrap gap-3">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              className={`bg-gradient-to-br ${pastelColors[index % pastelColors.length]} border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{result.icon}</span>
                <div>
                  <p className="font-semibold text-sm text-foreground">{result.name}</p>
                  <p className="text-xs text-muted-foreground">{result.compatibility}% match</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
