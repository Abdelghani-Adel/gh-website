import { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Link Talent Support",
  description: "We help job seekers and employers connect through quality support and career services.",
  keywords: ["job support", "career development", "link talent", "recruitment", "HR services"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Link Talent Support",
    description: "Empowering job seekers and employers.",
    url: "https://www.linktalentsupport.com",
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
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Link Talent Support",
  //   description: "Helping job seekers and employers thrive.",
  // images: ["https://www.linktalentsupport.com/og-image.jpg"],
  // },
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
