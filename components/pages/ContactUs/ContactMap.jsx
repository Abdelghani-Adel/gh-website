"use client";

import { getSectionData } from "@/utils/ApiService";
import { useEffect, useState } from "react";

const ContactMap = () => {
  const [data, setData] = useState();
  const [selectedBranch, setSelectedBranch] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSectionData(18);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return null;
  }

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
