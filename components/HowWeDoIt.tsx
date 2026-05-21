import { clsx } from "clsx";
import Link from "next/link";
import FadeInWrapper from "./FadeInWrapper";
import type { SiteContent } from "@/lib/content";

interface HowWeDoItProps {
  className?: string;
  content: SiteContent;
}

export default function HowWeDoIt({ className, content }: HowWeDoItProps) {
  return (
    <section
      id="about"
      className={clsx("scroll-mt-navbar bg-card px-6 py-[60px] lg:py-[100px]", className)}
    >
      <FadeInWrapper className="mx-auto flex max-w-prose flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[34px]">
          {content.howWeDoIt.heading}
        </h2>
        <p className="font-sans text-[16px] font-normal leading-[1.5] text-text">
          {content.howWeDoIt.body}
        </p>
        <Link
          href={content.howWeDoIt.linkHref}
          target="_blank"
          rel="noreferrer"
          className="font-sans text-[16px] font-medium leading-[1.4] text-primary underline-offset-4 transition hover:underline"
        >
          {content.howWeDoIt.linkLabel}
        </Link>
      </FadeInWrapper>
    </section>
  );
}
