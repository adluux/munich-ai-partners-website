import Link from "next/link";
import { LEAD_MAGNET_BODY, LEAD_MAGNET_HEADING } from "@/lib/content";

export function LeadMagnet() {
  return (
    <section className="section-spacing bg-cream-dark">
      <div className="site-container">
        <div className="rounded-[2rem] bg-cream p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-charcoal md:text-3xl">{LEAD_MAGNET_HEADING}</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{LEAD_MAGNET_BODY}</p>
          <Link href="#" className="button-secondary mt-8">
            {LEAD_MAGNET_HEADING}
          </Link>
        </div>
      </div>
    </section>
  );
}
