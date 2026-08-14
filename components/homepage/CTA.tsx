import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#080d11] px-6 py-24 text-[#e8e8e8] lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1600px] border border-zinc-800">
        <div className="relative overflow-hidden px-8 py-20 text-center sm:px-16 lg:px-24 lg:py-32">
          
          {/* Small label */}
          <p className="mb-6 text-sm tracking-widest text-[#8fbd9d]">
            // START YOUR FLOW
          </p>

          {/* Main text */}
          <h2 className="mx-auto max-w-4xl text-4xl leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Take control of
            <br />
            your study time.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            Organize your subjects, manage your tasks and build a study
            system that works for you.
          </p>

          {/* Button */}
          <Link
            href="/signup"
            className="group mt-10 inline-flex items-center gap-6 border border-zinc-600 px-8 py-4 text-sm tracking-wider transition-all duration-300 hover:border-[#8fbd9d] hover:bg-[#8fbd9d] hover:text-[#080d11]"
          >
            GET STARTED

            <span className="text-[#8fbd9d] transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#080d11]">
              →
            </span>
          </Link>

          {/* Decorative text */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] tracking-widest text-zinc-700">
            <span>ORGANIZE</span>
            <span>→</span>
            <span>PLAN</span>
            <span>→</span>
            <span>FOCUS</span>
          </div>
        </div>
      </div>
    </section>
  );
}