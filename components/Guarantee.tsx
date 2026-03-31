import Link from "next/link";
import { CTA_TEXT, GUARANTEE } from "@/lib/content";

export function Guarantee() {
  return (
    <section className="section-spacing bg-cream-dark">
      <div className="site-container max-w-3xl text-center">
        <h2 className="sr-only">{GUARANTEE}</h2>
        <p className="text-lg leading-8 text-charcoal md:text-xl">{GUARANTEE}</p>
        <Link href="#book" className="button-secondary mt-8">
          {CTA_TEXT}
        </Link>
      </div>
    </section>
  );
}
