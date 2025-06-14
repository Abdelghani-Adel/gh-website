import { getSectionData } from "@/utils/ApiService";
import React from "react";

const CareerHero = async () => {
  const data = await getSectionData(10);

  if (!data) {
    return null;
  }

  return (
    <section className="relative mt-24 min-h-[600px] bg-gradient-to-br from-blue-500 via-blue-800 to-blue-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-cyan-400 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-cyan-300 animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl px-5 container mx-auto pt-20 lg:pt-40">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">{data.title}</h1>
          <p className="text-xl lg:text-2xl text-blue-100">{data.subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
