"use client";

import { clsx } from "clsx";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PlaybookModalTriggerProps {
  className?: string;
  ctaLabel: string;
  modalTitle: string;
  modalBody: string;
  emailPlaceholder: string;
  downloadLabel: string;
  fileHref: string;
  fileName: string;
}

export default function PlaybookModalTrigger({
  className,
  ctaLabel,
  modalTitle,
  modalBody,
  emailPlaceholder,
  downloadLabel,
  fileHref,
  fileName,
}: PlaybookModalTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState("");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setEmail("");
  };

  const handleDownload = () => {
    downloadLinkRef.current?.click();
    handleClose();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={clsx(
          "mx-auto inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-sans text-[16px] font-semibold leading-[1.3] text-primary transition duration-300 hover:bg-primary hover:text-white",
          className,
        )}
      >
        {ctaLabel}
      </button>
      <a ref={downloadLinkRef} href={fileHref} download={fileName} className="hidden" aria-hidden="true">
        {fileName}
      </a>
      {isMounted &&
        isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-primary/65 px-6 py-8">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="playbook-modal-title"
              aria-describedby="playbook-modal-description"
              className="fade-enter relative w-full max-w-[560px] rounded-[24px] border border-border-light bg-background p-6 shadow-soft md:p-8"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                aria-label="Close playbook download popup"
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-light text-primary transition duration-300 hover:bg-card"
              >
                <X size={20} />
              </button>
              <div className="flex flex-col gap-6 pr-10">
                <h3
                  id="playbook-modal-title"
                  className="font-heading text-[26px] font-semibold leading-[1.2] text-primary md:text-[32px]"
                >
                  {modalTitle}
                </h3>
                <p
                  id="playbook-modal-description"
                  className="font-sans text-[16px] font-normal leading-[1.6] text-text"
                >
                  {modalBody}
                </p>
                <label className="sr-only" htmlFor="playbook-email">
                  Email address
                </label>
                <input
                  id="playbook-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={emailPlaceholder}
                  className="min-h-14 rounded-lg border border-border-light bg-background px-4 font-sans text-[16px] font-normal leading-[1.5] text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 py-3 font-sans text-[16px] font-semibold leading-[1.3] text-white transition duration-300 hover:opacity-90"
                >
                  {downloadLabel}
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
