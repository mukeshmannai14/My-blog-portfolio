import Navbar from "../components/Navbar";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "🌐",
      category: "Frontend",
      description: "Semantic and accessible web structure.",
    },
    {
      name: "CSS",
      icon: "🎨",
      category: "Frontend",
      description: "Responsive layouts and modern styling.",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      category: "Frontend",
      description: "Interactive and dynamic web applications.",
    },
    {
      name: "React",
      icon: "⚛️",
      category: "Frontend",
      description: "Component-based modern user interfaces.",
    },
    {
      name: "Tailwind CSS",
      icon: "💨",
      category: "Frontend",
      description: "Fast and responsive UI development.",
    },
    {
      name: "Redux",
      icon: "🔄",
      category: "Frontend",
      description: "Predictable application state management.",
    },
    {
      name: "Node.js",
      icon: "🟢",
      category: "Backend",
      description: "Server-side JavaScript development.",
    },
    {
      name: "Express.js",
      icon: "🚀",
      category: "Backend",
      description: "REST API and backend application development.",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      category: "Database",
      description: "NoSQL database for scalable applications.",
    },
    {
      name: "Firebase",
      icon: "🔥",
      category: "Backend",
      description: "Authentication and cloud services.",
    },
    {
      name: "Git",
      icon: "📦",
      category: "Tools",
      description: "Version control and project management.",
    },
    {
      name: "GitHub",
      icon: "🐙",
      category: "Tools",
      description: "Code hosting and collaboration.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <section className="max-w-3xl">

          <p className="text-blue-400 text-sm sm:text-base font-medium uppercase tracking-wider">
            My Skills
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Technologies I use to build{" "}
            <span className="text-blue-500">
              real-world applications.
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-400 leading-7 sm:leading-8">
            I work across frontend, backend and database
            technologies to build complete full-stack
            applications.
          </p>

        </section>

        {/* =====================================================
            SKILLS GRID
        ===================================================== */}

        <section className="mt-10 sm:mt-14 lg:mt-16">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">

            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5 lg:p-6 hover:border-blue-500/50 hover:-translate-y-1 transition duration-300"
              >

                {/* ICON */}

                <div className="text-3xl sm:text-4xl">
                  {skill.icon}
                </div>

                {/* NAME */}

                <h2 className="mt-4 text-sm sm:text-base lg:text-lg font-bold">
                  {skill.name}
                </h2>

                {/* CATEGORY */}

                <p className="mt-1 text-xs text-blue-400">
                  {skill.category}
                </p>

                {/* DESCRIPTION */}

                <p className="hidden sm:block mt-3 text-xs lg:text-sm text-slate-500 leading-5">
                  {skill.description}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* =====================================================
            FRONTEND
        ===================================================== */}

        <section className="mt-12 sm:mt-16">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7 lg:p-8">

            <div className="flex items-center gap-3">

              <div className="text-2xl sm:text-3xl">
                🎨
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Frontend Development
                </h2>

                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Building responsive user interfaces
                </p>
              </div>

            </div>

            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">

              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Redux",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            BACKEND
        ===================================================== */}

        <section className="mt-6 sm:mt-8">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7 lg:p-8">

            <div className="flex items-center gap-3">

              <div className="text-2xl sm:text-3xl">
                ⚙️
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Backend Development
                </h2>

                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Building APIs and server-side applications
                </p>
              </div>

            </div>

            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">

              {[
                "Node.js",
                "Express.js",
                "REST API",
                "Firebase",
                "Authentication",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            DATABASE
        ===================================================== */}

        <section className="mt-6 sm:mt-8">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7 lg:p-8">

            <div className="flex items-center gap-3">

              <div className="text-2xl sm:text-3xl">
                🗄️
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Database
                </h2>

                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Managing application data
                </p>
              </div>

            </div>

            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">

              {[
                "MongoDB",
                "MongoDB Atlas",
                "Mongoose",
                "Firestore",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            TOOLS
        ===================================================== */}

        <section className="mt-6 sm:mt-8">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7 lg:p-8">

            <div className="flex items-center gap-3">

              <div className="text-2xl sm:text-3xl">
                🛠️
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Development Tools
                </h2>

                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Tools I use during development
                </p>
              </div>

            </div>

            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">

              {[
                "Git",
                "GitHub",
                "VS Code",
                "Postman",
                "NPM",
                "Vite",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            LEARNING
        ===================================================== */}

        <section className="mt-10 sm:mt-14 lg:mt-16">

          <div className="rounded-2xl border border-blue-900/50 bg-blue-950/20 p-6 sm:p-8 lg:p-10">

            <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">
              Always Learning
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold">
              Improving my skills every day.
            </h2>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-400 leading-7">
              I'm continuously improving my knowledge of
              JavaScript, React, Node.js, databases,
              authentication, APIs and modern full-stack
              development practices.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Skills;