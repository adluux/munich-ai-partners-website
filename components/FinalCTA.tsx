import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import type { SiteContent } from "@/lib/content";

interface FinalCTAProps {
  className?: string;
  content: SiteContent;
}

export default function FinalCTA({ className, content }: FinalCTAProps) {
  return (
    <section
      id="book"
      className={clsx(
        "scroll-mt-navbar bg-accent-bg px-6 py-[60px] lg:py-[100px]",
        className,
      )}
    >
      <FadeInWrapper className="mx-auto flex max-w-narrow flex-col items-center gap-5 text-center">
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
          className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-[14px] font-sans text-[16px] font-semibold leading-[1.3] text-white transition duration-300 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(37,99,235,0.25)]"
        >
          {content.finalCta.ctaLabel}
        </a>
      </FadeInWrapper>
    </section>
  );
}
