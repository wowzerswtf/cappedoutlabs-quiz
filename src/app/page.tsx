"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Zap, Box, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatStrip } from "@/components/StatStrip";
import { TierCard, type TierData } from "@/components/TierCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { VSLEmbed } from "@/components/VSLEmbed";
import { CTABanner } from "@/components/CTABanner";
import { fadeUp, staggerContainer } from "@/lib/animations";

const tiers: TierData[] = [
  {
    name: "AI Revenue Sprint",
    price: "$15,000",
    timeline: "2 weeks",
    tag: "Entry point",
    applyValue: "AI Revenue Sprint $15K",
    bullets: [
      "AI readiness audit",
      "Single highest-leverage workflow built live",
      "30-day support window",
      "Ascension path to Tier 2",
    ],
  },
  {
    name: "AI Revenue Infrastructure",
    price: "$50K–$150K",
    timeline: "6–10 weeks",
    tag: "Most popular",
    featured: true,
    applyValue: "AI Revenue Infrastructure $50K-$150K",
    bullets: [
      "3–5 core workflows rebuilt with AI",
      "Sales, ops, fulfillment, CS coverage",
      "Staff training + SOPs",
      "90-day managed handoff",
    ],
  },
  {
    name: "Full AI Transformation",
    price: "$200K–$500K+",
    timeline: "3–6 months",
    tag: "Exit prep",
    applyValue: "Full Transformation $200K+",
    bullets: [
      "Full infrastructure rebuild",
      "AI agents across all departments",
      "Governance + optimization",
      "Positioned for premium exit multiple",
    ],
  },
  {
    name: "Equity / Rev-Share",
    price: "No upfront",
    timeline: "Flexible",
    tag: "Selective",
    applyValue: "Equity / Rev-Share",
    bullets: [
      "3–10% equity OR 10–20% rev-share",
      "Same deliverable as Tier 1 or 2",
      "For operators with real upside",
      "We evaluate the business, not the budget",
    ],
  },
];

const solutions = [
  {
    icon: Zap,
    title: "Revenue-first framing",
    body: "Every system we build is anchored to a revenue metric. Close rate. LTV. Cash collection speed. Not efficiency for its own sake.",
  },
  {
    icon: Box,
    title: "Production, not prototypes",
    body: "We don't hand you a roadmap. We hand you a running system with documentation, trained staff, and a 90-day handoff.",
  },
  {
    icon: TrendingUp,
    title: "Exit-prep architecture",
    body: "AI-systematized businesses command higher acquisition multiples. We build with that outcome in mind from day one.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy grid-pattern overflow-hidden">
        <div className="noise-overlay" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium text-electric tracking-wide"
            >
              From the team behind Capped Out Media
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] border-l-4 border-electric pl-6"
            >
              We don&apos;t deliver decks.
              <br />
              We build systems that close deals.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl"
            >
              AI revenue infrastructure for operators who are serious about
              growth — and serious about exit.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                className="bg-electric hover:bg-electric-dark text-white rounded-lg px-8 h-12 text-base font-semibold"
              >
                <Link href="/apply">Apply for a Discovery Call</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-lg px-8 h-12 text-base font-semibold bg-transparent"
              >
                <a href="#vsl">
                  See how it works
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VSL */}
      <section id="vsl" className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-2">
              Watch before you apply
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <VSLEmbed />
          </motion.div>
          <p className="mt-4 text-sm text-text-secondary text-center">
            10 minutes. No pitch deck. Just proof.
          </p>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <StatStrip />

      {/* PROBLEM */}
      <section className="relative bg-navy grid-pattern overflow-hidden">
        <div className="noise-overlay" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-widest text-electric mb-4"
          >
            The gap
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight"
          >
            60% of AI projects never make it to production.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-white/60 leading-relaxed max-w-2xl text-lg"
          >
            You&apos;ve been pitched by consultants who deliver 80-slide decks
            and disappear. You&apos;ve bought tools nobody uses. You&apos;ve
            tried to hire for AI and watched it go nowhere. The problem
            isn&apos;t AI. The problem is that everyone selling AI
            transformation has never actually built and operated a
            revenue-generating business.
          </motion.p>
          <motion.blockquote
            variants={fadeUp}
            className="mt-8 text-xl md:text-2xl font-bold text-white border-l-4 border-electric pl-6"
          >
            &ldquo;They don&apos;t think in close rates, churn, and exit
            multiples. We do.&rdquo;
          </motion.blockquote>
        </motion.div>
      </section>

      {/* SOLUTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-navy text-center"
          >
            Built by operators. Deployed in production.
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-5">
                  <item.icon className="h-5 w-5 text-electric" />
                </div>
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-navy text-center"
          >
            Four ways to work with us
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <TierCard key={i} tier={tier} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="relative bg-navy grid-pattern overflow-hidden">
        <div className="noise-overlay" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            What production AI actually looks like
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <CaseStudyCard
              title="Supplement Brand — AI Sales Infrastructure"
              result="34% close rate lift. Deal cycle cut from 14 days to 6."
              tag="Closer OS"
              href="/case-studies"
            />
            <CaseStudyCard
              title="Contractor Business — Full Ops Platform"
              result="18+ hours saved weekly. Payment cycle cut from 21 days to 4."
              tag="ContractorOS"
              href="/case-studies"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              href="/case-studies"
              className="text-sm font-semibold text-electric hover:text-white transition-colors"
            >
              More case studies &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
