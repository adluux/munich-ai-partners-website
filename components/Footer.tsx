import { clsx } from "clsx";
import { content } from "@/lib/content";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={clsx("bg-primary px-6 py-8", className)}>
      <div className="mx-auto flex max-w-container flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="font-sans text-[14px] font-normal leading-[1.4] text-white">
          {content.brand.name} | {content.brand.tagline}
        </div>
        <div className="font-sans text-[14px] font-normal leading-[1.4] text-white">
          <a href={`mailto:${content.brand.email}`} className="hover:underline">
            {content.brand.email}
          </a>{" "}
          | {content.brand.location}
        </div>
        <div className="font-sans text-[14px] font-normal leading-[1.4] text-white">
          {content.brand.copyright}
        </div>
      </div>
    </footer>
  );
}
