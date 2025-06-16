import HeroBackgroundPattern from "@/components/HeroBackgroundPattern";
import { getSectionData } from "@/utils/ApiService";
import React from "react";

const ServicesHero = async () => {
  const data = await getSectionData(14);

  if (!data) {
    return null;
  }

  return (
    <section className="hero_wrapper">
      <HeroBackgroundPattern />

      <div className="relative max-w-7xl px-5 mx-auto h-full flex items-center">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl lg:text-6xl font-bold">{data.title}</h1>
          <h2 className="text-xl lg:text-2xl text-teal-100 font-medium">
            {data.subtitle}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
