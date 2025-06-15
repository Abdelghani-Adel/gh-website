import { getSectionData } from "@/utils/ApiService";
import { Award } from "lucide-react";

const AboutCertificates = async () => {
  const data = await getSectionData(24);

  if (!data) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl font-bold mb-6">{data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.certificates.map((cert, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm">Certified Excellence</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCertificates;
