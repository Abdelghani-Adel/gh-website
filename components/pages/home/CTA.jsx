import { getSectionData } from "@/utils/ApiService";
import Link from "next/link";

const CTA = async () => {
  const content = await getSectionData(9);

  if (!content) {
    return null;
  }

  return (
    <section className="py-20 bg-second text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
          {content?.title}
        </h2>
        <Link
          href="/contact"
          className="bg-white hover:bg-gray-100 text-teal-600 px-10 py-4 rounded-full font-bold text-lg transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTA;
