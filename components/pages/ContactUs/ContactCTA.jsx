import { getSectionData } from "@/utils/ApiService";

const ContactCTA = async () => {
  const data = await getSectionData(19);

  if (!data) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">{data.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      </div>
    </section>
  );
};

export default ContactCTA;
