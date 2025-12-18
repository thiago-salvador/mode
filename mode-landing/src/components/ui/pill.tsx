import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PillProps {
  children: ReactNode;
  className?: string;
}

export function Pill({ children, className }: PillProps) {
  return (
    <span className={cn("inline-block px-3.5 py-1.5 rounded-full text-xs tracking-wider bg-white/5", className)}>
      {children}
    </span>
  );
}
