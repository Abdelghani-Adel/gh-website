"use client";

import ContactUs from "@/components/pages/ContactUs";
import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesList from "@/components/pages/services/ServicesList";

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesList />
      <ContactUs />
    </div>
  );
};

export default Page;
