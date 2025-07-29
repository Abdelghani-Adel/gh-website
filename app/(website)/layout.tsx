import { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Link Talent Support",
  description:
    "Link Talent Support offers tailored outsourcing solutions for the tourism industry, including customer service, IT services, and social media management.",
  keywords: [
    "tourism outsourcing",
    "travel support",
    "multilingual customer service",
    "IT services tourism",
    "Link Talent Support",
  ],
  openGraph: {
    title: "Link Talent Support | Tourism Outsourcing Experts",
    description:
      "Efficient, multilingual, and scalable outsourcing for the travel industry. Available 24/7.",
    url: "https://linktalentsupport.com",
    siteName: "Link Talent Support",
    images: [
      {
        url: "https://linktalentsupport.com/images/og-home.jpg",
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
    images: ["https://linktalentsupport.com/images/og-home.jpg"],
  },
  metadataBase: new URL("https://www.linktalentsupport.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white mt-24">{children}</div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
}
