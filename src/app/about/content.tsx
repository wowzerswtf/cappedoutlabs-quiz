"use client";

import { motion } from "framer-motion";
import { CTABanner } from "@/components/CTABanner";
import { fadeUp, staggerContainer } from "@/lib/animations";

const sections = [
  {
    title: "Where Labs came from",
    body: "Capped Out Media has been scaling supplement brands to acquisition for years. We've built businesses from zero, watched them grow to eight figures, and navigated the operational chaos that most agencies never see up close — regulatory pressure, Amazon, DTC, wholesale, influencer channels, fulfillment. About 18 months ago we started systematically replacing human workflows with AI — not because it was trendy, but because we needed to scale without linearly adding headcount. What we built became the product we now sell.",
  },
  {
    title: "The problem with AI consulting",
    body: "Every AI consulting firm was built by engineers or ex-consultants who learned to talk about business. We were built by operators who learned to build AI. That's not a subtle difference. It changes what we build, how we measure success, and what we consider done. We don't consider a project done when we hand you a document. We consider it done when your team is using a live system and the numbers are moving.",
  },
  {
    title: "Why we think in exits",
    body: "AI-systematized businesses exit at higher multiples. Acquirers pay premiums for systems, not headcount. A business where revenue is tied to people is a liability. A business where revenue is tied to systems is an asset. We've been through acquisitions. We know what buyers look for. That knowledge is baked into everything we build.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy grid-pattern overflow-hidden">
        <div className="noise-overlay" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight"
          >
            Operators who learned to build AI. Not the other way around.
          </motion.h1>
        </motion.div>
      </section>

      {/* CONTENT SECTIONS */}
      {sections.map((section, i) => (
        <section key={i} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl px-6 lg:px-8 py-24"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-navy"
            >
              {section.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-text-secondary leading-relaxed text-lg"
            >
              {section.body}
            </motion.p>
          </motion.div>
        </section>
      ))}

      {/* BRIDGE */}
      <section className="relative bg-navy grid-pattern overflow-hidden">
        <div className="noise-overlay" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-3xl px-6 lg:px-8 py-24 lg:py-32"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-widest text-electric mb-4"
          >
            The proof is already out there
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Look us up.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-white/60 leading-relaxed text-lg"
          >
            Capped Out Media has thousands of reviews across the internet. Our
            track record is documented, public, and searchable. When you evaluate
            Labs, you&apos;re not evaluating a startup. You&apos;re evaluating an
            operator who has built, scaled, and exited businesses — and is now
            systematizing that process with AI.
          </motion.p>
        </motion.div>
      </section>

      <CTABanner />
    </>
  );
}
