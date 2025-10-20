"use client"

import type { TestResult } from "@/lib/test-data"
import { motion } from "framer-motion"

interface ResultCardProps {
  result: TestResult
  rank: number
  delay?: number
}

// Soft pastel color palette for badges
const badgeColors = [
  "from-blue-200 to-blue-100", // Light blue
  "from-emerald-200 to-emerald-100", // Mint green
  "from-purple-200 to-purple-100", // Lavender
  "from-orange-200 to-orange-100", // Peach
  "from-yellow-100 to-yellow-50", // Cream
]

export function ResultCard({ result, rank, delay = 0 }: ResultCardProps) {
  const badgeGradient = badgeColors[rank - 1] || badgeColors[0]
  const badgeTextColor = rank === 5 ? "text-gray-700" : "text-gray-800"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-white/60"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-emerald-50/20 pointer-events-none" />

      <motion.div
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold text-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        M
      </motion.div>

      {/* Content Container */}
      <div className="relative p-6 sm:p-8 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl">{result.icon}</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                #{rank} Match
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              Your Compatibility with <span className="text-primary">{result.name}</span>
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <motion.div
            className={`px-4 py-2 rounded-full bg-gradient-to-r ${badgeGradient} shadow-sm`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className={`font-bold text-lg ${badgeTextColor}`}>{result.compatibility}%</span>
          </motion.div>
          <span className="text-sm text-muted-foreground font-medium">Compatibility Score</span>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{result.description}</p>

        <div className="space-y-2 pt-2">
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${result.compatibility}%` }}
              transition={{ duration: 0.8, delay: delay * 0.1 + 0.2, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="pt-4 border-t border-white/20">
          <p className="text-sm leading-relaxed text-foreground/80">{result.reason}</p>
        </div>
      </div>
    </motion.div>
  )
}
