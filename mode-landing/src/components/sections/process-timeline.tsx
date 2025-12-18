"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { content } from "@/lib/content";

export function ProcessTimeline() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto container-padding relative z-10">
        <FadeIn>
          <SectionHeader
            eyebrow={content.process.eyebrow}
            title={content.process.title}
            className="mb-16 text-center"
          />
        </FadeIn>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accentFrom/50 via-accentTo/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {content.process.steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}>

                  {/* Content Side */}
                  <div className="flex-1 md:w-1/2 pl-16 md:pl-0 md:px-16">
                    <div className={`relative bg-white p-6 rounded-2xl shadow-sm overflow-hidden ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                      }`}>
                      {/* Large Number Background - Inspired by Ref 1 */}
                      <span className="absolute top-0 right-4 text-[8rem] font-black text-electricBlue/5 leading-none select-none pointer-events-none">
                        0{index + 1}
                      </span>

                      <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-textSecondary mb-4 uppercase tracking-wider relative z-10">
                        {step.label}
                      </span>
                      <h3 className="font-heading text-2xl font-bold mb-3 text-textPrimary tracking-tight relative z-10">{step.title}</h3>
                      <p className="text-textSecondary text-base leading-relaxed max-w-md mx-auto md:mx-0 relative z-10">
                        {step.text}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 flex items-center justify-center md:-translate-x-1/2 -mt-2 md:mt-0">
                    <div className="w-4 h-4 rounded-full bg-white border-4 border-accentFrom shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10 relative">
                      <div className="absolute inset-0 bg-accentFrom rounded-full animate-pulse opacity-50 blur-sm" />
                    </div>
                  </div>

                  {/* Empty Side for Balance */}
                  <div className="hidden md:block flex-1 md:w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
