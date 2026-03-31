import {
  FOOTER_BRAND,
  FOOTER_COPYRIGHT,
  FOOTER_EMAIL,
  FOOTER_LOCATION,
  FOOTER_TAGLINE,
} from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-dark-olive py-10 text-cream">
      <div className="site-container flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em]">{FOOTER_BRAND}</p>
          <p className="mt-2 text-sm text-cream/70">{FOOTER_TAGLINE}</p>
        </div>
        <div className="space-y-1 text-sm text-cream/75">
          <p>{FOOTER_EMAIL}</p>
          <p>{FOOTER_LOCATION}</p>
        </div>
        <p className="text-sm text-cream/65">{FOOTER_COPYRIGHT}</p>
      </div>
    </footer>
  );
}
