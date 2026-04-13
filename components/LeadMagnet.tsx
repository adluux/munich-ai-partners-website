import Link from "next/link";
import FadeInWrapper from "@/components/FadeInWrapper";
import { CONTENT } from "@/lib/content";

interface LeadMagnetProps {
  children?: never;
}

export default function LeadMagnet({}: LeadMagnetProps) {
  return (
    <section className="bg-background px-section-px py-[60px] md:py-section-py">
      <div className="mx-auto max-w-container-max">
        <FadeInWrapper className="mx-auto max-w-[700px]">
          <div className="rounded-card border border-border-light bg-card p-card-p text-center">
            <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
              {CONTENT.leadMagnet.heading}
            </h2>
            <p className="mt-gap-sm font-sans text-base font-normal leading-[1.5] text-text-secondary">
              {CONTENT.leadMagnet.body}
            </p>
            <Link
              href="#"
              className="mt-gap-md inline-flex items-center justify-center rounded-button border border-accent bg-transparent px-6 py-3 font-sans text-base font-semibold leading-[1.3] text-accent transition duration-200 ease-in hover:scale-[1.02] hover:shadow-button active:scale-[1.02]"
            >
              {CONTENT.leadMagnet.buttonLabel}
            </Link>
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
}
