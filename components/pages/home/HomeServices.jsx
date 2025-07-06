import BackendIcon from "@/components/BackendIcon";
import { getSectionData } from "@/utils/ApiService";
import { ArrowRight, CircleCheck } from "lucide-react";
import Link from "next/link";

const HomeServices = async () => {
  const content = await getSectionData(7);

  if (!content) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {content?.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content?.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {content?.items?.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BackendIcon
                  iconName={service.icon}
                  className="text-6xl h-12 w-12 text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>

              <div
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />

              <Link
                href="/services"
                className="text-teal-600 w-max hover:text-teal-700 font-medium flex items-center gap-2 mx-auto"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
