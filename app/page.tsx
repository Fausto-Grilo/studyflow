import DashboardPreview from "@/components/homepage/DashboardPreview";
import NavBar from "../components/Navbar"
import Hero from "../components/homepage/Hero"
import Features from "@/components/homepage/Features";
import HowItWorks from "@/components/homepage/HowItWorks";
import CTA from "@/components/homepage/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    
    <>
    
    <NavBar/>
    


      <main className="min-h-screen bg-[#080d11] text-[#e8e8e8]">

        <section className="mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pt-24 lg:px-14">

          <div className="grid w-full items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <Hero/>
            <DashboardPreview/>
          </div>

        </section>

        <Features/>
        <HowItWorks/>
        <CTA/>
        <Footer/>

      </main>

    </>
  );
}