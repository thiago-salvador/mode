"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { Check, X } from "lucide-react";
import { content } from "@/lib/content";

export function Comparison() {
    return (
        <section className="section-padding">
            <div className="max-w-5xl mx-auto container-padding">
                <FadeIn>
                    <SectionHeader
                        eyebrow={content.comparison.eyebrow}
                        title={content.comparison.title}
                        className="mb-16"
                    />
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Traditional Way */}
                    <FadeIn delay={0.1}>
                        <div className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50">
                            <h3 className="text-xl font-bold text-gray-400 mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                    <X className="w-4 h-4" />
                                </span>
                                Traditional Agency
                            </h3>
                            <div className="space-y-6">
                                {content.comparison.features.map((feature, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <span className="text-gray-500 font-medium">{feature.name}</span>
                                        <span className="text-gray-600 font-semibold text-right">{feature.traditional}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Mode Way */}
                    <FadeIn delay={0.2}>
                        <GlassCard className="p-8 relative overflow-hidden ring-1 ring-accentFrom/20 shadow-2xl shadow-accentFrom/10">
                            <h3 className="text-2xl font-bold text-textPrimary mb-8 flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white shadow-lg shadow-accentFrom/30">
                                    <Check className="w-5 h-5" />
                                </span>
                                Mode Sprint
                            </h3>
                            <div className="space-y-6">
                                {content.comparison.features.map((feature, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-gray-100/50 pb-5 last:border-0 last:pb-0">
                                        <span className="text-textSecondary font-medium text-lg">{feature.name}</span>
                                        <span className="text-textPrimary font-bold text-right text-lg">{feature.mode}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
