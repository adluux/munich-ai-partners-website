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
      className={clsx("bg-background px-6 py-[60px] lg:py-[100px]", className)}
    >
      <FadeInWrapper className="mx-auto max-w-narrow">
        <div className="flex flex-col items-center gap-6 rounded-lg border border-border-light bg-card p-6 text-center shadow-soft md:p-8">
          <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
            {content.leadMagnet.heading}
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[1.5] text-text-secondary">
            {content.leadMagnet.body}
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-4 font-sans text-[16px] font-semibold leading-[1.3] text-primary transition duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            {content.leadMagnet.ctaLabel}
          </Link>
        </div>
      </FadeInWrapper>
    </section>
  );
}
