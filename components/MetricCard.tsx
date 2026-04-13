"use client";

import useCountUp from "@/hooks/useCountUp";
import type { MetricItem } from "@/lib/content";

interface MetricCardProps {
  item: MetricItem;
}

export default function MetricCard({ item }: MetricCardProps) {
  const { displayValue, ref } = useCountUp({
    suffix: item.suffix,
    target: item.metric,
  });

  return (
    <article className="flex h-full flex-col rounded-card border border-border-light bg-card p-card-p">
      <span className="mb-6 inline-flex w-fit rounded-full bg-background px-3 py-1 font-sans text-sm font-medium leading-[1.4] text-accent">
        {item.badge}
      </span>
      <span
        ref={ref}
        className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]"
      >
        {displayValue}
      </span>
      <h3 className="mt-4 font-sans text-xl font-medium leading-[1.4] text-primary">
        {item.title}
      </h3>
      <p className="mt-4 font-sans text-base font-normal leading-[1.5] text-text-secondary">
        {item.description}
      </p>
    </article>
  );
}
