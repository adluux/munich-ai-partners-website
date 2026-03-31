import { Reveal } from "@/components/Reveal";
import { GUARANTEE } from "@/lib/content";

export function Guarantee() {
  return (
    <section className="bg-cream py-8 md:py-10">
      <div className="site-container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl leading-tight text-dark-olive md:text-4xl">{GUARANTEE}</h2>
        </Reveal>
      </div>
    </section>
  );
}
