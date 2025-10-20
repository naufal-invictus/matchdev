export interface TestOption {
  id: string
  text: string
  description: string
  weight: number
}

export interface TestQuestion {
  id: string
  text: string
  segment: string // Added segment to categorize questions thematically
  options: TestOption[]
}

export interface TestResult {
  id: string
  name: string
  description: string
  icon: string
  compatibility: number
  reason: string
}

export interface TestDomain {
  id: string
  name: string
  description: string
  questions: TestQuestion[]
  results: TestResult[]
}

// Programming Language Test Data - 18 questions, 6 segments (3 questions each)
export const programmingLanguageTest: TestDomain = {
  id: "programming-language",
  name: "Programming Language Match",
  description: "Discover which programming language aligns best with your coding style",
  questions: [
    // Segment 1: Coding Motivation (3 questions)
    {
      id: "q1",
      segment: "Coding Motivation",
      text: "What drives your passion for coding?",
      options: [
        {
          id: "a",
          text: "Building user-facing features",
          description: "You love crafting smooth interfaces and interactive user experiences.",
          weight: 2,
        },
        {
          id: "b",
          text: "Solving complex algorithmic problems",
          description: "You enjoy tackling hard computational challenges and optimization puzzles.",
          weight: 1,
        },
        {
          id: "c",
          text: "Creating elegant, maintainable code",
          description: "You're passionate about clean architecture and beautiful code design.",
          weight: 0,
        },
        {
          id: "d",
          text: "Optimizing performance and systems",
          description: "You thrive on squeezing every bit of performance from systems.",
          weight: 3,
        },
      ],
    },
    {
      id: "q2",
      segment: "Coding Motivation",
      text: "What's your ideal coding project?",
      options: [
        {
          id: "a",
          text: "Rapid prototyping and iteration",
          description: "You love getting ideas to market quickly and iterating fast.",
          weight: 2,
        },
        {
          id: "b",
          text: "Long-term, well-architected systems",
          description: "You prefer building solid foundations that last for years.",
          weight: 1,
        },
        {
          id: "c",
          text: "Research and experimentation",
          description: "You enjoy exploring new ideas and pushing boundaries.",
          weight: 0,
        },
        {
          id: "d",
          text: "High-performance critical systems",
          description: "You want to build systems that handle massive scale.",
          weight: 3,
        },
      ],
    },
    {
      id: "q3",
      segment: "Coding Motivation",
      text: "What excites you most about a new language?",
      options: [
        {
          id: "a",
          text: "Productivity and rapid development",
          description: "You want to write more code in less time.",
          weight: 2,
        },
        {
          id: "b",
          text: "Unique paradigms and concepts",
          description: "You're fascinated by novel programming approaches.",
          weight: 0,
        },
        {
          id: "c",
          text: "Community and ecosystem",
          description: "You value libraries, tools, and community support.",
          weight: 1,
        },
        {
          id: "d",
          text: "Raw performance capabilities",
          description: "You're drawn to languages that push computational limits.",
          weight: 3,
        },
      ],
    },
    // Segment 2: Experience Level (3 questions)
    {
      id: "q4",
      segment: "Experience Level",
      text: "What's your programming experience?",
      options: [
        {
          id: "a",
          text: "Beginner - learning fundamentals",
          description: "You're just starting your coding journey.",
          weight: 2,
        },
        {
          id: "b",
          text: "Intermediate - comfortable with basics",
          description: "You can build projects but still learning advanced concepts.",
          weight: 1,
        },
        {
          id: "c",
          text: "Advanced - seeking new challenges",
          description: "You're confident and looking to expand your skills.",
          weight: 0,
        },
        {
          id: "d",
          text: "Expert - mastering complex systems",
          description: "You've built production systems and mentor others.",
          weight: 3,
        },
      ],
    },
    {
      id: "q5",
      segment: "Experience Level",
      text: "How do you approach learning new languages?",
      options: [
        {
          id: "a",
          text: "Hands-on experimentation",
          description: "You learn by building small projects immediately.",
          weight: 2,
        },
        {
          id: "b",
          text: "Structured tutorials and courses",
          description: "You follow guided learning paths and courses.",
          weight: 1,
        },
        {
          id: "c",
          text: "Reading documentation deeply",
          description: "You dive into official docs and language specs.",
          weight: 0,
        },
        {
          id: "d",
          text: "Building complex projects immediately",
          description: "You jump into real-world projects to learn fast.",
          weight: 3,
        },
      ],
    },
    {
      id: "q6",
      segment: "Experience Level",
      text: "How comfortable are you with advanced concepts?",
      options: [
        {
          id: "a",
          text: "Prefer simple, straightforward concepts",
          description: "You like languages that are easy to understand.",
          weight: 2,
        },
        {
          id: "b",
          text: "Comfortable with moderate complexity",
          description: "You can handle some advanced features.",
          weight: 1,
        },
        {
          id: "c",
          text: "Enjoy advanced features",
          description: "You love exploring metaprogramming and advanced patterns.",
          weight: 0,
        },
        {
          id: "d",
          text: "Thrive on cutting-edge complexity",
          description: "You want the most powerful, complex features available.",
          weight: 3,
        },
      ],
    },
    // Segment 3: Thinking Style (3 questions)
    {
      id: "q7",
      segment: "Thinking Style",
      text: "How do you prefer to think about problems?",
      options: [
        {
          id: "a",
          text: "Pragmatic and practical",
          description: "You focus on what works and gets results.",
          weight: 2,
        },
        { id: "b", text: "Balanced approach", description: "You mix theory with practical considerations.", weight: 1 },
        {
          id: "c",
          text: "Theoretical and elegant",
          description: "You love mathematical elegance and pure concepts.",
          weight: 0,
        },
        {
          id: "d",
          text: "Performance-focused",
          description: "You think in terms of efficiency and optimization.",
          weight: 3,
        },
      ],
    },
    {
      id: "q8",
      segment: "Thinking Style",
      text: "What's your preferred programming paradigm?",
      options: [
        {
          id: "a",
          text: "Object-oriented and structured",
          description: "You organize code around objects and classes.",
          weight: 1,
        },
        {
          id: "b",
          text: "Functional and immutable",
          description: "You prefer pure functions and immutable data.",
          weight: 0,
        },
        {
          id: "c",
          text: "Dynamic and flexible",
          description: "You like flexibility and runtime adaptability.",
          weight: 2,
        },
        {
          id: "d",
          text: "Systems-level and procedural",
          description: "You think in terms of memory, pointers, and control flow.",
          weight: 3,
        },
      ],
    },
    {
      id: "q9",
      segment: "Thinking Style",
      text: "How do you handle state management?",
      options: [
        {
          id: "a",
          text: "Immutable and functional",
          description: "You avoid mutable state and side effects.",
          weight: 0,
        },
        {
          id: "b",
          text: "Object-oriented with encapsulation",
          description: "You manage state within objects carefully.",
          weight: 1,
        },
        {
          id: "c",
          text: "Flexible and dynamic",
          description: "You adapt state management to the situation.",
          weight: 2,
        },
        {
          id: "d",
          text: "Manual memory management",
          description: "You want direct control over memory and state.",
          weight: 3,
        },
      ],
    },
    // Segment 4: Technical Preferences (3 questions)
    {
      id: "q10",
      segment: "Technical Preferences",
      text: "How important is execution speed?",
      options: [
        {
          id: "a",
          text: "Not critical - development speed matters more",
          description: "You prioritize getting things done quickly.",
          weight: 2,
        },
        {
          id: "b",
          text: "Important - but not the only factor",
          description: "You balance speed with other concerns.",
          weight: 1,
        },
        {
          id: "c",
          text: "Very important - performance is key",
          description: "You want fast execution but not at all costs.",
          weight: 0,
        },
        {
          id: "d",
          text: "Critical - every millisecond matters",
          description: "You need maximum performance for your use case.",
          weight: 3,
        },
      ],
    },
    {
      id: "q11",
      segment: "Technical Preferences",
      text: "How do you feel about type systems?",
      options: [
        {
          id: "a",
          text: "Dynamically typed - more flexible",
          description: "You prefer flexibility over compile-time checks.",
          weight: 2,
        },
        {
          id: "b",
          text: "Gradual typing - best of both",
          description: "You like optional type annotations.",
          weight: 1,
        },
        {
          id: "c",
          text: "Strongly typed - prevents bugs",
          description: "You want the compiler to catch errors early.",
          weight: 0,
        },
        {
          id: "d",
          text: "Advanced type systems",
          description: "You love sophisticated type features and inference.",
          weight: 3,
        },
      ],
    },
    {
      id: "q12",
      segment: "Technical Preferences",
      text: "What's your primary use case?",
      options: [
        { id: "a", text: "Web development", description: "You build interactive web applications.", weight: 2 },
        { id: "b", text: "General purpose", description: "You work across multiple domains.", weight: 1 },
        { id: "c", text: "Data science and ML", description: "You teach machines to learn patterns.", weight: 0 },
        {
          id: "d",
          text: "Systems programming",
          description: "You're the type who loves optimizing performance and writing low-level logic.",
          weight: 3,
        },
      ],
    },
    // Segment 5: Personal Style (3 questions)
    {
      id: "q13",
      segment: "Personal Style",
      text: "What's your code readability philosophy?",
      options: [
        { id: "a", text: "Extremely important", description: "You write code for humans first.", weight: 2 },
        { id: "b", text: "Very important", description: "You balance readability with other concerns.", weight: 1 },
        { id: "c", text: "Somewhat important", description: "You focus on correctness over readability.", weight: 0 },
        {
          id: "d",
          text: "Less important than performance",
          description: "You optimize for speed over clarity.",
          weight: 3,
        },
      ],
    },
    {
      id: "q14",
      segment: "Personal Style",
      text: "How do you feel about frameworks?",
      options: [
        {
          id: "a",
          text: "Love using established frameworks",
          description: "You prefer proven, battle-tested tools.",
          weight: 2,
        },
        { id: "b", text: "Prefer lightweight tools", description: "You like minimal, focused libraries.", weight: 1 },
        {
          id: "c",
          text: "Like building from scratch",
          description: "You enjoy implementing things yourself.",
          weight: 0,
        },
        { id: "d", text: "Use what's necessary", description: "You're pragmatic about tool selection.", weight: 3 },
      ],
    },
    {
      id: "q15",
      segment: "Personal Style",
      text: "What's your debugging style?",
      options: [
        {
          id: "a",
          text: "Print statements and logging",
          description: "You debug by adding output and reading logs.",
          weight: 2,
        },
        { id: "b", text: "Interactive debugger", description: "You use step-through debugging tools.", weight: 1 },
        {
          id: "c",
          text: "Type system catches errors",
          description: "You rely on the compiler to find bugs.",
          weight: 0,
        },
        {
          id: "d",
          text: "Low-level debugging tools",
          description: "You use profilers, memory tools, and system debuggers.",
          weight: 3,
        },
      ],
    },
    // Segment 6: Long-term Goals (3 questions)
    {
      id: "q16",
      segment: "Long-term Goals",
      text: "What's your ideal career trajectory?",
      options: [
        {
          id: "a",
          text: "Full-stack versatility",
          description: "You want to work across the entire stack.",
          weight: 2,
        },
        {
          id: "b",
          text: "Broad skill development",
          description: "You enjoy learning many different technologies.",
          weight: 1,
        },
        {
          id: "c",
          text: "Deep expertise in one area",
          description: "You want to become a master in your domain.",
          weight: 0,
        },
        {
          id: "d",
          text: "Systems and infrastructure mastery",
          description: "You want to build the foundations others use.",
          weight: 3,
        },
      ],
    },
    {
      id: "q17",
      segment: "Long-term Goals",
      text: "How important is community support?",
      options: [
        {
          id: "a",
          text: "Very important - need lots of libraries",
          description: "You rely on a rich ecosystem of packages.",
          weight: 2,
        },
        {
          id: "b",
          text: "Important - but not essential",
          description: "You appreciate community but can work independently.",
          weight: 1,
        },
        {
          id: "c",
          text: "Less important - prefer independence",
          description: "You like building your own solutions.",
          weight: 0,
        },
        {
          id: "d",
          text: "Not a factor",
          description: "You're self-sufficient and don't need external support.",
          weight: 3,
        },
      ],
    },
    {
      id: "q18",
      segment: "Long-term Goals",
      text: "What's your vision for your coding future?",
      options: [
        {
          id: "a",
          text: "Building innovative products",
          description: "You want to create products that change the world.",
          weight: 2,
        },
        {
          id: "b",
          text: "Contributing to open source",
          description: "You want to give back to the community.",
          weight: 1,
        },
        {
          id: "c",
          text: "Advancing computer science",
          description: "You want to push the boundaries of what's possible.",
          weight: 0,
        },
        {
          id: "d",
          text: "Pushing performance boundaries",
          description: "You want to make systems faster and more efficient.",
          weight: 3,
        },
      ],
    },
  ],
  results: [
    {
      id: "python",
      name: "Python",
      description: "Versatile, readable, and powerful",
      icon: "🐍",
      compatibility: 0,
      reason:
        "Python excels in readability and rapid development. Perfect for data science, web development, and automation.",
    },
    {
      id: "javascript",
      name: "JavaScript",
      description: "Flexible and ubiquitous",
      icon: "⚡",
      compatibility: 0,
      reason:
        "JavaScript dominates web development with its flexibility and massive ecosystem. Great for full-stack development.",
    },
    {
      id: "rust",
      name: "Rust",
      description: "Safe, fast, and empowering",
      icon: "🦀",
      compatibility: 0,
      reason:
        "Rust combines performance with memory safety. Ideal for systems programming and performance-critical applications.",
    },
    {
      id: "go",
      name: "Go",
      description: "Simple, concurrent, and efficient",
      icon: "🐹",
      compatibility: 0,
      reason: "Go's simplicity and built-in concurrency make it perfect for backend services and cloud infrastructure.",
    },
    {
      id: "typescript",
      name: "TypeScript",
      description: "JavaScript with superpowers",
      icon: "📘",
      compatibility: 0,
      reason:
        "TypeScript adds type safety to JavaScript, making it ideal for large-scale applications and team projects.",
    },
  ],
}

