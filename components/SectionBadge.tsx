import { clsx } from "clsx";

interface SectionBadgeProps {
  label: string;
  variant?: "light" | "dark";
}

export default function SectionBadge({
  label,
  variant = "light",
}: SectionBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-lg px-4 py-2 font-sans text-[16px] font-medium leading-[1.4]",
        variant === "light" && "bg-accent/10 text-accent",
        variant === "dark" && "border border-white/20 bg-white/10 text-white",
      )}
    >
      {label}
    </span>
  );
}
