import { getSectionData } from "@/utils/ApiService";
import React from "react";

const CareerIntro = async () => {
  const data = await getSectionData(12, "en");

  if (!data) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-second mb-8">
            {data.title}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: data.desc }} />
        </div>
      </div>
    </section>
  );
};

export default CareerIntro;
