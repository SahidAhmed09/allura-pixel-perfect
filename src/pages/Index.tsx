import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackgroundScene from "@/components/BackgroundScene";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundScene />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WhyChooseUs />
        <Services />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
