import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_TAG,
  PRIMARY_CTA,
  SECONDARY_CTA,
} from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark-olive text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(107,107,78,0.35),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_55%)]" />
      <div className="site-container relative flex min-h-[84vh] items-center py-20 md:min-h-[88vh]">
        <Reveal className="w-full">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-olive px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream">
              {HERO_TAG}
            </span>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.94] text-cream sm:text-6xl lg:text-7xl">
              {HERO_HEADLINE}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/80 sm:text-xl">
              {HERO_SUBHEADLINE}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#book" className="button-primary">
                {PRIMARY_CTA}
              </Link>
              <Link href="#testimonials" className="button-ghost-light">
                {SECONDARY_CTA}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
