"use client";

import { useState } from "react";

const ContactMap = () => {
  const data = {
    title: "",
    subTitle: "",
    branches: [
      {
        id: 1,
        name: "Main Office",
        mapLocation:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123456789!2d33.123456789!3d27.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef!2sHurghada!5e0!3m2!1sen!2seg!4v1234567890",
      },
      {
        id: 2,
        name: "Second Office",
        mapLocation:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123456789!2d33.123456789!3d27.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef!2sHurghada!5e0!3m2!1sen!2seg!4v1234567890",
      },
    ],
  };

  const [selectedBranch, setSelectedBranch] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600">{data.subTitle}</p>
        </div>

        {data.branches.length > 1 && (
          <div className="flex justify-center gap-2 mb-6">
            {data.branches.map((branch, index) => (
              <button
                key={branch.id}
                onClick={() => setSelectedBranch(index)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                  selectedBranch === index
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {branch.name}
              </button>
            ))}
          </div>
        )}

        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src={data.branches[selectedBranch]?.mapLocation}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
