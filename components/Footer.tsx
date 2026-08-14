import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#080d11] px-6 py-16 text-[#e8e8e8] lg:px-14">
      <div className="mx-auto max-w-[1600px]">
        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-medium tracking-wider"
            >
              STUDYFLOW<span className="text-[#8fbd9d]">_</span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-zinc-500">
              A smarter way to organize your studies, manage your time and
              track your progress.
            </p>
          </div>

          {/* Product links */}
          <div>
            <p className="mb-5 text-xs tracking-widest text-[#8fbd9d]">
              PRODUCT
            </p>

            <div className="flex flex-col gap-3 text-sm text-zinc-500">
              <Link
                href="/#features"
                className="transition hover:text-[#e8e8e8]"
              >
                Features
              </Link>

              <Link
                href="/#how-it-works"
                className="transition hover:text-[#e8e8e8]"
              >
                How it works
              </Link>

              <Link
                href="/signup"
                className="transition hover:text-[#e8e8e8]"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Account links */}
          <div>
            <p className="mb-5 text-xs tracking-widest text-[#8fbd9d]">
              ACCOUNT
            </p>

            <div className="flex flex-col gap-3 text-sm text-zinc-500">
              <Link
                href="/login"
                className="transition hover:text-[#e8e8e8]"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="transition hover:text-[#e8e8e8]"
              >
                Create account
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} STUDYFLOW. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-zinc-400"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-zinc-400"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}