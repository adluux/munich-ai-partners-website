import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { HOW_WE_DO_IT, HOW_WE_DO_IT_LINK_TEXT } from "@/lib/content";

export function HowWeDoIt() {
  return (
    <section id="about" className="section-anchor section-spacing bg-dark-olive text-cream">
      <div className="site-container">
        <Reveal className="mx-auto max-w-5xl">
          <div className="surface-card border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:p-12">
            <p className="font-serif text-3xl leading-tight text-cream md:text-4xl">
              Others sell slides. We stay for the outcome.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cream/80">{HOW_WE_DO_IT}</p>
            <Link
              href="#"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-cream underline-offset-4 hover:underline"
            >
              {HOW_WE_DO_IT_LINK_TEXT}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
