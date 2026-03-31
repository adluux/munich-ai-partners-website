import { FOOTER_COPYRIGHT, FOOTER_EMAIL, FOOTER_LOCATION } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-charcoal py-10 text-cream">
      <div className="site-container flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <p className="text-sm font-semibold tracking-[0.18em] uppercase">Munich AI Partners</p>
        <div className="space-y-1 text-sm text-cream/80">
          <p>{FOOTER_EMAIL}</p>
          <p>{FOOTER_LOCATION}</p>
        </div>
        <p className="text-sm text-cream/70">{FOOTER_COPYRIGHT}</p>
      </div>
    </footer>
  );
}
