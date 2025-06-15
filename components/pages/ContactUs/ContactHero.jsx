import { getSectionData } from "@/utils/ApiService";

const ContactHero = async () => {
  const data = await getSectionData(16, "en");

  if (!data) {
    return null;
  }

  return (
    <section className="relative bg-gradient-to-br from-teal-900 via-blue-800 to-teal-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-6 lg:px-16 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl lg:text-2xl text-teal-100 mb-8">
            {data.subtitle}
          </p>

          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
