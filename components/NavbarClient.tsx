"use client";

import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavLink } from "@/lib/content";
import useScrollSpy from "@/hooks/useScrollSpy";

interface NavbarClientProps {
  ctaHref: string;
  ctaLabel: string;
  links: NavLink[];
}

const MOBILE_MENU_ID = "mobile-navigation-overlay";

export default function NavbarClient({
  ctaHref,
  ctaLabel,
  links,
}: NavbarClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const activeId = useScrollSpy({
    sectionIds: links.map((link) => link.href.replace("#", "")),
  });

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroBottom = heroSection?.getBoundingClientRect().bottom ?? 0;
      setHasShadow(heroBottom <= 72);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const focusableElements = overlayRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

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
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={clsx(
          "flex h-navbar items-center justify-end gap-2 md:justify-between md:gap-gap-sm md:px-section-px transition-shadow duration-300 ease-in-out",
          hasShadow && "shadow-nav",
        )}
      >
        <div className="hidden items-center gap-gap-md md:flex">
          {links.map((link) => {
            const isActive = activeId === link.href.replace("#", "");

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "font-sans text-base font-normal leading-[1.5] text-text transition-colors duration-200 hover:text-primary",
                  isActive && "text-primary",
                  !isActive && "text-text-secondary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-button bg-primary px-5 py-3 font-sans text-base font-semibold leading-[1.3] text-white transition duration-200 ease-in hover:scale-[1.02] hover:shadow-button active:scale-[1.02]"
          >
            {ctaLabel}
          </Link>

          <button
            type="button"
            aria-controls={MOBILE_MENU_ID}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={handleMenuToggle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-border-light bg-card text-primary md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id={MOBILE_MENU_ID}
          ref={overlayRef}
          className="fixed inset-0 top-navbar z-40 flex flex-col bg-background px-section-px py-8 md:hidden"
        >
          <nav className="flex flex-1 flex-col gap-4" aria-label="Mobile navigation">
            {links.map((link) => {
              const isActive = activeId === link.href.replace("#", "");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleMenuClose}
                  className={clsx(
                    "rounded-card border border-border-light bg-card px-5 py-4 font-sans text-xl font-medium leading-[1.4] text-primary",
                    isActive && "bg-card",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href={ctaHref}
              onClick={handleMenuClose}
              className="inline-flex items-center justify-center rounded-button bg-primary px-5 py-4 font-sans text-base font-semibold leading-[1.3] text-white transition duration-200 ease-in hover:scale-[1.02] hover:shadow-button active:scale-[1.02]"
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
