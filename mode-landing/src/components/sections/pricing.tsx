"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import { GuaranteeBadge } from "@/components/ui/guarantee-badge";
import { UrgencyBanner } from "@/components/ui/urgency-banner";
import { SectionHeader } from "@/components/ui/section-header";
import { useCal } from "@/hooks/use-cal";

import { Check } from "lucide-react";
import { content } from "@/lib/content";

export function Pricing() {
  const { openCalendar } = useCal();
  return (
    <section id="pricing" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow={content.pricing.eyebrow}
          title={content.pricing.title}
        />

        {/* Urgency Banner */}
        <div className="flex justify-center mb-8">
          <UrgencyBanner />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {content.pricing.plans.map((plan, index) => (
            <GlassCard key={index} className={plan.highlight ? "border-accentFrom/30 relative" : ""}>
              {plan.highlight && (
                <div className="absolute -top-3 right-4">
                  <Pill className="bg-gradient-to-r from-accentFrom to-accentTo text-white">Popular</Pill>
                </div>
              )}
              <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold gradient-text">{plan.price}</span>
              </div>
              <p className="text-textMuted mb-6">{plan.summary}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accentFrom flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => openCalendar("mode/discovery-call")}
                variant={plan.highlight ? "primary" : "secondary"}
                className="w-full text-center"
              >
                {plan.ctaLabel}
              </Button>
            </GlassCard>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="flex justify-center mt-12">
          <GuaranteeBadge />
        </div>
      </div>
    </section>
  );
}
