import { CONTENT } from "@/lib/content";

interface FooterProps {
  children?: never;
}

export default function Footer({}: FooterProps) {
  return (
    <footer className="bg-primary px-section-px py-8">
      <div className="mx-auto flex max-w-container-max flex-col items-center gap-gap-sm text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="font-sans text-sm font-normal leading-[1.4] text-white">
          <p>{CONTENT.navbar.brand}</p>
          <p>{CONTENT.footer.tagline}</p>
        </div>
        <div className="font-sans text-sm font-normal leading-[1.4] text-white">
          <a href={`mailto:${CONTENT.footer.email}`} className="hover:underline">
            {CONTENT.footer.email}
          </a>
          <p>{CONTENT.footer.location}</p>
        </div>
        <p className="font-sans text-sm font-normal leading-[1.4] text-white">
          {CONTENT.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
