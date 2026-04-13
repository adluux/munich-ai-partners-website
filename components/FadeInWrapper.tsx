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
  const { isVisible, ref } = useFadeIn();

  return (
    <div
      ref={ref}
      className={clsx(
        "translate-y-5 opacity-0 transition duration-600 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100",
        isVisible && "translate-y-0 opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
