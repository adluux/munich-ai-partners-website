"use client";

import Link from "next/link";
import { MetricValue } from "@/components/MetricValue";
import { Reveal } from "@/components/Reveal";
import {
  TESTIMONIALS,
  TESTIMONIALS_CTA,
  TESTIMONIALS_HEADING,
  TESTIMONIALS_TAG,
} from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-anchor section-spacing bg-cream">
      <div className="site-container">
        <Reveal>
          <span className="section-tag">{TESTIMONIALS_TAG}</span>
          <h2 className="mt-5 font-serif text-4xl text-dark-olive md:text-5xl">
            {TESTIMONIALS_HEADING}
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.title} className={index > 0 ? "delay-100" : ""}>
              <article className="surface-card h-full p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif text-5xl text-dark-olive">
                      <MetricValue value={item.metric} suffix={item.metricSuffix} />
                    </p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-olive">
                      {item.metricLabel}
                    </p>
                  </div>
                  <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-dark-olive">
                    {item.summary}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl text-dark-olive">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-charcoal">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link href="#book" className="button-secondary">
              {TESTIMONIALS_CTA}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
