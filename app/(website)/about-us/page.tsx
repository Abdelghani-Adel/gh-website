import React from "react";

// Import the new components
import AboutHero from "@/components/pages/AboutUs/AboutHero";
import AboutMission from "@/components/pages/AboutUs/AboutMission";
import AboutLeadership from "@/components/pages/AboutUs/AboutLeadership";
import AboutTeams from "@/components/pages/AboutUs/AboutTeams";
import AboutCertificates from "@/components/pages/AboutUs/AboutCertificates";
import AboutCTA from "@/components/pages/AboutUs/AboutCTA";

export const metadata = {
  title: "About Us | Link Talent Support",
  description: "Learn more about Link Talent Support, our mission, and our expertise in providing outsourcing services for the tourism and travel industry.",
  keywords: ["about Link Talent Support",
    "tourism outsourcing company",
    "our mission",
    "travel customer service provider",
    "outsourcing experts",
    "Link Talent Support",
    "Link Talent",],
  openGraph: {
    title: "About Link Talent Support",
    description:
      "We help tourism businesses grow with reliable outsourcing and dedicated teams.",
    url: "https://linktalentsupport.com/about-us",
    siteName: "Link Talent Support",
    images: [
      {
        url: "https://www.linktalentsupport.com/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "Our team at Link Talent Support",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Link Talent Support",
    description:
      "Dedicated to quality and innovation in tourism outsourcing since day one.",
    images: ["https://www.linktalentsupport.com/logo-icon.png"],
  },
};

const AboutUsPage = () => {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutLeadership />
      <AboutTeams />
      <AboutCertificates />
      <AboutCTA />
    </>
  );
};

export default AboutUsPage;
