import type { Metadata } from "next";
import { ServicesContent } from "./content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI systems built for operators who think in exits. Choose your entry point — every path leads to a business that runs leaner, closes faster, and exits at a premium.",
  openGraph: {
    title: "Services | Capped Out Labs",
    description:
      "AI systems built for operators who think in exits. Choose your entry point.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
