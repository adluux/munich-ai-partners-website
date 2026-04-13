"use client";

import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { KeyboardEvent } from "react";
import type { ServiceItem } from "@/lib/content";

interface AccordionListProps {
  items: ServiceItem[];
}

export default function AccordionList({ items }: AccordionListProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle(id);
    }
  };

  return (
    <div className="flex flex-col gap-gap-sm">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `service-button-${item.id}`;
        const panelId = `service-panel-${item.id}`;

        return (
          <article
            key={item.id}
            className="rounded-card border border-border-light bg-white"
          >
            <button
              id={buttonId}
              type="button"
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => handleToggle(item.id)}
              onKeyDown={(event) => handleKeyDown(event, item.id)}
              className="flex w-full items-start justify-between gap-gap-sm p-card-p text-left"
            >
              <div className="flex min-w-0 flex-1 gap-gap-sm">
                <span className="w-10 shrink-0 font-sans text-base font-medium leading-[1.4] text-accent md:text-[20px]">
                  {item.id}
                </span>
                <div className="min-w-0">
                  <h3 className="font-sans text-base font-medium leading-[1.4] text-primary md:text-[20px]">
                    {item.title}
                  </h3>
                </div>
              </div>
              <ChevronDown
                className={clsx(
                  "mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-400 ease-in-out",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={clsx(
                "grid transition-all duration-400 ease-in-out",
                isOpen && "grid-rows-[1fr] opacity-100",
                !isOpen && "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-card-p pb-card-p font-sans text-base font-normal leading-[1.5] text-text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
