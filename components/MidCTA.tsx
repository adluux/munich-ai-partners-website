import Link from "next/link";
import FadeInWrapper from "@/components/FadeInWrapper";
import { CONTENT } from "@/lib/content";

interface MidCTAProps {
  children?: never;
}

export default function MidCTA({}: MidCTAProps) {
  return (
    <section className="bg-background px-section-px py-10 md:py-12">
      <div className="mx-auto max-w-container-max">
        <FadeInWrapper className="flex justify-center">
          <Link
            href="#book"
            className="inline-flex items-center justify-center rounded-button bg-cta px-6 py-3 font-sans text-base font-semibold leading-[1.3] text-white transition duration-200 ease-in hover:scale-[1.02] hover:shadow-button active:scale-[1.02]"
          >
            {CONTENT.midCta.buttonLabel}
          </Link>
        </FadeInWrapper>
      </div>
    </section>
  );
}
