import React from "react";
import { getSectionData } from "@/utils/ApiService";
import { ArrowRight, CircleCheck, Quote, Star } from "lucide-react";
import Image from "next/image";

const Customers = async () => {
  const content = await getSectionData(5, "en");

  if (!content) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {content?.title}
          </h2>
          <p className="text-xl text-gray-600 mb-12">{content?.subtitle}</p>

          {/* Client Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {content?.stats?.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Logos */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {content?.logos?.map((customer) => (
              <div
                key={customer.id}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div>
                  <div className="w-full h-16 relative rounded-lg overflow-hidden mb-2">
                    <Image
                      fill
                      src={customer.logo.src}
                      alt={customer.logo.alt}
                    />
                  </div>
                  <div className="text-gray-500 group-hover:text-teal-600 transition-colors duration-300 text-sm font-medium text-center px-2">
                    {customer.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Join hundreds of companies already transforming their operations
              with LTS
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center gap-2">
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
