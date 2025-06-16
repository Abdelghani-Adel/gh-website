import HeroBackgroundPattern from "@/components/HeroBackgroundPattern";
import { getSectionData } from "@/utils/ApiService";
import React from "react";

const CareerHero = async () => {
  const data = await getSectionData(10);

  if (!data) {
    return null;
  }

  return (
    <section className="hero_wrapper">
      <HeroBackgroundPattern />

      <div className="relative max-w-7xl px-5 mx-auto h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">{data.title}</h1>
          <p className="text-xl lg:text-2xl text-teal-100 font-medium">
            {data.subTitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
