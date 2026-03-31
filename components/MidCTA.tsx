import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { MID_CTA } from "@/lib/content";

export function MidCTA() {
  return (
    <section className="bg-cream py-8 md:py-10">
      <div className="site-container">
        <Reveal className="flex justify-center">
          <Link href="#book" className="button-primary">
            {MID_CTA}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
