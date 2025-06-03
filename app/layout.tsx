import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "GH",
  description: "GH",
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
