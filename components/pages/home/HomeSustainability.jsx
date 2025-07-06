import { getSectionData } from "@/utils/ApiService";
import Link from "next/link";

const HomeSustainability = async () => {
  const content = await getSectionData(8);

  if (!content) {
    return null;
  }

  return (
    <section
      className="py-20 bg-gradient-to-br from-teal-900 to-blue-900 text-white"
      id="sustainability"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">{content?.title}</h2>
            <p className="text-lg text-teal-50 mb-8 leading-relaxed">
              {content?.subtitle}
            </p>

            <div
              className="mb-6"
              dangerouslySetInnerHTML={{
                __html: content?.description,
              }}
            />

            <Link
              href="/contact"
              className="bg-second w-max hover:bg-teal-300 text-teal-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSustainability;
