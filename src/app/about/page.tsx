import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Operators who learned to build AI. Not the other way around. From the team behind Capped Out Media.",
  openGraph: {
    title: "About | Capped Out Labs",
    description:
      "Operators who learned to build AI. Not the other way around.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
