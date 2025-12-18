"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Check, X } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { content } from "@/lib/content";

// Counter animation hook
function useCounter(targetValue: number, duration = 1.2) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, targetValue, {
      duration,
      onUpdate: (value) => {
        node.textContent = Math.floor(value).toString();
      },
    });

    return () => controls.stop();
  }, [isInView, targetValue, duration]);

  return nodeRef;
}

// Hero Stat Card Component
function HeroStatCard({ stat, index }: { stat: typeof content.whyMode.heroStats[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard className="group relative overflow-hidden hover:scale-105 transition-all duration-300 cursor-default">
        {/* Gradient border effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

        <div className="relative z-10 p-8 text-center">
          {/* Icon */}
          <motion.div
            className="text-5xl mb-4"
            animate={isInView ? { rotate: [0, 5, -5, 0] } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          >
            {stat.icon}
          </motion.div>

          {/* Label */}
          <div className="text-sm font-semibold text-textSecondary uppercase tracking-wider mb-4">
            {stat.label}
          </div>

          {/* Main Number */}
          <div className="text-4xl font-bold text-textPrimary mb-2 bg-gradient-to-br bg-clip-text text-transparent from-gray-900 to-gray-700">
            {stat.mainNumber}
          </div>

          {/* Comparison */}
          <div className="text-sm text-textSecondary mb-3">
            {stat.comparison}
          </div>

          {/* Subtitle */}
          <div className={`text-xs font-semibold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
            {stat.subtitle}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// Side-by-Side Comparison Component
function SideBySideComparison() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Traditional Agency - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="p-8 rounded-3xl border border-gray-200 bg-gray-50/50 h-full">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-4 text-gray-500">
            <span className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 text-gray-600">
              <X className="w-5 h-5" />
            </span>
            {content.whyMode.traditional.title}
          </h3>

          <div className="space-y-5">
            {content.whyMode.traditional.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: i * 0.05 + 0.2, duration: 0.2 }}
                className="flex justify-between items-center border-b border-gray-200/50 pb-4 last:border-0 last:pb-0"
              >
                <span className="font-medium text-gray-500">
                  {feature.label}
                </span>
                <span className="font-bold text-right text-gray-600 flex items-center gap-2">
                  {feature.value}
                  <X className="w-4 h-4 text-red-400" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mode Sprint - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="p-8 rounded-3xl border border-pink-200 bg-gradient-to-br from-pink-50/50 to-orange-50/50 h-full ring-2 ring-pink-200/50 shadow-xl shadow-pink-100/50">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-4 text-textPrimary">
            <span className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg shadow-pink-500/30">
              <Check className="w-5 h-5" />
            </span>
            {content.whyMode.modeSprint.title}
          </h3>

          <div className="space-y-5">
            {content.whyMode.modeSprint.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                transition={{ delay: i * 0.05 + 0.2, duration: 0.2 }}
                className="flex justify-between items-center border-b border-pink-200/50 pb-4 last:border-0 last:pb-0"
              >
                <span className="font-medium text-textSecondary">
                  {feature.label}
                </span>
                <span className="font-bold text-right text-textPrimary flex items-center gap-2">
                  {feature.value}
                  <Check className="w-4 h-4 text-green-500" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Benefit Card Component
function BenefitCard({ benefit, index }: { benefit: typeof content.whyMode.benefits[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard className="h-full hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-default">
        <div className="text-center">
          {/* Icon */}
          <motion.div
            className="text-6xl mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {benefit.icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-textPrimary mb-4 group-hover:gradient-text transition-all duration-300">
            {benefit.title}
          </h3>

          {/* Body */}
          <p className="text-textSecondary leading-relaxed">
            {benefit.body}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// Main Component
export function WhyMode() {
  const headerRef = useRef(null);
  const sectionRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="eyebrow text-center mb-4">
            {content.whyMode.eyebrow}
          </div>
          <h2 className="heading-1 text-textPrimary mb-4 max-w-3xl mx-auto">
            {content.whyMode.title}
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            {content.whyMode.subtitle}
          </p>
        </motion.div>

        {/* Hero Stat Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {content.whyMode.heroStats.map((stat, index) => (
            <HeroStatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Side-by-Side Comparison */}
        <div className="mb-20">
          <SideBySideComparison />
        </div>

        {/* Benefit Cards */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-textPrimary mb-12"
          >
            Why founders choose Mode
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {content.whyMode.benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
