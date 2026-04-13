import Link from "next/link";
import FadeInWrapper from "@/components/FadeInWrapper";
import SectionBadge from "@/components/SectionBadge";
import { CONTENT } from "@/lib/content";

interface HeroProps {
  children?: never;
}

export default function Hero({}: HeroProps) {
  return (
    <section id="hero" className="min-h-[500px] bg-primary px-section-px">
      <div className="mx-auto flex h-[65vh] max-w-container-max items-center justify-center">
        <FadeInWrapper className="flex max-w-4xl flex-col items-center gap-gap-md text-center">
          <SectionBadge label={CONTENT.hero.badge} variant="dark" />
          <h1 className="font-heading text-[36px] font-bold leading-[1.2] text-white md:text-[60px]">
            {CONTENT.hero.heading}
          </h1>
          <p className="max-w-2xl font-sans text-base font-medium leading-[1.4] text-white md:text-[20px]">
            {CONTENT.hero.subheading}
          </p>
          <div className="flex w-full flex-col gap-gap-sm md:w-auto md:flex-row">
            <Link
              href="#book"
              className="inline-flex items-center justify-center rounded-button bg-cta px-6 py-3 font-sans text-base font-semibold leading-[1.3] text-white transition duration-200 ease-in hover:scale-[1.02] hover:shadow-button active:scale-[1.02]"
            >
              {CONTENT.hero.primaryCta}
            </Link>
            <Link
              href="#testimonials"
              className="inline-flex items-center justify-center rounded-button border border-white bg-transparent px-6 py-3 font-sans text-base font-semibold leading-[1.3] text-white transition duration-200 ease-in hover:scale-[1.02] hover:shadow-button active:scale-[1.02]"
            >
              {CONTENT.hero.secondaryCta}
            </Link>
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
}