export const linuxDistroTest: TestDomain = {
  id: "linux-distro",
  name: "Linux Distro Match",
  description: "Find the perfect Linux distribution for your workflow",
  questions: [
    // Segment 1: Experience Level (3 questions)
    {
      id: "q1",
      segment: "Experience Level",
      text: "What's your Linux experience level?",
      options: [
        { id: "a", text: "Complete beginner", weight: 0 },
        { id: "b", text: "Some experience", weight: 1 },
        { id: "c", text: "Comfortable with Linux", weight: 2 },
        { id: "d", text: "Advanced user", weight: 3 },
      ],
    },
    {
      id: "q2",
      segment: "Experience Level",
      text: "How comfortable are you with command line?",
      options: [
        { id: "a", text: "Prefer GUI", weight: 0 },
        { id: "b", text: "Comfortable with both", weight: 1 },
        { id: "c", text: "Prefer CLI", weight: 2 },
        { id: "d", text: "CLI expert", weight: 3 },
      ],
    },
    {
      id: "q3",
      segment: "Experience Level",
      text: "How do you handle system troubleshooting?",
      options: [
        { id: "a", text: "Need guided help", weight: 0 },
        { id: "b", text: "Can figure it out", weight: 1 },
        { id: "c", text: "Enjoy troubleshooting", weight: 2 },
        { id: "d", text: "Expert troubleshooter", weight: 3 },
      ],
    },
    // Segment 2: Usage Purpose (3 questions)
    {
      id: "q4",
      segment: "Usage Purpose",
      text: "What's your primary use case?",
      options: [
        { id: "a", text: "Desktop/laptop", weight: 0 },
        { id: "b", text: "Development", weight: 1 },
        { id: "c", text: "Server/headless", weight: 2 },
        { id: "d", text: "Embedded systems", weight: 3 },
      ],
    },
    {
      id: "q5",
      segment: "Usage Purpose",
      text: "How do you use your Linux system?",
      options: [
        { id: "a", text: "Daily desktop work", weight: 0 },
        { id: "b", text: "Development and coding", weight: 1 },
        { id: "c", text: "Server administration", weight: 2 },
        { id: "d", text: "Specialized/embedded", weight: 3 },
      ],
    },
    {
      id: "q6",
      segment: "Usage Purpose",
      text: "What's your update frequency preference?",
      options: [
        { id: "a", text: "Stable (every 2 years)", weight: 0 },
        { id: "b", text: "Regular (every 6 months)", weight: 1 },
        { id: "c", text: "Frequent (rolling release)", weight: 2 },
        { id: "d", text: "Minimal (LTS only)", weight: 3 },
      ],
    },
    // Segment 3: System Preferences (3 questions)
    {
      id: "q7",
      segment: "System Preferences",
      text: "What's your philosophy on customization?",
      options: [
        { id: "a", text: "Minimal - just works", weight: 0 },
        { id: "b", text: "Some customization", weight: 1 },
        { id: "c", text: "Heavy customization", weight: 2 },
        { id: "d", text: "Full control", weight: 3 },
      ],
    },
    {
      id: "q8",
      segment: "System Preferences",
      text: "How important is package availability?",
      options: [
        { id: "a", text: "Adequate is fine", weight: 0 },
        { id: "b", text: "Important - good selection", weight: 1 },
        { id: "c", text: "Very important - need latest", weight: 2 },
        { id: "d", text: "Minimal dependencies", weight: 3 },
      ],
    },
    {
      id: "q9",
      segment: "System Preferences",
      text: "What's your philosophy on bloat?",
      options: [
        { id: "a", text: "Batteries included", weight: 0 },
        { id: "b", text: "Reasonable defaults", weight: 1 },
        { id: "c", text: "Minimal bloat", weight: 2 },
        { id: "d", text: "Extreme minimalism", weight: 3 },
      ],
    },
    // Segment 4: Aesthetics (3 questions)
    {
      id: "q10",
      segment: "Aesthetics",
      text: "What's your desktop environment preference?",
      options: [
        { id: "a", text: "GNOME", weight: 0 },
        { id: "b", text: "KDE", weight: 1 },
        { id: "c", text: "Lightweight (i3, dwm)", weight: 2 },
        { id: "d", text: "Headless/CLI", weight: 3 },
      ],
    },
    {
      id: "q11",
      segment: "Aesthetics",
      text: "How important is visual polish?",
      options: [
        { id: "a", text: "Very important", weight: 0 },
        { id: "b", text: "Somewhat important", weight: 1 },
        { id: "c", text: "Less important", weight: 2 },
        { id: "d", text: "Not important", weight: 3 },
      ],
    },
    {
      id: "q12",
      segment: "Aesthetics",
      text: "What's your hardware?",
      options: [
        { id: "a", text: "Modern/powerful", weight: 0 },
        { id: "b", text: "Average", weight: 1 },
        { id: "c", text: "Older/limited", weight: 2 },
        { id: "d", text: "Embedded/minimal", weight: 3 },
      ],
    },
    // Segment 5: Beginner/Advanced Level (3 questions)
    {
      id: "q13",
      segment: "Beginner/Advanced Level",
      text: "How do you feel about bleeding edge software?",
      options: [
        { id: "a", text: "Prefer stable", weight: 0 },
        { id: "b", text: "Balanced", weight: 1 },
        { id: "c", text: "Love it", weight: 2 },
        { id: "d", text: "Minimal updates", weight: 3 },
      ],
    },
    {
      id: "q14",
      segment: "Beginner/Advanced Level",
      text: "What's your installation preference?",
      options: [
        { id: "a", text: "Graphical installer", weight: 0 },
        { id: "b", text: "Text-based installer", weight: 1 },
        { id: "c", text: "Manual installation", weight: 2 },
        { id: "d", text: "Minimal base", weight: 3 },
      ],
    },
    {
      id: "q15",
      segment: "Beginner/Advanced Level",
      text: "How do you feel about documentation?",
      options: [
        { id: "a", text: "Need comprehensive docs", weight: 0 },
        { id: "b", text: "Good docs helpful", weight: 1 },
        { id: "c", text: "Wiki is enough", weight: 2 },
        { id: "d", text: "Source code is docs", weight: 3 },
      ],
    },
    // Segment 6: Maintenance Capability (3 questions)
    {
      id: "q16",
      segment: "Maintenance Capability",
      text: "How important is stability?",
      options: [
        { id: "a", text: "Critical", weight: 0 },
        { id: "b", text: "Very important", weight: 1 },
        { id: "c", text: "Important", weight: 2 },
        { id: "d", text: "Less important", weight: 3 },
      ],
    },
    {
      id: "q17",
      segment: "Maintenance Capability",
      text: "What's your security priority?",
      options: [
        { id: "a", text: "Standard security", weight: 0 },
        { id: "b", text: "Enhanced security", weight: 1 },
        { id: "c", text: "Hardened systems", weight: 2 },
        { id: "d", text: "Maximum security", weight: 3 },
      ],
    },
    {
      id: "q18",
      segment: "Maintenance Capability",
      text: "How important is commercial support?",
      options: [
        { id: "a", text: "Very important", weight: 0 },
        { id: "b", text: "Somewhat important", weight: 1 },
        { id: "c", text: "Not important", weight: 2 },
        { id: "d", text: "Irrelevant", weight: 3 },
      ],
    },
  ],
  results: [
    {
      id: "ubuntu",
      name: "Ubuntu",
      description: "User-friendly and widely supported",
      icon: "🧡",
      compatibility: 0,
      reason:
        "Ubuntu offers excellent community support, regular updates, and a gentle learning curve. Perfect for beginners and general users.",
    },
    {
      id: "fedora",
      name: "Fedora",
      description: "Cutting-edge and innovative",
      icon: "🎩",
      compatibility: 0,
      reason:
        "Fedora provides the latest software and technologies. Great for developers who want to stay on the bleeding edge.",
    },
    {
      id: "debian",
      name: "Debian",
      description: "Stable and reliable",
      icon: "🌀",
      compatibility: 0,
      reason:
        "Debian is known for stability and reliability. Ideal for servers and users who prioritize long-term support.",
    },
    {
      id: "arch",
      name: "Arch Linux",
      description: "Minimalist and powerful",
      icon: "🏔️",
      compatibility: 0,
      reason:
        "Arch provides complete control and customization. Perfect for experienced users who want to build their system from scratch.",
    },
    {
      id: "nixos",
      name: "NixOS",
      description: "Declarative and reproducible",
      icon: "❄️",
      compatibility: 0,
      reason:
        "NixOS offers unique declarative configuration and reproducibility. Ideal for developers seeking advanced system management.",
    },
  ],
}

