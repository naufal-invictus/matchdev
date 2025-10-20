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
    // ... (pertanyaan tetap sama) ...
    {
      id: "q1",
      segment: "Coding Motivation",
      text: "Why did you even start coding?",
      options: [
        {
          id: "a",
          text: "To build cool websites and apps",
          description: "You just want to make a button that, when clicked, does a thing. And looks good.",
          score: { javascript: 4, typescript: 4, python: 2, ruby: 3, php: 3, swift: 3, kotlin: 3 },
        },
        {
          id: "b",
          text: "To make the computer think",
          description: "You saw 'The Matrix' and thought, 'I can do that.' But with more spreadsheets.",
          score: { python: 5, go: 2, java: 2, csharp: 2 },
        },
        {
          id: "c",
          text: "To control the machine itself",
          description: "You want to tell the hardware *exactly* what to do. And pray it listens.",
          score: { rust: 5, go: 3, cplusplus: 4 },
        },
        {
          id: "d",
          text: "To build massive, reliable systems",
          description: "Your dream is to build something that outlives you. And doesn't crash. Ever.",
          score: { go: 5, rust: 3, typescript: 2, java: 4, csharp: 4, cplusplus: 2 },
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
          score: { javascript: 5, typescript: 4, ruby: 2 },
        },
        {
          id: "b",
          text: "A script to automate my life",
          description: "You'll spend 8 hours writing a script to save you 5 minutes of work. Worth it.",
          score: { python: 5, go: 2, ruby: 3 },
        },
        {
          id: "c",
          text: "A tiny, perfect command-line tool",
          description: "It does one thing, it does it fast, and it makes you feel like a wizard.",
          score: { go: 5, rust: 4, python: 2, cplusplus: 2 },
        },
        {
          id: "d",
          text: "Optimizing a game engine",
          description: "You enjoy watching frames drop as your dreams rise. But you can fix it.",
          score: { rust: 5, cplusplus: 5 },
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
          score: { javascript: 5, python: 4, typescript: 3, java: 4, csharp: 4, php: 3, ruby: 3 },
        },
        {
          id: "b",
          text: "How fast I can build things",
          description: "You want to go from 'idea' to 'working prototype' before your coffee gets cold.",
          score: { python: 5, javascript: 4, go: 2, ruby: 4, php: 4 },
        },
        {
          id: "c",
          text: "Guaranteed safety and no crashes",
          description: "You're tired of `null pointer` errors at 3 AM. So very tired.",
          score: { rust: 5, typescript: 3, go: 2, swift: 4, kotlin: 4, csharp: 3, java: 2 },
        },
        {
          id: "d",
          text: "Blazing fast performance",
          description: "You have a deep, personal hatred for loading spinners. They must be destroyed.",
          score: { rust: 5, go: 5, cplusplus: 5 },
        },
      ],
    },
    {
      id: "q4",
      segment: "Problem Solving Style",
      text: "How do you prefer to handle errors?",
      options: [
        {
          id: "a",
          text: "Let it crash and see what happens",
          description: "If it breaks, it breaks. 'undefined is not a function' is your battle cry.",
          score: { javascript: 5, ruby: 3, php: 3 },
        },
        {
          id: "b",
          text: "Wrap everything in try/except/catch",
          description: "You're not sure *what* will break, but you'll be ready... probably.",
          score: { python: 5, javascript: 2, java: 4, csharp: 4, php: 3, ruby: 3 },
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
          score: { rust: 5, typescript: 3, swift: 4, kotlin: 4 },
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
          score: { javascript: 5, python: 3, ruby: 4, php: 4 },
        },
        {
          id: "b",
          text: "I add types when things get serious",
          description: "You like flexibility, but you'll add types when the code starts to look scary.",
          score: { typescript: 5, python: 2, php: 2 },
        },
        {
          id: "c",
          text: "My code won't run without types",
          description: "You want the compiler to find your bug *before* your boss does.",
          score: { typescript: 5, rust: 4, go: 3, java: 5, csharp: 5, swift: 5, kotlin: 5, cplusplus: 3 },
        },
        {
          id: "d",
          text: "Types should prove my code is correct",
          description: "You want a type system so advanced, it basically writes the code for you.",
          score: { rust: 5 }, // Haskell, F# would fit here too
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
          score: { javascript: 5, python: 4, ruby: 4, php: 4 },
        },
        {
          id: "b",
          text: "Making it easy to read",
          description: "Code is read more than written. You write for the human, not the machine.",
          score: { python: 5, go: 3, ruby: 3 },
        },
        {
          id: "c",
          text: "Making it super efficient",
          description: "You measure success in microseconds and memory saved. It's a sickness.",
          score: { rust: 5, go: 4, cplusplus: 5 },
        },
        {
          id: "d",
          text: "Making it easy to maintain for years",
          description: "You build for the long haul. Simple, clear, and boring is better than clever.",
          score: { go: 5, typescript: 4, rust: 2, java: 4, csharp: 4 },
        },
      ],
    },
     {
      id: "q7",
      segment: "Thinking Style",
      text: "What's your preferred programming paradigm?",
      options: [
        {
          id: "a",
          text: "Whatever gets the job done",
          description: "You mix OOP, functional, and pure chaos. As long as it works, who cares?",
          score: { javascript: 5, python: 3, ruby: 3, php: 3 },
        },
        {
          id: "b",
          text: "Object-Oriented (OOP)",
          description: "You like to put your code in little boxes (classes) and hope they talk to each other.",
          score: { python: 4, typescript: 3, javascript: 2, java: 5, csharp: 5, ruby: 4, cplusplus: 4, swift: 4, kotlin: 4, php: 3 },
        },
        {
          id: "c",
          text: "Functional Programming (FP)",
          description: "You believe 'state' is a sin and 'mutation' is a crime. Purity is everything.",
          score: { rust: 4, typescript: 3, swift: 3, kotlin: 3 }, // F#, Haskell, Clojure are primary FP
        },
        {
          id: "d",
          text: "Procedural / Systems",
          description: "You think in functions, data, and memory addresses. It's just simpler.",
          score: { go: 5, rust: 4, cplusplus: 3 }, // C is the classic procedural
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
          score: { javascript: 5, python: 5, go: 3, typescript: 3, java: 5, csharp: 5, ruby: 5, php: 5, kotlin: 5, swift: 3 /* ARC */ },
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
          score: { rust: 4, cplusplus: 5 }, // C is primary manual
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
          score: { javascript: 5, typescript: 5, python: 3, csharp: 4, swift: 3, kotlin: 3, rust: 2 },
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
          text: "Classic threads and locks",
          description: "You're comfortable with `Mutex` and `Semaphore`. You live dangerously.",
          score: { python: 3, go: 2, java: 4, csharp: 3, cplusplus: 4 },
        },
      ],
    },
    {
      id: "q10",
      segment: "Use Case",
      text: "What's your primary use case?",
      options: [
        {
          id: "a",
          text: "Web Development (Frontend/Backend)",
          description: "You've fought CSS and survived. Or you build the API that the CSS fighters use.",
          score: { javascript: 5, typescript: 5, python: 3, go: 3, ruby: 4, php: 5, java: 2, csharp: 3 },
        },
        {
          id: "b",
          text: "Data Science / AI / ML",
          description: "You teach models, but they never listen. 'It works on my notebook!'",
          score: { python: 5, r: 5 /* Adding R for data science */ },
        },
        {
          id: "c",
          text: "Systems Programming / Embedded / Games",
          description: "You write code like it's poetry and debug like it's war. You love the smell of bits.",
          score: { rust: 5, go: 2, cplusplus: 5 }, // C is primary embedded
        },
        {
          id: "d",
          text: "Mobile App Development",
          description: "You live in Xcode or Android Studio. Your tests run on tiny screens.",
          score: { swift: 5, kotlin: 5, javascript: 2, csharp: 2 /* Xamarin/MAUI */ },
        },
         {
          id: "e",
          text: "Enterprise Applications",
          description: "You build large, complex systems for big companies. Stability is paramount.",
          score: { java: 5, csharp: 5, go: 3, typescript: 3 },
        },
         {
          id: "f",
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
          score: { typescript: 5, go: 3, java: 5, csharp: 5 },
        },
        {
          id: "b",
          text: "A fast-moving startup",
          description: "You build it, ship it, and fix it later. Sleep is optional. Velocity is not.",
          score: { javascript: 5, python: 4, ruby: 4, go: 3 },
        },
        {
          id: "c",
          text: "A team of performance fanatics",
          description: "You argue about CPU cycles and memory layouts. Your code must be *fast*.",
          score: { rust: 5, go: 4, cplusplus: 5 },
        },
        {
          id: "d",
          text: "Working mostly by myself",
          description: "You're a solo act. You just want a tool that gets out of your way and works.",
          score: { python: 4, go: 3, javascript: 2, ruby: 3, php: 3 },
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
          score: { javascript: 5, python: 5, typescript: 4, java: 3, csharp: 3, ruby: 4, php: 4 },
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
          score: { rust: 5, cplusplus: 4 }, // C is king here
        },
        {
          id: "d",
          text: "Depends on the platform (e.g., mobile)",
          description: "App size matters on phones, less so on servers.",
          score: { swift: 3, kotlin: 3, go: 2, rust: 2 },
        },
      ],
    },
    {
      id: "q13",
      segment: "Personal Style",
      text: "How do you feel about documentation?",
      options: [
        {
          id: "a",
          text: "I read it, but I prefer tutorials",
          description: "You just want someone to show you how to get 'Hello World' running.",
          score: { javascript: 4, python: 3, ruby: 3, php: 3 },
        },
        {
          id: "b",
          text: "I read the official docs first",
          description: "You're a professional. You read the manual. (Okay, you skim it.)",
          score: { go: 5, typescript: 4, rust: 3, java: 4, csharp: 4, swift: 4, kotlin: 4 },
        },
        {
          id: "c",
          text: "I just read the source code",
          description: "Docs are lies. Only the code tells the truth. You're not afraid to look.",
          score: { go: 4, rust: 3, cplusplus: 3, ruby: 2 },
        },
        {
          id: "d",
          text: "I just ask Stack Overflow",
          description: "You copy, you paste, you pray. It's the circle of (a developer's) life.",
          score: { javascript: 5, python: 2, php: 4 },
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
          text: "`console.log / print / var_dump`",
          description: "You just print stuff until you find the problem. It's an art form.",
          score: { javascript: 5, python: 4, go: 3, typescript: 2, ruby: 4, php: 5 },
        },
        {
          id: "b",
          text: "A proper step-through debugger",
          description: "You like to pause time, inspect variables, and pretend you're a detective.",
          score: { typescript: 4, python: 3, java: 5, csharp: 5, swift: 4, kotlin: 4, cplusplus: 4, go: 2 /* delve */ },
        },
        {
          id: "c",
          text: "The compiler *is* my debugger",
          description: "If it compiles, it works. (Narrator: It did not work.)",
          score: { rust: 5, typescript: 4, swift: 3, kotlin: 3 },
        },
        {
          id: "d",
          text: "Staring at the code in silence",
          description: "You just... look at it. Until the bug reveals itself out of pure fear.",
          score: { go: 3, rust: 2, python: 1, ruby: 2 },
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
          description: "Why reinvent the wheel? `npm install / pip install / gem install` is your favorite command.",
          score: { javascript: 5, python: 4, typescript: 3, ruby: 4, php: 4 },
        },
        {
          id: "b",
          text: "Standard library is king",
          description: "If it's not built-in, you're suspicious. You'd rather write it yourself.",
          score: { go: 5, rust: 2, python: 2 },
        },
        {
          id: "c",
          text: "A few, carefully chosen ones",
          description: "You'll add a dependency, but you'll read its source code and judge it first.",
          score: { rust: 4, typescript: 3, go: 2, java: 3, csharp: 3, swift: 3, kotlin: 3 },
        },
        {
          id: "d",
          text: "Corporate-backed frameworks",
          description: "You trust frameworks from big companies (Spring, .NET, Angular). They feel safer.",
          score: { java: 4, csharp: 4, typescript: 3 },
        },
      ],
    },
     {
      id: "q16",
      segment: "Long-term Goals",
      text: "What's your ideal career trajectory?",
      options: [
        {
          id: "a",
          text: "Full-stack versatility",
          description: "You want to do everything. Frontend, backend, database... you're a one-person army.",
          score: { javascript: 5, typescript: 5, python: 3, ruby: 4, php: 3 },
        },
        {
          id: "b",
          text: "Deep domain expert (e.g., AI, Finance)",
          description: "You want to be *the* person everyone goes to for one specific, complex thing.",
          score: { python: 5, rust: 3, java: 3, csharp: 3, cplusplus: 3, r: 5 },
        },
        {
          id: "c",
          text: "Infrastructure / Systems Architect",
          description: "You want to build the rock-solid platform that everyone else builds on top of.",
          score: { go: 5, rust: 4, java: 4, csharp: 3 },
        },
        {
          id: "d",
          text: "Mobile App Guru",
          description: "You want to build the next killer app that lives in everyone's pocket.",
          score: { swift: 5, kotlin: 5 },
        },
        {
           id: "e",
          text: "I just want to build cool stuff",
          description: "Career? Trajectory? You just want to code. Please don't make me go to meetings.",
          score: { python: 3, go: 3, javascript: 2, ruby: 3, php: 2 },
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
          score: { javascript: 5, typescript: 4, rust: 3, ruby: 3 },
        },
        {
          id: "b",
          text: "Modern, but stable and proven",
          description: "You like new tools, but you want someone *else* to find all the bugs first.",
          score: { typescript: 5, go: 4, python: 3, swift: 4, kotlin: 4 },
        },
        {
          id: "c",
          text: "Boring is beautiful",
          description: "You prefer tech that's been stable for 10+ years. It just works.",
          score: { go: 4, python: 3, java: 5, csharp: 4, php: 3, cplusplus: 3 },
        },
        {
          id: "d",
          text: "I follow the company standard",
          description: "You use what the team uses. Consistency is more important than novelty.",
          score: { java: 4, csharp: 4 },
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
          score: { javascript: 5, python: 5, typescript: 4, ruby: 4, php: 4 },
        },
        {
          id: "b",
          text: "Write 'correct' and safe code",
          description: "You believe code can be proven. You want to write perfect, uncrashable software.",
          score: { rust: 5, typescript: 3, swift: 3, kotlin: 3 },
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
          score: { go: 5, rust: 4, java: 4, csharp: 3, cplusplus: 3 },
        },
        {
          id: "e",
          text: "Build beautiful, native apps",
          description: "Your focus is on creating seamless experiences on specific platforms.",
          score: { swift: 5, kotlin: 5, csharp: 2 /* MAUI */, cplusplus: 2 /* Game Dev/Perf Apps */},
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
        "You're a pragmatist. You want to write clean code, build things fast, and have a library for everything. Perfect for scripts, data science, web backends, and automation.",
    },
    {
      id: "javascript",
      name: "JavaScript",
      description: "Flexible and ubiquitous",
      icon: "⚡",
      compatibility: 0,
      reason:
        "You're a full-stack force of nature. You move fast, love building user interfaces, and aren't afraid of `node_modules`. The web (frontend and backend) is your playground.",
    },
    {
      id: "rust",
      name: "Rust",
      description: "Safe, fast, and empowering",
      icon: "🦀",
      compatibility: 0,
      reason:
        "You're a perfectionist. You demand performance, safety, and control. You're willing to argue with the compiler because you know it'll make your code uncrashable. Great for systems, web assembly, and performance-critical tasks.",
    },
    {
      id: "go",
      name: "Go",
      description: "Simple, concurrent, and efficient",
      icon: "🐹",
      compatibility: 0,
      reason:
        "You're a builder of systems. You value simplicity, reliability, and code that's easy to read. You're building the infrastructure of the internet: APIs, CLIs, and cloud services.",
    },
    {
      id: "typescript",
      name: "TypeScript",
      description: "JavaScript with superpowers",
      icon: "📘",
      compatibility: 0,
      reason:
        "You're a structured thinker. You like JavaScript's power but crave the sanity of a type system. You build big, maintainable web applications (front and back) without losing your mind.",
    },
    {
      id: "java",
      name: "Java",
      description: "Robust, enterprise-ready, and portable",
      icon: "☕",
      compatibility: 0,
      reason:
        "You build large-scale, robust applications. You value stability, a massive ecosystem, and write-once-run-anywhere capability. Common in large enterprises and Android development.",
    },
    {
      id: "csharp",
      name: "C#",
      description: "Versatile, modern, and Microsoft-backed",
      icon: "♯",
      compatibility: 0,
      reason:
        "You appreciate a well-integrated ecosystem. You build anything from web APIs and desktop apps to games using .NET. Strong typing and great tooling are important to you.",
    },
    {
      id: "php",
      name: "PHP",
      description: "Web-focused, pragmatic, and widely used",
      icon: "🐘",
      compatibility: 0,
      reason:
        "You focus on getting web backends built quickly and effectively. You value a vast amount of existing code, simple deployment, and a language designed primarily for the web.",
    },
    {
      id: "swift",
      name: "Swift",
      description: "Modern, safe, and Apple's choice",
      icon: "", // Using Apple logo approximation
      compatibility: 0,
      reason:
        "You build primarily for Apple platforms (iOS, macOS). You value safety, performance, and modern language features within a tightly integrated ecosystem.",
    },
    {
      id: "kotlin",
      name: "Kotlin",
      description: "Modern, concise, and Android's favorite",
      icon: "🤖", // Using Android robot approximation
      compatibility: 0,
      reason:
        "You build modern Android apps or enjoy JVM interoperability with more concise syntax than Java. You value null safety, functional features, and developer productivity.",
    },
    {
      id: "cplusplus",
      name: "C++",
      description: "Powerful, performant, and close to the metal",
      icon: "⚙️",
      compatibility: 0,
      reason:
        "You need raw power and control. You build high-performance applications like game engines, operating systems, or complex simulations where every nanosecond counts.",
    },
    {
      id: "ruby",
      name: "Ruby",
      description: "Elegant, developer-friendly, and expressive",
      icon: "💎",
      compatibility: 0,
      reason:
        "You believe in developer happiness and elegant code. You enjoy writing expressive, readable code, often for web applications (Rails) or scripting tasks.",
    },
    // Add R if you have data science questions pointing to it
    // {
    //   id: "r",
    //   name: "R",
    //   description: "Statistical computing and graphics",
    //   icon: "📊",
    //   compatibility: 0,
    //   reason: "You are primarily focused on statistical analysis, data visualization, and academic research. Data manipulation and plotting are your main activities."
    // }
  ],
}

