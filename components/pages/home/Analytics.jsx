import { getSectionData } from "@/utils/ApiService";
import { Star } from "lucide-react";

const Analytics = async () => {
  const content = await getSectionData(3);

  if (!content) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{content?.title}</h2>
          <p className="text-xl text-teal-100">{content?.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {content?.stats?.map((stat) => (
            <div
              key={stat.id}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <div className="text-white">
                    <Star />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2 text-teal-100">
                  {stat.title}
                </div>
                <div className="text-sm text-teal-200 leading-relaxed">
                  {stat.subTitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional visual elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse"></div>
              <span className="text-teal-100">Growing Team</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
              <span className="text-blue-100">Global Reach</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-white">Quality Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
