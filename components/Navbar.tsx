import NavbarClient from "@/components/NavbarClient";
import { CONTENT } from "@/lib/content";

interface NavbarProps {
  children?: never;
}

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border-light bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-container-max items-center justify-between gap-3 px-4 md:gap-gap-md md:px-section-px">
        <div className="min-w-0">
          <span className="font-heading text-2xl font-bold leading-[1.2] text-primary md:text-3xl">
            {CONTENT.navbar.brand}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <NavbarClient
            ctaHref="#book"
            ctaLabel={CONTENT.navbar.ctaLabel}
            links={CONTENT.navbar.links}
          />
        </div>
      </div>
    </nav>
  );
}
