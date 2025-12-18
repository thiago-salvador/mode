import Link from "next/link";
import Image from "next/image";
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
            <p className="text-textMuted text-sm leading-relaxed max-w-md">
              {content.footer.leftText}
            </p>
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
            <div className="flex md:justify-end gap-6 text-sm">
              <Link href="#how-it-works" className="text-textMuted hover:text-textPrimary transition-colors">
                {content.navbar.links.find(l => l.href === "#how-it-works")?.label}
              </Link>
              <Link href="#pricing" className="text-textMuted hover:text-white transition-colors">
                {content.navbar.links.find(l => l.href === "#pricing")?.label}
              </Link>
              <Link href="#faqs" className="text-textMuted hover:text-white transition-colors">
                {content.navbar.links.find(l => l.href === "#faqs")?.label}
              </Link>
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
