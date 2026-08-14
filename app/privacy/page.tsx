import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#080d11] px-6 py-32 text-[#e8e8e8] lg:px-14">

        <Navbar/>

      <div className="mx-auto max-w-3xl">
        <p className="mb-5 text-sm tracking-widest text-[#8fbd9d]">
          // LEGAL
        </p>

        <h1 className="text-4xl tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-zinc-500">
          Last updated: August 14, 2026
        </p>

        <div className="mt-16 space-y-12 text-sm leading-7 text-zinc-400">
          <section>
            <h2 className="mb-4 text-xl text-[#e8e8e8]">
              1. Introduction
            </h2>

            <p>
              StudyFlow respects your privacy and is committed to protecting
              your personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl text-[#e8e8e8]">
              2. Information We Collect
            </h2>

            <p>
              We may collect information necessary to provide and improve the
              StudyFlow service, including account information and data you
              choose to add to the platform.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl text-[#e8e8e8]">
              3. How We Use Your Information
            </h2>

            <p>
              Your information is used to provide, maintain and improve
              StudyFlow and its features.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl text-[#e8e8e8]">
              4. Data Security
            </h2>

            <p>
              We take reasonable measures to protect your information from
              unauthorized access, alteration or disclosure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl text-[#e8e8e8]">
              5. Contact
            </h2>

            <p>
              If you have any questions about this Privacy Policy, please
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