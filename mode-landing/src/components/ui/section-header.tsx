import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-12", className)}>
      {eyebrow && (
        <p className="text-textMuted uppercase tracking-widest text-sm mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-4xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}
