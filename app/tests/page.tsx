import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { allTests } from "@/lib/test-data"
import Link from "next/link"

export default function TestsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 gradient-bg opacity-40" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">Choose Your Test</h1>
              <p className="text-xl text-muted-foreground">
                Select any test to discover your perfect match across different domains
              </p>
            </div>
          </div>
        </section>

        {/* Tests Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allTests.map((test) => (
                <Link
                  key={test.id}
                  href={`/tests/${test.id}`}
                  className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="space-y-4">
                    <div className="text-5xl">{test.results[0]?.icon || "📝"}</div>
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {test.name}
                    </h2>
                    <p className="text-muted-foreground">{test.description}</p>
                    <div className="pt-4 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Start Test
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
