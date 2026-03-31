import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  FINAL_CTA_BUTTON,
  FINAL_CTA_HEADING,
  FINAL_CTA_TAG,
  FINAL_CTA_TRUST_SIGNALS,
} from "@/lib/content";

export function FinalCTA() {
  return (
    <section id="book" className="section-anchor section-spacing bg-dark-olive text-cream">
      <div className="site-container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream">
            {FINAL_CTA_TAG}
          </span>
          <h2 className="mt-6 font-serif text-4xl text-cream md:text-6xl">{FINAL_CTA_HEADING}</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-cream/80 md:flex-row md:flex-wrap">
            {FINAL_CTA_TRUST_SIGNALS.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
              >
                {signal}
              </span>
            ))}
          </div>
          <Link href="#book" className="button-primary mt-10 px-8 py-4 text-base">
            {FINAL_CTA_BUTTON}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
