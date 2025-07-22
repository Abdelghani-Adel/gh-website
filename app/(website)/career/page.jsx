import CareerHero from "@/components/pages/career/CareerHero";
import CareerIntro from "@/components/pages/career/CareerIntro";
import Positions from "@/components/pages/career/Positions";
import CareerBenefits from "@/components/pages/career/CareerBenefits";

export const metadata = {
  title: "LTS / Careers",
  description: "Our Careers",
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
