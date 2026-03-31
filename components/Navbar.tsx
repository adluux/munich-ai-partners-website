"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Impact", href: "#testimonials" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/95 backdrop-blur">
      <div className="site-container flex h-[73px] items-center justify-between gap-4 py-4">
        <Link href="#" className="text-sm font-semibold tracking-[0.18em] text-charcoal uppercase">
          Munich AI Partners
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-charcoal hover:text-olive">
              {link.label}
            </Link>
          ))}
          <Link href="#book" className="button-primary">
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 top-[73px] z-40 flex bg-cream md:hidden">
          <div className="site-container flex flex-1 flex-col justify-center gap-6 py-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-3xl font-medium text-charcoal"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#book" className="button-primary mt-4 w-fit" onClick={closeMenu}>
              Book a Call
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
