"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GuaranteeBadge } from "@/components/ui/guarantee-badge";
import { UrgencyBanner } from "@/components/ui/urgency-banner";
import { content } from "@/lib/content";
import { ArrowRight, Star } from "lucide-react";
import { useCal } from "@/hooks/use-cal";

export function Hero() {
  const { openCalendar } = useCal();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto container-padding w-full h-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
          {/* Left Column: Content */}
          <div className="max-w-3xl py-32 lg:py-0 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Urgency Banner */}
              <div className="mb-6">
                <UrgencyBanner />
              </div>

              {/* Anxiety Hook Question */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-textMuted mb-4 font-medium italic"
              >
                {content.hero.anxietyHook}
              </motion.p>

              {/* Massive Typography Headline - Inspired by Ref 3 */}
              <h1 className="font-black tracking-tighter leading-[0.85] mb-8">
                {content.hero.headline.massive.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-[clamp(3.5rem,12vw,10rem)] ${
                      i === 0 ? 'text-textPrimary' :
                      i === 1 ? 'gradient-text' :
                      'text-electricBlue'
                    }`}
                  >
                    {line}
                  </motion.div>
                ))}
              </h1>

              <p className="text-xl md:text-2xl text-textSecondary mb-10 max-w-lg text-balance leading-relaxed">
                {content.hero.subheadline}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  onClick={() => openCalendar("mode/discovery-call")}
                  className="bg-black text-white hover:bg-gray-800 rounded-full px-8 h-14 text-lg font-medium transition-transform hover:scale-105"
                >
                  {content.hero.primaryCta.label}
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative shadow-sm">
                      <Image
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                        alt="User"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-textSecondary">
                    Trusted by <span className="text-textPrimary font-bold">200+ founders</span>
                  </span>
                </div>
              </div>

              {/* Guarantee Badge */}
              <div className="mt-8">
                <GuaranteeBadge />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Full Height Masonry Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-0 right-0 w-[50%] h-full overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-6 h-[120%] -mt-10 transform rotate-[-2deg] scale-105 origin-top-right opacity-90">
              <div className="space-y-6 pt-10 animate-[scrollY_40s_linear_infinite]">
                {/* Column 1 - Scrolling Up - Duplicated for seamless loop */}
                <div className="relative h-80 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/adote-um-gatinho.png"
                    alt="Adote Um Gatinho"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/win-like-a-lowe.png"
                    alt="Win Like A Löwe"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-72 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/no-diva.png"
                    alt="No Divã Community Platform"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Duplicate for seamless loop */}
                <div className="relative h-80 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/adote-um-gatinho.png"
                    alt="Adote Um Gatinho"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/win-like-a-lowe.png"
                    alt="Win Like A Löwe"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-72 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/no-diva.png"
                    alt="No Divã Community Platform"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 pt-10 animate-[scrollY_42s_linear_infinite_reverse]">
                {/* Column 2 - Scrolling Down - Duplicated for seamless loop */}
                <div className="relative h-64 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/client-central.png"
                    alt="Client Central"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/prototype.png"
                    alt="Prototype Projects"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-72 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/ai-task-assistant.png"
                    alt="AI Task Assistant"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Duplicate for seamless loop */}
                <div className="relative h-64 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/client-central.png"
                    alt="Client Central"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/prototype.png"
                    alt="Prototype Projects"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-72 rounded-3xl overflow-hidden bg-gray-50 shadow-xl border border-gray-100">
                  <Image
                    src="/hero/ai-task-assistant.png"
                    alt="AI Task Assistant"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Gradient Overlay for Fade Effect */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-white pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none opacity-50" />
          </motion.div>

          {/* Mobile/Tablet: Static Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden mt-12"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-50 shadow-lg border border-gray-100">
                <Image
                  src="/hero/no-diva.png"
                  alt="No Divã Community Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-50 shadow-lg border border-gray-100">
                <Image
                  src="/hero/client-central.png"
                  alt="Client Central"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-50 shadow-lg border border-gray-100">
                <Image
                  src="/hero/adote-um-gatinho.png"
                  alt="Adote Um Gatinho"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-50 shadow-lg border border-gray-100">
                <Image
                  src="/hero/prototype.png"
                  alt="Prototype Projects"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
