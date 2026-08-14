const steps = [
  {
    number: "01",
    title: "SET UP",
    description:
      "Add your subjects, exams and deadlines to create your personal study workspace.",
    label: "ADD YOUR SYSTEM",
  },
  {
    number: "02",
    title: "PLAN",
    description:
      "Organize your tasks and create a study plan based on your available time and upcoming exams.",
    label: "BUILD YOUR PLAN",
  },
  {
    number: "03",
    title: "FOCUS",
    description:
      "Track your study sessions, complete tasks and monitor your progress over time.",
    label: "TRACK PROGRESS",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#080d11] px-6 py-24 text-[#e8e8e8] lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-16">
          <p className="mb-5 text-sm tracking-widest text-[#8fbd9d]">
            // HOW IT WORKS
          </p>

          <h2 className="max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A simpler way to
            <br />
            manage your studies.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-0 border-t border-l border-zinc-800 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group min-h-[320px] border-r border-b border-zinc-800 p-8 transition-colors duration-300 hover:bg-white/[0.02] lg:p-10"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8fbd9d]">
                  {step.number}
                </span>

                <span className="text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#8fbd9d]">
                  →
                </span>
              </div>

              {/* Content */}
              <div className="mt-20">
                <p className="mb-4 text-xs tracking-widest text-zinc-600">
                  {step.label}
                </p>

                <h3 className="text-3xl tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}