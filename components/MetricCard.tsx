"use client";

import useCountUp from "@/hooks/useCountUp";

interface MetricCardProps {
  target: number;
  suffix: string;
  companyName: string;
  logoLabel: string;
  title: string;
  description: string;
}

export default function MetricCard({
  target,
  suffix,
  companyName,
  logoLabel,
  title,
  description,
}: MetricCardProps) {
  const { ref, displayValue } = useCountUp({ target, suffix });

  return (
    <article className="flex h-full flex-col gap-4 rounded-lg border border-border-light bg-card p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-light bg-background font-sans text-[12px] font-medium leading-[1.4] text-text-secondary">
          {logoLabel}
        </div>
        <p className="font-sans text-[14px] font-medium leading-[1.4] text-text-secondary">
          {companyName}
        </p>
      </div>
      <div
        ref={ref}
        className="font-heading text-[28px] font-bold leading-[1.3] text-accent md:text-[40px]"
      >
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
