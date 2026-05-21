import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import type { SiteContent } from "@/lib/content";

interface HowWeWorkProps {
  className?: string;
  content: SiteContent;
}

export default function HowWeWork({ className, content }: HowWeWorkProps) {
  return (
    <section className={clsx("bg-background px-6 pb-0 pt-[60px] lg:pt-[100px]", className)}>
      <FadeInWrapper className="mx-auto flex max-w-container flex-col items-start gap-4 text-left">
        <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[34px]">
          {content.howWeWork.heading}
        </h2>
        <p className="max-w-narrow font-sans text-[16px] font-normal leading-[1.5] text-text">
          {content.howWeWork.body}
        </p>
      </FadeInWrapper>
    </section>
  );
}
