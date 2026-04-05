"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { VSLEmbed } from "@/components/VSLEmbed";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function ThankYouContent() {
  return (
    <section className="bg-white min-h-[80vh] flex items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-2xl px-6 lg:px-8 py-32 text-center"
      >
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold text-navy"
        >
          Application received.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-lg text-text-secondary leading-relaxed"
        >
          We&apos;ll review it within 24 hours. If it looks like a fit,
          you&apos;ll hear from us to book a discovery call.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-sm text-text-secondary"
        >
          While you wait — watch the VSL if you haven&apos;t already.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          <VSLEmbed />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8">
          <Link
            href="/"
            className="text-sm font-semibold text-electric hover:text-electric-dark transition-colors"
          >
            &larr; Back to homepage
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
