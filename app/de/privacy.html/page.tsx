import type { Metadata } from "next";

import StaticPage from "@/lib/staticPage";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von Corvant AI: wie personenbezogene Daten erhoben, genutzt und geschützt werden.",
  alternates: {
    canonical: "/de/privacy.html",
    languages: { en: "/privacy.html", de: "/de/privacy.html", "x-default": "/privacy.html" },
  },
  openGraph: { url: "/de/privacy.html", locale: "de_DE" },
};

export default function Page() {
  return <StaticPage fileName="de/privacy.html" />;
}
