import React from "react";
import { getSectionData } from "@/utils/ApiService";
import { ArrowRight } from "lucide-react";

const HomeHero = async () => {
  const content = await getSectionData(1, "en");

  if (!content) {
    return null;
  }

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-blue-500 via-blue-800 to-blue-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-cyan-400 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-cyan-300 animate-ping"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-16 pb-32 pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {content?.title}
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100 mb-4 font-medium">
              {content?.subtitle}
            </p>

            <div
              className="mb-8"
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
      </div>
    </section>
  );
};

export default HomeHero;
