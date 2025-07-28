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
  description: "Discover the mission and team behind Link Talent Support. We are committed to empowering careers and businesses through professional support.",
  keywords: ["about link talent", "link talent team", "career support company", "recruitment agency", "HR services company"],
  openGraph: {
    title: "About Us | Link Talent Support",
    description: "Learn more about our mission, values, and the team driving Link Talent Support forward.",
    url: "https://www.linktalentsupport.com/about",
    siteName: "Link Talent Support",
    
    type: "website",
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
