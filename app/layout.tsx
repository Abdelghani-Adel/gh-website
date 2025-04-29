import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GH",
  description: "GH",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="overflow-x-hidden flex flex-col min-h-screen">
        <Header />
        {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
