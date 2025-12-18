"use client";

import { useState, FormEvent } from "react";
import { Download, CheckCircle, Loader2, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (replace with actual email collection)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Lead captured:", { name, email });

    // Trigger download
    const link = document.createElement("a");
    link.href = "/mvp-planning-template.md";
    link.download = "Mode-MVP-Planning-Template.md";
    link.click();

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <FadeIn>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                Free Download
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Get Your Free MVP Planning Template
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              The exact framework we use to plan 2-week sprints for 200+ founders.
              Fill it out in 30 minutes and get crystal-clear on what to build.
            </p>
          </div>
        </FadeIn>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left: Benefits */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white">
              <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                What&apos;s included:
              </h3>
              <ul className="space-y-4">
                {[
                  "2-week sprint breakdown with daily tasks",
                  "Feature prioritization framework",
                  "Tech stack decision matrix",
                  "Success metrics worksheet",
                  "Scope control checklist",
                  "Pre-launch validation guide",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Pro tip:</strong> Fill this out before your discovery call
                  and we can build your MVP even faster!
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-8 md:p-10 bg-white">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3 text-gray-900">
                      Download Started!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Check your downloads folder for the MVP Planning Template.
                      We&apos;ve also sent a copy to your email.
                    </p>
                    <p className="text-sm text-gray-500">
                      Ready to build? <a href="#cta" className="text-accentFrom font-semibold hover:underline">Book a call →</a>
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accentFrom focus:outline-none transition-colors text-gray-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@startup.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accentFrom focus:outline-none transition-colors text-gray-900"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Preparing Download...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          Download Free Template
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Trust Signal */}
        <div className="text-center mt-8">
          <p className="text-white/80 text-sm">
            Join <span className="font-bold text-white">200+ founders</span> who downloaded this template
          </p>
        </div>
      </div>
    </section>
  );
}
