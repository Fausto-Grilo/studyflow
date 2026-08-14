const features = [
  {
    number: "01",
    title: "ORGANIZE",
    description:
      "Keep your subjects, tasks, exams and deadlines organized in one place.",
  },
  {
    number: "02",
    title: "TRACK",
    description:
      "Track your study sessions and monitor your academic progress over time.",
  },
  {
    number: "03",
    title: "PLAN",
    description:
      "Create smarter study plans based on your exams, deadlines and available time.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="border-t border-zinc-800 bg-[#080d11] px-6 py-24 text-[#e8e8e8] lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-sm tracking-widest text-[#8fbd9d]">
              // FEATURES
            </p>

            <h2 className="max-w-2xl text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need.
              <br />
              Nothing you don't.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-500">
            StudyFlow brings your academic life together into one simple
            system.
          </p>
        </div>

        {/* Features */}
        <div className="border-t border-zinc-800">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group grid gap-6 border-b border-zinc-800 py-10 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-[120px_1fr_1fr] md:items-center md:gap-10 md:px-6"
            >
              {/* Number */}
              <span className="text-sm text-[#8fbd9d]">
                {feature.number}
              </span>

              {/* Title */}
              <h3 className="text-2xl tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="max-w-md text-sm leading-7 text-zinc-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}