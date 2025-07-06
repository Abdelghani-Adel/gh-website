import { getSectionData } from "@/utils/ApiService";
import Link from "next/link";

const AboutCTA = async () => {
  const data = await getSectionData(25);

  if (!data) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600">
      <div className="container mx-auto px-6 text-center text-white ">
        <h2 className="text-4xl font-bold mb-6">{data.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
        <Link
          href="/contact"
          className="inline-block bg-white mt-5 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default AboutCTA;
