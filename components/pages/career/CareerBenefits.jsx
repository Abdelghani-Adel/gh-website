import BackendIcon from "@/components/BackendIcon";
import { getSectionData } from "@/utils/ApiService";
import {
  Brain,
  Clock,
  Globe,
  Handshake,
  Heart,
  Star,
  Target,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import React from "react";

const CareerBenefits = async () => {
  const data = await getSectionData(11);

  if (!data) {
    return null;
  }

  // Icon mapping for training items
  const getTrainingIcon = (iconName) => {
    const icons = {
      Handshake: Handshake,
      Brain: Brain,
      Target: Target,
      UserCheck: UserCheck,
    };
    const IconComponent = icons[iconName] || Star;
    return <IconComponent className="w-8 h-8" />;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600">{data.subTitle}</p>
        </div>

        {/* Training Programs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Training Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.trainings.map((training, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <BackendIcon iconName={training.icon} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {training.title}
                </h4>
                <p className="text-gray-600">
                  {training.description ||
                    "Comprehensive program designed for your success"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Benefits & Perks
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.benefits?.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <BackendIcon iconName={benefit.icon} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )) ||
              // Default benefits if not provided
              [
                {
                  icon: Heart,
                  title: "Health Insurance",
                  description: "Comprehensive health coverage",
                },
                {
                  icon: Clock,
                  title: "Flexible Hours",
                  description: "Work-life balance priority",
                },
                {
                  icon: TrendingUp,
                  title: "Career Growth",
                  description: "Clear advancement opportunities",
                },
                {
                  icon: Globe,
                  title: "Remote Work",
                  description: "Flexible work arrangements",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBenefits;
