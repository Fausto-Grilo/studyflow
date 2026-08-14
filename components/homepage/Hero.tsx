import Link from "next/link";

export default function Hero(){       
    
    
    return(
            <div>
              <p className="mt-1 mb-8 text-sm tracking-widest text-[#8fbd9d]">
                // YOUR STUDY SYSTEM
              </p>

              <h1 className="max-w-2xl text-5xl font-medium leading-tight tracking-tight md:text-4xl xl:text-5xl">
                Organize your studies.
                <br />
                Master your time.
              </h1>

              <p className="mt-8 mb-12 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                Manage your subjects, tasks, exams and study sessions in one
                place.
              </p>

              <Link
                    href="/signup"
                    className="border border-zinc-600 px-5 py-3 text-sm tracking-wider transition hover:border-[#8fbd9d] hover:bg-[#8fbd9d]/10"
                >
                    GET STARTED
                    <span className="ml-4 text-[#8fbd9d]">→</span>
                </Link>

              <div className="mt-15 border-l border-[#8fbd9d] pl-6 text-sm leading-8 tracking-wider text-zinc-400">
                <p>BUILT FOR STUDENTS.</p>
                <p>DESIGNED TO HELP YOU FOCUS.</p>
              </div>
            </div>

    );
}