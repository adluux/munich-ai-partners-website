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
  const style = extractStyle(html);
  const body = extractBody(html);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: googleFontsLink }} />
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <StaticPageScripts />
    </>
  );
}
