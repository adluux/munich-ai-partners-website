import type { Metadata } from "next";

import StaticPage from "@/lib/staticPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Corvant AI describing how personal data is collected, used, and protected.",
  alternates: { canonical: "/privacy.html" },
  openGraph: { url: "/privacy.html" },
};

export default function Page() {
  return <StaticPage fileName="privacy.html" />;
}
