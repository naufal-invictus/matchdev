import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 gradient-bg opacity-40" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">About MatchDev</h1>
              <p className="text-xl text-muted-foreground">
                Helping developers and tech professionals discover their perfect fit
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  MatchDev exists to help technology professionals discover their ideal tools, roles, and workflows. We
                  believe that the right match between a person and their technology stack can dramatically improve
                  productivity, satisfaction, and career growth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through thoughtfully designed assessments, we provide personalized recommendations that go beyond
                  surface-level preferences to reveal deep compatibility with programming languages, Linux
                  distributions, team roles, and workflow styles.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We envision a world where every developer can quickly identify the tools and roles that bring out
                  their best work. By removing guesswork from technology choices, we help professionals spend less time
                  experimenting and more time creating.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our long-term vision includes expanding beyond these four core domains to cover frameworks, cloud
                  platforms, development methodologies, and more—creating a comprehensive ecosystem for tech career
                  guidance.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">The Inspiration</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  MatchDev was born from a simple observation: many developers struggle to find the right tools and
                  roles that match their working style. Whether it's choosing between Python and Rust, Ubuntu and
                  Fedora, or deciding between frontend and backend work, these decisions often feel overwhelming.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We created MatchDev to make these decisions easier by combining psychological assessment principles
                  with technical expertise. Our tests are designed to be thoughtful, engaging, and genuinely helpful in
                  guiding your career path.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Future Development</h2>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're constantly evolving MatchDev to serve the tech community better. Upcoming features include:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Framework Matching</strong> - Find your ideal web framework
                        and development paradigm
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Cloud Platform Compatibility</strong> - Discover which cloud
                        services align with your needs
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Career Path Guidance</strong> - Personalized recommendations
                        for your professional growth
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Community Insights</strong> - See how your matches compare
                        with the broader developer community
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Retake & Track Progress</strong> - Monitor how your
                        preferences evolve over time
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Why MatchDev?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Scientifically Designed</h3>
                    <p className="text-muted-foreground">
                      Our tests use weighted algorithms and psychological principles to provide accurate matches.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Comprehensive</h3>
                    <p className="text-muted-foreground">
                      25 carefully crafted questions per test ensure thorough assessment of your preferences.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Actionable Results</h3>
                    <p className="text-muted-foreground">
                      Get Top 5 recommendations with detailed explanations you can act on immediately.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Always Free</h3>
                    <p className="text-muted-foreground">
                      MatchDev is completely free to use. No paywalls, no hidden fees, just pure value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
