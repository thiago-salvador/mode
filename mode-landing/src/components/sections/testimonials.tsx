import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";

import { content } from "@/lib/content";

export function Testimonials() {
  const testimonials = content.testimonials.items;

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow={content.testimonials.eyebrow}
          title={content.testimonials.title}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index}>
              <p className="text-textMuted italic mb-4 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="text-sm font-semibold">{testimonial.name}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
