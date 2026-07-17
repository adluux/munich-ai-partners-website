"use client";

import { useEffect } from "react";

/**
 * Restores the interactivity that the static HTML pages expect.
 *
 * The pages are rendered by injecting their <body> via dangerouslySetInnerHTML
 * (see lib/staticPage.tsx), and <script> tags inserted that way do not execute.
 * So the behaviour that used to live in inline scripts is wired up here instead,
 * once, for every page that renders through StaticPage:
 *   - the mobile hamburger menu (open/close + icon animation + close on link tap)
 *   - the FAQ accordion (inline onclick="toggle(this)" expects a global `toggle`)
 */
export default function StaticPageScripts() {
  useEffect(() => {
    // Reflect the page language on <html> (the shared root layout renders lang="en").
    document.documentElement.lang = window.location.pathname.startsWith("/de") ? "de" : "en";

    // FAQ accordion: the markup calls onclick="toggle(this)", so expose a global.
    const toggle = (el: HTMLElement) => {
      el.parentElement?.classList.toggle("open");
    };
    (window as unknown as { toggle: typeof toggle }).toggle = toggle;

    // Mobile hamburger menu.
    const btn = document.querySelector<HTMLButtonElement>(".nav-hamburger");
    const menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;

    const setState = (isOpen: boolean) => {
      menu.classList.toggle("is-open", isOpen);
      btn.classList.toggle("is-open", isOpen);
      btn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      // Lock background scroll while the full-screen overlay is open.
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    const onToggle = () => setState(!menu.classList.contains("is-open"));
    const onClose = () => setState(false);

    btn.addEventListener("click", onToggle);
    const links = Array.from(menu.querySelectorAll("a"));
    links.forEach((link) => link.addEventListener("click", onClose));

    return () => {
      btn.removeEventListener("click", onToggle);
      links.forEach((link) => link.removeEventListener("click", onClose));
      document.body.style.overflow = "";
    };
  }, []);

  return null;
}
