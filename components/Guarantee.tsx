import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import { content } from "@/lib/content";

interface GuaranteeProps {
  className?: string;
}

export default function Guarantee({ className }: GuaranteeProps) {
  const guaranteeLines = content.guarantee.copy.split("\n");

  return (
    <section
      className={clsx("border-b border-border-light bg-background px-6 pb-6 pt-[60px] lg:pb-8 lg:pt-[100px]", className)}
    >
      <FadeInWrapper className="mx-auto flex max-w-narrow flex-col items-center gap-4 text-center">
        <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
          {content.guarantee.headline}
        </h2>
        <p className="font-sans text-[16px] font-normal leading-[1.5] text-text">
          {guaranteeLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </FadeInWrapper>
    </section>
  );
}
