import React from "react";

const ServicesList = () => {
  const data = [
    {
      id: "strategy-design",
      title: "Strategy & Design",
      description:
        "Experience excellence with thought leadership and talent consulting. We stay on cutting edge of the latest technology and conventional operations.",
      image: "/service2.png",
      items: [
        "Customer Experience",
        "Product Development",
        "Digital Innovation",
        "Business Development",
      ],
    },
    {
      id: "data-analytics",
      title: "Data & Analytics",
      description:
        "Data-driven excellence to empower sustainable development with leadership and insights solutions for discovery and analytics with business intelligence for impactful business value.",
      image: "/service2.png",
      items: [
        "Data Management",
        "Data Engineering & AI Platforms",
        "Advanced Analytics",
        "Business Intelligence",
        "Operational Insights",
        "Industry & Specific Solutions",
      ],
    },
    {
      id: "enterprise-technology",
      title: "Enterprise Technology",
      description:
        "Expertly positioned to be your enterprise-driven business automation partner. We seamlessly bridge solution with intelligence.",
      image: "/service2.png",
      items: [
        "Agile & IT Services",
        "Technology Transformation",
        "Cloud Services",
        "Enterprise Integration",
        "Enterprise Automation",
        "Experience Platforms",
        "Applications Services",
        "QA Technology",
        "Innovation AI",
        "Sustainability",
      ],
    },
    {
      id: "digital-operations",
      title: "Digital Operations",
      description:
        "Connected smart technology, efficient, agile and connected workforce, and effective communication to enhance business processes to address specific business challenges.",
      image: "/service2.png",
      items: [
        "Process",
        "Operations",
        "Customer Service",
        "Trust & Safety",
        "Content & Experience",
      ],
    },
  ];
  return (
    <>
      {data.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </>
  );
};

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`py-28 ${isEven ? "bg-white" : "bg-second text-white"}`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 ${
            !isEven ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <div className="flex-1 space-y-6">
            <h3
              className={`text-4xl lg:text-5xl font-bold ${
                isEven ? "text-second" : "text-white"
              }`}
            >
              {service.title}
            </h3>
            <p className="text-lg leading-relaxed">{service.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.items.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isEven ? "bg-second" : "bg-white"
                    }`}
                  />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
