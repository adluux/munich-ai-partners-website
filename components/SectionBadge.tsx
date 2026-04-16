import { clsx } from "clsx";

interface SectionBadgeProps {
  label: string;
  variant?: "light" | "dark";
  align?: "start" | "center";
}

export default function SectionBadge({
  label,
  variant = "light",
  align = "start",
}: SectionBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-block w-fit rounded-full px-3 py-1 font-sans text-[14px] font-medium leading-[1.4]",
        align === "start" && "self-start",
        align === "center" && "self-center",
        variant === "light" && "bg-accent/10 text-accent",
        variant === "dark" && "border border-white/20 bg-white/10 text-white",
      )}
    >
      {label}
    </span>
  );
}
