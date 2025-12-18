"use client";

import { X, CheckCircle, Clock, Code } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface CaseStudy {
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
  timeline: string;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    label: string;
    tag: string;
    image: string;
    caseStudy?: CaseStudy;
  };
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!project.caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-gray-100 transition-colors flex items-center justify-center shadow-lg"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Hero Image */}
              <div className="relative w-full h-64 md:h-80 rounded-t-2xl overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 mb-2">
                    {project.tag}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                    {project.label}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Meta Info */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accentFrom" />
                    <div>
                      <p className="text-xs text-textMuted uppercase tracking-wider">Timeline</p>
                      <p className="text-sm font-semibold">{project.caseStudy.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-accentFrom" />
                    <div>
                      <p className="text-xs text-textMuted uppercase tracking-wider">Tech Stack</p>
                      <p className="text-sm font-semibold">{project.caseStudy.tech.slice(0, 2).join(", ")}</p>
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-textPrimary">The Challenge</h3>
                  <p className="text-textSecondary leading-relaxed">{project.caseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-textPrimary">Our Solution</h3>
                  <p className="text-textSecondary leading-relaxed">{project.caseStudy.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4 text-textPrimary">Results & Impact</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.caseStudy.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-textPrimary">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.caseStudy.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
