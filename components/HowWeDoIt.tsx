import { clsx } from "clsx";
import Link from "next/link";
import FadeInWrapper from "./FadeInWrapper";
import { content } from "@/lib/content";

interface HowWeDoItProps {
  className?: string;
}

export default function HowWeDoIt({ className }: HowWeDoItProps) {
  return (
    <section className={clsx("bg-primary px-6 py-[60px] lg:py-[100px]", className)}>
      <FadeInWrapper className="mx-auto flex max-w-prose flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-white md:text-[40px]">
          {content.howWeDoIt.heading}
        </h2>
        <p className="font-sans text-[16px] font-normal leading-[1.5] text-white">
          {content.howWeDoIt.body}
        </p>
        <Link
          href="#"
          className="font-sans text-[16px] font-medium leading-[1.4] text-white underline-offset-4 transition hover:underline"
        >
          {content.howWeDoIt.linkLabel}
        </Link>
      </FadeInWrapper>
    </section>
  );
}
