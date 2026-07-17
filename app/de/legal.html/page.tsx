import type { Metadata } from "next";

import StaticPage from "@/lib/staticPage";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Corvant AI, einer Marke der Hitead GmbH, München, Deutschland.",
  alternates: {
    canonical: "/de/legal.html",
    languages: { en: "/legal.html", de: "/de/legal.html", "x-default": "/legal.html" },
  },
  openGraph: { url: "/de/legal.html", locale: "de_DE" },
};

export default function Page() {
  return <StaticPage fileName="de/legal.html" />;
}
