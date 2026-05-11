import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import SectionBadge from "./SectionBadge";
import { content } from "@/lib/content";

interface FinalCTAProps {
  className?: string;
}

export default function FinalCTA({ className }: FinalCTAProps) {
  return (
    <section
      id="book"
      className={clsx(
        "scroll-mt-navbar bg-background px-6 py-[60px] lg:py-[100px]",
        className,
      )}
    >
      <FadeInWrapper className="mx-auto flex max-w-narrow flex-col items-center gap-6 text-center">
        <SectionBadge label={content.finalCta.tag} align="center" />
        <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
          {content.finalCta.heading}
        </h2>
        <p className="font-sans text-[16px] font-medium leading-[1.4] text-text md:text-[20px]">
          {content.finalCta.subheadline}
        </p>
        <a
          href={content.booking.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-cta px-6 py-4 font-sans text-[16px] font-semibold leading-[1.3] text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          {content.finalCta.ctaLabel}
        </a>
      </FadeInWrapper>
    </section>
  );
}
