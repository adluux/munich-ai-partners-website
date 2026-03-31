"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SERVICES } from "@/lib/content";

export function WhereWeHelp() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="services" className="section-anchor section-spacing bg-cream-dark">
      <div className="site-container">
        <h2 className="sr-only">AI implementation</h2>
        <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
          {SERVICES.map((service) => {
            const isOpen = openId === service.id;

            return (
              <div key={service.id} className="py-5">
                <button
                  type="button"
                  className="flex w-full items-start gap-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                >
                  <span className="w-12 shrink-0 pt-1 text-sm text-muted">{service.id}</span>
                  <span className="flex-1">
                    <span className="block text-xl font-medium text-charcoal md:text-2xl">
                      {service.title}
                    </span>
                    {isOpen ? (
                      <span className="mt-3 block max-w-3xl text-base leading-7 text-muted">
                        {service.description}
                      </span>
                    ) : null}
                  </span>
                  <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
