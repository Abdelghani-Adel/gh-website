import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

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
