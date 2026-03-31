import { Footer } from "@/components/Footer";
import { Guarantee } from "@/components/Guarantee";
import { Hero } from "@/components/Hero";
import { HowWeDoIt } from "@/components/HowWeDoIt";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Navbar } from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import { Urgency } from "@/components/Urgency";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhereWeHelp } from "@/components/WhereWeHelp";
import { WhoWeAre } from "@/components/WhoWeAre";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <Testimonials />
      <Guarantee />
      <WhatWeDo />
      <WhereWeHelp />
      <HowWeDoIt />
      <WhoWeAre />
      <Urgency />
      <LeadMagnet />
      <Footer />
    </main>
  );
}
