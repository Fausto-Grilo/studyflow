import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-zinc-800 bg-[#080d11]/80 px-6 py-5 backdrop-blur-md lg:px-12">
      
      <Link
        href="/"
        className="text-xl font-medium tracking-wider"
      >
        STUDYFLOW<span className="text-[#8fbd9d]">_</span>
      </Link>

      <div className="hidden items-center gap-12 text-sm tracking-wider text-zinc-300 md:flex">
        <Link
          href="/#features"
          className="transition hover:text-[#8fbd9d]"
        >
          FEATURES
        </Link>

        <Link
          href="/#how-it-works"
          className="transition hover:text-[#8fbd9d]"
        >
          HOW IT WORKS
        </Link>

        <Link
          href="/login"
          className="transition hover:text-[#8fbd9d]"
        >
          LOGIN
        </Link>
      </div>

      <Link
        href="/signup"
        className="border border-zinc-600 px-5 py-3 text-sm tracking-wider transition hover:border-[#8fbd9d] hover:bg-[#8fbd9d]/10"
      >
        GET STARTED
        <span className="ml-4 text-[#8fbd9d]">→</span>
      </Link>
    </nav>
  );
}