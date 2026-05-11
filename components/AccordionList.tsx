"use client";

import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  description: string;
}

interface AccordionListProps {
  items: readonly AccordionItem[];
}

export default function AccordionList({ items }: AccordionListProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(["01"]));

  const handleToggle = (id: string) => {
    setOpenIds((previousValue) => {
      const nextValue = new Set(previousValue);

      if (nextValue.has(id)) {
        nextValue.delete(id);
      } else {
        nextValue.add(id);
      }

      return nextValue;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const buttonId = `accordion-button-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <article key={item.id} className="rounded-lg border border-border-light bg-card p-6 shadow-soft">
            <button
              id={buttonId}
              type="button"
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-start gap-4 text-left"
            >
              <span className="font-sans text-[16px] font-medium leading-[1.4] text-text-secondary md:text-[20px]">
                {item.id}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-2">
                <span className="font-sans text-[16px] font-medium leading-[1.4] text-primary md:text-[20px]">
                  {item.title}
                </span>
              </span>
              <ChevronDown
                className={clsx(
                  "mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={clsx(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <p className="pt-4 font-sans text-[16px] font-normal leading-[1.5] text-text">
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
