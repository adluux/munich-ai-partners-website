"use client";

import { useEffect, useState } from "react";
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
import { getContent, type Locale, normalizeLocale } from "@/lib/content";

export default function Page() {
  const [locale, setLocale] = useState<Locale>("en");
  const content = getContent(locale);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setLocale(normalizeLocale(params.get("lang") ?? undefined));
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);

    if (locale === "de") {
      url.searchParams.set("lang", "de");
    } else {
      url.searchParams.delete("lang");
    }

    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }, [locale]);

  return (
    <main id="main-content">
      <Navbar content={content} locale={locale} onLocaleChange={setLocale} />
      <Hero content={content} />
      <Testimonials content={content} />
      <Guarantee content={content} />
      <MidCTA content={content} />
      <HowWeWork content={content} />
      <Services content={content} />
      <LeadMagnet content={content} />
      <HowWeDoIt content={content} />
      <WhoWeAre content={content} />
      <Urgency content={content} />
      <FinalCTA content={content} />
      <Footer content={content} />
    </main>
  );
}
