import { getSectionData } from "@/utils/ApiService";
import { API_URL } from "@/utils/constants";

const AboutLeadership = async () => {
  const data = await getSectionData(22);

  if (!data) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>

          <div dangerouslySetInnerHTML={{ __html: data.description ?? "" }} />
        </div>

        <div className="space-y-6">
          {data.managers.map((manager, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex-shrink-0 p-6 flex items-center justify-center sm:justify-start">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full"></div>
                      <img
                        src={API_URL + manager.avatar}
                        alt={manager.name}
                        className="w-60 h-60 object-cover rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:pl-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {manager.name}
                    </h3>
                    <p className="text-teal-600 font-medium mb-4">
                      {manager.position}
                    </p>
                    <div
                      className="text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: manager.description ?? "",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
