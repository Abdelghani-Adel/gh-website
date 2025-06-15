import React from "react";

const CareerIntro = () => {
  const data = {
    title: "Are you dedicated, hardworking and fun? Join us at LTS.!",
    desc: "<p>We have a corporate culture of a high performance work ethic, wonderful to corporate social responsibility...</p>",
  };

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
