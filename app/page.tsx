import Footer from "@/components/Footer";
import Features from "@/components/main/Features";
import Hero from "@/components/main/Hero";
import HowTo from "@/components/main/HowTo";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 px-6 py-6 bg-white drop-shadow z-10">
        <Navbar />
      </div>
      <div className="flex flex-col max-w-7xl justify-center mx-auto p-6">
        <Hero />
        <Features />
        <HowTo />
      </div>
      <div className="bg-white drop-shadow z-10 px-6 py-6">
        <Footer />
      </div>
    </>
  );
}
