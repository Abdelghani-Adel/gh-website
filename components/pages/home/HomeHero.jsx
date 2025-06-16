import React from "react";
import { getSectionData } from "@/utils/ApiService";
import { ArrowRight } from "lucide-react";
import HeroBackgroundPattern from "@/components/HeroBackgroundPattern";

const HomeHero = async () => {
  const content = await getSectionData(1);

  if (!content) {
    return null;
  }

  return (
    <section className="hero_wrapper">
      <HeroBackgroundPattern />

      <div className="relative max-w-7xl px-5 mx-auto h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">{content?.title}</h1>
          <p className="text-xl lg:text-2xl text-teal-100 font-medium">
            {content?.subtitle}
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html: content?.description || "",
            }}
          />
          <button className="bg-second hover:bg-teal-300 text-teal-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2">
            Learn More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
