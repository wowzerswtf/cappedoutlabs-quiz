"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface TierData {
  name: string;
  price: string;
  timeline: string;
  tag: string;
  bullets: string[];
  featured?: boolean;
  applyValue: string;
}

interface TierCardProps {
  tier: TierData;
  index: number;
}

export function TierCard({ tier, index }: TierCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative flex flex-col rounded-xl border bg-white p-6 lg:p-8 transition-shadow",
        tier.featured
          ? "border-electric shadow-lg shadow-electric/5"
          : "border-border hover:shadow-md"
      )}
    >
      {tier.featured && (
        <div className="absolute -top-3 left-6 bg-electric text-white text-xs font-semibold px-3 py-1 rounded-full">
          {tier.tag}
        </div>
      )}
      {!tier.featured && (
        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
          {tier.tag}
        </span>
      )}

      <h3 className="mt-3 text-lg font-bold text-navy">{tier.name}</h3>

      <p className="mt-2 text-2xl font-bold font-mono text-text-primary tracking-tight">
        {tier.price}
      </p>
      <p className="mt-1 text-sm text-text-secondary">{tier.timeline}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {tier.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-text-primary">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-electric shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={cn(
          "mt-8 w-full rounded-lg h-10 text-sm font-semibold",
          tier.featured
            ? "bg-electric hover:bg-electric-dark text-white"
            : "bg-navy hover:bg-navy-light text-white"
        )}
      >
        <Link href={`/apply?tier=${encodeURIComponent(tier.applyValue)}`}>Apply</Link>
      </Button>
    </motion.div>
  );
}
