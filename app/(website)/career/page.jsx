import CareerHero from "@/components/pages/career/CareerHero";
import CareerIntro from "@/components/pages/career/CareerIntro";
import Positions from "@/components/pages/career/Positions";
import CareerBenefits from "@/components/pages/career/CareerBenefits";

export const metadata = {
  title: "Careers | Join Link Talent Support",
  description: "Explore current job openings and career opportunities at Link Talent Support. Join our mission to empower talent worldwide.",
  keywords: ["job openings", "careers at link talent", "join our team", "hiring", "career opportunities", "HR jobs", "recruitment jobs"],
  openGraph: {
    title: "Careers | Link Talent Support",
    description: "Apply now and be part of a team that connects talent with opportunity.",
    url: "https://www.linktalentsupport.com/career",
    siteName: "Link Talent Support",
    images: [
      {
        url: "https://www.linktalentsupport.com/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "Link Talent Support",
      },
    ],
    type: "website",
  },};

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
