"use client";

import React, { useState, useEffect } from "react";
import { Award } from "lucide-react";

const AboutCertificates = () => {
  const data = {
    title: "Certifications & Standards",
    description:
      "Committed to excellence through internationally recognized standards",
    certificates: [
      {
        logo: "",
        title: "ISO 9001:2015 Quality Management",
      },
      {
        logo: "",
        title: "ISO 27001 Information Security",
      },
      {
        logo: "",
        title: "GDPR Compliance Certification",
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">{data.title}</h2>
          <p className="text-xl text-gray-300">{data.description}</p>
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
