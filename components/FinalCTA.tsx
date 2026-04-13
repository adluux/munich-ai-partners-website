import Link from "next/link";
import FadeInWrapper from "@/components/FadeInWrapper";
import SectionBadge from "@/components/SectionBadge";
import { CONTENT } from "@/lib/content";

interface FinalCTAProps {
  children?: never;
}

export default function FinalCTA({}: FinalCTAProps) {
  return (
    <section
      id="book"
      className="scroll-mt-navbar bg-primary px-section-px py-[60px] md:py-section-py"
    >
      <div className="mx-auto max-w-container-max">
        <FadeInWrapper className="mx-auto flex max-w-[800px] flex-col items-center gap-gap-md text-center">
          <SectionBadge label={CONTENT.finalCta.badge} variant="dark" />
          <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-white md:text-[40px]">
            {CONTENT.finalCta.heading}
          </h2>
          <p className="font-sans text-base font-normal leading-[1.5] text-white">
            {CONTENT.finalCta.subheading}
          </p>
          <Link
            href="#book"
            className="inline-flex items-center justify-center rounded-button bg-cta px-8 py-4 font-sans text-base font-semibold leading-[1.3] text-white transition duration-200 ease-in hover:scale-[1.02] hover:shadow-button active:scale-[1.02]"
          >
            {CONTENT.finalCta.buttonLabel}
          </Link>
        </FadeInWrapper>
      </div>
    </section>
  );
}
