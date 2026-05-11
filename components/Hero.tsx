import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import { content } from "@/lib/content";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={clsx("hero-surface px-6 py-10 lg:py-12", className)}>
      <FadeInWrapper className="mx-auto flex min-h-[360px] max-w-container items-center py-2 md:min-h-[42vh]">
        <div className="flex max-w-prose flex-col items-start gap-6 text-left">
          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-[36px] font-bold leading-[1.2] text-primary md:text-[60px]">
              {content.hero.headline}
            </h1>
            <p className="font-sans text-[16px] font-medium leading-[1.4] text-text-secondary md:text-[20px]">
              {content.hero.subheadline}
            </p>
          </div>
          <a
            href={content.booking.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-cta px-6 py-4 font-sans text-[16px] font-semibold leading-[1.3] text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            {content.hero.ctaLabel}
          </a>
        </div>
      </FadeInWrapper>
    </section>
  );
}
