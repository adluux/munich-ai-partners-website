import { clsx } from "clsx";
import type { Locale, SiteContent } from "@/lib/content";
import NavbarClient from "./NavbarClient";

interface NavbarProps {
  className?: string;
  content: SiteContent;
  locale: Locale;
  onLocaleChange?: (locale: Locale) => void;
  showNavigation?: boolean;
}

export default function Navbar({
  className,
  content,
  locale,
  onLocaleChange,
  showNavigation = true,
}: NavbarProps) {
  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 border-b border-white/10 bg-primary backdrop-blur",
      className,
      )}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <LinkBrand brandName={content.brand.name} />
        {showNavigation ? (
          <NavbarClient
            links={content.navigation.links}
            ctaLabel={content.navigation.ctaLabel}
            bookingUrl={content.booking.url}
            locale={locale}
            onLocaleChange={onLocaleChange ?? (() => undefined)}
          />
        ) : null}
      </div>
    </nav>
  );
}

interface LinkBrandProps {
  className?: string;
  brandName: string;
}

function LinkBrand({ className, brandName }: LinkBrandProps) {
  return (
    <a
      href="#main-content"
      className={clsx(
        "min-w-0 font-heading text-[20px] font-bold leading-none text-white",
        className,
      )}
    >
      {brandName}
    </a>
  );
}
