"use client";

import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  duration?: number;
  suffix?: string;
  target: number;
}

interface UseCountUpResult {
  displayValue: string;
  ref: RefObject<HTMLSpanElement>;
}

export default function useCountUp({
  duration = 1000,
  suffix = "",
  target,
}: UseCountUpOptions): UseCountUpResult {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(`0${suffix}`);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setDisplayValue(`${target}${suffix}`);
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    let animationFrame = 0;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting || started) {
          return;
        }

        started = true;
        const startTime = performance.now();

        const tick = (timestamp: number) => {
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentValue = Math.round(progress * target);

          setDisplayValue(`${currentValue}${suffix}`);

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(tick);
          }
        };

        animationFrame = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [duration, suffix, target]);

  return { displayValue, ref };
}
