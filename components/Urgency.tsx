import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import { content } from "@/lib/content";

interface UrgencyProps {
  className?: string;
}

export default function Urgency({ className }: UrgencyProps) {
  return (
    <section className={clsx("bg-background px-6 py-[60px] lg:py-[100px]", className)}>
      <FadeInWrapper className="mx-auto max-w-prose border-y border-border-light py-10 text-center md:py-12">
        <h2 className="font-heading text-[24px] font-normal italic leading-[1.45] text-primary md:text-[32px]">
          {content.urgency.copy}
        </h2>
      </FadeInWrapper>
    </section>
  );
}
