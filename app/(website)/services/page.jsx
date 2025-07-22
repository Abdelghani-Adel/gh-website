import ContactUs from "@/components/pages/ContactUs";
import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesList from "@/components/pages/services/ServicesList";

export const metadata = {
  title: "LTS / Services",
  description: "Our Services",
};

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
