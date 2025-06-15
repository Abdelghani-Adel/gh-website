import { getSectionData } from "@/utils/ApiService";
import { Clock, Users } from "lucide-react";

const AboutMission = async () => {
  const data = await getSectionData(21);

  if (!data) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                {data.teamTitle}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                {data.supportTitle}
              </h3>

              <div
                dangerouslySetInnerHTML={{ __html: data.supportDescription }}
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {data.whyChooseTitle}
              </h3>
              <div className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 ${
                        index === 0
                          ? "bg-teal-400"
                          : index === 1
                          ? "bg-blue-500"
                          : "bg-purple-500"
                      } rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                    >
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
