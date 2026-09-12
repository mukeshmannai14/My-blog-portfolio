import Navbar from "../components/Navbar";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      subtitle: "Building modern user interfaces",
      icon: "⚡",
      skills: [
        {
          name: "React.js",
          level: "Advanced",
          percentage: 90,
        },
        {
          name: "JavaScript",
          level: "Advanced",
          percentage: 88,
        },
        {
          name: "HTML5",
          level: "Advanced",
          percentage: 92,
        },
        {
          name: "CSS3",
          level: "Advanced",
          percentage: 88,
        },
        {
          name: "Tailwind CSS",
          level: "Intermediate",
          percentage: 82,
        },
        {
          name: "React Router",
          level: "Intermediate",
          percentage: 80,
        },
      ],
    },

    {
      title: "Backend Development",
      subtitle: "Creating APIs and server-side applications",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          level: "Advanced",
          percentage: 85,
        },
        {
          name: "Express.js",
          level: "Advanced",
          percentage: 84,
        },
        {
          name: "REST API",
          level: "Advanced",
          percentage: 86,
        },
        {
          name: "Firebase Admin",
          level: "Intermediate",
          percentage: 78,
        },
        {
          name: "Authentication",
          level: "Advanced",
          percentage: 84,
        },
        {
          name: "API Integration",
          level: "Advanced",
          percentage: 85,
        },
      ],
    },

    {
      title: "Database & Cloud",
      subtitle: "Managing application data and services",
      icon: "🗄️",
      skills: [
        {
          name: "MongoDB",
          level: "Advanced",
          percentage: 85,
        },
        {
          name: "MongoDB Atlas",
          level: "Advanced",
          percentage: 82,
        },
        {
          name: "Mongoose",
          level: "Intermediate",
          percentage: 80,
        },
        {
          name: "Firebase Firestore",
          level: "Intermediate",
          percentage: 78,
        },
        {
          name: "Firebase Authentication",
          level: "Advanced",
          percentage: 84,
        },
      ],
    },

    {
      title: "Tools & Deployment",
      subtitle: "Development workflow and deployment",
      icon: "🚀",
      skills: [
        {
          name: "Git",
          level: "Advanced",
          percentage: 85,
        },
        {
          name: "GitHub",
          level: "Advanced",
          percentage: 88,
        },
        {
          name: "VS Code",
          level: "Advanced",
          percentage: 92,
        },
        {
          name: "Postman",
          level: "Intermediate",
          percentage: 80,
        },
        {
          name: "Vercel",
          level: "Intermediate",
          percentage: 78,
        },
        {
          name: "Render",
          level: "Intermediate",
          percentage: 78,
        },
      ],
    },
  ];

  const strengths = [
    "Problem Solving",
    "Responsive Web Development",
    "REST API Development",
    "Authentication & Authorization",
    "Database Integration",
    "CRUD Application Development",
    "Git & Version Control",
    "Full-Stack Application Architecture",
  ];

  const currentlyLearning = [
    {
      title: "TypeScript",
      description:
        "Improving type-safe and maintainable application development.",
    },
    {
      title: "Next.js",
      description:
        "Exploring modern React frameworks and production architecture.",
    },
    {
      title: "Docker",
      description:
        "Learning containerization and consistent application deployment.",
    },
    {
      title: "Cloud Technologies",
      description:
        "Expanding knowledge of scalable cloud-based applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-slate-800">

          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">

            <div className="mx-auto max-w-4xl text-center">

              <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                Technical Skills
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">

                My{" "}

                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Skills & Expertise
                </span>

              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">

                A collection of technologies, development skills and tools
                I use to build modern, responsive and scalable full-stack
                web applications.

              </p>

            </div>

          </div>
        </section>

        {/* =====================================================
            SKILL CATEGORIES
        ====================================================== */}

        <section className="py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mb-12">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Technical Expertise
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Technologies I Work With
              </h2>

              <p className="mt-4 max-w-2xl text-slate-400">
                My skills are organized across the main areas of modern
                full-stack development.
              </p>

            </div>

            <div className="grid gap-6 lg:grid-cols-2">

              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 sm:p-8"
                >

                  {/* CATEGORY HEADER */}

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl">
                      {group.icon}
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        {group.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {group.subtitle}
                      </p>

                    </div>

                  </div>

                  {/* SKILLS */}

                  <div className="mt-8 space-y-6">

                    {group.skills.map((skill) => (
                      <div key={skill.name}>

                        <div className="mb-2 flex items-center justify-between">

                          <span className="text-sm font-medium text-slate-300">
                            {skill.name}
                          </span>

                          <span className="text-xs text-slate-500">
                            {skill.level}
                          </span>

                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">

                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700"
                            style={{
                              width: `${skill.percentage}%`,
                            }}
                          />

                        </div>

                      </div>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            CORE STRENGTHS
        ====================================================== */}

        <section className="border-y border-slate-800 bg-slate-900/30 py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              {/* LEFT */}

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Development Strengths
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Skills that go beyond{" "}
                  <span className="text-blue-500">
                    writing code.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-slate-400">

                  I focus not only on learning technologies, but also on
                  understanding problems, designing practical solutions and
                  building applications that are maintainable and easy to use.

                </p>

              </div>

              {/* RIGHT */}

              <div className="grid gap-4 sm:grid-cols-2">

                {strengths.map((strength, index) => (
                  <div
                    key={strength}
                    className="group rounded-2xl border border-slate-800 bg-slate-950 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                  >

                    <div className="flex items-center gap-4">

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-medium text-slate-300 transition group-hover:text-white">
                        {strength}
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            DEVELOPMENT APPROACH
        ====================================================== */}

        <section className="py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                My Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                How I Build Applications
              </h2>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <span className="text-2xl">01</span>

                <h3 className="mt-5 font-bold">
                  Understand
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Understand the problem, requirements and user needs before
                  starting development.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <span className="text-2xl">02</span>

                <h3 className="mt-5 font-bold">
                  Design
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Plan the application structure, database and user interface
                  before implementation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <span className="text-2xl">03</span>

                <h3 className="mt-5 font-bold">
                  Develop
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Build clean frontend components, secure APIs and reliable
                  database integrations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <span className="text-2xl">04</span>

                <h3 className="mt-5 font-bold">
                  Deploy
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Test the application and deploy it using modern cloud
                  platforms.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            CURRENTLY LEARNING
        ====================================================== */}

        <section className="border-y border-slate-800 bg-slate-900/30 py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Continuous Learning
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Currently Exploring
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                I'm continuously learning new technologies to improve the
                quality and scalability of the applications I build.
              </p>

            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {currentlyLearning.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-lg font-bold text-blue-400">
                    +
                  </div>

                  <h3 className="mt-5 font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="border-t border-slate-800 py-20 sm:py-24">

          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Keep Building
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Learning never stops.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Every project is an opportunity to learn something new,
              improve my development skills and build better solutions.
            </p>

          </div>

        </section>
      </main>
    </div>
  );
}

export default Skills;