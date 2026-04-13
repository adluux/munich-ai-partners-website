import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import SectionBadge from "./SectionBadge";
import { content } from "@/lib/content";

interface HowWeWorkProps {
  className?: string;
}

export default function HowWeWork({ className }: HowWeWorkProps) {
  return (
    <section className={clsx("bg-card px-6 py-[60px] lg:py-[100px]", className)}>
      <FadeInWrapper className="mx-auto flex max-w-narrow flex-col items-center gap-4 text-center">
        <SectionBadge label={content.howWeWork.tag} />
        <p className="font-sans text-[16px] font-normal leading-[1.5] text-text">
          {content.howWeWork.body}
        </p>
      </FadeInWrapper>
    </section>
  );
}
