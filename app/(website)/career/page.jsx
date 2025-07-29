import CareerHero from "@/components/pages/career/CareerHero";
import CareerIntro from "@/components/pages/career/CareerIntro";
import Positions from "@/components/pages/career/Positions";
import CareerBenefits from "@/components/pages/career/CareerBenefits";

export const metadata = {
  title: "Careers | Link Talent Support",
  description:
    "Join our growing team at Link Talent Support. Explore career opportunities in customer service, IT, and digital support for the tourism industry.",
  keywords: [
    "careers Link Talent Support",
    "tourism jobs",
    "customer support jobs",
    "IT jobs travel sector",
    "join our team",
    "Link Talent Support",
    "Link Talent",
  ],
openGraph: {
    title: "Careers at Link Talent Support",
    description:
      "Explore career opportunities in customer support, IT, and tourism services. Make a difference.",
    url: "https://linktalentsupport.com/career",
    siteName: "Link Talent Support",
    images: [
      {
        url: "https://www.linktalentsupport.com/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "Work with us at Link Talent Support",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Link Talent Support",
    description:
      "Work in the tourism outsourcing industry. Check out our open positions and apply now.",
    images: ["https://www.linktalentsupport.com/logo-icon.png"],
  },
};

const CareersPage = async () => {
  return (
    <>
      <CareerHero />

      <CareerIntro />

      <Positions />

      <CareerBenefits />
    </>
  );
};

export default CareersPage;
