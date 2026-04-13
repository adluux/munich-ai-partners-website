import FadeInWrapper from "@/components/FadeInWrapper";
import { CONTENT } from "@/lib/content";

interface GuaranteeProps {
  children?: never;
}

export default function Guarantee({}: GuaranteeProps) {
  return (
    <section className="bg-card px-section-px py-[60px] md:py-section-py">
      <div className="mx-auto max-w-container-max">
        <FadeInWrapper className="mx-auto max-w-[700px] text-center">
          <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
            {CONTENT.guarantee.text}
          </h2>
        </FadeInWrapper>
      </div>
    </section>
  );
}
