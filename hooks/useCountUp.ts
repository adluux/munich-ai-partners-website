"use client";

import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  target: number;
  duration?: number;
  suffix?: string;
}

interface UseCountUpResult {
  ref: RefObject<HTMLDivElement>;
  displayValue: string;
}

export default function useCountUp({
  target,
  duration = 1000,
  suffix = "",
}: UseCountUpOptions): UseCountUpResult {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setDisplayValue(`${target}${suffix}`);
      return undefined;
    }

    const node = ref.current;

    if (!node) {
      return undefined;
    }

    let frameId = 0;
    let hasStarted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) {
          return;
        }

        hasStarted = true;
        const startTime = performance.now();

        const tick = (timestamp: number) => {
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const currentValue = Math.round(target * progress);

          setDisplayValue(`${currentValue}${suffix}`);

          if (progress < 1) {
            frameId = window.requestAnimationFrame(tick);
          }
        };

        frameId = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [duration, suffix, target]);

  return { ref, displayValue };
}
