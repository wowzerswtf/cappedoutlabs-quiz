"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface CTABannerProps {
  headline?: string;
  body?: string;
}

export function CTABanner({
  headline = "Ready to stop buying strategies and start running systems?",
  body = "We take on a limited number of clients each quarter.",
}: CTABannerProps) {
  return (
    <section className="relative bg-navy grid-pattern overflow-hidden">
      <div className="noise-overlay" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight"
        >
          {headline}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-white/60 text-lg"
        >
          {body}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8">
          <Button
            asChild
            className="bg-electric hover:bg-electric-dark text-white rounded-lg px-8 h-12 text-base font-semibold"
          >
            <Link href="/apply">Apply for a Discovery Call</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
