import { clsx } from "clsx";
import AccordionList from "./AccordionList";
import FadeInWrapper from "./FadeInWrapper";
import { content } from "@/lib/content";

interface ServicesProps {
  className?: string;
}

export default function Services({ className }: ServicesProps) {
  return (
    <section
      id="services"
      className={clsx(
        "scroll-mt-navbar bg-card px-6 pb-[60px] pt-4 lg:pb-[100px] lg:pt-8",
        className,
      )}
    >
      <div className="mx-auto max-w-container">
        <FadeInWrapper className="flex flex-col gap-4">
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
