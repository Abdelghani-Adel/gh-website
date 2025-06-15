import CareerHero from "@/components/pages/career/CareerHero";
import CareerIntro from "@/components/pages/career/CareerIntro";
import Positions from "@/components/pages/career/Positions";
import CareerBenefits from "@/components/pages/career/CareerBenefits";

const CareersPage = async () => {
  return (
    <div className="min-h-screen bg-white">
      <CareerHero />

      <CareerIntro />

      <Positions />

      <CareerBenefits />
    </div>
  );
};

export default CareersPage;