export const teamRoleTest: TestDomain = {
  id: "team-role",
  name: "Team Role Match",
  description: "Identify the team role that best suits your skills",
  questions: [
    // Segment 1: Team Work Motivation (3 questions)
    {
      id: "q1",
      segment: "Team Work Motivation",
      text: "What energizes you most in a team?",
      options: [
        { id: "a", text: "Building user interfaces", weight: 0 },
        { id: "b", text: "Designing system architecture", weight: 1 },
        { id: "c", text: "Solving complex problems", weight: 2 },
        { id: "d", text: "Leading and mentoring", weight: 3 },
      ],
    },
    {
      id: "q2",
      segment: "Team Work Motivation",
      text: "What's your ideal team contribution?",
      options: [
        { id: "a", text: "Creating beautiful UX", weight: 0 },
        { id: "b", text: "Building robust systems", weight: 1 },
        { id: "c", text: "Solving hard problems", weight: 2 },
        { id: "d", text: "Guiding the team", weight: 3 },
      ],
    },
    {
      id: "q3",
      segment: "Team Work Motivation",
      text: "How do you prefer to work?",
      options: [
        { id: "a", text: "Independently", weight: 2 },
        { id: "b", text: "In small teams", weight: 1 },
        { id: "c", text: "In large teams", weight: 0 },
        { id: "d", text: "Coordinating teams", weight: 3 },
      ],
    },
    // Segment 2: Communication Style (3 questions)
    {
      id: "q4",
      segment: "Communication Style",
      text: "What's your communication style?",
      options: [
        { id: "a", text: "Visual and interactive", weight: 0 },
        { id: "b", text: "Technical and detailed", weight: 1 },
        { id: "c", text: "Strategic and high-level", weight: 3 },
        { id: "d", text: "Collaborative and inclusive", weight: 2 },
      ],
    },
    {
      id: "q5",
      segment: "Communication Style",
      text: "How do you handle ambiguity?",
      options: [
        { id: "a", text: "Need clear requirements", weight: 0 },
        { id: "b", text: "Can work with some ambiguity", weight: 1 },
        { id: "c", text: "Thrive in ambiguity", weight: 3 },
        { id: "d", text: "Help clarify ambiguity", weight: 2 },
      ],
    },
    {
      id: "q6",
      segment: "Communication Style",
      text: "How do you feel about meetings?",
      options: [
        { id: "a", text: "Prefer minimal meetings", weight: 2 },
        { id: "b", text: "Regular check-ins helpful", weight: 1 },
        { id: "c", text: "Meetings are essential", weight: 3 },
        { id: "d", text: "Depends on the meeting", weight: 0 },
      ],
    },
    // Segment 3: Main Strengths (3 questions)
    {
      id: "q7",
      segment: "Main Strengths",
      text: "What's your ideal project scope?",
      options: [
        { id: "a", text: "Small, focused features", weight: 0 },
        { id: "b", text: "Medium-sized systems", weight: 1 },
        { id: "c", text: "Large, complex systems", weight: 2 },
        { id: "d", text: "Organization-wide initiatives", weight: 3 },
      ],
    },
    {
      id: "q8",
      segment: "Main Strengths",
      text: "How important is user feedback?",
      options: [
        { id: "a", text: "Critical - drives decisions", weight: 0 },
        { id: "b", text: "Important - informs design", weight: 1 },
        { id: "c", text: "Somewhat important", weight: 2 },
        { id: "d", text: "Less important", weight: 3 },
      ],
    },
    {
      id: "q9",
      segment: "Main Strengths",
      text: "What's your decision-making style?",
      options: [
        { id: "a", text: "User-centered", weight: 0 },
        { id: "b", text: "Data-driven", weight: 1 },
        { id: "c", text: "Collaborative consensus", weight: 2 },
        { id: "d", text: "Decisive and quick", weight: 3 },
      ],
    },
    // Segment 4: Pressure Reaction (3 questions)
    {
      id: "q10",
      segment: "Pressure Reaction",
      text: "How do you handle pressure?",
      options: [
        { id: "a", text: "Prefer steady pace", weight: 0 },
        { id: "b", text: "Can handle occasional pressure", weight: 1 },
        { id: "c", text: "Thrive under pressure", weight: 2 },
        { id: "d", text: "Help others manage pressure", weight: 3 },
      ],
    },
    {
      id: "q11",
      segment: "Pressure Reaction",
      text: "What's your conflict resolution style?",
      options: [
        { id: "a", text: "Avoid conflict", weight: 0 },
        { id: "b", text: "Seek compromise", weight: 1 },
        { id: "c", text: "Address directly", weight: 2 },
        { id: "d", text: "Mediate and facilitate", weight: 3 },
      ],
    },
    {
      id: "q12",
      segment: "Pressure Reaction",
      text: "How do you measure success?",
      options: [
        { id: "a", text: "User satisfaction", weight: 0 },
        { id: "b", text: "Code quality", weight: 1 },
        { id: "c", text: "System performance", weight: 2 },
        { id: "d", text: "Team growth", weight: 3 },
      ],
    },
    // Segment 5: Feedback Reception (3 questions)
    {
      id: "q13",
      segment: "Feedback Reception",
      text: "How do you handle feedback?",
      options: [
        { id: "a", text: "Seek constructive feedback", weight: 0 },
        { id: "b", text: "Open to feedback", weight: 1 },
        { id: "c", text: "Provide feedback to others", weight: 3 },
        { id: "d", text: "Analyze feedback critically", weight: 2 },
      ],
    },
    {
      id: "q14",
      segment: "Feedback Reception",
      text: "What's your learning preference?",
      options: [
        { id: "a", text: "Hands-on experimentation", weight: 0 },
        { id: "b", text: "Structured learning", weight: 1 },
        { id: "c", text: "Teaching others", weight: 3 },
        { id: "d", text: "Research and analysis", weight: 2 },
      ],
    },
    {
      id: "q15",
      segment: "Feedback Reception",
      text: "How do you feel about mentoring?",
      options: [
        { id: "a", text: "Not interested", weight: 0 },
        { id: "b", text: "Willing to help", weight: 1 },
        { id: "c", text: "Enjoy mentoring", weight: 3 },
        { id: "d", text: "Prefer learning", weight: 2 },
      ],
    },
    // Segment 6: Career Vision (3 questions)
    {
      id: "q16",
      segment: "Career Vision",
      text: "What's your ideal career path?",
      options: [
        { id: "a", text: "Deep expertise", weight: 2 },
        { id: "b", text: "Broad skills", weight: 1 },
        { id: "c", text: "Leadership", weight: 3 },
        { id: "d", text: "Specialization", weight: 0 },
      ],
    },
    {
      id: "q17",
      segment: "Career Vision",
      text: "What's your risk tolerance?",
      options: [
        { id: "a", text: "Risk-averse", weight: 0 },
        { id: "b", text: "Balanced approach", weight: 1 },
        { id: "c", text: "Willing to take risks", weight: 2 },
        { id: "d", text: "Strategic risk-taker", weight: 3 },
      ],
    },
    {
      id: "q18",
      segment: "Career Vision",
      text: "What's your ultimate career goal?",
      options: [
        { id: "a", text: "Master a craft", weight: 2 },
        { id: "b", text: "Build great products", weight: 0 },
        { id: "c", text: "Lead teams", weight: 3 },
        { id: "d", text: "Solve hard problems", weight: 1 },
      ],
    },
  ],
  results: [
    {
      id: "frontend",
      name: "Frontend Developer",
      description: "User-focused and creative",
      icon: "🎨",
      compatibility: 0,
      reason:
        "You excel at creating beautiful, intuitive user interfaces. Your focus on user experience and visual design makes you perfect for frontend development.",
    },
    {
      id: "backend",
      name: "Backend Developer",
      description: "Systems-focused and analytical",
      icon: "⚙️",
      compatibility: 0,
      reason:
        "You thrive on building robust systems and solving complex problems. Your analytical approach makes you ideal for backend architecture.",
    },
    {
      id: "fullstack",
      name: "Full Stack Developer",
      description: "Versatile and adaptable",
      icon: "🔗",
      compatibility: 0,
      reason:
        "You're comfortable across the entire stack and enjoy variety. Your broad skills make you valuable for end-to-end development.",
    },
    {
      id: "devops",
      name: "DevOps Engineer",
      description: "Infrastructure-focused and systematic",
      icon: "🚀",
      compatibility: 0,
      reason:
        "You excel at building and maintaining systems at scale. Your focus on reliability and automation makes you perfect for DevOps.",
    },
    {
      id: "tech-lead",
      name: "Tech Lead",
      description: "Leadership-focused and strategic",
      icon: "👑",
      compatibility: 0,
      reason:
        "You're natural at leading teams and making strategic decisions. Your mentoring skills and vision make you ideal for technical leadership.",
    },
  ],
}

