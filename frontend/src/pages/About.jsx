import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <section className="max-w-3xl">

          <p className="text-blue-400 text-sm sm:text-base font-medium uppercase tracking-wider">
            About Me
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building modern web experiences with{" "}
            <span className="text-blue-500">
              clean code.
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-400 leading-7 sm:leading-8">
            I'm a full-stack developer passionate about
            building useful, scalable and user-friendly
            web applications.
          </p>

        </section>

        {/* =====================================================
            ABOUT CONTENT
        ===================================================== */}

        <section className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">

          {/* =================================================
              LEFT - ABOUT
          ================================================= */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7 lg:p-8">

            <h2 className="text-2xl sm:text-3xl font-bold">
              Who I Am
            </h2>

            <div className="mt-5 space-y-4">

              <p className="text-sm sm:text-base text-slate-400 leading-7">
                I'm interested in full-stack web
                development and enjoy turning ideas into
                real-world applications.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-7">
                I work with modern frontend and backend
                technologies to create applications that
                are responsive, secure and easy to use.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-7">
                I continuously learn new technologies and
                improve my development skills by building
                practical projects.
              </p>

            </div>

          </div>

          {/* =================================================
              RIGHT - DEVELOPMENT
          ================================================= */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7 lg:p-8">

            <h2 className="text-2xl sm:text-3xl font-bold">
              My Development Approach
            </h2>

            <div className="mt-6 space-y-5">

              {/* CARD 1 */}

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-xl">
                  💻
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    Clean Code
                  </h3>

                  <p className="mt-1 text-sm text-slate-400 leading-6">
                    I focus on writing readable,
                    maintainable and reusable code.
                  </p>
                </div>

              </div>

              {/* CARD 2 */}

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-xl">
                  📱
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    Responsive Design
                  </h3>

                  <p className="mt-1 text-sm text-slate-400 leading-6">
                    Every application should work smoothly
                    across mobile, tablet and desktop.
                  </p>
                </div>

              </div>

              {/* CARD 3 */}

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-xl">
                  🔐
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    Secure Applications
                  </h3>

                  <p className="mt-1 text-sm text-slate-400 leading-6">
                    Authentication, authorization and
                    protected APIs are important parts of
                    my applications.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            TECHNOLOGIES
        ===================================================== */}

        <section className="mt-10 sm:mt-14 lg:mt-16">

          <div className="mb-6 sm:mb-8">

            <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">
              Technologies
            </p>

            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
              Technologies I Work With
            </h2>

          </div>

          {/* TECHNOLOGY GRID */}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">

            {/* REACT */}

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-5 text-center hover:border-blue-500/50 transition">
              <div className="text-2xl sm:text-3xl">
                ⚛️
              </div>

              <p className="mt-2 text-sm font-medium">
                React
              </p>
            </div>

            {/* JAVASCRIPT */}

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-5 text-center hover:border-blue-500/50 transition">
              <div className="text-2xl sm:text-3xl">
                🟨
              </div>

              <p className="mt-2 text-sm font-medium">
                JavaScript
              </p>
            </div>

            {/* NODE */}

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-5 text-center hover:border-blue-500/50 transition">
              <div className="text-2xl sm:text-3xl">
                🟢
              </div>

              <p className="mt-2 text-sm font-medium">
                Node.js
              </p>
            </div>

            {/* EXPRESS */}

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-5 text-center hover:border-blue-500/50 transition">
              <div className="text-2xl sm:text-3xl">
                🚀
              </div>

              <p className="mt-2 text-sm font-medium">
                Express
              </p>
            </div>

            {/* MONGODB */}

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-5 text-center hover:border-blue-500/50 transition">
              <div className="text-2xl sm:text-3xl">
                🍃
              </div>

              <p className="mt-2 text-sm font-medium">
                MongoDB
              </p>
            </div>

            {/* FIREBASE */}

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-5 text-center hover:border-blue-500/50 transition">
              <div className="text-2xl sm:text-3xl">
                🔥
              </div>

              <p className="mt-2 text-sm font-medium">
                Firebase
              </p>
            </div>

          </div>

        </section>

        {/* =====================================================
            GOAL
        ===================================================== */}

        <section className="mt-10 sm:mt-14 lg:mt-16">

          <div className="rounded-2xl border border-blue-900/50 bg-blue-950/20 p-6 sm:p-8 lg:p-10">

            <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">
              My Goal
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold">
              Learn, build and create meaningful
              applications.
            </h2>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-400 leading-7">
              My goal is to keep improving as a full-stack
              developer by working on real-world projects,
              learning modern technologies and building
              applications that solve practical problems.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default About;