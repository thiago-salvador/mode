"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

import { content } from "@/lib/content";

export function FAQs() {
  const faqs = content.faqs.items;

  return (
    <section id="faqs" className="section-padding bg-surface/30">
      <div className="max-w-3xl mx-auto container-padding">
        <FadeIn>
          <SectionHeader title={content.faqs.title} />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glass-card rounded-xl p-4 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
