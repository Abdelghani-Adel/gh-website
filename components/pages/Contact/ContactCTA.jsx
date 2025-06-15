"use client";

const ContactCTA = () => {
  const data = {
    title: "Ready to Transform Your Business?",
    description:
      "Join hundreds of companies that trust LTS for their operational excellence",
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">{data.title}</h2>
        <p className="text-xl text-teal-100 mb-8">{data.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300">
            Get Started Today
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
