import Navbar from "../components/Navbar";

function Projects() {
  const projects = [
    {
      title: "Full-Stack Blog Portfolio",
      description:
        "A full-stack developer portfolio with Firebase authentication, admin-only blog management, MongoDB, likes and responsive UI.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
      ],
      type: "Full Stack",
    },
    {
      title: "Bulk Mail Application",
      description:
        "A web application for sending bulk emails using uploaded recipient data with authentication and email history management.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      type: "Full Stack",
    },
    {
      title: "React Redux Application",
      description:
        "A React application demonstrating Redux state management, actions, reducers, store configuration and asynchronous operations.",
      technologies: [
        "React",
        "Redux",
        "JavaScript",
      ],
      type: "Frontend",
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
            My Projects
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Projects I've{" "}
            <span className="text-blue-500">
              built.
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-400 leading-7 sm:leading-8">
            Here are some of the projects I've worked on
            while learning and building real-world
            applications.
          </p>

        </section>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <section className="mt-10 sm:mt-14 lg:mt-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

            {projects.map((project, index) => (

              <article
                key={index}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 lg:p-7 hover:border-blue-500/50 hover:-translate-y-1 transition duration-300"
              >

                {/* =================================================
                    PROJECT NUMBER
                ================================================= */}

                <div className="flex items-center justify-between">

                  <span className="text-3xl sm:text-4xl font-bold text-slate-800">
                    0{index + 1}
                  </span>

                  <span className="rounded-full border border-blue-900/50 bg-blue-950/30 px-3 py-1 text-xs font-medium text-blue-400">
                    {project.type}
                  </span>

                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h2 className="mt-6 text-xl sm:text-2xl font-bold leading-tight group-hover:text-blue-400 transition">
                  {project.title}
                </h2>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p className="mt-4 text-sm sm:text-base text-slate-400 leading-7">
                  {project.description}
                </p>

                {/* =================================================
                    TECHNOLOGIES
                ================================================= */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>

                {/* =================================================
                    PROJECT ACTION
                ================================================= */}

                <div className="mt-auto pt-7">

                  <button
                    type="button"
                    className="w-full rounded-lg border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:border-blue-500 hover:text-blue-400 transition"
                  >
                    View Project →
                  </button>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =====================================================
            DEVELOPMENT STACK
        ===================================================== */}

        <section className="mt-12 sm:mt-16 lg:mt-20">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7 lg:p-10">

            <div className="max-w-3xl">

              <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                Development Stack
              </p>

              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold">
                Building with modern technologies.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-400 leading-7">
                My projects combine modern frontend
                technologies with secure backend APIs,
                databases and authentication systems.
              </p>

            </div>

            {/* STACK */}

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">

              {[
                "React",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase",
                "REST APIs",
              ].map((technology) => (

                <div
                  key={technology}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center hover:border-blue-500/50 transition"
                >
                  <p className="text-xs sm:text-sm font-medium text-slate-300">
                    {technology}
                  </p>
                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CALL TO ACTION
        ===================================================== */}

        <section className="mt-10 sm:mt-14 lg:mt-16">

          <div className="rounded-2xl border border-blue-900/50 bg-blue-950/20 p-6 sm:p-8 lg:p-10 text-center">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Have a project idea?
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-7">
              I'm always interested in building useful
              applications and working on challenging
              development projects.
            </p>

            <a
              href="/contact"
              className="inline-block mt-7 rounded-lg bg-blue-600 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-blue-700 transition"
            >
              Contact Me →
            </a>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Projects;