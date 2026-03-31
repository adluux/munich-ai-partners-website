import Link from "next/link";
import { CTA_TEXT, HERO_HEADLINE, HERO_SUBHEADLINE } from "@/lib/content";

export function Hero() {
  return (
    <section className="bg-charcoal text-cream">
      <div className="site-container flex min-h-[calc(100svh-73px)] items-center py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {HERO_HEADLINE}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-cream/80 sm:text-lg">
            {HERO_SUBHEADLINE}
          </p>
          <Link href="#book" className="button-primary mt-8">
            {CTA_TEXT}
          </Link>
        </div>
      </div>
    </section>
  );
}
