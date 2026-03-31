"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { NAV_CTA, NAV_LINKS } from "@/lib/content";

const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("testimonials");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const node = document.getElementById(id);

      if (!node) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          rootMargin: "-30% 0px -55% 0px",
          threshold: 0.1,
        },
      );

      observer.observe(node);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const navClassName = useMemo(
    () =>
      `sticky top-0 z-50 border-b border-border/80 bg-cream/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_10px_30px_rgba(61,61,46,0.08)]" : ""
      }`,
    [scrolled],
  );

  return (
    <nav className={navClassName}>
      <div className="site-container flex h-[78px] items-center justify-between gap-4">
        <Link href="#" className="text-sm font-semibold uppercase tracking-[0.2em] text-dark-olive">
          Munich AI Partners
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace("#", "");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-dark-olive" : "text-medium-gray hover:text-dark-olive"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="#book" className="inline-flex rounded-lg bg-dark-olive px-5 py-3 text-sm font-semibold text-white hover:bg-olive">
            {NAV_CTA}
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link href="#book" className="inline-flex rounded-lg bg-dark-olive px-4 py-2.5 text-sm font-semibold text-white">
            {NAV_CTA}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-dark-olive"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-x-0 top-[78px] z-40 border-b border-border bg-cream md:hidden">
          <div className="site-container flex flex-col gap-2 py-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.replace("#", "");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-4 text-lg ${
                    isActive ? "bg-off-white text-dark-olive" : "text-medium-gray"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
