
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Verticals from "@/components/Verticals";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Verticals />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
