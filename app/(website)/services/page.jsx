import ContactUs from "@/components/pages/ContactUs";
import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesList from "@/components/pages/services/ServicesList";

export const metadata = {
  title: "Our Services | Link Talent Support",
  description: "Discover our range of career and HR services including recruitment, talent development, and professional consulting.",
  keywords: [
    "HR services",
    "career support",
    "recruitment services",
    "talent development",
    "job coaching",
    "consulting",
    "human resources solutions"
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
    title: "Our Services | Link Talent Support",
    description: "Explore how Link Talent Support helps job seekers and companies with HR, recruitment, and career development services.",
    url: "https://www.linktalentsupport.com/services",
    siteName: "Link Talent Support",
    
    type: "website",
  },
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