export const linuxDistroTest: TestDomain = {
  id: "linux-distro",
  name: "Linux Distro Match",
  description: "Find the perfect Linux distribution for your workflow",
  questions: [
    // ... (pertanyaan tetap sama) ...
        {
      id: "q1",
      segment: "Experience Level",
      text: "What's your Linux experience level?",
      options: [
        {
          id: "a",
          text: "Beginner",
          description: "I think 'sudo' is a magic word. Please don't make me use the terminal.",
          score: { ubuntu: 5, fedora: 2, mint: 5, elementary: 4 },
        },
        {
          id: "b",
          text: "Intermediate",
          description: "I've broken it and fixed it. I'm not proud, but I'm not scared either.",
          score: { fedora: 4, ubuntu: 3, debian: 2, nixos: 1, manjaro: 4, opensuse: 3 },
        },
        {
          id: "c",
          text: "Advanced",
          description: "I'm comfortable in the terminal. I might even compile my own kernel... for fun.",
          score: { debian: 4, arch: 4, fedora: 2, manjaro: 3, opensuse: 4, centos: 3 },
        },
        {
          id: "d",
          text: "Expert / DIY",
          description: "I don't want an 'installer.' I want a tarball and a dream.",
          score: { arch: 5, nixos: 4, gentoo: 5 /* Adding Gentoo */ },
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
          score: { ubuntu: 5, fedora: 4, mint: 4, elementary: 5 },
        },
        {
          id: "b",
          text: "A solid package manager (apt, dnf, zypper, pacman)",
          description: "I'm happy to type `apt install`. As long as it just... works.",
          score: { ubuntu: 5, debian: 5, fedora: 4, mint: 5, manjaro: 4, opensuse: 5, centos: 4 },
        },
        {
          id: "c",
          text: "From a giant, community-run repo (AUR)",
          description: "I want *everything*. Even if it's weird, unsupported, and probably breaks.",
          score: { arch: 5, manjaro: 5 },
        },
        {
          id: "d",
          text: "By editing a config file",
          description: "I want to *declare* my software into existence. It's cleaner that way.",
          score: { nixos: 5 },
        },
         {
          id: "e",
          text: "Compile it from source",
          description: "If I didn't compile it, how do I know what's really in there?",
          score: { gentoo: 5, arch: 2 },
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
          score: { ubuntu: 5, debian: 3, mint: 5, elementary: 4 },
        },
        {
          id: "b",
          text: "I'll Google it",
          description: "I'm fine as long as someone else has had this problem and posted the answer.",
          score: { ubuntu: 5, fedora: 4, debian: 3, mint: 4, manjaro: 3, opensuse: 3 },
        },
        {
          id: "c",
          text: "The Wiki is my bible",
          description: "I enjoy reading detailed documentation to solve my own problems.",
          score: { arch: 5, nixos: 4, debian: 2, gentoo: 5, opensuse: 4 },
        },
        {
          id: "d",
          text: "I am the troubleshooter",
          description: "I read source code. I file bug reports. I *am* the support.",
          score: { arch: 5, nixos: 5, debian: 3, gentoo: 5 },
        },
      ],
    },
    {
      id: "q4",
      segment: "Usage Purpose",
      text: "What's your primary use for this system?",
      options: [
        {
          id: "a",
          text: "Daily Driver (Web, Email, Office)",
          description: "I just want it to work like my old OS, but, you know... better.",
          score: { ubuntu: 5, fedora: 3, mint: 5, elementary: 5 },
        },
        {
          id: "b",
          text: "Development Workstation",
          description: "I need all the latest tools, libraries, and container stuff. Now.",
          score: { fedora: 5, ubuntu: 4, arch: 3, nixos: 3, manjaro: 4, opensuse: 4 },
        },
        {
          id: "c",
          text: "Rock-solid Server",
          description: "This machine cannot go down. Uptime is measured in years, not months.",
          score: { debian: 5, ubuntu: 3, centos: 5, opensuse: 3 },
        },
        {
          id: "d",
          text: "A Learning/Tinkering Project",
          description: "My goal is to take it apart and see how it works. Breaking it is half the fun.",
          score: { arch: 5, nixos: 5, gentoo: 5 },
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
          score: { debian: 5, ubuntu: 2, mint: 4, centos: 5 },
        },
        {
          id: "b",
          text: "Stable, but reasonably recent",
          description: "I'll take the Long Term Support (LTS) version. It's fine. I can wait.",
          score: { ubuntu: 5, debian: 4, mint: 5, opensuse: 3 /* Leap */ },
        },
        {
          id: "c",
          text: "Modern and up-to-date",
          description: "I want new features within a few months. I trust the release cycle.",
          score: { fedora: 5, ubuntu: 3, opensuse: 4 /* Tumbleweed */, elementary: 3 },
        },
        {
          id: "d",
          text: "Give me the latest version, *now*",
          description: "If it was committed yesterday, I want it on my machine today. I fear nothing.",
          score: { arch: 5, fedora: 3, manjaro: 5, opensuse: 5 /* Tumbleweed */, gentoo: 4 },
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
          score: { arch: 5, manjaro: 5, opensuse: 5 /* Tumbleweed */, gentoo: 5 },
        },
        {
          id: "b",
          text: "Point Release (every 6 months to 2 years)",
          description: "I like a big, exciting upgrade day once or twice a year. It's like a holiday.",
          score: { fedora: 5, ubuntu: 4, elementary: 4 },
        },
        {
          id: "c",
          text: "Long-Term Support (every 2+ years)",
          description: "Don't talk to me about updates. I set it up, and I'm not touching it for years.",
          score: { debian: 5, ubuntu: 4, mint: 5, centos: 5, opensuse: 4 /* Leap */ },
        },
        {
          id: "d",
          text: "Atomic & Reproducible",
          description: "I want to update my *entire* system with one command, and roll it back if I hate it.",
          score: { nixos: 5, fedora: 2 /* Silverblue/Kinoite */, opensuse: 2 /* MicroOS */ },
        },
      ],
    },
     {
      id: "q7",
      segment: "System Preferences",
      text: "What's your philosophy on customization?",
      options: [
        {
          id: "a",
          text: "It should 'just work' out of the box",
          description: "I want a sensible desktop, good defaults, and all my drivers working.",
          score: { ubuntu: 5, fedora: 3, mint: 5, elementary: 5 },
        },
        {
          id: "b",
          text: "I like to tweak settings",
          description: "I'll change my theme, my icons, and my shell. But I don't want to build it all.",
          score: { fedora: 4, ubuntu: 3, manjaro: 4, opensuse: 4, mint: 3 },
        },
        {
          id: "c",
          text: "I want to build it from scratch",
          description: "Don't give me a 'desktop.' Give me a command prompt and a package list.",
          score: { arch: 5, debian: 2, gentoo: 5 },
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
          text: "I like it (e.g., Canonical, Red Hat, SUSE)",
          description: "It means drivers work and there's a budget for support. Feels safe.",
          score: { ubuntu: 5, fedora: 5, centos: 4, opensuse: 5 },
        },
        {
          id: "b",
          text: "I only trust 'The Community'",
          description: "I want my OS built by volunteers in their spare time. It's more pure.",
          score: { debian: 5, arch: 4, gentoo: 4, mint: 3 /* Based on Ubuntu/Debian */ },
        },
        {
          id: "c",
          text: "I trust a foundation/project",
          description: "I like the 'NixOS' or 'Elementary' model. Not a giant corp, but organized.",
          score: { nixos: 4, arch: 3, debian: 3, elementary: 4, manjaro: 3 },
        },
        {
          id: "d",
          text: "I don't care who makes it",
          description: "I just care about the technology. Politics and money are boring.",
          score: { arch: 3, fedora: 2, nixos: 2, gentoo: 3 },
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
          score: { ubuntu: 5, mint: 5 },
        },
        {
          id: "b",
          text: "A clean, modern desktop",
          description: "Just the OS, a browser, and a terminal. I'll get the rest.",
          score: { fedora: 5, ubuntu: 3, elementary: 5, opensuse: 4, manjaro: 4 },
        },
        {
          id: "c",
          text: "A minimal server install",
          description: "No GUI. Not now, not ever. If I can't do it over SSH, it's not worth doing.",
          score: { debian: 5, ubuntu: 2, centos: 5 },
        },
        {
          id: "d",
          text: "Just the kernel and a shell",
          description: "I will install `ls` myself if I have to. Every package is a choice.",
          score: { arch: 5, nixos: 4, gentoo: 5 },
        },
      ],
    },
    {
      id: "q10",
      segment: "Desktop Environment",
      text: "What's your ideal desktop environment?",
      options: [
        {
          id: "a",
          text: "GNOME (Modern, workflow-focused)",
          description: "I like a clean, simple look. And I *love* the super key.",
          score: { fedora: 5, ubuntu: 4, debian: 2, opensuse: 3 },
        },
        {
          id: "b",
          text: "KDE Plasma (Customizable, powerful)",
          description: "I want to change everything. Every panel, every widget. My desktop is my castle.",
          score: { fedora: 4, debian: 3, arch: 3, manjaro: 4, opensuse: 5 },
        },
        {
          id: "c",
          text: "Something traditional (Cinnamon, MATE, XFCE)",
          description: "I just want it to be fast, familiar (like old Windows/Mac), and stay out of my way.",
          score: { debian: 4, ubuntu: 3, arch: 2, mint: 5, manjaro: 3 },
        },
        {
          id: "d",
          text: "Something beautiful and opinionated (Pantheon)",
          description: "I want a polished, Mac-like experience out of the box.",
          score: { elementary: 5 },
        },
         {
          id: "e",
          text: "A Tiling Window Manager (i3, Sway)",
          description: "Windows? I don't 'move' windows. They go where I tell them. With my keyboard.",
          score: { arch: 5, nixos: 4, debian: 2, gentoo: 4, manjaro: 3 },
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
          score: { ubuntu: 5, fedora: 3, mint: 4, manjaro: 4 },
        },
        {
          id: "b",
          text: "I'll use it, but I prefer open source",
          description: "I'll install it from a separate 'non-free' repo if I have to. But I'll feel dirty.",
          score: { fedora: 4, debian: 3, arch: 3, opensuse: 4 },
        },
        {
          id: "c",
          text: "I am a free software purist",
          description: "If it's not FOSS, it's not on my machine. Richard Stallman is my hero.",
          score: { debian: 5, fedora: 2, gentoo: 3 },
        },
        {
          id: "d",
          text: "Easy access to non-free is essential",
          description: "It should be trivial to install codecs, drivers, and common proprietary apps.",
          score: { ubuntu: 4, mint: 5, manjaro: 4 },
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
          score: { ubuntu: 3, mint: 3, elementary: 3 },
        },
        {
          id: "b",
          text: "Find the forum post that fixes it",
          description: "Someone at 'askubuntu.com' or the distro forum 10 years ago had this exact problem. Easy.",
          score: { ubuntu: 5, fedora: 4, mint: 4, manjaro: 4 },
        },
        {
          id: "c",
          text: "Read the error, check the wiki/docs",
          description: "The answer is in the documentation. It's always in the documentation.",
          score: { arch: 5, debian: 3, gentoo: 5, opensuse: 4 },
        },
        {
          id: "d",
          text: "Roll back the entire system",
          description: "Oh no. Anyway, I'll just restore last week's 'generation' or snapshot.",
          score: { nixos: 5, opensuse: 3 /* Snapper */, fedora: 2 /* Silverblue */ },
        },
      ],
    },
    {
      id: "q13",
      segment: "Philosophy",
      text: "What's a 'package' to you?",
      options: [
        {
          id: "a",
          text: "A .deb or .rpm file",
          description: "It's a file I download and install. Simple as that. A classic.",
          score: { ubuntu: 5, debian: 5, fedora: 5, mint: 5, elementary: 5, centos: 5, opensuse: 5 },
        },
        {
          id: "b",
          text: "A recipe (PKGBUILD)",
          description: "It's a script that tells my computer how to build the software from source.",
          score: { arch: 5, manjaro: 5 },
        },
        {
          id: "c",
          text: "A function (Nix expression)",
          description: "It's a pure function that describes all dependencies. It's art.",
          score: { nixos: 5 },
        },
        {
          id: "d",
          text: "A complex set of build instructions (Ebuild)",
          description: "It's a highly configurable script for compiling from source with specific flags.",
          score: { gentoo: 5 },
        },
        {
          id: "e",
          text: "A container (Snap, Flatpak)",
          description: "It's a little box that has all its dependencies. It's slow, but it's safe.",
          score: { ubuntu: 4, fedora: 4, mint: 3, elementary: 3 },
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
          score: { ubuntu: 5, debian: 3, mint: 4 },
        },
        {
          id: "b",
          text: "I try to keep it clean",
          description: "I stick to the package manager. I don't like random scripts.",
          score: { fedora: 4, debian: 3, opensuse: 4, centos: 4 },
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
          score: { arch: 4, gentoo: 4 },
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
          score: { debian: 5, ubuntu: 2, mint: 4, centos: 5 },
        },
        {
          id: "b",
          text: "A comfortable, friendly desktop",
          description: "It should be easy to use, look nice, and help me get my work done.",
          score: { ubuntu: 5, fedora: 3, mint: 5, elementary: 5 },
        },
        {
          id: "c",
          text: "A showcase of the latest tech",
          description: "I want to be on the cutting edge. I want to see what's next.",
          score: { fedora: 5, arch: 3, manjaro: 4, opensuse: 4 /* Tumbleweed */ },
        },
        {
          id: "d",
          text: "A minimalist, sharp tool",
          description: "It should do *nothing* by default. I will add exactly what I need, and no more.",
          score: { arch: 5, nixos: 3, gentoo: 4 },
        },
         {
          id: "e",
          text: "Highly configurable and optimized",
          description: "I want to control every aspect of the build process for maximum performance.",
          score: { gentoo: 5, arch: 2 },
        },
      ],
    },
    {
      id: "q16",
      segment: "Maintenance",
      text: "How much time do you want to spend maintaining your OS?",
      options: [
        {
          id: "a",
          text: "Zero. It should auto-update.",
          description: "It should just take care of itself. I have work to do.",
          score: { ubuntu: 5, fedora: 3, mint: 4, elementary: 4 },
        },
        {
          id: "b",
          text: "A few minutes a week/month",
          description: "I'll run upgrades and check for big changes. That's it.",
          score: { debian: 4, fedora: 4, ubuntu: 3, mint: 4, manjaro: 3, opensuse: 4, centos: 3 },
        },
        {
          id: "c",
          text: "It's a hobby, not a chore",
          description: "I spend my Saturdays reading forums and tweaking config files. It's relaxing.",
          score: { arch: 5, nixos: 4, gentoo: 5 },
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
          score: { ubuntu: 5, debian: 4, mint: 5, elementary: 4 },
        },
        {
          id: "b",
          text: "I want a modern default (Btrfs, ZFS)",
          description: "I want snapshots and copy-on-write. It feels safer. I read it on Hacker News.",
          score: { fedora: 5, nixos: 4, ubuntu: 2, opensuse: 5, manjaro: 3 },
        },
        {
          id: "c",
          text: "I'll choose it myself",
          description: "I have very strong, very specific opinions on `ext4` vs `xfs` vs `btrfs`.",
          score: { arch: 4, debian: 3, gentoo: 4 },
        },
        {
          id: "d",
          text: "I just need it to be stable (ext4, xfs)",
          description: "Give me the most boring, most tested file system on Earth. `ext4` or `xfs` is fine.",
          score: { debian: 5, ubuntu: 3, centos: 5 },
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
          text: "Stability & Reliability",
          description: "It cannot, under any circumstances, break. My job depends on it.",
          score: { debian: 5, ubuntu: 3, mint: 4, centos: 5, opensuse: 4 /* Leap */ },
        },
        {
          id: "b",
          text: "Ease of Use & Simplicity",
          description: "I'm not a computer scientist. I just want to browse the web and write docs.",
          score: { ubuntu: 5, mint: 5, elementary: 5 },
        },
        {
          id: "c",
          text: "Bleeding-Edge Tech & Customization",
          description: "I want the newest kernel, newest DE, newest drivers. I want the future, and I want control.",
          score: { fedora: 5, arch: 4, manjaro: 4, opensuse: 4 /* Tumbleweed */, gentoo: 3 },
        },
        {
          id: "d",
          text: "Control, Purity & Reproducibility",
          description: "I want a system that is perfectly, declaratively, 100% *mine*, or built exactly how I want.",
          score: { nixos: 5, arch: 3, gentoo: 5 },
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
        "You want an OS that just works. You value ease of use, great community support, drivers that install themselves, and a large software selection. The 'default' Linux.",
    },
    {
      id: "fedora",
      name: "Fedora",
      description: "Cutting-edge and innovative",
      icon: "🎩",
      compatibility: 0,
      reason:
        "You're a developer who loves modern tech but wants polish. You want the latest packages (but not *too* bleeding edge) in a stable system with strong corporate backing (Red Hat).",
    },
    {
      id: "debian",
      name: "Debian",
      description: "Stable, reliable, and community-driven",
      icon: "🌀",
      compatibility: 0,
      reason:
        "You are patient and value stability above all else. 'New' is scary. You want a rock-solid, free-software-focused system, often for servers or if you prefer reliability over features.",
    },
    {
      id: "arch",
      name: "Arch Linux",
      description: "Minimalist, powerful, and DIY",
      icon: "🏔️",
      compatibility: 0,
      reason:
        "You're a builder who wants control. You want to understand your system from the ground up. The Wiki is your bible, bloat is a sin. It's your system, your rules, always up-to-date.",
    },
    {
      id: "nixos",
      name: "NixOS",
      description: "Declarative, reproducible, and unique",
      icon: "❄️",
      compatibility: 0,
      reason:
        "You're a true engineer. You don't 'install' software, you *declare* it. You love a perfectly reproducible system, atomic upgrades, and rolling back failures instantly.",
    },
    {
      id: "mint",
      name: "Linux Mint",
      description: "Elegant, familiar, and easy-to-use",
      icon: "🌿",
      compatibility: 0,
      reason:
        "You want a polished, traditional desktop experience that 'just works,' especially if coming from Windows. You value ease of use, multimedia support out-of-the-box, and stability (based on Ubuntu LTS).",
    },
    {
      id: "manjaro",
      name: "Manjaro",
      description: "User-friendly Arch-based rolling release",
      icon: "🍃",
      compatibility: 0,
      reason:
        "You like the idea of Arch (rolling release, AUR) but want an easier setup and slightly more curated updates. You get cutting-edge software with a friendlier face.",
    },
    {
      id: "centos", // Or successors like AlmaLinux / Rocky Linux
      name: "CentOS Stream / Alma / Rocky",
      description: "Enterprise-grade, stable server OS",
      icon: "🚀", // Using rocket as generic server icon
      compatibility: 0,
      reason:
        "You need an extremely stable, long-term supported OS primarily for servers, compatible with Red Hat Enterprise Linux. Predictability and security are key.",
    },
    {
      id: "opensuse",
      name: "openSUSE (Leap/Tumbleweed)",
      description: "Stable (Leap) or Rolling (Tumbleweed), with powerful tools",
      icon: "🦎",
      compatibility: 0,
      reason:
        "You appreciate robust engineering and powerful tools like YaST and Snapper. Choose Leap for stability like Debian/Ubuntu LTS, or Tumbleweed for a tested rolling release like Arch/Manjaro.",
    },
    {
      id: "elementary",
      name: "elementary OS",
      description: "Beautiful, polished, and Mac-like",
      icon: "🎨",
      compatibility: 0,
      reason:
        "You value design and a cohesive user experience above all else. You want a Linux desktop that feels intentional, polished, and similar to macOS, based on Ubuntu LTS.",
    },
    {
        id: "gentoo",
        name: "Gentoo",
        description: "Source-based, highly configurable, and optimized",
        icon: "🔧",
        compatibility: 0,
        reason:
        "You are an expert who wants ultimate control and optimization. You compile everything from source, fine-tuning your system for performance and learning exactly how it works."
    }
  ],
}

export const teamRoleTest: TestDomain = {
  id: "team-role",
  name: "Team Role Match",
  description: "Identify the team role that best suits your skills",
  questions: [
    // ... (pertanyaan tetap sama) ...
     {
      id: "q1",
      segment: "Team Work Motivation",
      text: "What part of a project energizes you most?",
      options: [
        {
          id: "a",
          text: "Making it look and feel amazing",
          description: "That pixel-perfect moment when the UI just *works*. That's the stuff.",
          score: { frontend: 5, fullstack: 3, uiux: 4 },
        },
        {
          id: "b",
          text: "Designing the database schema / API",
          description: "You love a clean, normalized database or a well-structured API. Order from chaos.",
          score: { backend: 5, fullstack: 3, devops: 1, data: 2 },
        },
        {
          id: "c",
          text: "Making it run reliably on 1000 servers",
          description: "Building it is easy. Making it scale without catching fire? That's the real puzzle.",
          score: { devops: 5, backend: 3, sre: 5 },
        },
        {
          id: "d",
          text: "Finding all the ways it could break",
          description: "You think about edge cases and failure modes before anyone else does.",
          score: { qa: 5, security: 4, sre: 2 },
        },
         {
          id: "e",
          text: "Understanding the user and business needs",
          description: "You want to know *why* you're building it and *who* you're building it for.",
          score: { pm: 5, uiux: 4, "tech-lead": 3 },
        },
         {
          id: "f",
          text: "Extracting insights from data",
          description: "You love finding patterns and telling stories with numbers and charts.",
          score: { data: 5, backend: 1 },
        },
        {
          id: "g",
          text: "Helping everyone else work together effectively",
          description: "You just want the teams to communicate and deliver smoothly.",
          score: { "tech-lead": 5, pm: 4, fullstack: 2 },
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
          text: "I build what the user interacts with",
          description: "You are the last line of defense between the user and a confusing mess.",
          score: { frontend: 5, uiux: 3 },
        },
        {
          id: "b",
          text: "I build the engine under the hood",
          description: "You're the wizard behind the curtain. If you do your job right, nobody knows you exist.",
          score: { backend: 5, devops: 3, data: 2 },
        },
        {
          id: "c",
          text: "I bridge the gap between user and engine",
          description: "You speak both 'CSS' and 'SQL' fluently. You're a translator, mostly for yourself.",
          score: { fullstack: 5, "tech-lead": 3 },
        },
        {
          id: "d",
          text: "I build the factory and roads",
          description: "You build the pipelines, monitoring, and infrastructure that everything runs on.",
          score: { devops: 5, sre: 5, "tech-lead": 2 },
        },
         {
          id: "e",
          text: "I ensure the quality and correctness",
          description: "You are the guardian against bugs and regressions. Nothing ships unless you say so.",
          score: { qa: 5, security: 2 },
        },
        {
          id: "f",
          text: "I define what we build and why",
          description: "You represent the user and the business, setting the vision and priorities.",
          score: { pm: 5, uiux: 3 },
        },
         {
          id: "g",
          text: "I design the user's journey",
          description: "You map out how users will interact with the product to make it intuitive.",
          score: { uiux: 5, frontend: 3, pm: 2 },
        },
         {
          id: "h",
          text: "I find meaning in the data",
          description: "You turn raw numbers into actionable business intelligence.",
          score: { data: 5 },
        },
        {
          id: "i",
          text: "I protect the system from threats",
          description: "You think like an attacker to find vulnerabilities before they do.",
          score: { security: 5, devops: 2 },
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
          text: "Alone, focused on my specific area",
          description: "Just give me the spec/design/task. See you when it's done.",
          score: { frontend: 4, backend: 4, qa: 3, security: 3, data: 4 },
        },
        {
          id: "b",
          text: "In a pair, bouncing ideas",
          description: "You and one other person, fighting a problem. (And occasionally, each other.)",
          score: { frontend: 3, backend: 3, fullstack: 3, uiux: 3 },
        },
        {
          id: "c",
          text: "With the whole team, whiteboarding/planning",
          description: "You love the 'big picture.' You want to draw boxes and arrows and define the strategy.",
          score: { "tech-lead": 5, backend: 2, pm: 4, uiux: 3 },
        },
        {
          id: "d",
          text: "Coordinating between teams/stakeholders",
          description: "You spend your day in meetings so other people don't have to. You translate.",
          score: { "tech-lead": 5, devops: 2, pm: 5, sre: 3 },
        },
         {
          id: "e",
          text: "Investigating and testing systematically",
          description: "You have a process. You follow the plan. You document everything.",
          score: { qa: 5, security: 4, data: 3 },
        },
      ],
    },
    {
      id: "q4",
      segment: "Communication Style",
      text: "What's your communication style?",
      options: [
        {
          id: "a",
          text: "Visually (Prototypes, Demos, Mockups)",
          description: "'Let me just show you what I mean.' You'd rather build/design it than explain it.",
          score: { frontend: 5, fullstack: 3, uiux: 5, pm: 2 },
        },
        {
          id: "b",
          text: "Technically (API Docs, Diagrams, Logs)",
          description: "You believe good documentation/data is worth a thousand meetings.",
          score: { backend: 5, devops: 3, "tech-lead": 2, sre: 4, data: 3 },
        },
        {
          id: "c",
          text: "Strategically (Roadmaps, Goals, User Stories)",
          description: "You focus on the 'why' and the long-term vision.",
          score: { "tech-lead": 5, pm: 5 },
        },
        {
          id: "d",
          text: "Through formal reports (Bug reports, Test plans, Security audits)",
          description: "Clarity, precision, and reproducibility are key. Write it down.",
          score: { qa: 5, security: 5, data: 3 },
        },
         {
          id: "e",
          text: "Through code reviews and PRs",
          description: "'LGTM' is your love language. 'Please fix nit' is your way of caring.",
          score: { backend: 4, frontend: 3, fullstack: 3, devops: 2, "tech-lead": 2 },
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
          text: "I build/design what I *think* it means",
          description: "It's better to show something concrete than to wait. Iterate.",
          score: { frontend: 4, fullstack: 3, uiux: 3 },
        },
        {
          id: "b",
          text: "I stop and ask for clarification",
          description: "You need precise requirements before starting. No guesswork.",
          score: { backend: 4, "tech-lead": 3, qa: 4, security: 3 },
        },
        {
          id: "c",
          text: "I write the 'safe' / resilient version",
          description: "Build defensively, handle errors, ensure stability, even if the feature needs tweaking.",
          score: { backend: 5, devops: 4, sre: 5 },
        },
        {
          id: "d",
          text: "I help *define* the task and requirements",
          description: "You work with stakeholders to clarify the goals and acceptance criteria.",
          score: { "tech-lead": 5, fullstack: 2, pm: 5, qa: 3, uiux: 3 },
        },
         {
          id: "e",
          text: "I explore the data to find the real question",
          description: "The request might be vague, but the data holds the truth.",
          score: { data: 5 },
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
          text: "They are often inefficient",
          description: "You prefer focused work and clear documentation.",
          score: { frontend: 3, backend: 4, fullstack: 3, devops: 3, sre: 3, qa: 2, security: 2, data: 3 },
        },
        {
          id: "b",
          text: "I run/facilitate the meetings",
          description: "You set agendas, keep people on track, and ensure outcomes.",
          score: { "tech-lead": 5, pm: 5 },
        },
        {
          id: "c",
          text: "I prefer async (Slack, Email, Docs)",
          description: "Write it down. Let me process it on my own time.",
          score: { backend: 4, devops: 4, sre: 4, qa: 3, security: 3, data: 4 },
        },
        {
          id: "d",
          text: "Essential for alignment and planning",
          description: "Good meetings (planning, retros, design reviews) are crucial for team success.",
          score: { "tech-lead": 4, fullstack: 3, pm: 4, uiux: 3, qa: 2 },
        },
      ],
    },
    {
      id: "q7",
      segment: "Main Strengths",
      text: "What's your ideal project scope?",
      options: [
        {
          id: "a",
          text: "A single, perfect UI component/flow",
          description: "You want to build the best user experience for a specific interaction.",
          score: { frontend: 5, uiux: 4 },
        },
        {
          id: "b",
          text: "A well-defined microservice/API",
          description: "One service. One job. A simple, clean, isolated world.",
          score: { backend: 5, devops: 2 },
        },
        {
          id: "c",
          text: "The entire CI/CD pipeline and infrastructure",
          description: "You love the automation, monitoring, and scaling challenges.",
          score: { devops: 5, sre: 5 },
        },
        {
          id: "d",
          text: "The whole system architecture / product strategy",
          description: "You connect the dots, design the system, or define the product vision.",
          score: { "tech-lead": 5, backend: 3, fullstack: 2, pm: 5 },
        },
         {
          id: "e",
          text: "Ensuring a feature meets requirements",
          description: "You focus on verifying functionality, performance, and security.",
          score: { qa: 5, security: 3 },
        },
         {
          id: "f",
          text: "Answering a specific business question with data",
          description: "You dive deep into datasets to find insights and build models.",
          score: { data: 5 },
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
          text: "Pixel-perfect implementation / CSS wizardry",
          description: "You make designs come alive accurately and beautifully.",
          score: { frontend: 5 },
        },
        {
          id: "b",
          text: "Efficient algorithms / database optimization",
          description: "You make slow things fast and complex logic simple.",
          score: { backend: 5, fullstack: 3, data: 2 },
        },
        {
          id: "c",
          text: "Automating *everything* / Infrastructure as Code",
          description: "If you have to do it twice, you automate it. YAML is your friend.",
          score: { devops: 5, sre: 4 },
        },
        {
          id: "d",
          text: "Mentoring / Unblocking others / Big picture thinking",
          description: "You help the team level up and see the forest for the trees.",
          score: { "tech-lead": 5, fullstack: 2, pm: 3 },
        },
         {
          id: "e",
          text: "Finding obscure bugs / Thinking of edge cases",
          description: "You have a knack for breaking things in ways no one else thought of.",
          score: { qa: 5, security: 4 },
        },
         {
          id: "f",
          text: "User empathy / Understanding user needs",
          description: "You can put yourself in the user's shoes and design solutions for them.",
          score: { uiux: 5, pm: 4, frontend: 2 },
        },
        {
          id: "g",
          text: "Statistical analysis / Machine learning",
          description: "You find signal in the noise and predict the future (sometimes).",
          score: { data: 5 },
        },
        {
           id: "h",
          text: "Finding security vulnerabilities",
          description: "You think like a hacker to secure the system.",
          score: { security: 5, qa: 2 },
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
          text: "User-centered / Design-focused",
          description: "You prioritize usability, accessibility, and aesthetics.",
          score: { frontend: 5, fullstack: 3, uiux: 5, pm: 3 },
        },
        {
          id: "b",
          text: "Data-driven / Logic-based",
          description: "You trust the logs, metrics, performance benchmarks, or analytical results.",
          score: { backend: 5, devops: 4, sre: 4, data: 5 },
        },
        {
          id: "c",
          text: "Team consensus / Collaborative",
          description: "You facilitate discussions to reach shared understanding and agreement.",
          score: { "tech-lead": 5, pm: 4 },
        },
        {
          id: "d",
          text: "Risk-based / Systematic",
          description: "You evaluate potential failures, threats, or quality issues methodically.",
          score: { qa: 4, security: 5, sre: 4 },
        },
         {
          id: "e",
          text: "Pragmatic / End-to-end focused",
          description: "You consider the whole picture and find practical solutions.",
          score: { fullstack: 5, "tech-lead": 3, pm: 3 },
        },
      ],
    },
     {
      id: "q10",
      segment: "Pressure Reaction",
      text: "Production is on fire. What do you do first?",
      options: [
        {
          id: "a",
          text: "Check browser console / user reports",
          description: "Is it a visual bug? Is it affecting only certain users?",
          score: { frontend: 5, uiux: 2 },
        },
        {
          id: "b",
          text: "Check server logs / database load",
          description: "The answer is in the stack trace or the query plan.",
          score: { backend: 5, fullstack: 3, data: 1 },
        },
        {
          id: "c",
          text: "Check monitoring dashboards / Rollback!",
          description: "What changed? Can we go back? Stop the bleeding!",
          score: { devops: 5, sre: 5, "tech-lead": 2 },
        },
        {
          id: "d",
          text: "Try to reproduce the issue in staging",
          description: "Let's verify the bug systematically before jumping to conclusions.",
          score: { qa: 5, security: 2 },
        },
         {
          id: "e",
          text: "Assess impact / Communicate to stakeholders",
          description: "Who is affected? How badly? What's the plan?",
          score: { pm: 5, "tech-lead": 4, sre: 3 },
        },
        {
           id: "f",
           text: "Check security alerts / Look for anomalies",
           description: "Is this an incident? Are we under attack?",
           score: { security: 5, devops: 2, sre: 3 },
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
          text: "I'll build a bridge solution",
          description: "I can often see how to connect different parts or perspectives.",
          score: { fullstack: 5, frontend: 2, backend: 2 },
        },
        {
          id: "b",
          text: "Find a technical compromise / Data-driven answer",
          description: "Let's look at the specs, the performance data, or the API contract.",
          score: { backend: 4, "tech-lead": 3, data: 3 },
        },
        {
          id: "c",
          text: "Automate / Standardize the conflict away",
          description: "Define clear processes, add linters, improve monitoring. Remove ambiguity.",
          score: { devops: 5, sre: 4, "tech-lead": 3, qa: 3 },
        },
        {
          id: "d",
          text: "Mediate, facilitate, focus on goals",
          description: "Help people understand each other and align on the overall objective.",
          score: { "tech-lead": 5, pm: 5, uiux: 2 },
        },
        {
           id: "e",
           text: "Focus on the facts and established standards",
           description: "Refer back to requirements, security policies, or test criteria.",
           score: { qa: 4, security: 4, pm: 3 },
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
          text: "By user happiness / Usability metrics",
          description: "Are users succeeding? Is it intuitive? Is it beautiful?",
          score: { frontend: 5, fullstack: 3, uiux: 5, pm: 3 },
        },
        {
          id: "b",
          text: "By API response time / Throughput / Correctness",
          description: "Is it fast? Does it handle load? Does it return the right data?",
          score: { backend: 5, devops: 3, data: 2 },
        },
        {
          id: "c",
          text: "By system uptime / Reliability / Cost efficiency",
          description: "Is it always available? Does it recover quickly? Is it affordable?",
          score: { devops: 5, sre: 5, backend: 3 },
        },
        {
          id: "d",
          text: "By team velocity / Morale / Growth",
          description: "Is the team happy? Are they shipping effectively? Are they learning?",
          score: { "tech-lead": 5, fullstack: 2 },
        },
         {
          id: "e",
          text: "By bug count / Test coverage / Quality metrics",
          description: "Did we ship with minimal issues? Are we confident in our releases?",
          score: { qa: 5, security: 2 },
        },
         {
          id: "f",
          text: "By business outcomes / KPIs / User adoption",
          description: "Did this feature move the needle for the company? Are users engaging?",
          score: { pm: 5, data: 3, uiux: 2 },
        },
        {
          id: "g",
          text: "By vulnerabilities found / Security posture",
          description: "Did we prevent incidents? Is the system hardened?",
          score: { security: 5 },
        },
      ],
    },
    {
      id: "q13",
      segment: "Feedback",
      text: "How do you handle a code/design/plan review?",
      options: [
        {
          id: "a",
          text: "Focus on UI consistency / User experience",
          description: "Does it match the design system? Is the flow intuitive?",
          score: { frontend: 5, uiux: 4 },
        },
        {
          id: "b",
          text: "Focus on logic, performance, edge cases",
          description: "Is the algorithm correct? Will it scale? What happens if input is weird?",
          score: { backend: 5, devops: 3, sre: 3, data: 3 },
        },
        {
          id: "c",
          text: "Focus on the big picture / Architecture / Strategy",
          description: "Does this fit the overall system? Does it align with our goals?",
          score: { "tech-lead": 5, fullstack: 3, pm: 4 },
        },
        {
          id: "d",
          text: "Focus on infrastructure / Operations / Reliability",
          description: "How will this be deployed? Monitored? What are the failure modes?",
          score: { devops: 5, sre: 5, "tech-lead": 2 },
        },
         {
          id: "e",
          text: "Focus on testability / Quality / Requirements",
          description: "Can we test this? Does it meet the acceptance criteria? Are there gaps?",
          score: { qa: 5, pm: 2 },
        },
         {
          id: "f",
          text: "Focus on security implications / Threat modeling",
          description: "How could this be abused? What are the attack vectors?",
          score: { security: 5, backend: 2, devops: 2 },
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
          text: "Learning new UI frameworks / Design trends",
          description: "You're always checking out the latest CSS features or JS libraries.",
          score: { frontend: 5, fullstack: 3, uiux: 3 },
        },
        {
          id: "b",
          text: "Learning new database tech / Backend patterns",
          description: "You're excited about vector databases or event sourcing.",
          score: { backend: 5, data: 2 },
        },
        {
          id: "c",
          text: "Learning new cloud services / Automation tools",
          description: "AWS/GCP/Azure just released 12 new services. You need to know some.",
          score: { devops: 5, sre: 5, backend: 2 },
        },
        {
          id: "d",
          text: "Learning new leadership / Management styles",
          description: "You're reading books on agile, team building, or technical strategy.",
          score: { "tech-lead": 5, pm: 4 },
        },
         {
          id: "e",
          text: "Learning new testing techniques / Tools",
          description: "You're exploring property-based testing or new E2E frameworks.",
          score: { qa: 5 },
        },
         {
          id: "f",
          text: "Learning new user research / Design tools",
          description: "You're mastering Figma, user journey mapping, or usability testing.",
          score: { uiux: 5, pm: 3 },
        },
         {
          id: "g",
          text: "Learning new statistical models / ML algorithms",
          description: "You're keeping up with the latest in data analysis and AI.",
          score: { data: 5 },
        },
         {
          id: "h",
          text: "Learning new security exploits / Defense techniques",
          description: "You follow cybersecurity news and learn how systems get compromised.",
          score: { security: 5 },
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
          text: "I prefer focusing on my own tasks",
          description: "Teaching takes time away from building/designing/testing.",
          score: { frontend: 3, backend: 3, qa: 2, security: 2, data: 3 },
        },
        {
          id: "b",
          text: "I'm often the one *being* mentored",
          description: "I'm still learning and appreciate guidance.",
          score: { /* Neutral or slight negative for lead roles */ },
        },
        {
          id: "c",
          text: "I enjoy it, it's rewarding to help others grow",
          description: "You love that 'a-ha!' moment and seeing junior team members succeed.",
          score: { "tech-lead": 5, fullstack: 3, devops: 2, pm: 3, uiux: 2, sre: 2 },
        },
        {
          id: "d",
          text: "I can mentor across different areas",
          description: "You have broad knowledge and can guide people in various domains.",
          score: { fullstack: 5, "tech-lead": 4, pm: 2 },
        },
        {
           id: "e",
           text: "I focus on mentoring specific skills (e.g., testing, security)",
           description: "You are the expert in your domain and enjoy sharing that knowledge.",
           score: { qa: 4, security: 4, uiux: 3, data: 3, devops: 3, sre: 3 },
        },
      ],
    },
     {
      id: "q16",
      segment: "Career Vision",
      text: "What's your ideal career path?",
      options: [
        {
          id: "a",
          text: "Principal UI/Frontend Engineer / Design Technologist",
          description: "Mastering the craft of user interface development.",
          score: { frontend: 5, uiux: 2 },
        },
        {
          id: "b",
          text: "Staff / Principal Backend Engineer / Architect",
          description: "Designing and building large-scale, complex systems.",
          score: { backend: 5, "tech-lead": 3, fullstack: 2 },
        },
        {
          id: "c",
          text: "Distinguished SRE / DevOps / Infrastructure Architect",
          description: "Ensuring systems are reliable, scalable, and automated.",
          score: { devops: 5, sre: 5 },
        },
        {
          id: "d",
          text: "Engineering Manager / Director / CTO",
          description: "Leading teams, setting strategy, managing people.",
          score: { "tech-lead": 5, pm: 3 },
        },
        {
           id: "e",
           text: "QA Lead / Test Architect",
           description: "Defining quality strategy and leading testing efforts.",
           score: { qa: 5 },
        },
        {
           id: "f",
           text: "Product Lead / Head of Product",
           description: "Owning the product vision and roadmap.",
           score: { pm: 5, uiux: 2 },
        },
        {
           id: "g",
           text: "Lead UX Designer / Head of Design",
           description: "Shaping the user experience across products.",
           score: { uiux: 5, pm: 2 },
        },
        {
            id: "h",
            text: "Principal Data Scientist / Head of Data",
            description: "Leading data initiatives and extracting maximum value.",
            score: { data: 5 },
        },
        {
            id: "i",
            text: "Principal Security Engineer / CISO",
            description: "Protecting the organization's assets and data.",
            score: { security: 5 },
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
          text: "Low - Small visual bugs are acceptable if we ship fast",
          description: "It's just a UI glitch. We can fix it in the next deploy.",
          score: { frontend: 5, fullstack: 3, uiux: 3 },
        },
        {
          id: "b",
          text: "Medium - Need robust logic, but some edge cases might slip",
          description: "Core functionality must work; rare errors are okay if handled gracefully.",
          score: { backend: 4, fullstack: 3 },
        },
        {
          id: "c",
          text: "Very Low - Downtime or data loss is unacceptable",
          description: "The system must be highly available and data integrity is paramount.",
          score: { backend: 5, devops: 5, sre: 5, security: 4, data: 4 },
        },
        {
          id: "d",
          text: "Very Low - Quality and correctness are paramount",
          description: "Shipping bugs is a failure. Thorough testing is non-negotiable.",
          score: { qa: 5, security: 4 },
        },
         {
          id: "e",
          text: "Calculated - We need to balance speed with user/business risk",
          description: "Weigh the potential impact vs. the effort/delay.",
          score: { pm: 5, "tech-lead": 4, uiux: 3 },
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
          text: "Build beautiful, intuitive, accessible products",
          description: "Impacting users directly through great design and implementation.",
          score: { frontend: 5, fullstack: 3, uiux: 5 },
        },
        {
          id: "b",
          text: "Build highly scalable, reliable, performant systems",
          description: "Solving complex technical challenges behind the scenes.",
          score: { backend: 5, devops: 4, sre: 5, "tech-lead": 2, data: 1 },
        },
        {
          id: "c",
          text: "Automate infrastructure and empower developers",
          description: "Building the platforms and tools that boost team productivity.",
          score: { devops: 5, sre: 4, backend: 3, "tech-lead": 3 },
        },
        {
          id: "d",
          text: "Lead and grow a high-performing team/org",
          description: "Mentoring people, setting direction, achieving goals together.",
          score: { "tech-lead": 5, pm: 4 },
        },
        {
           id: "e",
           text: "Ensure product quality and user trust",
           description: "Being the champion for quality and reliability.",
           score: { qa: 5, security: 3, sre: 2 },
        },
        {
           id: "f",
           text: "Define and deliver successful products",
           description: "Turning ideas into reality and meeting market needs.",
           score: { pm: 5, uiux: 3, "tech-lead": 2 },
        },
        {
          id: "g",
          text: "Drive decisions through data insights",
          description: "Uncovering hidden truths and guiding strategy with data.",
          score: { data: 5, pm: 2 },
        },
         {
           id: "h",
           text: "Protect systems and users from threats",
           description: "Being the guardian of security and privacy.",
           score: { security: 5, devops: 2, sre: 2 },
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
        "You live and breathe the user experience. You love making things look beautiful, feel intuitive, and work flawlessly across devices. Pixel perfection matters.",
    },
    {
      id: "backend",
      name: "Backend Developer",
      description: "Systems-focused and analytical",
      icon: "⚙️",
      compatibility: 0,
      reason:
        "You're an architect of the invisible. You love data modeling, API design, logic, performance, and building robust systems. Reliability is your middle name.",
    },
    {
      id: "fullstack",
      name: "Full Stack Developer",
      description: "Versatile and adaptable problem-solver",
      icon: "🔗",
      compatibility: 0,
      reason:
        "You're a jack-of-all-trades, comfortable moving between the UI and the database. You enjoy connecting the pieces and seeing the whole system work end-to-end.",
    },
    {
      id: "devops",
      name: "DevOps Engineer",
      description: "Infrastructure automation and CI/CD expert",
      icon: "🚀",
      compatibility: 0,
      reason:
        "You build the factory. You love automating deployments, managing infrastructure as code, and ensuring smooth, fast releases. Your goal is developer enablement.",
    },
    {
      id: "tech-lead",
      name: "Tech Lead",
      description: "Leadership-focused and strategic architect",
      icon: "👑",
      compatibility: 0,
      reason:
        "You guide the team's technical direction. You enjoy mentoring, architectural design, unblocking others, and ensuring the team builds the *right* thing, the right way.",
    },
    {
      id: "qa",
      name: "QA Engineer / SDET",
      description: "Quality champion and test automation expert",
      icon: "🧪",
      compatibility: 0,
      reason:
        "You are the guardian of quality. You love finding bugs, thinking about edge cases, writing automated tests, and ensuring the product meets high standards before release.",
    },
    {
      id: "uiux",
      name: "UI/UX Designer",
      description: "User advocate and experience crafter",
      icon: "🖌️",
      compatibility: 0,
      reason:
        "You are the voice of the user. You focus on research, user flows, wireframes, mockups, and prototypes to create intuitive, accessible, and delightful interfaces.",
    },
    {
      id: "pm",
      name: "Product Manager",
      description: "Vision setter and product owner",
      icon: "🧭",
      compatibility: 0,
      reason:
        "You define the 'what' and 'why'. You understand the market, prioritize features, manage the roadmap, and work with the team to deliver value to users and the business.",
    },
    {
      id: "data",
      name: "Data Scientist / Analyst",
      description: "Insight extractor and model builder",
      icon: "📊",
      compatibility: 0,
      reason:
        "You find stories in data. You enjoy cleaning datasets, statistical analysis, building machine learning models, and communicating insights to drive decisions.",
    },
    {
      id: "security",
      name: "Security Engineer",
      description: "System protector and vulnerability hunter",
      icon: "🛡️",
      compatibility: 0,
      reason:
        "You think like an adversary. You enjoy finding weaknesses, implementing defenses, conducting audits, and ensuring the system and its data are protected from threats.",
    },
    {
      id: "sre",
      name: "Site Reliability Engineer (SRE)",
      description: "Guardian of production stability and performance",
      icon: "🩺", // Stethoscope for health/monitoring
      compatibility: 0,
      reason:
          "You ensure production runs smoothly, reliably, and efficiently at scale. You focus on monitoring, incident response, automation, and setting SLOs to balance reliability with feature velocity."
    }
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
