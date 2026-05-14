import { clsx } from "clsx";
import Image from "next/image";
import FadeInWrapper from "./FadeInWrapper";
import { content } from "@/lib/content";

interface WhoWeAreProps {
  className?: string;
}

interface LinkedInMarkProps {
  className?: string;
}

function LinkedInMark({ className }: LinkedInMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={clsx("h-[18px] w-[18px] fill-current", className)}
    >
      <path d="M4.98 3.5A2.49 2.49 0 1 1 5 8.48a2.49 2.49 0 0 1-.02-4.98ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V21h-4v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V21h-4V9Z" />
    </svg>
  );
}

export default function WhoWeAre({ className }: WhoWeAreProps) {
  return (
    <section
      id="team"
      className={clsx(
        "scroll-mt-navbar bg-background px-6 py-[60px] lg:py-[100px]",
        className,
      )}
    >
      <FadeInWrapper className="mx-auto flex max-w-prose flex-col items-center gap-4 text-center">
        <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[40px]">
          {content.team.heading}
        </h2>
        <p className="font-sans text-[16px] font-normal leading-[1.5] text-text">
          {content.team.body}
        </p>
        <div className="mx-auto mt-8 grid max-w-[980px] grid-cols-1 gap-8 md:grid-cols-3">
          {content.team.partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center gap-3 text-center">
              <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-lg bg-card">
                <Image
                  src={partner.imageSrc}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 220px, 220px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-sans text-[20px] font-medium leading-[1.4] text-primary">
                {partner.name}
              </h3>
              <p className="font-sans text-[16px] font-normal leading-[1.5] text-text-secondary">
                {partner.title}
              </p>
              <a
                href={partner.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-sans text-[16px] font-medium leading-[1.4] text-primary transition hover:underline"
              >
                <LinkedInMark />
                {partner.linkedinLabel}
              </a>
            </div>
          ))}
        </div>
      </FadeInWrapper>
    </section>
  );
}
