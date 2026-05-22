import { clsx } from "clsx";
import FadeInWrapper from "./FadeInWrapper";
import PlaybookModalTrigger from "./PlaybookModalTrigger";
import type { SiteContent } from "@/lib/content";

interface LeadMagnetProps {
  className?: string;
  content: SiteContent;
}

export default function LeadMagnet({ className, content }: LeadMagnetProps) {
  return (
    <section
      className={clsx("bg-background px-6 pb-[60px] pt-6 lg:pb-[100px] lg:pt-8", className)}
    >
      <FadeInWrapper className="mx-auto max-w-narrow">
        <div className="flex flex-col items-center gap-6 rounded-lg border border-border-light bg-card p-6 text-center shadow-soft md:p-8">
          <h3 className="font-heading text-[22px] font-semibold leading-[1.3] text-primary md:text-[28px]">
            {content.leadMagnet.heading}
          </h3>
          <p className="font-sans text-[16px] font-normal leading-[1.5] text-text">
            {content.leadMagnet.body}
          </p>
          <PlaybookModalTrigger
            ctaLabel={content.leadMagnet.ctaLabel}
            modalTitle={content.leadMagnet.modalTitle}
            modalBody={content.leadMagnet.modalBody}
            emailPlaceholder={content.leadMagnet.emailPlaceholder}
            downloadLabel={content.leadMagnet.downloadLabel}
            fileHref={content.leadMagnet.fileHref}
            fileName={content.leadMagnet.fileName}
          />
        </div>
      </FadeInWrapper>
    </section>
  );
}
