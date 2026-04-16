import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Guarantee from "@/components/Guarantee";
import Hero from "@/components/Hero";
import HowWeDoIt from "@/components/HowWeDoIt";
import HowWeWork from "@/components/HowWeWork";
import LeadMagnet from "@/components/LeadMagnet";
import MidCTA from "@/components/MidCTA";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Urgency from "@/components/Urgency";
import WhoWeAre from "@/components/WhoWeAre";

export default function Page() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <Testimonials />
      <Guarantee />
      <MidCTA />
      <HowWeWork />
      <Services />
      <LeadMagnet />
      <HowWeDoIt />
      <WhoWeAre />
      <Urgency />
      <FinalCTA />
      <Footer />
    </main>
  );
}
