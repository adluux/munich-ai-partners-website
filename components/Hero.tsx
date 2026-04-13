import { clsx } from "clsx";
import Link from "next/link";
import FadeInWrapper from "./FadeInWrapper";
import { content } from "@/lib/content";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={clsx("hero-surface px-6 py-[60px] lg:py-[100px]", className)}>
      <FadeInWrapper className="mx-auto flex min-h-[65vh] max-w-container items-center justify-center">
        <div className="flex max-w-prose flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center rounded-lg bg-accent px-4 py-2 font-sans text-[16px] font-medium leading-[1.4] text-white">
            {content.hero.badgeLabel}
          </span>
          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-[36px] font-bold leading-[1.2] text-white md:text-[60px]">
              {content.hero.headline}
            </h1>
            <p className="font-sans text-[16px] font-medium leading-[1.4] text-white md:text-[20px]">
              {content.hero.subheadline}
            </p>
          </div>
          <Link
            href="#book"
            className="inline-flex items-center justify-center rounded-lg bg-cta px-6 py-4 font-sans text-[16px] font-semibold leading-[1.3] text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            {content.hero.ctaLabel}
          </Link>
        </div>
      </FadeInWrapper>
    </section>
  );
}
