import Analytics from "@/components/pages/home/Analytics";
import CTA from "@/components/pages/home/CTA";
import Customers from "@/components/pages/home/Customers";
import HomeAbout from "@/components/pages/home/HomeAbout";
import HomeHero from "@/components/pages/home/HomeHero";
import HomeServices from "@/components/pages/home/HomeServices";
import HomeSustainability from "@/components/pages/home/HomeSustainability";
import Testimonials from "@/components/pages/home/Testimonials";
import TimeLine from "@/components/pages/TimeLine";

const LTSHomepage = async () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeSustainability />
      <TimeLine />
      <Testimonials />
      <Analytics />
      <Customers />
      <CTA />
    </div>
  );
};

export default LTSHomepage;
