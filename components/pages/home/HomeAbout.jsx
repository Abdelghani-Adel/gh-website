import { getSectionData } from "@/utils/ApiService";
import { API_URL } from "@/utils/constants";
import Image from "next/image";

const HomeAbout = async () => {
  const content = await getSectionData(2);

  if (!content) {
    return null;
  }

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              {content?.title}
            </h2>
            <div
              className="mb-8"
              dangerouslySetInnerHTML={{
                __html: content?.description || "",
              }}
            />

            <button className="bg-second hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Our Story
            </button>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden p-8 h-80 relative">
              <Image
                src={API_URL + content?.image?.imageUrl}
                alt={content?.image?.imageAlt}
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
