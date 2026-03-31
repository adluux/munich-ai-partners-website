import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LEAD_MAGNET_BODY, LEAD_MAGNET_CTA, LEAD_MAGNET_HEADING } from "@/lib/content";

export function LeadMagnet() {
  return (
    <section className="section-spacing bg-cream">
      <div className="site-container">
        <Reveal className="mx-auto max-w-3xl">
          <div className="surface-card p-8 text-center md:p-12">
            <h2 className="font-serif text-4xl text-dark-olive md:text-5xl">{LEAD_MAGNET_HEADING}</h2>
            <p className="mt-5 text-lg leading-8 text-charcoal">{LEAD_MAGNET_BODY}</p>
            <Link href="#" className="button-secondary mt-8">
              {LEAD_MAGNET_CTA}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
