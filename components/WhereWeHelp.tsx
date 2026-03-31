"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SERVICES, SERVICES_HEADING, SERVICES_TAG } from "@/lib/content";

export function WhereWeHelp() {
  const [openId, setOpenId] = useState("01");

  return (
    <section id="services" className="section-anchor section-spacing bg-off-white">
      <div className="site-container">
        <Reveal>
          <span className="section-tag">{SERVICES_TAG}</span>
          <h2 className="mt-5 font-serif text-4xl text-dark-olive md:text-5xl">{SERVICES_HEADING}</h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {SERVICES.map((service) => {
            const isOpen = openId === service.id;

            return (
              <Reveal key={service.id}>
                <article className="surface-card overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-start gap-4 p-6 text-left hover:bg-cream"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? "" : service.id)}
                  >
                    <span className="w-12 shrink-0 pt-1 text-sm font-semibold text-olive">{service.id}</span>
                    <span className="flex-1">
                      <span className="block font-serif text-2xl text-dark-olive">{service.title}</span>
                      <span className="mt-2 block text-sm text-medium-gray">{service.subtitle}</span>
                      <span
                        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ${
                          isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden text-base leading-7 text-charcoal">
                          {service.description}
                        </span>
                      </span>
                    </span>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-olive transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
