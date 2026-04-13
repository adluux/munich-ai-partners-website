"use client";

import { clsx } from "clsx";
import type { ReactNode } from "react";
import useFadeIn from "@/hooks/useFadeIn";

interface FadeInWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function FadeInWrapper({
  children,
  className,
}: FadeInWrapperProps) {
  const { ref, isVisible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-600 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
