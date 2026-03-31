import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  TEAM_HEADING,
  TEAM_MEMBERS,
  TEAM_NOTE,
  TEAM_TAG,
  WHO_WE_ARE_BODY,
} from "@/lib/content";

export function WhoWeAre() {
  return (
    <section id="team" className="section-anchor section-spacing bg-cream">
      <div className="site-container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="section-tag">{TEAM_TAG}</span>
          <h2 className="mt-5 font-serif text-4xl text-dark-olive md:text-5xl">{TEAM_HEADING}</h2>
          <p className="mt-6 text-lg leading-8 text-charcoal">{WHO_WE_ARE_BODY}</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {TEAM_MEMBERS.map((member) => (
            <Reveal key={member.name}>
              <article className="surface-card h-full p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-dark-olive">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-dark-olive">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-olive">
                      {member.role}
                    </p>
                  </div>
                </div>
                <ul className="mt-8 space-y-4 text-base leading-7 text-charcoal">
                  {member.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-olive" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-center text-sm font-medium text-medium-gray">{TEAM_NOTE}</p>
        </Reveal>
      </div>
    </section>
  );
}
