"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-container";

import { content } from "@/lib/content";

export function MetricsStrip() {
  const metrics = content.metricsStrip.items;

  return (
    <section className="border-y border-white/8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto container-padding">
        <FadeIn>
          <p className="text-center text-textMuted uppercase tracking-widest text-xs mb-8">
            {content.metricsStrip.eyebrow}
          </p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
          {metrics.map((metric, index) => (
            <StaggerItem key={index}>
              <div className="font-heading text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-textMuted">{metric.label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
