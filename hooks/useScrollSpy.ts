"use client";

import { useEffect, useState } from "react";

interface UseScrollSpyOptions {
  offset?: number;
  sectionIds: string[];
}

export default function useScrollSpy({
  offset = 72,
  sectionIds,
}: UseScrollSpyOptions): string | null {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const elements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio);

        const [topEntry] = visibleEntries;

        if (topEntry?.target instanceof HTMLElement) {
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0.15, 0.35, 0.6],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [offset, sectionIds]);

  return activeId;
}
