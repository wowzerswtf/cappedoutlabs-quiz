"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function HomePage() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 dot-pattern" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative text-center max-w-3xl mx-auto px-6 pt-24 pb-16"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold uppercase tracking-widest text-electric mb-4"
        >
          Internal review
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight"
        >
          Pick the homepage.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-lg text-text-secondary max-w-xl mx-auto"
        >
          Two design directions for cappedoutlabs.com. Review both and let the team know which one hits.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          <Link
            href="/v1"
            className="group block rounded-2xl border border-border bg-white p-8 hover:shadow-lg hover:shadow-electric/5 transition-all glow-border"
          >
            <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold font-mono text-lg">V1</span>
            </div>
            <h2 className="text-xl font-bold text-navy">Dark Hero</h2>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Bold navy hero with grid pattern. Card-based tier layout. High contrast.
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-sm font-semibold text-electric">
              View V1
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/v2"
            className="group block rounded-2xl border border-border bg-white p-8 hover:shadow-lg hover:shadow-electric/5 transition-all glow-border"
          >
            <div className="w-12 h-12 rounded-xl bg-electric flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold font-mono text-lg">V2</span>
            </div>
            <h2 className="text-xl font-bold text-navy">Light + Gradient</h2>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Centered hero with mesh gradient. Horizontal tier rows. Bento stat cards.
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-sm font-semibold text-electric">
              View V2
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
