import { TESTIMONIALS_HEADING } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-anchor section-spacing bg-cream">
      <div className="site-container">
        <h2 className="text-2xl font-semibold text-charcoal md:text-3xl">{TESTIMONIALS_HEADING}</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[1, 2, 3].map((card) => (
            <article
              key={card}
              aria-label={TESTIMONIALS_HEADING}
              className="min-h-56 rounded-3xl border border-charcoal/10 bg-cream-dark p-6"
            >
              <div className="space-y-4">
                <div className="h-4 w-24 rounded-full bg-charcoal/10" />
                <div className="h-4 w-full rounded-full bg-charcoal/10" />
                <div className="h-4 w-5/6 rounded-full bg-charcoal/10" />
                <div className="h-4 w-4/6 rounded-full bg-charcoal/10" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
