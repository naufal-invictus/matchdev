// naufal-invictus/matchdev/matchdev-41eaeb3a310d9a30c1c8db682d04b81606537351/lib/test-data.ts
export interface TestOption {
  id: string
  text: string
  description: string // Sarcastic, real-world description
  score: { [category: string]: number } // Replaces 'weight'
}

export interface TestQuestion {
  id: string
  text: string
  segment: string // Segment to categorize questions
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

// Programming Language Test Data - 18 questions
export const programmingLanguageTest: TestDomain = {
  id: "programming-language",
  name: "Programming Language Match",
  description: "Discover which programming language aligns best with your coding style",
  questions: [
    // Segment 1: Coding Motivation
    {
      id: "q1",
      segment: "Coding Motivation",
      text: "Why did you even start coding?",
      options: [
        {
          id: "a",
          text: "To build cool websites and apps",
          description: "You just want to make a button that, when clicked, does a thing. And looks good.",
          score: { javascript: 4, typescript: 4, python: 2 },
        },
        {
          id: "b",
          text: "To make the computer think",
          description: "You saw 'The Matrix' and thought, 'I can do that.' But with more spreadsheets.",
          score: { python: 5, go: 2 },
        },
        {
          id: "c",
          text: "To control the machine itself",
          description: "You want to tell the hardware *exactly* what to do. And pray it listens.",
          score: { rust: 5, go: 3 },
        },
        {
          id: "d",
          text: "To build massive, reliable systems",
          description: "Your dream is to build something that outlives you. And doesn't crash. Ever.",
          score: { go: 5, rust: 3, typescript: 2 },
        },
      ],
    },
    {
      id: "q2",
      segment: "Coding Motivation",
      text: "What's your ideal weekend project?",
      options: [
        {
          id: "a",
          text: "A new personal portfolio, again",
          description: "This time with 100% more animations. You'll finish it... eventually.",
          score: { javascript: 5, typescript: 4 },
        },
        {
          id: "b",
          text: "A script to automate my life",
          description: "You'll spend 8 hours writing a script to save you 5 minutes of work. Worth it.",
          score: { python: 5, go: 2 },
        },
        {
          id: "c",
          text: "A tiny, perfect command-line tool",
          description: "It does one thing, it does it fast, and it makes you feel like a wizard.",
          score: { go: 5, rust: 4, python: 2 },
        },
        {
          id: "d",
          text: "Optimizing a game engine",
          description: "You enjoy watching frames drop as your dreams rise. But you can fix it.",
          score: { rust: 5 },
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
          text: "The giant ecosystem",
          description: "There's a library for that. And that. And... wait, 500MB of dependencies?",
          score: { javascript: 5, python: 4, typescript: 3 },
        },
        {
          id: "b",
          text: "How fast I can build things",
          description: "You want to go from 'idea' to 'working prototype' before your coffee gets cold.",
          score: { python: 5, javascript: 4, go: 2 },
        },
        {
          id: "c",
          text: "Guaranteed safety and no crashes",
          description: "You're tired of `null pointer` errors at 3 AM. So very tired.",
          score: { rust: 5, typescript: 3, go: 2 },
        },
        {
          id: "d",
          text: "Blazing fast performance",
          description: "You have a deep, personal hatred for loading spinners. They must be destroyed.",
          score: { rust: 5, go: 5 },
        },
      ],
    },
    // Segment 2: Problem Solving Style
    {
      id: "q4",
      segment: "Problem Solving Style",
      text: "How do you prefer to handle errors?",
      options: [
        {
          id: "a",
          text: "Let it crash and see what happens",
          description: "If it breaks, it breaks. 'undefined is not a function' is your battle cry.",
          score: { javascript: 5 },
        },
        {
          id: "b",
          text: "Wrap everything in try/except",
          description: "You're not sure *what* will break, but you'll be ready... probably.",
          score: { python: 5, javascript: 2 },
        },
        {
          id: "c",
          text: "Check for errors explicitly, always",
          description: "You believe `if err != nil` is a way of life, not just code.",
          score: { go: 5, rust: 2 },
        },
        {
          id: "d",
          text: "Make errors impossible to ignore",
          description: "The compiler is your friend. A very angry, very strict friend.",
          score: { rust: 5, typescript: 3 },
        },
      ],
    },
    {
      id: "q5",
      segment: "Problem Solving Style",
      text: "How do you feel about type systems?",
      options: [
        {
          id: "a",
          text: "Types? You mean 'string' and 'number'?",
          description: "You just want to get it done. The type is whatever the variable feels like today.",
          score: { javascript: 5, python: 3 },
        },
        {
          id: "b",
          text: "I add types when things get serious",
          description: "You like flexibility, but you'll add types when the code starts to look scary.",
          score: { typescript: 5, python: 2 },
        },
        {
          id: "c",
          text: "My code won't run without types",
          description: "You want the compiler to find your bug *before* your boss does.",
          score: { typescript: 5, rust: 4, go: 3 },
        },
        {
          id: "d",
          text: "Types should prove my code is correct",
          description: "You want a type system so advanced, it basically writes the code for you.",
          score: { rust: 5 },
        },
      ],
    },
    {
      id: "q6",
      segment: "Problem Solving Style",
      text: "When you build something, what's your main priority?",
      options: [
        {
          id: "a",
          text: "Getting it to work. Fast.",
          description: "You're a prototyper. 'Technical debt' is a problem for future you.",
          score: { javascript: 5, python: 4 },
        },
        {
          id: "b",
          text: "Making it easy to read",
          description: "Code is read more than written. You write for the human, not the machine.",
          score: { python: 5, go: 3 },
        },
        {
          id: "c",
          text: "Making it super efficient",
          description: "You measure success in microseconds and memory saved. It's a sickness.",
          score: { rust: 5, go: 4 },
        },
        {
          id: "d",
          text: "Making it easy to maintain for years",
          description: "You build for the long haul. Simple, clear, and boring is better than clever.",
          score: { go: 5, typescript: 4, rust: 2 },
        },
      ],
    },
    // Segment 3: Thinking Style
    {
      id: "q7",
      segment: "Thinking Style",
      text: "What's your preferred programming paradigm?",
      options: [
        {
          id: "a",
          text: "Whatever gets the job done",
          description: "You mix OOP, functional, and pure chaos. As long as it works, who cares?",
          score: { javascript: 5, python: 3 },
        },
        {
          id: "b",
          text: "Object-Oriented (OOP)",
          description: "You like to put your code in little boxes (classes) and hope they talk to each other.",
          score: { python: 4, typescript: 3, javascript: 2 },
        },
        {
          id: "c",
          text: "Functional Programming (FP)",
          description: "You believe 'state' is a sin and 'mutation' is a crime. Purity is everything.",
          score: { rust: 4, typescript: 3 },
        },
        {
          id: "d",
          text: "Procedural / Systems",
          description: "You think in functions, data, and memory addresses. It's just simpler.",
          score: { go: 5, rust: 4 },
        },
      ],
    },
    {
      id: "q8",
      segment: "Thinking Style",
      text: "How do you prefer to manage memory?",
      options: [
        {
          id: "a",
          text: "What's memory management?",
          description: "You just declare variables. A 'garbage collector' handles the mess, right?",
          score: { javascript: 5, python: 5, go: 3, typescript: 3 },
        },
        {
          id: "b",
          text: "I let the compiler yell at me",
          description: "You like the *idea* of control, but you want the compiler to hold your hand. Tightly.",
          score: { rust: 5 },
        },
        {
          id: "c",
          text: "I'll do it, but I'll complain",
          description: "You're fine with pointers, as long as you can see them and they're simple.",
          score: { go: 4 },
        },
        {
          id: "d",
          text: "I want full, manual control",
          description: "You love `malloc` and `free`. You live for the thrill of a segmentation fault.",
          score: { rust: 4 },
        },
      ],
    },
    {
      id: "q9",
      segment: "Thinking Style",
      text: "What's your concurrency style?",
      options: [
        {
          id: "a",
          text: "Async/await. That's it.",
          description: "You write `async`, you write `await`. You hope it all works out. (It doesn't.)",
          score: { javascript: 5, typescript: 5, python: 3 },
        },
        {
          id: "b",
          text: "Simple, built-in channels",
          description: "You like 'goroutines.' They're like threads, but tiny and adorable.",
          score: { go: 5 },
        },
        {
          id: "c",
          text: "Fearless. Zero data races.",
          description: "You want the compiler to guarantee your concurrent code is safe. No exceptions.",
          score: { rust: 5 },
        },
        {
          id: "d",
          text: "I'll just... use multiple processes?",
          description: "You'd rather let the OS handle it. It's easier than threads. Usually.",
          score: { python: 3, go: 2 },
        },
      ],
    },
    // Segment 4: Use Case
    {
      id: "q10",
      segment: "Use Case",
      text: "What's your primary use case?",
      options: [
        {
          id: "a",
          text: "Web Development (Frontend/Backend)",
          description: "You've fought CSS and survived. Or you build the API that the CSS fighters use.",
          score: { javascript: 5, typescript: 5, python: 3, go: 3 },
        },
        {
          id: "b",
          text: "Data Science / AI / ML",
          description: "You teach models, but they never listen. 'It works on my notebook!'",
          score: { python: 5 },
        },
        {
          id: "c",
          text: "Systems Programming / Embedded",
          description: "You write code like it's poetry and debug like it's war. You love the smell of bits.",
          score: { rust: 5, go: 2 },
        },
        {
          id: "d",
          text: "DevOps / Cloud Infrastructure",
          description: "You break prod once, and now you're the only one allowed to fix it. YAML is your life.",
          score: { go: 5, python: 3, rust: 2 },
        },
      ],
    },
    {
      id: "q11",
      segment: "Use Case",
      text: "What kind of team do you prefer?",
      options: [
        {
          id: "a",
          text: "A huge, enterprise team",
          description: "You need strict rules, code reviews, and types for everything. Sanity is key.",
          score: { typescript: 5, go: 3 },
        },
        {
          id: "b",
          text: "A fast-moving startup",
          description: "You build it, ship it, and fix it later. Sleep is optional. Velocity is not.",
          score: { javascript: 5, python: 4 },
        },
        {
          id: "c",
          text: "A team of performance fanatics",
          description: "You argue about CPU cycles and memory layouts. Your code must be *fast*.",
          score: { rust: 5, go: 4 },
        },
        {
          id: "d",
          text: "Working mostly by myself",
          description: "You're a solo act. You just want a tool that gets out of your way and works.",
          score: { python: 4, go: 3, javascript: 2 },
        },
      ],
    },
    {
      id: "q12",
      segment: "Use Case",
      text: "How important is the final binary size?",
      options: [
        {
          id: "a",
          text: "Doesn't matter. Ship it.",
          description: "Your `node_modules` folder has its own gravitational pull. It's fine.",
          score: { javascript: 5, python: 5, typescript: 4 },
        },
        {
          id: "b",
          text: "I'd like a single, small file",
          description: "You just want to copy one file to the server and be done with it. No dependencies.",
          score: { go: 5, rust: 4 },
        },
        {
          id: "c",
          text: "It must be *tiny*",
          description: "You're writing code for a toaster. Every single byte counts.",
          score: { rust: 5 },
        },
        {
          id: "d",
          text: "I just care that it runs",
          description: "Size is irrelevant as long as the interpreter is installed. Simple.",
          score: { python: 4, javascript: 2 },
        },
      ],
    },
    // Segment 5: Personal Style
    {
      id: "q13",
      segment: "Personal Style",
      text: "How do you feel about documentation?",
      options: [
        {
          id: "a",
          text: "I read it, but I prefer tutorials",
          description: "You just want someone to show you how to get 'Hello World' running.",
          score: { javascript: 4, python: 3 },
        },
        {
          id: "b",
          text: "I read the official docs first",
          description: "You're a professional. You read the manual. (Okay, you skim it.)",
          score: { go: 5, typescript: 4, rust: 3 },
        },
        {
          id: "c",
          text: "I just read the source code",
          description: "Docs are lies. Only the code tells the truth. You're not afraid to look.",
          score: { go: 4, rust: 3 },
        },
        {
          id: "d",
          text: "I just ask Stack Overflow",
          description: "You copy, you paste, you pray. It's the circle of (a developer's) life.",
          score: { javascript: 5, python: 2 },
        },
      ],
    },
    {
      id: "q14",
      segment: "Personal Style",
      text: "What's your debugging style?",
      options: [
        {
          id: "a",
          text: "`console.log('here')`",
          description: "You just print stuff until you find the problem. It's an art form.",
          score: { javascript: 5, python: 4, go: 3, typescript: 2 },
        },
        {
          id: "b",
          text: "A proper step-through debugger",
          description: "You like to pause time, inspect variables, and pretend you're a detective.",
          score: { typescript: 4, python: 3 },
        },
        {
          id: "c",
          text: "The compiler *is* my debugger",
          description: "If it compiles, it works. (Narrator: It did not work.)",
          score: { rust: 5, typescript: 4 },
        },
        {
          id: "d",
          text: "Staring at the code in silence",
          description: "You just... look at it. Until the bug reveals itself out of pure fear.",
          score: { go: 3, rust: 2, python: 1 },
        },
      ],
    },
    {
      id: "q15",
      segment: "Personal Style",
      text: "What's your philosophy on dependencies?",
      options: [
        {
          id: "a",
          text: "Add them. Add them all.",
          description: "Why reinvent the wheel? `npm install` is your favorite command.",
          score: { javascript: 5, python: 4, typescript: 3 },
        },
        {
          id: "b",
          text: "Standard library is king",
          description: "If it's not built-in, you're suspicious. You'd rather write it yourself.",
          score: { go: 5, rust: 2 },
        },
        {
          id: "c",
          text: "A few, carefully chosen ones",
          description: "You'll add a dependency, but you'll read its source code and judge it first.",
          score: { rust: 4, typescript: 3, go: 2 },
        },
        {
          id: "d",
          text: "I just need one for everything",
          description: "You just want one big framework that makes all the decisions for you.",
          score: { javascript: 4, python: 3 },
        },
      ],
    },
    // Segment 6: Long-term Goals
    {
      id: "q16",
      segment: "Long-term Goals",
      text: "What's your ideal career trajectory?",
      options: [
        {
          id: "a",
          text: "Full-stack versatility",
          description: "You want to do everything. Frontend, backend, database... you're a one-person army.",
          score: { javascript: 5, typescript: 5, python: 3 },
        },
        {
          id: "b",
          text: "Deep domain expert (e.g., AI)",
          description: "You want to be *the* person everyone goes to for one specific, complex thing.",
          score: { python: 5, rust: 3 },
        },
        {
          id: "c",
          text: "Infrastructure / Systems Architect",
          description: "You want to build the rock-solid platform that everyone else builds on top of.",
          score: { go: 5, rust: 4 },
        },
        {
          id: "d",
          text: "I just want to build cool stuff",
          description: "Career? Trajectory? You just want to code. Please don't make me go to meetings.",
          score: { python: 3, go: 3, javascript: 2 },
        },
      ],
    },
    {
      id: "q17",
      segment: "Long-term Goals",
      text: "How 'new' do you like your tech?",
      options: [
        {
          id: "a",
          text: "New framework every week",
          description: "You love the bleeding edge. If it's more than 6 months old, it's legacy code.",
          score: { javascript: 5, typescript: 4, rust: 3 },
        },
        {
          id: "b",
          text: "Modern, but stable and proven",
          description: "You like new tools, but you want someone *else* to find all the bugs first.",
          score: { typescript: 5, go: 4, python: 3 },
        },
        {
          id: "c",
          text: "Boring is beautiful",
          description: "You prefer tech that's been stable for 10+ years. It just works.",
          score: { go: 4, python: 3 },
        },
        {
          id: "d",
          text: "I'm still waiting for this one to 'catch on'",
          description: "You're an innovator, a pioneer. Or maybe just stubborn. Time will tell.",
          score: { rust: 4 },
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
          text: "Build and ship products fast",
          description: "You're a builder. Your goal is to get your ideas into the hands of users.",
          score: { javascript: 5, python: 5, typescript: 4 },
        },
        {
          id: "b",
          text: "Write 'correct' and safe code",
          description: "You believe code can be proven. You want to write perfect, uncrashable software.",
          score: { rust: 5, typescript: 3 },
        },
        {
          id: "c",
          text: "Write simple, maintainable code",
          description: "Your future self will thank you for writing code that's easy to read at 2 AM.",
          score: { go: 5, python: 4 },
        },
        {
          id: "d",
          text: "Solve massive-scale problems",
          description: "You want to build the systems that handle millions of users. No pressure.",
          score: { go: 5, rust: 4 },
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
        "You're a pragmatist. You want to write clean code, build things fast, and have a library for everything. Perfect for scripts, data science, and backend APIs.",
    },
    {
      id: "javascript",
      name: "JavaScript",
      description: "Flexible and ubiquitous",
      icon: "⚡",
      compatibility: 0,
      reason:
        "You're a full-stack force of nature. You move fast, love building user interfaces, and aren't afraid of `node_modules`. The web is your playground.",
    },
    {
      id: "rust",
      name: "Rust",
      description: "Safe, fast, and empowering",
      icon: "🦀",
      compatibility: 0,
      reason:
        "You're a perfectionist. You demand performance, safety, and control. You're willing to argue with the compiler because you know it'll make your code uncrashable.",
    },
    {
      id: "go",
      name: "Go",
      description: "Simple, concurrent, and efficient",
      icon: "🐹",
      compatibility: 0,
      reason:
        "You're a builder of systems. You value simplicity, reliability, and code that's easy to read. You're building the infrastructure of the internet.",
    },
    {
      id: "typescript",
      name: "TypeScript",
      description: "JavaScript with superpowers",
      icon: "📘",
      compatibility: 0,
      reason:
        "You're a structured thinker. You like JavaScript's power but crave the sanity of a type system. You build big, maintainable apps without losing your mind.",
    },
  ],
}

export const linuxDistroTest: TestDomain = {
  id: "linux-distro",
  name: "Linux Distro Match",
  description: "Find the perfect Linux distribution for your workflow",
  questions: [
    // Segment 1: Experience Level
    {
      id: "q1",
      segment: "Experience Level",
      text: "What's your Linux experience level?",
      options: [
        {
          id: "a",
          text: "Beginner",
          description: "I think 'sudo' is a magic word. Please don't make me use the terminal.",
          score: { ubuntu: 5, fedora: 2 },
        },
        {
          id: "b",
          text: "Intermediate",
          description: "I've broken it and fixed it. I'm not proud, but I'm not scared either.",
          score: { fedora: 4, ubuntu: 3, debian: 2, nixos: 1 },
        },
        {
          id: "c",
          text: "Advanced",
          description: "I'm comfortable in the terminal. I might even compile my own kernel... for fun.",
          score: { debian: 4, arch: 4, fedora: 2 },
        },
        {
          id: "d",
          text: "Expert / DIY",
          description: "I don't want an 'installer.' I want a tarball and a dream.",
          score: { arch: 5, nixos: 4 },
        },
      ],
    },
    {
      id: "q2",
      segment: "Experience Level",
      text: "How do you want to install new software?",
      options: [
        {
          id: "a",
          text: "A beautiful 'App Store'",
          description: "I want to click a button. That's it. Just one button.",
          score: { ubuntu: 5, fedora: 4 },
        },
        {
          id: "b",
          text: "A solid package manager (apt, dnf)",
          description: "I'm happy to type `apt install`. As long as it just... works.",
          score: { ubuntu: 5, debian: 5, fedora: 4 },
        },
        {
          id: "c",
          text: "From a giant, community-run repo (AUR)",
          description: "I want *everything*. Even if it's weird, unsupported, and probably breaks.",
          score: { arch: 5 },
        },
        {
          id: "d",
          text: "By editing a config file",
          description: "I want to *declare* my software into existence. It's cleaner that way.",
          score: { nixos: 5 },
        },
      ],
    },
    {
      id: "q3",
      segment: "Experience Level",
      text: "How do you feel about troubleshooting?",
      options: [
        {
          id: "a",
          text: "I never want to do it",
          description: "If it breaks, I'm reinstalling. I don't have time for this.",
          score: { ubuntu: 5, debian: 3 },
        },
        {
          id: "b",
          text: "I'll Google it",
          description: "I'm fine as long as someone else has had this problem and posted the answer.",
          score: { ubuntu: 5, fedora: 4, debian: 3 },
        },
        {
          id: "c",
          text: "The Wiki is my bible",
          description: "I enjoy reading detailed documentation to solve my own problems.",
          score: { arch: 5, nixos: 4, debian: 2 },
        },
        {
          id: "d",
          text: "I am the troubleshooter",
          description: "I read source code. I file bug reports. I *am* the support.",
          score: { arch: 5, nixos: 5, debian: 3 },
        },
      ],
    },
    // Segment 2: Usage Purpose
    {
      id: "q4",
      segment: "Usage Purpose",
      text: "What's your primary use for this system?",
      options: [
        {
          id: "a",
          text: "Daily Driver (Web, Email, Office)",
          description: "I just want it to work like my old OS, but, you know... better.",
          score: { ubuntu: 5, fedora: 3 },
        },
        {
          id: "b",
          text: "Development Workstation",
          description: "I need all the latest tools, libraries, and container stuff. Now.",
          score: { fedora: 5, ubuntu: 4, arch: 3, nixos: 3 },
        },
        {
          id: "c",
          text: "Rock-solid Server",
          description: "This machine cannot go down. Uptime is measured in years, not months.",
          score: { debian: 5, ubuntu: 3 },
        },
        {
          id: "d",
          text: "A Learning/Tinkering Project",
          description: "My goal is to take it apart and see how it works. Breaking it is half the fun.",
          score: { arch: 5, nixos: 5 },
        },
      ],
    },
    {
      id: "q5",
      segment: "Usage Purpose",
      text: "How important is new software?",
      options: [
        {
          id: "a",
          text: "Just give me what's stable",
          description: "I don't want new features. I want *no* surprises. Ever.",
          score: { debian: 5, ubuntu: 2 },
        },
        {
          id: "b",
          text: "Stable, but reasonably recent",
          description: "I'll take the Long Term Support (LTS) version. It's fine. I can wait.",
          score: { ubuntu: 5, debian: 4 },
        },
        {
          id: "c",
          text: "Modern and up-to-date",
          description: "I want new features within a few months. I trust the release cycle.",
          score: { fedora: 5, ubuntu: 3 },
        },
        {
          id: "d",
          text: "Give me the latest version, *now*",
          description: "If it was committed yesterday, I want it on my machine today. I fear nothing.",
          score: { arch: 5, fedora: 3 },
        },
      ],
    },
    {
      id: "q6",
      segment: "Usage Purpose",
      text: "What's your update philosophy?",
      options: [
        {
          id: "a",
          text: "Rolling Release",
          description: "I update every day and pray. It's a lifestyle.",
          score: { arch: 5 },
        },
        {
          id: "b",
          text: "Point Release (every 6 months)",
          description: "I like a big, exciting upgrade day twice a year. It's like a holiday.",
          score: { fedora: 5, ubuntu: 4 },
        },
        {
          id: "c",
          text: "Long-Term Support (every 2+ years)",
          description: "Don't talk to me about updates. I set it up, and I'm not touching it for years.",
          score: { debian: 5, ubuntu: 4 },
        },
        {
          id: "d",
          text: "Atomic & Reproducible",
          description: "I want to update my *entire* system with one command, and roll it back if I hate it.",
          score: { nixos: 5, fedora: 2 },
        },
      ],
    },
    // Segment 3: System Preferences
    {
      id: "q7",
      segment: "System Preferences",
      text: "What's your philosophy on customization?",
      options: [
        {
          id: "a",
          text: "It should 'just work' out of the box",
          description: "I want a sensible desktop, good defaults, and all my drivers working.",
          score: { ubuntu: 5, fedora: 3 },
        },
        {
          id: "b",
          text: "I like to tweak settings",
          description: "I'll change my theme, my icons, and my shell. But I don't want to build it all.",
          score: { fedora: 4, ubuntu: 3 },
        },
        {
          id: "c",
          text: "I want to build it from scratch",
          description: "Don't give me a 'desktop.' Give me a command prompt and a package list.",
          score: { arch: 5, debian: 2 },
        },
        {
          id: "d",
          text: "I want to *define* it in a file",
          description: "My system is a single config file. I am a god. A very organized god.",
          score: { nixos: 5 },
        },
      ],
    },
    {
      id: "q8",
      segment: "System Preferences",
      text: "How do you feel about corporate backing?",
      options: [
        {
          id: "a",
          text: "I like it (e.g., Canonical, Red Hat)",
          description: "It means drivers work and there's a budget for support. Feels safe.",
          score: { ubuntu: 5, fedora: 5 },
        },
        {
          id: "b",
          text: "I only trust 'The Community'",
          description: "I want my OS built by volunteers in their spare time. It's more pure.",
          score: { debian: 5, arch: 4 },
        },
        {
          id: "c",
          text: "I trust a foundation/project",
          description: "I like the 'NixOS' model. It's not a company, but it's not chaos either.",
          score: { nixos: 4, arch: 3, debian: 3 },
        },
        {
          id: "d",
          text: "I don't care who makes it",
          description: "I just care about the technology. Politics and money are boring.",
          score: { arch: 3, fedora: 2, nixos: 2 },
        },
      ],
    },
    {
      id: "q9",
      segment: "System Preferences",
      text: "How 'minimal' do you want your install?",
      options: [
        {
          id: "a",
          text: "Batteries included",
          description: "Give me an office suite, a mail client, games... I want it all pre-installed.",
          score: { ubuntu: 5 },
        },
        {
          id: "b",
          text: "A clean, modern desktop",
          description: "Just the OS, a browser, and a terminal. I'll get the rest.",
          score: { fedora: 5, ubuntu: 3 },
        },
        {
          id: "c",
          text: "A minimal server install",
          description: "No GUI. Not now, not ever. If I can't do it over SSH, it's not worth doing.",
          score: { debian: 5, ubuntu: 2 },
        },
        {
          id: "d",
          text: "Just the kernel and a shell",
          description: "I will install `ls` myself if I have to. Every package is a choice.",
          score: { arch: 5, nixos: 4 },
        },
      ],
    },
    // ... (Adding 9 more questions to reach 18)
    // Segment 4: Desktop Environment
    {
      id: "q10",
      segment: "Desktop Environment",
      text: "What's your ideal desktop environment?",
      options: [
        {
          id: "a",
          text: "GNOME (Modern, workflow-focused)",
          description: "I like a clean, simple look. And I *love* the super key.",
          score: { fedora: 5, ubuntu: 4, debian: 2 },
        },
        {
          id: "b",
          text: "KDE Plasma (Customizable, powerful)",
          description: "I want to change everything. Every panel, every widget. My desktop is my castle.",
          score: { fedora: 4, debian: 3, arch: 3 },
        },
        {
          id: "c",
          text: "Something lightweight (XFCE, MATE)",
          description: "I just want it to be fast and stay out of my way. And maybe run on a potato.",
          score: { debian: 4, ubuntu: 3, arch: 2 },
        },
        {
          id: "d",
          text: "A Tiling Window Manager (i3, Sway)",
          description: "Windows? I don't 'move' windows. They go where I tell them. With my keyboard.",
          score: { arch: 5, nixos: 4, debian: 2 },
        },
      ],
    },
    {
      id: "q11",
      segment: "Desktop Environment",
      text: "How do you feel about proprietary software?",
      options: [
        {
          id: "a",
          text: "I need it (NVIDIA drivers, Steam)",
          description: "I just want my games and my graphics card to work. I'll click 'I agree.'",
          score: { ubuntu: 5, fedora: 3 },
        },
        {
          id: "b",
          text: "I'll use it, but I prefer open source",
          description: "I'll install it from a separate 'non-free' repo if I have to. But I'll feel dirty.",
          score: { fedora: 4, debian: 3, arch: 3 },
        },
        {
          id: "c",
          text: "I am a free software purist",
          description: "If it's not FOSS, it's not on my machine. Richard Stallman is my hero.",
          score: { debian: 5, fedora: 2 },
        },
        {
          id: "d",
          text: "I don't even know what that means",
          description: "Software is software. Does it run? Cool. That's all I care about.",
          score: { ubuntu: 4 },
        },
      ],
    },
    {
      id: "q12",
      segment: "Desktop Environment",
      text: "Your system breaks after an update. You:",
      options: [
        {
          id: "a",
          text: "Panic. Reinstall.",
          description: "It's gone. It's all gone. Just wipe it and start over. It's the only way.",
          score: { ubuntu: 3 },
        },
        {
          id: "b",
          text: "Find the forum post that fixes it",
          description: "Someone at 'askubuntu.com' 10 years ago had this exact problem. Easy.",
          score: { ubuntu: 5, fedora: 4 },
        },
        {
          id: "c",
          text: "Read the error, check the wiki",
          description: "The answer is in the documentation. It's always in the documentation.",
          score: { arch: 5, debian: 3 },
        },
        {
          id: "d",
          text: "Roll back the entire system",
          description: "Oh no. Anyway, I'll just restore last week's 'generation' and try again.",
          score: { nixos: 5 },
        },
      ],
    },
    // Segment 5: Philosophy
    {
      id: "q13",
      segment: "Philosophy",
      text: "What's a 'package' to you?",
      options: [
        {
          id: "a",
          text: "A .deb or .rpm file",
          description: "It's a file I download and install. Simple as that. A classic.",
          score: { ubuntu: 5, debian: 5, fedora: 5 },
        },
        {
          id: "b",
          text: "A recipe (PKGBUILD)",
          description: "It's a script that tells my computer how to build the software from source.",
          score: { arch: 5 },
        },
        {
          id: "c",
          text: "A function (Nix expression)",
          description: "It's a pure function that describes all dependencies. It's art.",
          score: { nixos: 5 },
        },
        {
          id: "d",
          text: "A container (Snap, Flatpak)",
          description: "It's a little box that has all its dependencies. It's slow, but it's safe.",
          score: { ubuntu: 4, fedora: 4 },
        },
      ],
    },
    {
      id: "q14",
      segment: "Philosophy",
      text: "How important is a 'pure' system?",
      options: [
        {
          id: "a",
          text: "Not at all. Mix everything.",
          description: "I'll `apt install` one thing and `pip install` another. It's chaos, and I love it.",
          score: { ubuntu: 5, debian: 3 },
        },
        {
          id: "b",
          text: "I try to keep it clean",
          description: "I stick to the package manager. I don't like random scripts.",
          score: { fedora: 4, debian: 3 },
        },
        {
          id: "c",
          text: "My system must be reproducible",
          description: "I need to know that my laptop and my server are *identical*. Bit for bit.",
          score: { nixos: 5 },
        },
        {
          id: "d",
          text: "The system is whatever I make it",
          description: "It's my system. I built it. I know every file on it. (I am lying.)",
          score: { arch: 4 },
        },
      ],
    },
    {
      id: "q15",
      segment: "Philosophy",
      text: "The ideal OS should be...",
      options: [
        {
          id: "a",
          text: "A stable, unchanging base",
          description: "It's a tool, not a hobby. I just want it to be reliable. Forever.",
          score: { debian: 5, ubuntu: 2 },
        },
        {
          id: "b",
          text: "A comfortable, friendly desktop",
          description: "It should be easy to use, look nice, and help me get my work done.",
          score: { ubuntu: 5, fedora: 3 },
        },
        {
          id: "c",
          text: "A showcase of the latest tech",
          description: "I want to be on the cutting edge. I want to see what's next.",
          score: { fedora: 5, arch: 3 },
        },
        {
          id: "d",
          text: "A minimalist, sharp tool",
          description: "It should do *nothing* by default. I will add exactly what I need, and no more.",
          score: { arch: 5, nixos: 3 },
        },
      ],
    },
    // Segment 6: Maintenance
    {
      id: "q16",
      segment: "Maintenance",
      text: "How much time do you want to spend maintaining your OS?",
      options: [
        {
          id: "a",
          text: "Zero. It should auto-update.",
          description: "It should just take care of itself. I have work to do.",
          score: { ubuntu: 5, fedora: 3 },
        },
        {
          id: "b",
          text: "A few minutes a week",
          description: "I'll run `apt upgrade` and check for big changes. That's it.",
          score: { debian: 4, fedora: 4, ubuntu: 3 },
        },
        {
          id: "c",
          text: "It's a hobby, not a chore",
          description: "I spend my Saturdays reading forums and tweaking config files. It's relaxing.",
          score: { arch: 5, nixos: 4 },
        },
        {
          id: "d",
          text: "My maintenance is editing one file",
          description: "I change one line of code, run one command, and my whole system is updated.",
          score: { nixos: 5 },
        },
      ],
    },
    {
      id: "q17",
      segment: "Maintenance",
      text: "What about file systems?",
      options: [
        {
          id: "a",
          text: "What's a file system?",
          description: "Uh, it's where my files go? `ext4`? Is that it? I don't know.",
          score: { ubuntu: 5, debian: 4 },
        },
        {
          id: "b",
          text: "I want a modern default (Btrfs, ZFS)",
          description: "I want snapshots and copy-on-write. It feels safer. I read it on Hacker News.",
          score: { fedora: 5, nixos: 4, ubuntu: 2 },
        },
        {
          id: "c",
          text: "I'll choose it myself",
          description: "I have very strong, very specific opinions on `ext4` vs `xfs` vs `btrfs`.",
          score: { arch: 4, debian: 3 },
        },
        {
          id: "d",
          text: "I just need it to be stable",
          description: "Give me the most boring, most tested file system on Earth. `ext4` is fine.",
          score: { debian: 5, ubuntu: 3 },
        },
      ],
    },
    {
      id: "q18",
      segment: "Maintenance",
      text: "Final choice: what matters most?",
      options: [
        {
          id: "a",
          text: "Stability",
          description: "It cannot, under any circumstances, break. My job depends on it.",
          score: { debian: 5, ubuntu: 3 },
        },
        {
          id: "b",
          text: "Ease of Use",
          description: "I'm not a computer scientist. I just want to browse the web and write docs.",
          score: { ubuntu: 5 },
        },
        {
          id: "c",
          text: "Bleeding-Edge Tech",
          description: "I want the newest kernel, newest GNOME, newest drivers. I want the future.",
          score: { fedora: 5, arch: 4 },
        },
        {
          id: "d",
          text: "Control & Purity",
          description: "I want a system that is perfectly, declaratively, 100% *mine*.",
          score: { nixos: 5, arch: 3 },
        },
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
        "You want an OS that just works. You value ease of use, great community support, and drivers that install themselves. It's the 'it just works' of the Linux world.",
    },
    {
      id: "fedora",
      name: "Fedora",
      description: "Cutting-edge and innovative",
      icon: "🎩",
      compatibility: 0,
      reason:
        "You're a developer who loves modern tech. You want the latest packages in a stable, polished system. You're not afraid of an update, you welcome it.",
    },
    {
      id: "debian",
      name: "Debian",
      description: "Stable and reliable",
      icon: "🌀",
      compatibility: 0,
      reason:
        "You are a patient person. You value stability above all else. 'New' is a scary word. You want a rock-solid system that will run for a decade without a single issue.",
    },
    {
      id: "arch",
      name: "Arch Linux",
      description: "Minimalist and powerful",
      icon: "🏔️",
      compatibility: 0,
      reason:
        "You're a builder. You want to understand your system from the ground up. The Wiki is your best friend, and you believe 'bloat' is a cardinal sin. It's your system, your rules.",
    },
    {
      id: "nixos",
      name: "NixOS",
      description: "Declarative and reproducible",
      icon: "❄️",
      compatibility: 0,
      reason:
        "You're a true engineer. You don't just 'install' software, you *declare* it. You love the idea of a perfectly reproducible system and rolling back failures instantly.",
    },
  ],
}

export const teamRoleTest: TestDomain = {
  id: "team-role",
  name: "Team Role Match",
  description: "Identify the team role that best suits your skills",
  questions: [
    // Segment 1: Team Work Motivation
    {
      id: "q1",
      segment: "Team Work Motivation",
      text: "What part of a project energizes you most?",
      options: [
        {
          id: "a",
          text: "Making it look and feel amazing",
          description: "That pixel-perfect moment when the UI just *works*. That's the stuff.",
          score: { frontend: 5, fullstack: 3 },
        },
        {
          id: "b",
          text: "Designing the database schema",
          description: "You love a clean, normalized database. It's like a tiny, perfect spreadsheet.",
          score: { backend: 5, fullstack: 3, devops: 1 },
        },
        {
          id: "c",
          text: "Making it run on 1000 servers",
          description: "Building it is easy. Making it scale without catching fire? That's the real puzzle.",
          score: { devops: 5, backend: 3 },
        },
        {
          id: "d",
          text: "Helping everyone else work together",
          description: "You just want the frontend and backend teams to stop fighting. Is that so hard?",
          score: { "tech-lead": 5, fullstack: 2 },
        },
      ],
    },
    {
      id: "q2",
      segment: "Team Work Motivation",
      text: "What's your ideal team contribution?",
      options: [
        {
          id: "a",
          text: "I build what the user sees",
          description: "You are the last line of defense between the user and a confusing mess.",
          score: { frontend: 5 },
        },
        {
          id: "b",
          text: "I build what the user doesn't see",
          description: "You're the wizard behind the curtain. If you do your job right, nobody knows you exist.",
          score: { backend: 5, devops: 3 },
        },
        {
          id: "c",
          text: "I build the bridge between them",
          description: "You speak both 'CSS' and 'SQL' fluently. You're a translator, mostly for yourself.",
          score: { fullstack: 5, "tech-lead": 3 },
        },
        {
          id: "d",
          text: "I build the factory that builds the thing",
          description: "You don't build the app. You build the pipeline that builds and deploys the app.",
          score: { devops: 5, "tech-lead": 2 },
        },
      ],
    },
    {
      id: "q3",
      segment: "Team Work Motivation",
      text: "How do you prefer to work?",
      options: [
        {
          id: "a",
          text: "Alone, focused on my component",
          description: "Just give me the API spec and a Figma file. See you in three days.",
          score: { frontend: 4, backend: 4 },
        },
        {
          id: "b",
          text: "In a pair, bouncing ideas",
          description: "You and one other person, fighting a problem. (And occasionally, each other.)",
          score: { frontend: 3, backend: 3, fullstack: 3 },
        },
        {
          id: "c",
          text: "With the whole team, whiteboarding",
          description: "You love the 'big picture.' You want to draw boxes and arrows and connect them.",
          score: { "tech-lead": 5, backend: 2 },
        },
        {
          id: "d",
          text: "Coordinating between teams",
          description: "You spend your day in meetings so other people don't have to. You're a hero.",
          score: { "tech-lead": 5, devops: 2 },
        },
      ],
    },
    // Segment 2: Communication Style
    {
      id: "q4",
      segment: "Communication Style",
      text: "What's your communication style?",
      options: [
        {
          id: "a",
          text: "Visually, with prototypes and demos",
          description: "'Let me just show you what I mean.' You'd rather build it than explain it.",
          score: { frontend: 5, fullstack: 3 },
        },
        {
          id: "b",
          text: "Technically, with API docs and diagrams",
          description: "You believe a good `swagger.json` file is worth a thousand meetings.",
          score: { backend: 5, devops: 3, "tech-lead": 2 },
        },
        {
          id: "c",
          text: "Strategically, with roadmaps and goals",
          description: "You're not talking about *this* feature, you're talking about the *next five*.",
          score: { "tech-lead": 5 },
        },
        {
          id: "d",
          text: "Through code reviews and PRs",
          description: "'LGTM' is your love language. 'Please fix nit' is your way of caring.",
          score: { backend: 4, frontend: 3, fullstack: 3, devops: 2 },
        },
      ],
    },
    {
      id: "q5",
      segment: "Communication Style",
      text: "How do you handle ambiguity in a task?",
      options: [
        {
          id: "a",
          text: "I build what I *think* it means",
          description: "It's better to ask for forgiveness than permission. Ship it.",
          score: { frontend: 4, fullstack: 3 },
        },
        {
          id: "b",
          text: "I stop and ask for clarification",
          description: "You're not writing a single line of code until you know *exactly* what it's for.",
          score: { backend: 4, "tech-lead": 3 },
        },
        {
          id: "c",
          text: "I write the 'safe' version",
          description: "Build it to be stable, even if the feature is wrong. At least it won't crash.",
          score: { backend: 5, devops: 4 },
        },
        {
          id: "d",
          text: "I help *define* the task",
          description: "You call a meeting with the designer and product manager to fix the ticket.",
          score: { "tech-lead": 5, fullstack: 2 },
        },
      ],
    },
    {
      id: "q6",
      segment: "Communication Style",
      text: "How do you feel about meetings?",
      options: [
        {
          id: "a",
          text: "They are a necessary evil",
          description: "You'll go. But you'll be writing code with your camera off.",
          score: { frontend: 4, backend: 4, fullstack: 3, devops: 3 },
        },
        {
          id: "b",
          text: "I run the meetings",
          description: "You're the one with the agenda. You're the one who says 'let's take this offline.'",
          score: { "tech-lead": 5 },
        },
        {
          id: "c",
          text: "I prefer async (Slack/Email)",
          description: "Don't call me. Write it down. If it's important, I'll read it. Eventually.",
          score: { backend: 4, devops: 4, frontend: 2 },
        },
        {
          id: "d",
          text: "I like them for planning",
          description: "A good sprint planning meeting gets you energized for the next two weeks.",
          score: { "tech-lead": 4, fullstack: 3 },
        },
      ],
    },
    // Segment 3: Main Strengths
    {
      id: "q7",
      segment: "Main Strengths",
      text: "What's your ideal project scope?",
      options: [
        {
          id: "a",
          text: "A single, perfect component",
          description: "You want to build the world's best data grid. And nothing else.",
          score: { frontend: 5 },
        },
        {
          id: "b",
          text: "A well-defined microservice",
          description: "One service. One job. One API. A simple, clean, isolated world.",
          score: { backend: 5, devops: 2 },
        },
        {
          id: "c",
          text: "The entire CI/CD pipeline",
          description: "You love the 'click a button, code goes to prod' magic. You *are* the magic.",
          score: { devops: 5 },
        },
        {
          id: "d",
          text: "The whole system architecture",
          description: "You're the one connecting all the boxes and arrows. It's your grand design.",
          score: { "tech-lead": 5, backend: 3, fullstack: 2 },
        },
      ],
    },
    {
      id: "q8",
      segment: "Main Strengths",
      text: "What's your 'superpower'?",
      options: [
        {
          id: "a",
          text: "CSS. I can center a div.",
          description: "You've stared into the `z-index` abyss, and it stared back. You won.",
          score: { frontend: 5 },
        },
        {
          id: "b",
          text: "Database queries",
          description: "You can write a SQL query that joins 12 tables and runs in 50ms. It's a gift.",
          score: { backend: 5, fullstack: 3 },
        },
        {
          id: "c",
          text: "YAML engineering",
          description: "You can debug an indentation error in a 2000-line YAML file. You're not human.",
          score: { devops: 5 },
        },
        {
          id: "d",
          text: "Mentoring junior devs",
          description: "You can explain 'closures' for the 80th time without losing your patience.",
          score: { "tech-lead": 5, fullstack: 2 },
        },
      ],
    },
    {
      id: "q9",
      segment: "Main Strengths",
      text: "What's your decision-making style?",
      options: [
        {
          id: "a",
          text: "User-centered",
          description: "You just want users to stop clicking the wrong button. Again.",
          score: { frontend: 5, fullstack: 3 },
        },
        {
          id: "b",
          text: "Data-driven",
          description: "You trust the logs. You trust the metrics. You do not trust 'feelings.'",
          score: { backend: 5, devops: 4 },
        },
        {
          id: "c",
          text: "Team consensus",
          description: "You want everyone to agree. Even if it takes a 3-hour meeting.",
          score: { "tech-lead": 5 },
        },
        {
          id: "d",
          text: "I'll do both",
          description: "You'll build the front *and* the back. It's just faster than explaining it.",
          score: { fullstack: 5, "tech-lead": 2 },
        },
      ],
    },
    // Segment 4: Pressure Reaction
    {
      id: "q10",
      segment: "Pressure Reaction",
      text: "Production is on fire. What do you do?",
      options: [
        {
          id: "a",
          text: "Check the CSS",
          description: "It's probably a caching issue. Or someone pushed a bad style. It's always CSS.",
          score: { frontend: 5 },
        },
        {
          id: "b",
          text: "Read the logs",
          description: "The answer is in the stack trace. It's *always* in the stack trace.",
          score: { backend: 5, fullstack: 3 },
        },
        {
          id: "c",
          text: "Roll it back!",
          description: "You smash that 're-deploy previous version' button. Sleep > debugging.",
          score: { devops: 5, "tech-lead": 2 },
        },
        {
          id: "d",
          text: "Open a war room",
          description: "You get everyone on a call. You delegate. You ask 'what changed?' 50 times.",
          score: { "tech-lead": 5, devops: 3 },
        },
      ],
    },
    {
      id: "q11",
      segment: "Pressure Reaction",
      text: "What's your conflict resolution style?",
      options: [
        {
          id: "a",
          text: "I'll just build it myself",
          description: "Arguing takes too long. I'll just learn their job and do it for them.",
          score: { fullstack: 5, frontend: 2, backend: 2 },
        },
        {
          id: "b",
          text: "Find a technical compromise",
          description: "There's an API pattern or database view that can make everyone happy.",
          score: { backend: 4, "tech-lead": 3 },
        },
        {
          id: "c",
          text: "Automate the conflict away",
          description: "We're arguing about code style? Cool. I'm adding a linter. Argument over.",
          score: { devops: 5, "tech-lead": 3 },
        },
        {
          id: "d",
          text: "Mediate and facilitate",
          description: "You get both sides in a room and don't let them leave until they've hugged it out.",
          score: { "tech-lead": 5 },
        },
      ],
    },
    {
      id: "q12",
      segment: "Pressure Reaction",
      text: "How do you measure success?",
      options: [
        {
          id: "a",
          text: "By user happiness",
          description: "Did the user smile? Did they *not* file a bug report? That's a win.",
          score: { frontend: 5, fullstack: 3 },
        },
        {
          id: "b",
          text: "By API response time",
          description: "If it's under 100ms, it's good. If it's under 50ms, it's art.",
          score: { backend: 5, devops: 3 },
        },
        {
          id: "c",
          text: "By system uptime",
          description: "Five nines. 99.999%. That's the dream. It keeps you awake at night.",
          score: { devops: 5, backend: 3 },
        },
        {
          id: "d",
          text: "By team velocity",
          description: "Is the team happy? Are they shipping code? My job is to unblock them.",
          score: { "tech-lead": 5, fullstack: 2 },
        },
      ],
    },
    // Segment 5: Feedback
    {
      id: "q13",
      segment: "Feedback",
      text: "How do you handle a code review?",
      options: [
        {
          id: "a",
          text: "I'm looking for visual bugs",
          description: "Does it look right on mobile? Is the alignment off by 1px? That's what matters.",
          score: { frontend: 5 },
        },
        {
          id: "b",
          text: "I'm looking for race conditions",
          description: "You're checking for deadlocks, bad caching, and n+1 queries. The invisible stuff.",
          score: { backend: 5, devops: 3 },
        },
        {
          id: "c",
          text: "I'm looking at the whole picture",
          description: "Does this PR even make sense? Does it fit the roadmap? You're the big thinker.",
          score: { "tech-lead": 5, fullstack: 3 },
        },
        {
          id: "d",
          text: "I'm checking the deployment script",
          description: "Did they update the Terraform? Did they add the env variable? *Did they?!*",
          score: { devops: 5, "tech-lead": 2 },
        },
      ],
    },
    {
      id: "q14",
      segment: "Feedback",
      text: "What's your learning preference?",
      options: [
        {
          id: "a",
          text: "Learning new design patterns",
          description: "You're always finding new, clever ways to make a component 'reusable.'",
          score: { frontend: 5, fullstack: 3 },
        },
        {
          id: "b",
          text: "Learning new database tech",
          description: "You're genuinely excited about 'vector databases.' You're a special kind of nerd.",
          score: { backend: 5 },
        },
        {
          id: "c",
          text: "Learning new cloud services",
          description: "AWS just released 12 new services. You need to know what 3 of them do.",
          score: { devops: 5, backend: 2 },
        },
        {
          id: "d",
          text: "Learning new management styles",
          description: "You're reading books on 'agile' and 'scrum' for fun. Who does that?",
          score: { "tech-lead": 5 },
        },
      ],
    },
    {
      id: "q15",
      segment: "Feedback",
      text: "How do you feel about mentoring?",
      options: [
        {
          id: "a",
          text: "I'd rather be coding",
          description: "Teaching is hard. Code is easy. I'll stick with the code.",
          score: { frontend: 4, backend: 4 },
        },
        {
          id: "b",
          text: "I'm the one *being* mentored",
          description: "I'm still figuring this out. Please help me.",
          score: { frontend: 3, backend: 3, fullstack: 3 },
        },
        {
          id: "c",
          text: "I enjoy it, it's rewarding",
          description: "You love that 'a-ha!' moment when a junior dev finally gets it.",
          score: { "tech-lead": 5, fullstack: 3, devops: 2 },
        },
        {
          id: "d",
          text: "I'm a jack-of-all-trades",
          description: "I can mentor the frontend dev on CSS and the backend dev on SQL. It's a curse.",
          score: { fullstack: 5, "tech-lead": 3 },
        },
      ],
    },
    // Segment 6: Career Vision
    {
      id: "q16",
      segment: "Career Vision",
      text: "What's your ideal career path?",
      options: [
        {
          id: "a",
          text: "Principal UI Engineer",
          description: "You want to be the final word on everything related to the user experience.",
          score: { frontend: 5 },
        },
        {
          id: "b",
          text: "Staff / Principal Backend Engineer",
          description: "You want to be the wizard who designs the entire system, not just one part.",
          score: { backend: 5, "tech-lead": 3 },
        },
        {
          id: "c",
          text: "Distinguished SRE / DevOps",
          description: "You want to be the person they call when the *entire internet* is broken.",
          score: { devops: 5 },
        },
        {
          id: "d",
          text: "Engineering Manager / Architect",
          description: "You've realized you like drawing the diagrams more than writing the code.",
          score: { "tech-lead": 5, fullstack: 2 },
        },
      ],
    },
    {
      id: "q17",
      segment: "Career Vision",
      text: "What's your risk tolerance?",
      options: [
        {
          id: "a",
          text: "I'm here to ship pixels",
          description: "It's just a website. If it's broken for 5 minutes, it's not the end of the world.",
          score: { frontend: 5, fullstack: 3 },
        },
        {
          id: "b",
          text: "Data loss is a nightmare",
          description: "You triple-check every migration. Deleting data is a mortal sin.",
          score: { backend: 5, devops: 3 },
        },
        {
          id: "c",
          text: "Downtime is a mortal sin",
          description: "If the site is down, you're not sleeping. You are the 'on-call' guardian.",
          score: { devops: 5, backend: 3 },
        },
        {
          id: "d",
          text: "The team burning out is the risk",
          description: "You're not worried about the code. You're worried about the people writing it.",
          score: { "tech-lead": 5 },
        },
      ],
    },
    {
      id: "q18",
      segment: "Career Vision",
      text: "What's your ultimate career goal?",
      options: [
        {
          id: "a",
          text: "Build a famous, beautiful app",
          description: "You want people to say 'wow, this app is so easy to use.'",
          score: { frontend: 5, fullstack: 3 },
        },
        {
          id: "b",
          text: "Build a system that scales to billions",
          description: "You want to solve problems that only exist at Google/Facebook scale.",
          score: { backend: 5, devops: 4, "tech-lead": 2 },
        },
        {
          id: "c",
          text: "Build a 'platform' for other devs",
          description: "You want to build the tools that make *other* developers' lives easier.",
          score: { devops: 5, backend: 3, "tech-lead": 3 },
        },
        {
          id: "d",
          text: "Build a happy, high-performing team",
          description: "The code is temporary. The team is what matters. You're a people person.",
          score: { "tech-lead": 5 },
        },
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
        "You live and breathe the user experience. You love making things look beautiful and feel intuitive. Your mortal enemy is a 1px alignment error.",
    },
    {
      id: "backend",
      name: "Backend Developer",
      description: "Systems-focused and analytical",
      icon: "⚙️",
      compatibility: 0,
      reason:
        "You're an architect of the invisible. You love data, logic, and building systems that just *work*. If nobody knows you exist, you've done your job right.",
    },
    {
      id: "fullstack",
      name: "Full Stack Developer",
      description: "Versatile and adaptable",
      icon: "🔗",
      compatibility: 0,
      reason:
        "You're a jack-of-all-trades. You're comfortable with CSS and SQL, and you're just as happy to build an API as you are to consume it. You're the glue.",
    },
    {
      id: "devops",
      name: "DevOps Engineer",
      description: "Infrastructure-focused and systematic",
      icon: "🚀",
      compatibility: 0,
      reason:
        "You don't just build apps, you build the *factory* that builds the apps. You love automation, hate downtime, and speak in YAML more than English.",
    },
    {
      id: "tech-lead",
      name: "Tech Lead",
      description: "Leadership-focused and strategic",
      icon: "👑",
      compatibility: 0,
      reason:
        "You've transcended code. Your job is to make *other* people better coders. You love whiteboards, roadmaps, and unblocking your team.",
    },
  ],
}

export const workflowStyleTest: TestDomain = {
  id: "workflow-style",
  name: "Workflow Style Match",
  description: "Understand your ideal workflow and productivity patterns",
  questions: [
    // Segment 1: Time Management
    {
      id: "q1",
      segment: "Time Management",
      text: "When are you most productive?",
      options: [
        {
          id: "a",
          text: "Early morning (6am - 9am)",
          description: "You get more done before 9 AM than most people do all day. You also hate meetings.",
          score: { "remote-async": 5, kanban: 3 },
        },
        {
          id: "b",
          text: "Standard morning (9am - 12pm)",
          description: "You like the 9-to-5. You grab a coffee, check emails, and get to work.",
          score: { agile: 4, waterfall: 4, collaborative: 3 },
        },
        {
          id: "c",
          text: "Afternoon (1pm - 5pm)",
          description: "Your brain doesn't turn on until after lunch. The morning is just a warm-up.",
          score: { agile: 3, kanban: 3 },
        },
        {
          id: "d",
          text: "Late night (9pm onwards)",
          description: "You're a creature of the night. The world is quiet, Slack is silent. It's perfect.",
          score: { "remote-async": 5, kanban: 3 },
        },
      ],
    },
    {
      id: "q2",
      segment: "Time Management",
      text: "How do you prefer to focus?",
      options: [
        {
          id: "a",
          text: "Short bursts (Pomodoro)",
          description: "25 minutes of panic, 5 minutes of scrolling. Repeat.",
          score: { agile: 5, collaborative: 3 },
        },
        {
          id: "b",
          text: "Long, uninterrupted blocks (4+ hours)",
          description: "You put on your headphones and disappear. 'Flow state' is your home.",
          score: { "remote-async": 5, waterfall: 4, kanban: 3 },
        },
        {
          id: "c",
          text: "I jump between tasks",
          description: "You're not 'distracted,' you're 'multi-tasking.' There's a difference. Probably.",
          score: { agile: 4, collaborative: 4 },
        },
        {
          id: "d",
          text: "Whenever inspiration strikes",
          description: "You work when you feel it. Deadlines are just, like, suggestions, man.",
          score: { kanban: 4, "remote-async": 2 },
        },
      ],
    },
    {
      id: "q3",
      segment: "Time Management",
      text: "How do you handle deadlines?",
      options: [
        {
          id: "a",
          text: "I need a strict, short deadline",
          description: "The 2-week sprint is your god. You live and die by the burndown chart.",
          score: { agile: 5 },
        },
        {
          id: "b",
          text: "I need a long, detailed plan",
          description: "You want a 6-month plan. You want to know what you're doing next July.",
          score: { waterfall: 5 },
        },
        {
          id: "c",
          text: "I just work on the next thing",
          description: "What's a deadline? You just pull the next card from the 'To Do' column.",
          score: { kanban: 5, "remote-async": 3 },
        },
        {
          id: "d",
          text: "I work best under last-minute panic",
          description: "You do your best work 12 hours before it's due. Fueled by terror.",
          score: { agile: 3, kanban: 2 },
        },
      ],
    },
    // Segment 2: Work Organization
    {
      id: "q4",
      segment: "Work Organization",
      text: "How do you prefer to manage tasks?",
      options: [
        {
          id: "a",
          text: "A detailed project plan (Gantt chart)",
          description: "You have a 40-page document explaining the 5-page feature. It's beautiful.",
          score: { waterfall: 5 },
        },
        {
          id: "b",
          text: "A prioritized backlog (Jira)",
          description: "You live in the backlog. 'Grooming' isn't about pets, it's about survival.",
          score: { agile: 5, collaborative: 3 },
        },
        {
          id: "c",
          text: "A simple 'To Do' column (Kanban)",
          description: "It's in 'To Do.' Soon, it will be in 'Done.' What more do you need?",
          score: { kanban: 5, "remote-async": 3 },
        },
        {
          id: "d",
          text: "A checklist in my notebook",
          description: "You just write down what you need to do. It's not rocket science.",
          score: { "remote-async": 4, kanban: 3 },
        },
      ],
    },
    {
      id: "q5",
      segment: "Work Organization",
      text: "What's your ideal work environment?",
      options: [
        {
          id: "a",
          text: "A busy, open office 'war room'",
          description: "You love the energy. You want to swivel your chair to ask a question.",
          score: { collaborative: 5, agile: 4 },
        },
        {
          id: "b",
          text: "A quiet, shared office",
          description: "You like seeing people, but you *really* like when they're silent.",
          score: { waterfall: 4, kanban: 3 },
        },
        {
          id: "c",
          text: "My home office, no interruptions",
          description: "You have optimized your desk setup. Your cat is your only coworker.",
          score: { "remote-async": 5, kanban: 3, waterfall: 2 },
        },
        {
          id: "d",
          text: "A mix, 2-3 days in office",
          description: "You want 'social collaboration' on Tuesday and 'get stuff done' on Wednesday.",
          score: { agile: 3, collaborative: 3 },
        },
      ],
    },
    {
      id: "q6",
      segment: "Work Organization",
      text: "How do you handle interruptions?",
      options: [
        {
          id: "a",
          text: "I love them! It's collaboration!",
          description: "A tap on the shoulder is a chance to help! (You secretly get no work done.)",
          score: { collaborative: 5, agile: 3 },
        },
        {
          id: "b",
          text: "I tolerate them. It's part of the job.",
          description: "You sigh, take off your headphones, and say 'what's up?'",
          score: { agile: 4, kanban: 2 },
        },
        {
          id: "c",
          text: "I hate them. They break my focus.",
          description: "An interruption costs you 30 minutes. You have a 'do not disturb' sign.",
          score: { "remote-async": 5, waterfall: 4, kanban: 3 },
        },
        {
          id: "d",
          text: "I've turned off all notifications",
          description: "Slack is closed. Email is closed. If it's on fire, someone will text you.",
          score: { "remote-async": 5, waterfall: 3 },
        },
      ],
    },
    // Segment 3: Team Coordination
    {
      id: "q7",
      segment: "Team Coordination",
      text: "What's your collaboration style?",
      options: [
        {
          id: "a",
          text: "Constant (Pair programming, Slack)",
          description: "You're on a call all day. You type in the same file. You are one brain.",
          score: { collaborative: 5, agile: 4 },
        },
        {
          id: "b",
          text: "Daily (Stand-ups, check-ins)",
          description: "You just want to know what everyone's doing so you don't do the same work.",
          score: { agile: 5, waterfall: 3 },
        },
        {
          id: "c",
          text: "Weekly (Sprint planning, demos)",
          description: "Let's plan the week, then everyone go away and do their work.",
          score: { waterfall: 4, kanban: 3 },
        },
        {
          id: "d",
          text: "Written (Async, PR comments)",
          description: "You write detailed pull requests. You expect detailed comments. No calls.",
          score: { "remote-async": 5, kanban: 3, waterfall: 2 },
        },
      ],
    },
    {
      id: "q8",
      segment: "Team Coordination",
      text: "What's your communication preference?",
      options: [
        {
          id: "a",
          text: "Synchronous (Zoom, in-person)",
          description: "Let's just talk for 5 minutes. It's faster than typing for 20.",
          score: { collaborative: 5, agile: 4 },
        },
        {
          id: "b",
          text: "A mix of sync and async",
          description: "A quick huddle to plan, then deep work. Best of both worlds.",
          score: { agile: 4, kanban: 3 },
        },
        {
          id: "c",
          text: "Asynchronous (Slack, Notion)",
          description: "Write it down. I'll read it when I'm ready. I am not on your schedule.",
          score: { "remote-async": 5, kanban: 4, waterfall: 3 },
        },
        {
          id: "d",
          text: "Through documentation",
          description: "The plan is in the spec. The answer is in the docs. Read them.",
          score: { waterfall: 5, "remote-async": 3 },
        },
      ],
    },
    {
      id: "q9",
      segment: "Team Coordination",
      text: "What's your ideal 'meeting'?",
      options: [
        {
          id: "a",
          text: "A 15-minute daily stand-up",
          description: "What I did. What I'm doing. Where I'm stuck. Done. Back to work.",
          score: { agile: 5 },
        },
        {
          id: "b",
          text: "A 2-hour planning session",
          description: "You love to break down a big project into a million tiny, perfect tickets.",
          score: { waterfall: 5, agile: 3 },
        },
        {
          id: "c",
          text: "A 30-minute 'show and tell' demo",
          description: "You just want to show off the cool thing you built this week.",
          score: { collaborative: 4, agile: 3 },
        },
        {
          id: "d",
          text: "An email",
          description: "This meeting could have been an email. And you will be the one to say it.",
          score: { "remote-async": 5, kanban: 3 },
        },
      ],
    },
    // Segment 4: Change Adaptation
    {
      id: "q10",
      segment: "Change Adaptation",
      text: "The project's goals change mid-sprint. You:",
      options: [
        {
          id: "a",
          text: "Embrace it! Change is good.",
          description: "Cool! New stuff to do. You were getting bored with the old stuff anyway.",
          score: { agile: 5, kanban: 3, collaborative: 2 },
        },
        {
          id: "b",
          text: "Grumble, but adapt.",
          description: "You sigh, throw away your work, and start over. It's the job.",
          score: { kanban: 4, agile: 3 },
        },
        {
          id: "c",
          text: "Point to the Gantt chart",
          description: "'That's not in the spec.' You will file a change request. This is chaos.",
          score: { waterfall: 5 },
        },
        {
          id: "d",
          text: "I didn't even notice",
          description: "You were in your cave. You'll find out in a week. It's fine.",
          score: { "remote-async": 4, kanban: 3 },
        },
      ],
    },
    {
      id: "q11",
      segment: "Change Adaptation",
      text: "What's your ideal work rhythm?",
      options: [
        {
          id: "a",
          text: "Fast-paced sprints",
          description: "A two-week cycle of panic, productivity, and celebration. It's a rush.",
          score: { agile: 5, collaborative: 3 },
        },
        {
          id: "b",
          text: "A steady, continuous flow",
          description: "You just pull the next ticket, do the work, and move it to 'Done.' Calm.",
          score: { kanban: 5, "remote-async": 3 },
        },
        {
          id: "c",
          text: "Long, planned phases",
          description: "You like 'Design Phase,' 'Build Phase,' 'Test Phase.' It's organized.",
          score: { waterfall: 5 },
        },
        {
          id: "d",
          text: "I work when I want, how I want",
          description: "You are a lone wolf. You deliver when it's done. Trust me.",
          score: { "remote-async": 5, kanban: 2 },
        },
      ],
    },
    {
      id: "q12",
      segment: "Change Adaptation",
      text: "How do you feel about 'planning'?",
      options: [
        {
          id: "a",
          text: "I *love* planning",
          description: "The plan is sacred. The plan is life. We do not deviate from the plan.",
          score: { waterfall: 5 },
        },
        {
          id: "b",
          text: "Planning is for the next two weeks",
          description: "We plan just enough to get started. We'll figure out the rest later.",
          score: { agile: 5, collaborative: 3 },
        },
        {
          id: "c",
          text: "Planning is the enemy of progress",
          description: "Stop talking, start coding. We'll see where we end up.",
          score: { kanban: 4, agile: 2 },
        },
        {
          id: "d",
          text: "I plan my own day, that's it",
          description: "I know what I have to do. I don't need a group to tell me.",
          score: { "remote-async": 5, kanban: 3 },
        },
      ],
    },
    // Segment 5: Work Evaluation
    {
      id: "q13",
      segment: "Work Evaluation",
      text: "How do you prefer to receive feedback?",
      options: [
        {
          id: "a",
          text: "Instantly, in real-time",
          description: "Tell me *now*. While I'm writing it. Just tap me on the shoulder.",
          score: { collaborative: 5, agile: 4 },
        },
        {
          id: "b",
          text: "Every day, in stand-up",
          description: "A quick 'looks good' or 'you're blocked' is all I need.",
          score: { agile: 5 },
        },
        {
          id: "c",
          text: "In detailed, written PR comments",
          description: "Be specific. Be thorough. And approve it so I can merge.",
          score: { "remote-async": 5, kanban: 3, waterfall: 3 },
        },
        {
          id: "d",
          text: "At the end of a long phase",
          description: "Don't bother me while I'm building. We'll do a big review in 3 months.",
          score: { waterfall: 5 },
        },
      ],
    },
    {
      id: "q14",
      segment: "Work Evaluation",
      text: "How do you like to track progress?",
      options: [
        {
          id: "a",
          text: "A burndown chart",
          description: "Watching that line go down is the only thing that brings you joy.",
          score: { agile: 5 },
        },
        {
          id: "b",
          text: "A 100-page status report",
          description: "You need to see every dependency, every risk, every milestone. In detail.",
          score: { waterfall: 5 },
        },
        {
          id: "c",
          text: "A Kanban board",
          description: "Is the card in 'Done'? Then it's done. It's so simple.",
          score: { kanban: 5, "remote-async": 3, collaborative: 2 },
        },
        {
          id: "d",
          text: "I just... talk to people",
          description: "I just ask 'hey, is that thing done?' It's revolutionary.",
          score: { collaborative: 5 },
        },
      ],
    },
    {
      id: "q15",
      segment: "Work Evaluation",
      text: "What does 'done' mean to you?",
      options: [
        {
          id: "a",
          text: "It's shipped to production",
          description: "It's not 'done' until a real user is complaining about it.",
          score: { agile: 5, kanban: 4, collaborative: 3 },
        },
        {
          id: "b",
          text: "It's merged to 'main'",
          description: "My PR is approved. It's someone else's problem now.",
          score: { "remote-async": 4, kanban: 3 },
        },
        {
          id: "c",
          text: "It's passed the 'Testing Phase'",
          description: "The QA team has signed off. My work here is finished.",
          score: { waterfall: 5 },
        },
        {
          id: "d",
          text: "I've passed it to my pair",
          description: "I wrote my part, now my pair partner is writing theirs.",
          score: { collaborative: 4 },
        },
      ],
    },
    // Segment 6: Deployment & Maintenance
    {
      id: "q16",
      segment: "Deployment & Maintenance",
      text: "What's your deployment preference?",
      options: [
        {
          id: "a",
          text: "Multiple times a day",
          description: "If it's merged, it ships. You live for `git push`.",
          score: { agile: 5, kanban: 4, collaborative: 3 },
        },
        {
          id: "b",
          text: "At the end of every sprint",
          description: "We demo on Friday, we ship on Friday. A nice, clean cycle.",
          score: { agile: 5 },
        },
        {
          id: "c",
          text: "At the end of a 6-month project",
          description: "We have a 'Go Live' date. It's a big, scary, exciting event.",
          score: { waterfall: 5 },
        },
        {
          id: "d",
          text: "Whenever I feel like it",
          description: "I finished my card. It's tested. It's shipping. What's the big deal?",
          score: { kanban: 5, "remote-async": 3 },
        },
      ],
    },
    {
      id: "q17",
      segment: "Deployment & Maintenance",
      text: "How do you handle technical debt?",
      options: [
        {
          id: "a",
          text: "Fix it immediately",
          description: "You see 'TODO:', you fix 'TODO:'. You can't sleep otherwise.",
          score: { "remote-async": 4, kanban: 3, waterfall: 3 },
        },
        {
          id: "b",
          text: "We have 'Refactor Sprints'",
          description: "We spend 10% of our time cleaning up the mess we made the other 90%.",
          score: { agile: 5, collaborative: 3 },
        },
        {
          id: "c",
          text: "We planned for it",
          description: "It's not 'debt.' It's 'Phase 2.' It's in the Gantt chart. It's fine.",
          score: { waterfall: 5 },
        },
        {
          id: "d",
          text: "What's technical debt?",
          description: "You're already working on the next thing. That's a problem for future you.",
          score: { agile: 3, kanban: 2 },
        },
      ],
    },
    {
      id: "q18",
      segment: "Deployment & Maintenance",
      text: "What's your work-life balance preference?",
      options: [
        {
          id: "a",
          text: "Strict 9-to-5",
          description: "You log in at 9:00. You log out at 5:00. The laptop does not open at night.",
          score: { waterfall: 5, "remote-async": 4 },
        },
        {
          id: "b",
          text: "Flexible, but defined hours",
          description: "You'll work 10-6, or 8-4. But when you're off, you're *off*.",
          score: { agile: 4, kanban: 4, collaborative: 3 },
        },
        {
          id: "c",
          text: "I work when I'm 'in the zone'",
          description: "You might work for 12 hours one day and 3 the next. The work gets done.",
          score: { "remote-async": 5, kanban: 3 },
        },
        {
          id: "d",
          text: "Work is life",
          description: "You're on Slack at 10 PM. You're pushing code on Saturday. You love it.",
          score: { agile: 3, collaborative: 3 },
        },
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
        "You thrive on speed and feedback. You love working in short sprints, talking with your team every day, and shipping code fast. Change doesn't scare you; it excites you.",
    },
    {
      id: "waterfall",
      name: "Waterfall Workflow",
      description: "Structured and planned",
      icon: "📋",
      compatibility: 0,
      reason:
        "You believe in 'measure twice, cut once.' You love a detailed plan, a clear set of requirements, and a long, quiet phase of building. 'Chaos' is your enemy.",
    },
    {
      id: "kanban",
      name: "Kanban Workflow",
      description: "Continuous and flexible",
      icon: "🔄",
      compatibility: 0,
      reason:
        "You're a pragmatist. You just want to see the work, do the work, and move on. You like a continuous, steady flow over the rigid cycles of sprints or long-term plans.",
    },
    {
      id: "remote-async",
      name: "Remote Async Workflow",
      description: "Independent and asynchronous",
      icon: "🏠",
      compatibility: 0,
      reason:
        "You are a master of 'deep work.' You hate interruptions, prefer writing to talking, and do your best work when left alone. You are organized, self-motivated, and own your schedule.",
    },
    {
      id: "collaborative",
      name: "Collaborative Workflow",
      description: "Team-focused and interactive",
      icon: "👥",
      compatibility: 0,
      reason:
        "You're energized by people! You love pair programming, whiteboarding, and solving problems in real-time. For you, coding is a team sport, not a solo activity.",
    },
  ],
}

export const allTests = [programmingLanguageTest, linuxDistroTest, teamRoleTest, workflowStyleTest]