import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function About() {
  const highlights = [
    {
      number: "01",
      title: "Full-Stack Development",
      description:
        "Building complete web applications across frontend, backend, APIs and databases.",
    },
    {
      number: "02",
      title: "Clean & Responsive UI",
      description:
        "Creating interfaces that are modern, accessible and responsive across devices.",
    },
    {
      number: "03",
      title: "Backend & APIs",
      description:
        "Developing REST APIs, authentication systems and reliable server-side logic.",
    },
    {
      number: "04",
      title: "Continuous Learning",
      description:
        "Improving my skills by building real-world projects and exploring new technologies.",
    },
  ];

  const technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "Git",
    "GitHub",
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

            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* LEFT */}

              <div>

                <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                  About Me
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">

                  Building ideas into{" "}

                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    digital experiences.
                  </span>

                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">

                  I'm Mukesh Mannai, a Full-Stack Developer passionate about
                  creating modern web applications and solving real-world
                  problems through technology.

                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <Link
                    to="/projects"
                    className="rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-500"
                  >
                    Explore My Work →
                  </Link>

                  <Link
                    to="/contact"
                    className="rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-slate-200 transition hover:bg-slate-800"
                  >
                    Contact Me
                  </Link>

                </div>

              </div>

              {/* RIGHT - PROFILE CARD */}

              <div className="relative mx-auto w-full max-w-md">

                <div className="absolute inset-0 rounded-3xl bg-blue-600/10 blur-3xl" />

                <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-2xl backdrop-blur-xl sm:p-9">

                  <div className="flex items-center justify-between border-b border-slate-800 pb-6">

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Developer Profile
                      </p>

                      <h2 className="mt-2 text-xl font-bold">
                        Mukesh Kanna
                      </h2>

                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-xl font-bold text-blue-400">
                      MK
                    </div>

                  </div>

                  <div className="mt-7 space-y-5">

                    <div>
                      <p className="text-xs text-slate-500">
                        Role
                      </p>

                      <p className="mt-1 font-medium text-slate-200">
                        Full-Stack Developer
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Primary Stack
                      </p>

                      <p className="mt-1 font-medium text-slate-200">
                        MERN + Firebase
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Focus
                      </p>

                      <p className="mt-1 font-medium text-slate-200">
                        Modern Web Applications
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Status
                      </p>

                      <p className="mt-1 flex items-center gap-2 font-medium text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Open to opportunities
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            MY STORY
        ====================================================== */}

        <section className="py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2">

              {/* STORY */}

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  My Story
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  A developer who enjoys{" "}
                  <span className="text-blue-500">
                    building things.
                  </span>
                </h2>

              </div>

              {/* CONTENT */}

              <div className="space-y-5 text-slate-400">

                <p className="leading-8">
                  My interest in software development comes from the ability
                  to turn an idea into something people can actually use.
                  I enjoy understanding how applications work from the user
                  interface all the way to the backend and database.
                </p>

                <p className="leading-8">
                  I work primarily with React, Node.js, Express, MongoDB and
                  Firebase. Through projects, I have gained experience with
                  authentication, authorization, REST APIs, database
                  operations and cloud deployment.
                </p>

                <p className="leading-8">
                  My goal is to continue growing as a Full-Stack Developer by
                  working on meaningful products, solving challenging problems
                  and continuously improving the quality of my code.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            WHAT I DO
        ====================================================== */}

        <section className="border-y border-slate-800 bg-slate-900/30 py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                What I Do
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                How I contribute to a project
              </h2>

            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              {highlights.map((item) => (
                <div
                  key={item.number}
                  className="group rounded-3xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                >

                  <span className="text-sm font-bold text-blue-500">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY STACK
        ====================================================== */}

        <section className="py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Technology
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                My Development Stack
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                The core technologies I use to create full-stack applications.
              </p>

            </div>

            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">

              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-blue-400"
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            VALUES
        ====================================================== */}

        <section className="border-y border-slate-800 bg-slate-900/30 py-20 sm:py-24">

          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              My Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Build. Learn. Improve.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">

              I believe the best way to become a better developer is to
              consistently build real projects, learn from challenges and
              improve with every iteration.

            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <h3 className="font-bold">
                  Build
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Turn ideas into working applications.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <h3 className="font-bold">
                  Learn
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Learn from every project and challenge.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <h3 className="font-bold">
                  Improve
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Continuously improve code and user experience.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="py-20 sm:py-24">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let's Connect
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Have an idea or opportunity?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              I'm open to internships, full-time opportunities, freelance
              projects and collaborations.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/contact"
                className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500"
              >
                Get In Touch →
              </Link>

              <Link
                to="/projects"
                className="rounded-xl border border-slate-700 px-7 py-3.5 font-semibold text-slate-200 transition hover:bg-slate-800"
              >
                View Projects
              </Link>

            </div>

          </div>

        </section>
      </main>
    </div>
  );
}

export default About;