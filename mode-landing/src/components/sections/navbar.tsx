"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useCal } from "@/hooks/use-cal";

import { content } from "@/lib/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCalendar } = useCal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = content.navbar.links;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed z-50 transition-all duration-500 ${isScrolled
          ? "top-4 left-0 right-0 mx-auto max-w-5xl w-[calc(100%-2rem)] rounded-full bg-white/80 backdrop-blur-md border border-white/20 shadow-lg shadow-black/5 py-2.5 px-5"
          : "top-0 w-full bg-transparent border-transparent py-6 px-6 lg:px-12"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#top" className="flex items-center group transition-transform duration-300 hover:scale-105">
            <Image
              src="/modelogo.png"
              alt={content.navbar.logo.alt}
              width={180}
              height={54}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group px-2 py-1"
              >
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-textPrimary transition-colors group-hover:text-textSecondary">
                  {link.label}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-textPrimary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => openCalendar("mode/discovery-call")}
              className={`hidden sm:inline-flex text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 ${isScrolled ? "h-9 px-5" : "h-10 px-6"
                }`}
            >
              {content.navbar.primaryCta.label}
            </Button>

            <button
              className="md:hidden p-2 text-textPrimary hover:text-textSecondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 flex flex-col"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-heading font-bold text-textPrimary hover:text-accentFrom transition-colors tracking-tight"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8"
              >
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openCalendar("mode/discovery-call");
                  }}
                  className="w-full text-lg py-6 rounded-full"
                >
                  {content.navbar.primaryCta.label}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
