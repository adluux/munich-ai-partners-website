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
          className="inline-flex items-center justify-center rounded-lg bg-cta px-6 py-4 font-sans text-[16px] font-semibold leading-[1.3] text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          {content.midCta.label}
        </a>
      </FadeInWrapper>
    </section>
  );
}
