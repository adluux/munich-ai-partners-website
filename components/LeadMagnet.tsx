import { clsx } from "clsx";
import Link from "next/link";
import FadeInWrapper from "./FadeInWrapper";
import { content } from "@/lib/content";

interface LeadMagnetProps {
  className?: string;
}

export default function LeadMagnet({ className }: LeadMagnetProps) {
  return (
    <section
      className={clsx("bg-background px-6 pb-[60px] pt-6 lg:pb-[100px] lg:pt-8", className)}
    >
      <FadeInWrapper className="mx-auto max-w-narrow">
        <div className="flex flex-col items-center gap-6 rounded-lg border border-border-light bg-card p-6 text-center shadow-soft md:p-8">
          <h3 className="font-heading text-[22px] font-semibold leading-[1.3] text-primary md:text-[28px]">
            {content.leadMagnet.heading}
          </h3>
          <p className="font-sans text-[16px] font-normal leading-[1.5] text-text">
            {content.leadMagnet.body}
          </p>
          <Link
            href="#"
            className="mx-auto inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-sans text-[16px] font-semibold leading-[1.3] text-primary transition duration-300 hover:bg-primary hover:text-white"
          >
            {content.leadMagnet.ctaLabel}
          </Link>
        </div>
      </FadeInWrapper>
    </section>
  );
}
