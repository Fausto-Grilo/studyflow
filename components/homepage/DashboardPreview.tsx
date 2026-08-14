export default function DashboardPreview() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-700 bg-[#0b1116] shadow-2xl shadow-black/40">
      <div className="grid min-h-[500px] grid-cols-1 md:grid-cols-[170px_1fr] lg:grid-cols-[190px_1fr]">
        
        {/* SIDEBAR - Hidden on mobile */}
        <aside className="hidden border-r border-zinc-800 p-4 md:block lg:p-6">
          <h2 className="mb-8 text-sm tracking-wider lg:text-lg">
            STUDYFLOW<span className="text-[#8fbd9d]">_</span>
          </h2>

          <div className="space-y-2 text-xs text-zinc-400 lg:text-sm">
            <div className="rounded-md bg-[#101a1c] px-3 py-3 text-[#8fbd9d]">
              ◫ Dashboard
            </div>

            <div className="px-3 py-2">▦ Subjects</div>
            <div className="px-3 py-2">☷ Tasks</div>
            <div className="px-3 py-2">□ Calendar</div>
            <div className="px-3 py-2">◷ Study Timer</div>
            <div className="px-3 py-2">▥ Analytics</div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="min-w-0 p-4 sm:p-6 lg:p-8">

          {/* MOBILE HEADER */}
          <div className="mb-6 flex items-center justify-between md:hidden">
            <span className="text-sm tracking-wider">
              STUDYFLOW<span className="text-[#8fbd9d]">_</span>
            </span>

            <button className="text-xs text-zinc-400">
              ☰
            </button>
          </div>

          {/* HEADER */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl">
                Good afternoon, John
                <span className="text-[#8fbd9d]">.</span>
              </h2>

              <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
                Here&apos;s what&apos;s happening with your studies.
              </p>
            </div>

            <button className="w-fit rounded-md border border-zinc-800 px-3 py-2 text-[10px] text-zinc-400 sm:text-xs">
              View calendar
            </button>
          </div>

          {/* STATS */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4">
            <StatCard
              title="SUBJECTS"
              value="5"
              subtitle="Active subjects"
            />

            <StatCard
              title="TASKS"
              value="12"
              subtitle="Pending tasks"
            />

            <StatCard
              title="STUDY TIME"
              value="14h 32m"
              subtitle="This week"
            />

            <StatCard
              title="EXAMS"
              value="3"
              subtitle="Upcoming"
            />
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 lg:grid-cols-2 lg:gap-6">

            {/* TASKS */}
            <div className="rounded-xl border border-zinc-800 bg-[#0d1419] p-4 sm:p-5">
              <h3 className="text-xs sm:text-sm">
                Upcoming tasks
              </h3>

              <div className="mt-5 space-y-4 text-xs sm:mt-6 sm:space-y-5">
                <Task
                  color="bg-[#9eb889]"
                  title="Data Structures — Problem Set"
                  date="Due tomorrow"
                />

                <Task
                  color="bg-[#b99a77]"
                  title="Computer Architecture"
                  date="Due in 3 days"
                />

                <Task
                  color="bg-[#bf715d]"
                  title="Calculus — Exercises"
                  date="Due in 5 days"
                />
              </div>

              <button className="mt-6 text-xs text-[#8fbd9d] sm:mt-8">
                View all tasks →
              </button>
            </div>

            {/* CHART */}
            <div className="rounded-xl border border-zinc-800 bg-[#0d1419] p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm">
                  Study time
                </h3>

                <span className="text-[10px] text-zinc-500 sm:text-xs">
                  This week
                </span>
              </div>

              <div className="mt-8 flex h-32 items-end justify-between gap-2 border-b border-zinc-800 sm:mt-10 sm:h-40 sm:gap-3">
                <Bar height="45%" />
                <Bar height="32%" />
                <Bar height="30%" />
                <Bar height="90%" />
                <Bar height="65%" />
                <Bar height="30%" />
                <Bar height="5%" />
              </div>

              <div className="mt-3 flex justify-between text-[8px] text-zinc-600 sm:text-[10px]">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-zinc-800 bg-[#0d1419] p-3 sm:p-4">
      <p className="truncate text-[9px] text-zinc-500 sm:text-[10px]">
        {title}
      </p>

      <p className="mt-2 truncate text-lg sm:mt-3 sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 truncate text-[9px] text-zinc-600 sm:mt-2 sm:text-[10px]">
        {subtitle}
      </p>
    </div>
  );
}

function Task({
  color,
  title,
  date,
}: {
  color: string;
  title: string;
  date: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${color}`}
      />

      <div className="min-w-0">
        <p className="truncate text-zinc-300">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-zinc-600">
          {date}
        </p>
      </div>
    </div>
  );
}

function Bar({ height }: { height: string }) {
  return (
    <div
      className="w-full rounded-t-sm bg-[#7faa8a] opacity-80"
      style={{ height }}
    />
  );
}