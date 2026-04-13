"use client";

import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import useScrollSpy from "@/hooks/useScrollSpy";

interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

interface NavbarClientProps {
  links: readonly NavLinkItem[];
  ctaLabel: string;
}

export default function NavbarClient({
  links,
  ctaLabel,
}: NavbarClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const sectionIds = useMemo(() => links.map((link) => link.id), [links]);
  const activeId = useScrollSpy({ sectionIds });
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const node = overlayRef.current;

    if (!node) {
      return undefined;
    }

    const focusableElements = Array.from(
      node.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])'),
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen((previousValue) => !previousValue);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="ml-auto flex items-center gap-2 md:gap-3">
        <div
          className={clsx(
            "hidden items-center gap-8 md:flex",
            hasShadow && "rounded-lg bg-background/80 px-3 py-2 backdrop-blur",
          )}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={clsx(
                "font-sans text-[16px] font-normal leading-[1.5] text-text-secondary transition-colors hover:text-text",
                activeId === link.id && "text-text",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="#book"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 font-sans text-[16px] font-semibold leading-[1.3] text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          {ctaLabel}
        </Link>
        <button
          type="button"
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border-light bg-card text-text transition duration-300 hover:scale-[1.02] md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          ref={overlayRef}
          className="fixed inset-0 top-navbar z-40 flex flex-col gap-4 overflow-y-auto border-t border-border-light bg-background px-6 py-6 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={handleMenuClose}
              className="rounded-lg border border-border-light bg-card px-5 py-4 font-sans text-[16px] font-medium leading-[1.4] text-text shadow-soft transition duration-300 hover:scale-[1.02]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#book"
            onClick={handleMenuClose}
            className="inline-flex items-center justify-center rounded-lg bg-cta px-5 py-4 font-sans text-[16px] font-semibold leading-[1.3] text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </>
  );
}
