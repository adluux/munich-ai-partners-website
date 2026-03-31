import Link from "next/link";
import { CTA_FINAL, CTA_TEXT, URGENCY } from "@/lib/content";

export function Urgency() {
  return (
    <section id="book" className="section-anchor section-spacing bg-charcoal text-cream">
      <div className="site-container max-w-3xl text-center">
        <h2 className="sr-only">{CTA_FINAL}</h2>
        <p className="text-balance text-xl leading-8 text-cream/90 md:text-2xl md:leading-9">{URGENCY}</p>
        <p className="mt-10 text-2xl font-semibold text-cream md:text-3xl">{CTA_FINAL}</p>
        <Link href="#book" className="button-primary mt-8 px-8 py-4 text-base">
          {CTA_TEXT}
        </Link>
      </div>
    </section>
  );
}
