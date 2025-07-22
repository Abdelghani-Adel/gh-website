import { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LTS",
  description: "Link Talent Support",
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
