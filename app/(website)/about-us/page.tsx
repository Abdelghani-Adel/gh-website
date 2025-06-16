"use client";

import React from "react";

// Import the new components
import AboutHero from "@/components/pages/AboutUs/AboutHero";
import AboutMission from "@/components/pages/AboutUs/AboutMission";
import AboutLeadership from "@/components/pages/AboutUs/AboutLeadership";
import AboutTeams from "@/components/pages/AboutUs/AboutTeams";
import AboutCertificates from "@/components/pages/AboutUs/AboutCertificates";
import AboutCTA from "@/components/pages/AboutUs/AboutCTA";

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
