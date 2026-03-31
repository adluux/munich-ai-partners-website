import { Reveal } from "@/components/Reveal";
import { URGENCY } from "@/lib/content";

export function Urgency() {
  return (
    <section className="section-spacing bg-cream">
      <div className="site-container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-4xl leading-tight text-dark-olive md:text-5xl">{URGENCY}</p>
        </Reveal>
      </div>
    </section>
  );
}
