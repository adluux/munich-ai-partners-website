"use client";

import { useEffect, useRef, useState } from "react";

type MetricValueProps = {
  value: number;
  suffix?: string;
};

export function MetricValue({ value, suffix = "" }: MetricValueProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        let frame = 0;
        const frames = 32;
        const tick = () => {
          frame += 1;
          const nextValue = Math.round((value * frame) / frames);
          setDisplayValue(nextValue);

          if (frame < frames) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}
