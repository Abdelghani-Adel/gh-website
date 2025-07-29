import ContactUs from "@/components/pages/ContactUs";
import ScrollToHash from "@/components/pages/services/ScrollToHash";
import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesList from "@/components/pages/services/ServicesList";

export const metadata = {
  title: "Our Services | Link Talent Support",
  description:
    "Discover our full range of outsourcing services tailored to the travel and tourism sector: customer support, IT services, social media, and consulting.",
  keywords: [
    "outsourcing services tourism",
    "customer support for travel",
    "IT solutions travel",
    "social media tourism",
    "Link Talent Support services",
    "Link Talent services",
    "Link Talent Support",
    "Link Talent",
  ],
  images: [
      {
        url: "https://www.linktalentsupport.com/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "Link Talent Support",
      },
    ],
  openGraph: {
    title: "Outsourcing Services for Tourism",
    description:
      "Link Talent Support offers scalable customer service, IT, and digital outsourcing for travel and tourism companies.",
    url: "https://linktalentsupport.com/services",
    siteName: "Link Talent Support",
    images: [
      {
        url: "https://linktalentsupport.com/images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Tourism outsourcing services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Link Talent Support",
    description:
      "Flexible outsourcing solutions tailored to tourism: customer service, IT, social media & more.",
    images: ["https://linktalentsupport.com/images/og-services.jpg"],
  },
};

const Page = () => {
  return (
    <>
      <ScrollToHash />
      <ServicesHero />
      <ServicesList />
      <ContactUs />
    </>
  );
};

export default Page;
