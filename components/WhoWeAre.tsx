import FadeInWrapper from "@/components/FadeInWrapper";
import SectionBadge from "@/components/SectionBadge";
import { CONTENT } from "@/lib/content";

interface WhoWeAreProps {
  children?: never;
}

export default function WhoWeAre({}: WhoWeAreProps) {
  return (
    <section
      id="team"
      className="scroll-mt-navbar bg-background px-section-px py-[60px] md:py-section-py"
    >
      <div className="mx-auto max-w-container-max">
        <FadeInWrapper className="mx-auto flex max-w-[800px] flex-col items-center gap-gap-md text-center">
          <SectionBadge label={CONTENT.whoWeAre.badge} />
          <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
            {CONTENT.whoWeAre.heading}
          </h2>
          <p className="font-sans text-base font-normal leading-[1.5] text-text">
            {CONTENT.whoWeAre.body}
          </p>
        </FadeInWrapper>
      </div>
    </section>
  );
}
