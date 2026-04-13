import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import SectionBadge from "./SectionBadge";
import { content } from "@/lib/content";

interface WhoWeAreProps {
  className?: string;
}

export default function WhoWeAre({ className }: WhoWeAreProps) {
  return (
    <section
      id="team"
      className={clsx(
        "scroll-mt-navbar bg-background px-6 py-[60px] lg:py-[100px]",
        className,
      )}
    >
      <FadeInWrapper className="mx-auto flex max-w-prose flex-col items-center gap-4 text-center">
        <SectionBadge label={content.team.tag} />
        <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
          {content.team.heading}
        </h2>
        <p className="font-sans text-[16px] font-normal leading-[1.5] text-text">
          {content.team.body}
        </p>
      </FadeInWrapper>
    </section>
  );
}
