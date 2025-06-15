// sectionMap.ts
import HomeHero from "@/components/pages/home/HomeHero";
import HomeAbout from "@/components/pages/home/HomeAbout";
import { ComponentType } from "react";
import Analytics from "@/components/pages/home/Analytics";
import TimeLine from "@/components/pages/TimeLine";
import Customers from "@/components/pages/home/Customers";
import Testimonials from "@/components/pages/home/Testimonials";
import HomeServices from "@/components/pages/home/HomeServices";
import HomeSustainability from "@/components/pages/home/HomeSustainability";
import CTA from "@/components/pages/home/CTA";
import CareerHero from "@/components/pages/career/CareerHero";
import CareerBenefits from "@/components/pages/career/CareerBenefits";
import CareerIntro from "@/components/pages/career/CareerIntro";
import Positions from "@/components/pages/career/Positions";
import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesList from "@/components/pages/services/ServicesList";
import ContactHero from "@/components/pages/contact/ContactHero";
import ContactInfo from "@/components/pages/contact/ContactInfo";
import ContactMap from "@/components/pages/contact/ContactMap";
import ContactCTA from "@/components/pages/contact/ContactCTA";
import AboutHero from "@/components/pages/AboutUs/AboutHero";
import AboutMission from "@/components/pages/AboutUs/AboutMission";
import AboutLeadership from "@/components/pages/AboutUs/AboutLeadership";
import AboutTeams from "@/components/pages/AboutUs/AboutTeams";
import AboutCertificates from "@/components/pages/AboutUs/AboutCertificates";
import AboutCTA from "@/components/pages/AboutUs/AboutCTA";

export const sectionMap: Record<string, ComponentType> = {
  1: HomeHero,
  2: HomeAbout,
  3: Analytics,
  4: TimeLine,
  5: Customers,
  6: Testimonials,
  7: HomeServices,
  8: HomeSustainability,
  9: CTA,
  10: CareerHero,
  11: CareerBenefits,
  12: CareerIntro,
  13: Positions,
  14: ServicesHero,
  15: ServicesList,
  16: ContactHero,
  17: ContactInfo,
  18: ContactMap,
  19: ContactCTA,
  20: AboutHero,
  21: AboutMission,
  22: AboutLeadership,
  23: AboutTeams,
  24: AboutCertificates,
  25: AboutCTA,
};
