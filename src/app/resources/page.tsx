import type { Metadata } from "next";
import { ResourcesIndexContent } from "./index-content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides and case study breakdowns on AI sales infrastructure, reducing CAC, improving show rates, and systematizing sales teams. Real data from production deployments.",
  openGraph: {
    title: "Resources | Capped Out Labs",
    description:
      "Guides and case study breakdowns on AI sales infrastructure, reducing CAC, improving show rates, and more.",
  },
};

export default function ResourcesPage() {
  return <ResourcesIndexContent />;
}
