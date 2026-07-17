import { readFileSync } from "node:fs";
import path from "node:path";

import StaticPageScripts from "@/components/StaticPageScripts";

const bookingUrl =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0v6PZydheL8-0l8arI22xHx1dA8xCfDbfel5C2ClMbEk4A3z1ydExnDRb4E--EAlmC93C8c74U";
const googleFontsLink =
  '<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">';

interface StaticPageProps {
  fileName: string;
}

// EN/DE language toggle: maps each page to its counterpart URL in the other language.
const LANG_MAP: Record<string, { lang: "en" | "de"; alt: string }> = {
  "homepage.html": { lang: "en", alt: "/de" },
  "de/homepage.html": { lang: "de", alt: "/" },
  "case-study-urbanpoint.html": { lang: "en", alt: "/de/case-study-urbanpoint.html" },
  "de/case-study-urbanpoint.html": { lang: "de", alt: "/case-study-urbanpoint.html" },
  "case-study-starise-ai.html": { lang: "en", alt: "/de/case-study-starise-ai.html" },
  "de/case-study-starise-ai.html": { lang: "de", alt: "/case-study-starise-ai.html" },
  "case-study-fastreview.html": { lang: "en", alt: "/de/case-study-fastreview.html" },
  "de/case-study-fastreview.html": { lang: "de", alt: "/case-study-fastreview.html" },
  "legal.html": { lang: "en", alt: "/de/legal.html" },
  "de/legal.html": { lang: "de", alt: "/legal.html" },
  "privacy.html": { lang: "en", alt: "/de/privacy.html" },
  "de/privacy.html": { lang: "de", alt: "/privacy.html" },
};

const LANG_CSS = `
.nav-lang { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500; }
.nav-lang a { color: rgba(255,255,255,0.6); text-decoration: none; }
.nav-lang a:hover { color: #fff; }
.nav-lang .lang-on { color: #fff; }
.nav-lang .lang-sep { color: rgba(255,255,255,0.3); }
@media (max-width: 720px) { .nav-lang { display: none; } }
.mobile-lang { display: flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 500; padding-bottom: 1.25rem; margin-bottom: 0.25rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
.mobile-lang a { color: rgba(255,255,255,0.6); text-decoration: none; }
.mobile-lang .lang-on { color: #fff; }
.mobile-lang .lang-sep { color: rgba(255,255,255,0.3); }
`;

function langPair(lang: "en" | "de", alt: string): { en: string; de: string } {
  return {
    en: lang === "en" ? '<span class="lang-on">EN</span>' : `<a href="${alt}">EN</a>`,
    de: lang === "de" ? '<span class="lang-on">DE</span>' : `<a href="${alt}">DE</a>`,
  };
}

function injectLangToggle(body: string, lang: "en" | "de", alt: string): string {
  const { en, de } = langPair(lang, alt);
  const desktop = `<span class="nav-lang">${en}<span class="lang-sep">/</span>${de}</span>\n    `;
  const mobile = `\n  <div class="mobile-lang">${en}<span class="lang-sep">/</span>${de}</div>`;
  return body
    .replace('<button class="nav-hamburger"', desktop + '<button class="nav-hamburger"')
    .replace('<div class="mobile-menu" id="mobileMenu">', '<div class="mobile-menu" id="mobileMenu">' + mobile);
}

function addBookingTargets(html: string): string {
  return html.replace(
    new RegExp(`<a href="${bookingUrl}"([^>]*)>`, "g"),
    (match: string, attrs: string) => {
      if (attrs.includes("target=")) {
        return match;
      }

      return `<a href="${bookingUrl}"${attrs} target="_blank" rel="noreferrer">`;
    },
  );
}

function fixHomepageLinks(html: string): string {
  const replacements = [
    'href="/case-study-urbanpoint.html"',
    'href="/case-study-starise-ai.html"',
    'href="/case-study-fastreview.html"',
    'href="https://www.linkedin.com/in/skokoivan/" target="_blank" rel="noreferrer"',
    'href="https://www.linkedin.com/in/tracha/" target="_blank" rel="noreferrer"',
    'href="https://www.linkedin.com/in/michaelmalderle/" target="_blank" rel="noreferrer"',
    'href="/legal.html"',
    'href="/privacy.html"',
  ];
  let nextHtml = html;

  for (const replacement of replacements) {
    nextHtml = nextHtml.replace('href="#"', replacement);
  }

  return nextHtml;
}

function fixSubpageLinks(html: string): string {
  return html
    .replace(/href="#" class="back-link"/g, 'href="/" class="back-link"')
    .replace(/href="#">Case studies/g, 'href="/#results">Case studies')
    .replace(/href="#">How we work/g, 'href="/#how">How we work')
    .replace(/href="#">Team/g, 'href="/#team">Team')
    .replace(/href="#">FAQ/g, 'href="/#faq">FAQ')
    .replace(/href="#">Legal/g, 'href="/legal.html">Legal')
    .replace(/href="#">Privacy/g, 'href="/privacy.html">Privacy');
}

function normalizeHtml(fileName: string, html: string): string {
  const linkedHtml = fileName === "homepage.html" ? fixHomepageLinks(html) : fixSubpageLinks(html);

  return addBookingTargets(linkedHtml);
}

function extractStyle(html: string): string {
  return html.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? "";
}

function extractBody(html: string): string {
  return html.match(/<body>([\s\S]*?)<\/body>/)?.[1] ?? html;
}

export default function StaticPage({ fileName }: StaticPageProps) {
  const sourcePath = path.join(process.cwd(), "static-pages", fileName);
  const html = normalizeHtml(fileName, readFileSync(sourcePath, "utf8"));
  const meta = LANG_MAP[fileName];
  const style = meta ? extractStyle(html) + LANG_CSS : extractStyle(html);
  const body = meta ? injectLangToggle(extractBody(html), meta.lang, meta.alt) : extractBody(html);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: googleFontsLink }} />
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <StaticPageScripts />
    </>
  );
}
