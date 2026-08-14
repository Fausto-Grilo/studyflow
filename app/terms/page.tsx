import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#080d11] px-6 py-32 text-[#e8e8e8] lg:px-14">

        <Navbar/>

      <div className="mx-auto max-w-3xl">
        <p className="mb-5 text-sm tracking-widest text-[#8fbd9d]">
          // LEGAL
        </p>

        <h1 className="text-4xl tracking-tight sm:text-5xl">
          Terms of Service
        </h1>

        <p className="mt-4 text-sm text-zinc-500">
          Last updated: August 14, 2026
        </p>

        <div className="mt-16 space-y-12 text-sm leading-7 text-zinc-400">
          <section>
            <h2 className="mb-4 text-xl text-[#e8e8e8]">
              1. Acceptance of Terms
            </h2>

            <p>
              By accessing or using StudyFlow, you agree to comply with these
              Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl text-[#e8e8e8]">
              2. Use of the Service
            </h2>

            <p>
              StudyFlow provides tools to help users organize their studies,
              manage tasks and track academic progress. You agree to use the
              service responsibly and in accordance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl text-[#e8e8e8]">
              3. User Accounts
            </h2>

            <p>
              You are responsible for maintaining the security of your account
              and for any activity that occurs under your account.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl text-[#e8e8e8]">
              4. User Content
            </h2>

            <p>
              You retain ownership of the information and content you add to
              StudyFlow. You are responsible for ensuring that your content
              does not violate applicable laws or the rights of others.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl text-[#e8e8e8]">
              5. Changes to the Service
            </h2>

            <p>
              StudyFlow may modify, update or discontinue parts of the service
              when necessary.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl text-[#e8e8e8]">
              6. Contact
            </h2>

            <p>
              If you have questions about these Terms of Service, please
              contact us.
            </p>
          </section>
        </div>
      </div>

      <div className="py-10">
        <Footer/>
      </div>
    </main>
  );
}