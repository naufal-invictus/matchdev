"use client"

import { motion } from "framer-motion"
import type { TestResult } from "@/lib/test-data"

interface FullResultsBreakdownProps {
  results: TestResult[]
  allResults: TestResult[]
}

const pastelColors = [
  "from-blue-100 to-blue-50 border-blue-200 text-blue-900",
  "from-emerald-100 to-emerald-50 border-emerald-200 text-emerald-900",
  "from-pink-100 to-pink-50 border-pink-200 text-pink-900",
  "from-amber-100 to-amber-50 border-amber-200 text-amber-900",
  "from-purple-100 to-purple-50 border-purple-200 text-purple-900",
  "from-cyan-100 to-cyan-50 border-cyan-200 text-cyan-900",
  "from-rose-100 to-rose-50 border-rose-200 text-rose-900",
  "from-lime-100 to-lime-50 border-lime-200 text-lime-900",
]

export function FullResultsBreakdown({ allResults }: FullResultsBreakdownProps) {
  return (
    <motion.div
      className="space-y-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Full Compatibility Breakdown</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore your complete compatibility scores across all categories
        </p>
      </div>

      {/* All Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allResults.map((result, index) => (
          <motion.div
            key={result.id}
            className={`bg-gradient-to-br ${pastelColors[index % pastelColors.length]} border-2 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl">{result.icon}</span>
                    <h3 className="text-lg font-bold text-foreground">{result.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>

              {/* Compatibility Percentage */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-foreground">Compatibility</span>
                  <span className="text-lg font-bold text-foreground">{result.compatibility}%</span>
                </div>
                <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${result.compatibility}%` }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              {/* Reason */}
              <p className="text-sm text-foreground leading-relaxed">{result.reason}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
