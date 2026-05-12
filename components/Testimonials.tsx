import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import MetricCard from "./MetricCard";
import { content } from "@/lib/content";

interface TestimonialsProps {
  className?: string;
}

export default function Testimonials({ className }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className={clsx(
        "scroll-mt-navbar border-b border-border-light bg-background px-6 pb-[60px] pt-12 lg:pb-[100px] lg:pt-14",
        className,
      )}
    >
      <div className="mx-auto max-w-container">
        <FadeInWrapper className="flex flex-col gap-3">
          <h2 className="max-w-prose font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
            {content.testimonials.heading}
          </h2>
        </FadeInWrapper>
        <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-20">
          {content.testimonials.cards.map((card) => (
            <FadeInWrapper key={card.id}>
              <MetricCard
                target={card.target}
                suffix={card.suffix}
                companyName={card.companyName}
                logoLabel={card.logoLabel}
                title={card.title}
                description={card.description}
              />
            </FadeInWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
