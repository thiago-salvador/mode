import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://modemvp.studio'),
  title: "Mode - Ship your AI MVP in 2 weeks",
  description: "Mode designs and builds focused AI MVPs for founders in Europe and the US, so you can learn from real users instead of endless planning.",
  keywords: ["AI MVP", "MVP development", "AI startup", "product development", "no-code", "rapid prototyping"],
  authors: [{ name: "Mode Studio" }],
  icons: {
    icon: "/modelogo.png",
    apple: "/modelogo.png",
  },
  openGraph: {
    title: "Mode - Ship your AI MVP in 2 weeks",
    description: "Mode designs and builds focused AI MVPs for founders in Europe and the US.",
    type: "website",
    locale: "en_US",
    siteName: "Mode",
    images: [
      {
        url: "/modelogo.png",
        width: 1200,
        height: 630,
        alt: "Mode - AI MVP Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mode - Ship your AI MVP in 2 weeks",
    description: "Mode designs and builds focused AI MVPs for founders in Europe and the US.",
    images: ["/modelogo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <div id="ambient-blob-3" />
        <div id="noise-overlay" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mode",
              "url": "https://modemvp.studio",
              "logo": "https://modemvp.studio/modelogo.png",
              "description": "AI MVP studio for ambitious founders",
              "sameAs": []
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
