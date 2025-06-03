import React from "react";
import { getSectionData } from "@/utils/ApiService";
import { ArrowRight, CircleCheck, Quote, Star } from "lucide-react";
import Image from "next/image";

const Testimonials = async () => {
  const content = await getSectionData(6, "en");

  if (!content) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {content?.title}
          </h2>
          <p className="text-xl text-gray-600">{content?.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content?.items?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-6 right-6 text-teal-400">
                <Quote className="w-8 h-8" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full"></div> */}
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-teal-600 font-medium">
                    {testimonial.company}
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

export default Testimonials;
