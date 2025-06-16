"use client";

import ContactUs from "@/components/pages/ContactUs";
import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesList from "@/components/pages/services/ServicesList";

const Page = () => {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ContactUs />
    </>
  );
};

export default Page;
