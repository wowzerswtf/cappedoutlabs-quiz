import type { Metadata } from "next";
import { CaseStudiesContent } from "./content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Systems in production. Results in numbers. Not pilots. Not prototypes. Working AI infrastructure inside real businesses.",
  openGraph: {
    title: "Case Studies | Capped Out Labs",
    description:
      "Working AI infrastructure inside real businesses. See our production systems.",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
