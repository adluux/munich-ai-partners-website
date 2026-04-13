import FadeInWrapper from "@/components/FadeInWrapper";
import SectionBadge from "@/components/SectionBadge";
import { CONTENT } from "@/lib/content";

interface HowWeWorkProps {
  children?: never;
}

export default function HowWeWork({}: HowWeWorkProps) {
  return (
    <section className="bg-card px-section-px py-[60px] md:py-section-py">
      <div className="mx-auto max-w-container-max">
        <FadeInWrapper className="mx-auto flex max-w-[800px] flex-col items-center gap-gap-md text-center">
          <SectionBadge label={CONTENT.howWeWork.badge} />
          <p className="font-sans text-base font-normal leading-[1.5] text-text">
            {CONTENT.howWeWork.body}
          </p>
        </FadeInWrapper>
      </div>
    </section>
  );
}
