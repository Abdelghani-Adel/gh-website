import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LTS",
  description: "Link Talent Support",
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
