"use client";

const AboutCTA = () => {
  const data = {
    title: "Ready to Experience the LTS Difference?",
    description:
      "Join hundreds of satisfied clients who trust us with their BPO needs",
  };

  return (
    <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">{data.title}</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {data.description}
        </p>
        <a
          href={data.buttonLink}
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {data.buttonText}
        </a>
      </div>
    </section>
  );
};

export default AboutCTA;
