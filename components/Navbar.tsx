import { clsx } from "clsx";
import { content } from "@/lib/content";
import NavbarClient from "./NavbarClient";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 border-b border-border-light bg-background/95 backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <LinkBrand />
        <NavbarClient
          links={content.navigation.links}
          ctaLabel={content.navigation.ctaLabel}
        />
      </div>
    </nav>
  );
}

interface LinkBrandProps {
  className?: string;
}

function LinkBrand({ className }: LinkBrandProps) {
  return (
    <a
      href="#main-content"
      className={clsx(
        "min-w-0 font-sans text-[13px] font-semibold uppercase tracking-[0.24em] text-primary sm:text-[15px]",
        className,
      )}
    >
      {content.brand.name}
    </a>
  );
}
