import React from "react";
import { getSectionData } from "@/utils/ApiService";
import { ArrowRight } from "lucide-react";
import HeroBackgroundPattern from "@/components/HeroBackgroundPattern";
import Link from "next/link";

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
          <Link
            href="/services"
            className="bg-second w-max hover:bg-teal-300 text-teal-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2"
          >
            Learn More
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
