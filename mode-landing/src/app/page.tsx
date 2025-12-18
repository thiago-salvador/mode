"use client";

import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { BenefitCards } from "@/components/sections/benefit-cards";
import { WhyMode } from "@/components/sections/why-mode";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { WorkShowcase } from "@/components/sections/work-showcase";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Team } from "@/components/sections/team";
import { Transparency } from "@/components/sections/transparency";
import { FAQs } from "@/components/sections/faqs";
import { LeadMagnet } from "@/components/sections/lead-magnet";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { ExitIntentPopup } from "@/components/ui/exit-intent-popup";
import { useExitIntent } from "@/hooks/use-exit-intent";

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent();

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustedBy />
      <MetricsStrip />
      <BenefitCards />
      <WhyMode />
      <ComparisonTable />
      <ProcessTimeline />
      <WorkShowcase />
      <Transparency />
      <Pricing />
      <Testimonials />
      <About />
      <Team />
      <FAQs />
      <LeadMagnet />
      <FinalCTA />
      <Footer />
      <WhatsAppWidget phoneNumber="351912345678" />
      <ExitIntentPopup isOpen={showExitIntent} onClose={closeExitIntent} />
    </main>
  );
}
