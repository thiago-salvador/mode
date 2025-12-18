import Image from "next/image";
import { content } from "@/lib/content";

export function TrustedBy() {
  return (
    <section className="section-padding bg-surface/20 border-y border-borderSubtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-textMuted uppercase tracking-widest text-xs mb-3">
            {content.trustedBy.eyebrow}
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-textPrimary">
            {content.trustedBy.title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {content.trustedBy.logos.map((logo) => (
            <div
              key={logo.name}
              className="relative h-8 w-32 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
