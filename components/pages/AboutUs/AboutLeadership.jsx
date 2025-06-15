"use client";

import React, { useState, useEffect } from "react";

const DEFAULT_LEADERSHIP_DATA = {
  title: "Leadership Team",
  description:
    "Meet the experienced professionals leading our organization to success",
  managers: [
    {
      avatar: "/lukas.png",
      name: "Lukas Hirschl",
      position: "Director Call Center",
      description:
        "<p>Lukas Hirschl was born on July 16th 1991. Traveling is my passion – I was lucky that my father traveled the world with me</p>",
    },
  ],
};

const AboutLeadership = () => {
  const data = {
    title: "Leadership Team",
    description:
      "Meet the experienced professionals leading our organization to success",
    managers: [
      {
        avatar: "/lukas.png",
        name: "Lukas Hirschl",
        position: "Director Call Center",
        description:
          "<p>Lukas Hirschl was born on July 16th 1991. Traveling is my passion – I was lucky that my father traveled the world with me</p>",
      },
    ],
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.managers.map((manager, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-500/20"></div>
                  <img
                    src={manager.avatar}
                    alt={manager.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {manager.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-4">
                    {manager.position}
                  </p>
                  <div
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: manager.description }}
                  />
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
