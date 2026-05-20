import { clsx } from "clsx";
import type { SiteContent } from "@/lib/content";

interface FooterProps {
  className?: string;
  content: SiteContent;
}

export default function Footer({ className, content }: FooterProps) {
  return (
    <footer className={clsx("bg-primary px-6 py-8", className)}>
      <div className="mx-auto flex max-w-container flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="font-sans text-[14px] font-normal leading-[1.4] text-white/70">
          {content.brand.name} | {content.brand.tagline}
        </div>
        <div className="font-sans text-[14px] font-normal leading-[1.4] text-white/70">
          <a href={`mailto:${content.brand.email}`} className="hover:underline">
            {content.brand.email}
          </a>{" "}
          | {content.brand.location}
        </div>
        <div className="font-sans text-[14px] font-normal leading-[1.4] text-white/70">
          {content.brand.copyright}
        </div>
      </div>
    </footer>
  );
}
