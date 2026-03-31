import { Reveal } from "@/components/Reveal";
import { WHAT_WE_DO } from "@/lib/content";

export function WhatWeDo() {
  return (
    <section className="section-spacing bg-cream">
      <div className="site-container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl leading-tight text-dark-olive md:text-5xl">
            {WHAT_WE_DO}
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
