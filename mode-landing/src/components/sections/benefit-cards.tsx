"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-container";
import { FadeIn } from "@/components/ui/fade-in";
import { Map, Zap, Rocket } from "lucide-react";

import { content } from "@/lib/content";

export function BenefitCards() {
  const benefits = content.benefitCards.cards.map((card, index) => ({
    ...card,
    icon: [Map, Zap, Rocket][index],
  }));

  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <FadeIn>
          <SectionHeader
            eyebrow={content.benefitCards.eyebrow}
            title={content.benefitCards.title}
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={index} className="h-full">
                <GlassCard className="h-full glass-card-hover group cursor-pointer flex flex-col p-8">
                  <div className="w-14 h-14 rounded-2xl gradient-bg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accentFrom/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-accentFrom transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-textSecondary leading-relaxed text-base">
                    {benefit.body}
                  </p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
