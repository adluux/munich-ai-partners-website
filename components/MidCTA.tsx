import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import { content } from "@/lib/content";

interface MidCTAProps {
  className?: string;
}

export default function MidCTA({ className }: MidCTAProps) {
  return (
    <section
      className={clsx("bg-background px-6 pb-[60px] pt-0 lg:pb-[100px]", className)}
    >
      <FadeInWrapper className="mx-auto flex max-w-container justify-center">
        <a
          href={content.booking.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-cta px-8 py-[14px] font-sans text-[16px] font-semibold leading-[1.3] text-white transition duration-300 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        >
          {content.midCta.label}
        </a>
      </FadeInWrapper>
    </section>
  );
}
