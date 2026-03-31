import {
  WHO_WE_ARE_BODY,
  WHO_WE_ARE_HEADING,
  WHO_WE_ARE_LOCATION,
} from "@/lib/content";

export function WhoWeAre() {
  return (
    <section id="team" className="section-anchor section-spacing bg-cream-dark">
      <div className="site-container">
        <h2 className="text-2xl font-semibold text-charcoal md:text-3xl">{WHO_WE_ARE_HEADING}</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[1, 2].map((partner) => (
            <article key={partner} className="rounded-3xl border border-charcoal/10 bg-cream p-8">
              <p className="text-lg leading-8 text-charcoal">{WHO_WE_ARE_BODY}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-muted">{WHO_WE_ARE_LOCATION}</p>
      </div>
    </section>
  );
}
