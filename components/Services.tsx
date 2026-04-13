import AccordionList from "@/components/AccordionList";
import FadeInWrapper from "@/components/FadeInWrapper";
import SectionBadge from "@/components/SectionBadge";
import { CONTENT } from "@/lib/content";

interface ServicesProps {
  children?: never;
}

export default function Services({}: ServicesProps) {
  return (
    <section
      id="services"
      className="scroll-mt-navbar bg-card px-section-px py-[60px] md:py-section-py"
    >
      <div className="mx-auto max-w-container-max">
        <FadeInWrapper className="flex flex-col gap-gap-md">
          <SectionBadge label={CONTENT.services.badge} />
          <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
            {CONTENT.services.heading}
          </h2>
          <AccordionList items={CONTENT.services.items} />
        </FadeInWrapper>
      </div>
    </section>
  );
}
