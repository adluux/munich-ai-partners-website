import Link from "next/link";
import FadeInWrapper from "@/components/FadeInWrapper";
import { CONTENT } from "@/lib/content";

interface HowWeDoItProps {
  children?: never;
}

export default function HowWeDoIt({}: HowWeDoItProps) {
  return (
    <section className="bg-primary px-section-px py-[60px] md:py-section-py">
      <div className="mx-auto max-w-container-max">
        <FadeInWrapper className="mx-auto flex max-w-[800px] flex-col items-center gap-gap-md text-center">
          <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-white md:text-[40px]">
            {CONTENT.howWeDoIt.heading}
          </h2>
          <p className="font-sans text-base font-normal leading-[1.5] text-white">
            {CONTENT.howWeDoIt.body}
          </p>
          <Link
            href="#"
            className="font-sans text-base font-medium leading-[1.4] text-background underline-offset-4 transition-colors duration-200 hover:underline"
          >
            {CONTENT.howWeDoIt.linkLabel}
          </Link>
        </FadeInWrapper>
      </div>
    </section>
  );
}