export const workflowStyleTest: TestDomain = {
  id: "workflow-style",
  name: "Workflow Style Match",
  description: "Understand your ideal workflow and productivity patterns",
  questions: [
    // Segment 1: Time Management (3 questions)
    {
      id: "q1",
      segment: "Time Management",
      text: "When are you most productive?",
      options: [
        { id: "a", text: "Early morning", weight: 0 },
        { id: "b", text: "Mid-morning", weight: 1 },
        { id: "c", text: "Afternoon", weight: 2 },
        { id: "d", text: "Late night", weight: 3 },
      ],
    },
    {
      id: "q2",
      segment: "Time Management",
      text: "How long can you focus without breaks?",
      options: [
        { id: "a", text: "30 minutes", weight: 0 },
        { id: "b", text: "1-2 hours", weight: 1 },
        { id: "c", text: "2-4 hours", weight: 2 },
        { id: "d", text: "4+ hours", weight: 3 },
      ],
    },
    {
      id: "q3",
      segment: "Time Management",
      text: "How do you handle deadlines?",
      options: [
        { id: "a", text: "Strict deadlines", weight: 0 },
        { id: "b", text: "Flexible deadlines", weight: 1 },
        { id: "c", text: "Self-imposed deadlines", weight: 2 },
        { id: "d", text: "No deadlines", weight: 3 },
      ],
    },
    // Segment 2: Work Organization (3 questions)
    {
      id: "q4",
      segment: "Work Organization",
      text: "How do you prefer to manage tasks?",
      options: [
        { id: "a", text: "Detailed to-do lists", weight: 0 },
        { id: "b", text: "Loose planning", weight: 1 },
        { id: "c", text: "Kanban boards", weight: 2 },
        { id: "d", text: "Minimal planning", weight: 3 },
      ],
    },
    {
      id: "q5",
      segment: "Work Organization",
      text: "What's your ideal work environment?",
      options: [
        { id: "a", text: "Open office", weight: 0 },
        { id: "b", text: "Shared space", weight: 1 },
        { id: "c", text: "Quiet office", weight: 2 },
        { id: "d", text: "Remote/home", weight: 3 },
      ],
    },
    {
      id: "q6",
      segment: "Work Organization",
      text: "How do you handle interruptions?",
      options: [
        { id: "a", text: "Not disruptive", weight: 0 },
        { id: "b", text: "Manageable", weight: 1 },
        { id: "c", text: "Somewhat disruptive", weight: 2 },
        { id: "d", text: "Very disruptive", weight: 3 },
      ],
    },
    // Segment 3: Team Coordination (3 questions)
    {
      id: "q7",
      segment: "Team Coordination",
      text: "What's your collaboration style?",
      options: [
        { id: "a", text: "Highly collaborative", weight: 0 },
        { id: "b", text: "Collaborative when needed", weight: 1 },
        { id: "c", text: "Mostly independent", weight: 2 },
        { id: "d", text: "Completely independent", weight: 3 },
      ],
    },
    {
      id: "q8",
      segment: "Team Coordination",
      text: "What's your communication preference?",
      options: [
        { id: "a", text: "Synchronous (real-time)", weight: 0 },
        { id: "b", text: "Mix of sync and async", weight: 1 },
        { id: "c", text: "Asynchronous (written)", weight: 2 },
        { id: "d", text: "Minimal communication", weight: 3 },
      ],
    },
    {
      id: "q9",
      segment: "Team Coordination",
      text: "What's your meeting preference?",
      options: [
        { id: "a", text: "Daily standups", weight: 0 },
        { id: "b", text: "Regular check-ins", weight: 1 },
        { id: "c", text: "Minimal meetings", weight: 2 },
        { id: "d", text: "No meetings", weight: 3 },
      ],
    },
    // Segment 4: Change Adaptation (3 questions)
    {
      id: "q10",
      segment: "Change Adaptation",
      text: "How do you handle context switching?",
      options: [
        { id: "a", text: "Not disruptive", weight: 0 },
        { id: "b", text: "Manageable", weight: 1 },
        { id: "c", text: "Somewhat disruptive", weight: 2 },
        { id: "d", text: "Very disruptive", weight: 3 },
      ],
    },
    {
      id: "q11",
      segment: "Change Adaptation",
      text: "What's your sprint preference?",
      options: [
        { id: "a", text: "Strict sprints", weight: 0 },
        { id: "b", text: "Flexible sprints", weight: 1 },
        { id: "c", text: "Kanban flow", weight: 2 },
        { id: "d", text: "No sprints", weight: 3 },
      ],
    },
    {
      id: "q12",
      segment: "Change Adaptation",
      text: "What's your ideal work rhythm?",
      options: [
        { id: "a", text: "Fast-paced and dynamic", weight: 0 },
        { id: "b", text: "Flexible and adaptive", weight: 1 },
        { id: "c", text: "Steady and predictable", weight: 2 },
        { id: "d", text: "Slow and deliberate", weight: 3 },
      ],
    },
    // Segment 5: Work Evaluation (3 questions)
    {
      id: "q13",
      segment: "Work Evaluation",
      text: "How do you prefer to receive feedback?",
      options: [
        { id: "a", text: "Real-time feedback", weight: 0 },
        { id: "b", text: "Regular feedback", weight: 1 },
        { id: "c", text: "Periodic reviews", weight: 2 },
        { id: "d", text: "Minimal feedback", weight: 3 },
      ],
    },
    {
      id: "q14",
      segment: "Work Evaluation",
      text: "How do you prefer to track progress?",
      options: [
        { id: "a", text: "Detailed tracking", weight: 0 },
        { id: "b", text: "Regular updates", weight: 1 },
        { id: "c", text: "Minimal tracking", weight: 2 },
        { id: "d", text: "No tracking", weight: 3 },
      ],
    },
    {
      id: "q15",
      segment: "Work Evaluation",
      text: "What's your testing preference?",
      options: [
        { id: "a", text: "TDD (test-first)", weight: 0 },
        { id: "b", text: "Regular testing", weight: 1 },
        { id: "c", text: "Minimal testing", weight: 2 },
        { id: "d", text: "No testing", weight: 3 },
      ],
    },
    // Segment 6: Deployment & Maintenance (3 questions)
    {
      id: "q16",
      segment: "Deployment & Maintenance",
      text: "What's your deployment preference?",
      options: [
        { id: "a", text: "Frequent deployments", weight: 2 },
        { id: "b", text: "Regular deployments", weight: 1 },
        { id: "c", text: "Scheduled deployments", weight: 0 },
        { id: "d", text: "Rare deployments", weight: 3 },
      ],
    },
    {
      id: "q17",
      segment: "Deployment & Maintenance",
      text: "How do you handle technical debt?",
      options: [
        { id: "a", text: "Address immediately", weight: 0 },
        { id: "b", text: "Regular refactoring", weight: 1 },
        { id: "c", text: "Occasional refactoring", weight: 2 },
        { id: "d", text: "Ignore debt", weight: 3 },
      ],
    },
    {
      id: "q18",
      segment: "Deployment & Maintenance",
      text: "What's your work-life balance preference?",
      options: [
        { id: "a", text: "Strict separation", weight: 3 },
        { id: "b", text: "Mostly separated", weight: 2 },
        { id: "c", text: "Flexible blend", weight: 1 },
        { id: "d", text: "Work is life", weight: 0 },
      ],
    },
  ],
  results: [
    {
      id: "agile",
      name: "Agile Workflow",
      description: "Fast-paced and collaborative",
      icon: "⚡",
      compatibility: 0,
      reason:
        "You thrive in dynamic, collaborative environments with frequent feedback and rapid iterations. Agile methodology aligns perfectly with your workflow.",
    },
    {
      id: "waterfall",
      name: "Waterfall Workflow",
      description: "Structured and planned",
      icon: "📋",
      compatibility: 0,
      reason:
        "You prefer detailed planning and structured phases. Waterfall's comprehensive upfront planning matches your methodical approach.",
    },
    {
      id: "kanban",
      name: "Kanban Workflow",
      description: "Continuous and flexible",
      icon: "🔄",
      compatibility: 0,
      reason:
        "You work best with continuous flow and flexibility. Kanban's pull-based system suits your adaptive workflow style.",
    },
    {
      id: "remote-async",
      name: "Remote Async Workflow",
      description: "Independent and asynchronous",
      icon: "🏠",
      compatibility: 0,
      reason:
        "You excel in independent, asynchronous environments. Remote work with async communication maximizes your productivity.",
    },
    {
      id: "collaborative",
      name: "Collaborative Workflow",
      description: "Team-focused and interactive",
      icon: "👥",
      compatibility: 0,
      reason:
        "You're energized by collaboration and real-time interaction. A highly collaborative team environment brings out your best work.",
    },
  ],
}

export const allTests = [programmingLanguageTest, linuxDistroTest, teamRoleTest, workflowStyleTest]
