"use client";

import { useState, FormEvent } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { content } from "@/lib/content";
import { Check, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    region: "Europe",
    idea: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="cta" className="section-padding">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-textMuted uppercase tracking-widest text-sm mb-4">
            {content.finalCta.eyebrow}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {content.finalCta.title}
          </h2>
          <p className="text-textMuted text-lg">
            {content.finalCta.subtitle}
          </p>
        </div>

        <GlassCard className="relative overflow-hidden min-h-[400px] flex items-center justify-center">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">Message received!</h3>
              <p className="text-textMuted max-w-md mx-auto">
                {content.finalCta.form.successMessage}
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-5 w-full"
            >
              <div>
                <label className="block text-sm font-medium mb-2">{content.finalCta.form.fields[0].label}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accentFrom focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{content.finalCta.form.fields[1].label}</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accentFrom focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{content.finalCta.form.fields[2].label}</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accentFrom focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{content.finalCta.form.fields[3].label}</label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accentFrom focus:outline-none transition-colors"
                >
                  <option value="Europe">Europe</option>
                  <option value="US">US</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{content.finalCta.form.fields[4].label}</label>
                <textarea
                  name="idea"
                  required
                  rows={4}
                  value={formData.idea}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accentFrom focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-full font-semibold gradient-bg hover:-translate-y-0.5 transition-transform duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  content.finalCta.form.submitLabel
                )}
              </button>
            </motion.form>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
