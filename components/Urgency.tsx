import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import { content } from "@/lib/content";

interface UrgencyProps {
  className?: string;
}

export default function Urgency({ className }: UrgencyProps) {
  return (
    <section className={clsx("bg-background px-6 py-[60px] lg:py-[100px]", className)}>
      <FadeInWrapper className="mx-auto max-w-narrow text-center">
        <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
          {content.urgency.copy}
        </h2>
      </FadeInWrapper>
    </section>
  );
}
