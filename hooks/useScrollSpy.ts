"use client";

import { useEffect, useState } from "react";

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
}

export default function useScrollSpy({
  sectionIds,
  offset = 72,
}: UseScrollSpyOptions): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);

      const currentSection =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();

          return rect.top <= offset + 1 && rect.bottom > offset + 1;
        }) ?? null;

      setActiveId(currentSection?.id ?? null);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset, sectionIds]);

  return activeId;
}
