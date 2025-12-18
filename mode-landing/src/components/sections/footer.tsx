import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";
import { content } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-black/8 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <Link href="#top" className="inline-block mb-4">
              <Image
                src="/modelogo.png"
                alt={content.navbar.logo.alt}
                width={200}
                height={66}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-textMuted text-sm leading-relaxed max-w-md mb-6">
              {content.footer.leftText}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {content.footer.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-textPrimary hover:text-accentFrom transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon === "linkedin" && <Linkedin className="w-5 h-5" />}
                  {social.icon === "instagram" && <Instagram className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-sm mb-4">
              <a
                href={`mailto:${content.footer.contactEmail}`}
                className="text-textMuted hover:text-textPrimary transition-colors"
              >
                {content.footer.contactEmail}
              </a>
            </p>

            {/* Secondary Links */}
            <div className="flex md:justify-end gap-6 text-sm mb-4">
              {content.footer.secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-textMuted hover:text-textPrimary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/8 text-center text-sm text-textMuted">
          {content.footer.bottomNote}
        </div>
      </div>
    </footer>
  );
}
