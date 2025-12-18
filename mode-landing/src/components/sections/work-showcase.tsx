"use client";

import { useState } from "react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { Pill } from "@/components/ui/pill";
import { CaseStudyModal } from "@/components/ui/case-study-modal";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-container";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

import { content } from "@/lib/content";

export function WorkShowcase() {
  const work = content.workShowcase.cards;
  const [selectedProject, setSelectedProject] = useState<typeof work[0] | null>(null);

  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <FadeIn>
          <SectionHeader eyebrow={content.workShowcase.eyebrow} title={content.workShowcase.title} />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {work.map((item, index) => (
            <StaggerItem key={index} className="h-full">
              <GlassCard
                className="h-full glass-card-hover group cursor-pointer flex flex-col overflow-hidden p-0"
                onClick={() => setSelectedProject(item)}
              >
                <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
                  <Image
                    src={item.image!}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-xl transform scale-95 group-hover:scale-100 transition-transform">
                      <span className="text-sm font-semibold text-gray-900">View Case Study</span>
                      <ArrowRight className="w-4 h-4 text-gray-900" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-auto">
                    <Pill className="mb-4 bg-gray-100 border-gray-200 text-textSecondary">{item.tag}</Pill>
                    <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-accentFrom transition-colors">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-textSecondary leading-relaxed text-base">
                    {item.summary}
                  </p>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Case Study Modal */}
        {selectedProject && (
          <CaseStudyModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  );
}
