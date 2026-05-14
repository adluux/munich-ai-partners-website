"use client";

import useCountUp from "@/hooks/useCountUp";

interface MetricCardProps {
  target: number;
  prefix?: string;
  suffix: string;
  companyName: string;
  title: string;
  description: string;
}

export default function MetricCard({
  target,
  prefix = "",
  suffix,
  companyName,
  title,
  description,
}: MetricCardProps) {
  const { ref, displayValue } = useCountUp({ target, suffix });

  return (
    <article className="flex h-full flex-col gap-4 rounded-lg border border-border-light bg-card p-6 shadow-soft">
      <p className="font-sans text-[14px] font-medium leading-[1.4] text-text-secondary">
        {companyName}
      </p>
      <div
        ref={ref}
        className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]"
      >
        {prefix}
        {displayValue}
      </div>
      <h3 className="font-sans text-[20px] font-medium leading-[1.4] text-primary">
        {title}
      </h3>
      <p className="font-sans text-[16px] font-normal leading-[1.5] text-text-secondary">
        {description}
      </p>
    </article>
  );
}
