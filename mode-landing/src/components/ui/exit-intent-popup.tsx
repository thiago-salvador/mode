"use client";

import { X, Rocket, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { useCal } from "@/hooks/use-cal";

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExitIntentPopup({ isOpen, onClose }: ExitIntentPopupProps) {
  const { openCalendar } = useCal();

  const handleBookCall = () => {
    onClose();
    openCalendar("mode/discovery-call");
  };

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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
          />

          {/* Popup */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-colors flex items-center justify-center shadow-md"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Rocket className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-gray-900">
                  Wait! Before you go...
                </h2>

                <p className="text-center text-lg text-gray-600 mb-6">
                  Get a <span className="font-bold text-gray-900">FREE 14-day sprint plan</span> for your MVP
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {[
                    "Detailed scope breakdown for your product",
                    "Technology stack recommendations",
                    "Timeline and milestone planning",
                    "No obligation, no sales pressure",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={handleBookCall}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full px-8 h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Get My FREE Sprint Plan
                  </Button>
                  <button
                    onClick={onClose}
                    className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    No thanks, I&apos;ll figure it out myself
                  </button>
                </div>

                {/* Trust Signal */}
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-xs text-gray-500">
                    Join <span className="font-semibold text-gray-700">200+ founders</span> who already got their free sprint plan
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
