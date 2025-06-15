"use client";

const ContactHero = () => {
  const data = {
    title: "Get in Touch",
    subtitle: "Ready to transform your business? Let's start the conversation.",
    description:
      "Whether you're looking to optimize operations, enhance customer experience, or explore new markets, our team is here to help you succeed.",
  };

  return (
    <section className="relative bg-gradient-to-br from-teal-900 via-blue-800 to-teal-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-6 lg:px-16 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl lg:text-2xl text-teal-100 mb-8">
            {data.subtitle}
          </p>
          <p className="text-lg text-teal-50 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
