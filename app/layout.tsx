import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Link Talent Support",
  icons: {
    icon: '/favicon.png',
  },
  description: "Link Talent Support offers tailored outsourcing solutions for the tourism industry, including customer service, IT services, and social media management.",
  keywords: ["tourism outsourcing",
    "travel support",
    "multilingual customer service",
    "IT services tourism",
    "Link Talent Support",
    "Link Talent",],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Link Talent Support",
    description:
      "Efficient, multilingual, and scalable outsourcing for the travel industry. Available 24/7.",
    url: "https://linktalentsupport.com",
    siteName: "Link Talent Support",
    images: [
      {
        url: "https://www.linktalentsupport.com/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "Link Talent Support",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Link Talent Support | Tourism Outsourcing Experts",
    description:
      "Outsourcing solutions for the tourism industry: support, IT, social media, and more.",
    images: ["https://www.linktalentsupport.com/logo-icon.png"],
  },
  metadataBase: new URL("https://www.linktalentsupport.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="overflow-x-hidden flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
