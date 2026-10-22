import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Pricing />
      <Projects showTitle={true} />
      <ContactSection />
      <CallToAction />
    </>
  );
}
