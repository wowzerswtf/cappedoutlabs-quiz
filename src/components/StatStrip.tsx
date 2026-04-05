"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "$60M+", label: "Revenue scaled across incubator portfolio" },
  { value: "8", label: "AI systems in production" },
  { value: "3", label: "Verticals systematized" },
  { value: "47", label: "Days average to first live system" },
];

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part
    const numMatch = value.match(/(\d+)/);
    if (!numMatch) {
      setDisplay(value);
      return;
    }

    const target = parseInt(numMatch[1], 10);
    const prefix = value.slice(0, numMatch.index);
    const suffix = value.slice((numMatch.index ?? 0) + numMatch[1].length);
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

export function StatStrip() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-10 text-center">
          Trusted by operators building toward exit
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold font-mono text-navy tracking-tight">
                <AnimatedNumber value={stat.value} />
              </p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
