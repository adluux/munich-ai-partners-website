import { clsx } from "clsx";
import AccordionList from "./AccordionList";
import FadeInWrapper from "./FadeInWrapper";
import SectionBadge from "./SectionBadge";
import { content } from "@/lib/content";

interface ServicesProps {
  className?: string;
}

export default function Services({ className }: ServicesProps) {
  return (
    <section
      id="services"
      className={clsx(
        "scroll-mt-navbar bg-card px-6 py-[60px] lg:py-[100px]",
        className,
      )}
    >
      <div className="mx-auto max-w-container">
        <FadeInWrapper className="flex flex-col gap-4">
          <SectionBadge label={content.services.tag} />
          <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
            {content.services.heading}
          </h2>
        </FadeInWrapper>
        <div className="mt-8 lg:mt-12">
          <AccordionList items={content.services.items} />
        </div>
      </div>
    </section>
  );
}
