import Link from "next/link";
import { HOW_WE_DO_IT, HOW_WE_DO_IT_LINK_TEXT } from "@/lib/content";

export function HowWeDoIt() {
  return (
    <section id="about" className="section-anchor section-spacing bg-cream">
      <div className="site-container max-w-3xl">
        <h2 className="sr-only">{HOW_WE_DO_IT}</h2>
        <p className="text-lg leading-8 text-charcoal">{HOW_WE_DO_IT}</p>
        <Link href="#" className="mt-6 inline-flex text-sm font-medium text-olive hover:text-olive-dark">
          {HOW_WE_DO_IT_LINK_TEXT}
        </Link>
      </div>
    </section>
  );
}
