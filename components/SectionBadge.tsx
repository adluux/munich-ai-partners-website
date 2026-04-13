import { clsx } from "clsx";

interface SectionBadgeProps {
  label: string;
  variant?: "dark" | "light";
}

export default function SectionBadge({
  label,
  variant = "light",
}: SectionBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 font-sans text-sm font-medium leading-[1.4]",
        variant === "light" && "bg-accent/15 text-accent",
        variant === "dark" && "bg-white/15 text-white",
      )}
    >
      {label}
    </span>
  );
}
