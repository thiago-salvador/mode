"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

import { motion } from "framer-motion";

export function Button({ children, href, onClick, variant = "primary", className }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 text-sm font-semibold tracking-wide relative overflow-hidden cursor-pointer";

  const variantStyles = {
    primary: "px-5 py-2.5 rounded-pill bg-electricBlue text-white hover:bg-[#0070E0] shadow-cardSoft group hover:shadow-lg hover:shadow-electricBlue/30 transition-all",
    secondary: "px-[18px] py-2.5 rounded-pill bg-[#F9FAFB] text-textPrimary border border-borderSubtle hover:bg-white hover:shadow-cardFlat",
  };

  // Check if className includes w-full to apply full width to wrapper
  const hasFullWidth = className?.includes("w-full");

  const content = (
    <>
      {variant === "primary" && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={hasFullWidth ? "w-full" : "inline-block"}
    >
      {onClick ? (
        <button
          onClick={onClick}
          className={cn(baseStyles, !className && variantStyles[variant], className)}
        >
          {content}
        </button>
      ) : (
        <Link
          href={href || "#"}
          className={cn(baseStyles, !className && variantStyles[variant], className)}
        >
          {content}
        </Link>
      )}
    </motion.div>
  );
}
