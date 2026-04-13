import FadeInWrapper from "@/components/FadeInWrapper";
import MetricCard from "@/components/MetricCard";
import SectionBadge from "@/components/SectionBadge";
import { CONTENT } from "@/lib/content";

interface TestimonialsProps {
  children?: never;
}

export default function Testimonials({}: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className="scroll-mt-navbar bg-background px-section-px py-[60px] md:py-section-py"
    >
      <div className="mx-auto max-w-container-max">
        <FadeInWrapper className="flex flex-col gap-gap-md">
          <SectionBadge label={CONTENT.testimonials.badge} />
          <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
            {CONTENT.testimonials.heading}
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-gap-lg">
            {CONTENT.testimonials.items.map((item) => (
              <FadeInWrapper key={item.title}>
                <MetricCard item={item} />
              </FadeInWrapper>
            ))}
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
}
