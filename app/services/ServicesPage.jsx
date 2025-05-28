"use client";
import React, { useState } from "react";

// data/servicesData.js
export const servicesData = {
  hero: {
    title: "Services",
    subtitle: "End-to-end capabilities for tech-powered performance",
    description:
      "Navigate the advanced technology and operational excellence to leverage emerging technologies and modernize into a customer-centric, from front to back.",
    buttonText: "Get Started",
    buttonLink: "#contact",
  },
  ecosystem: {
    title: "Our Solution Ecosystem",
    description:
      "Discover new opportunities to unlock your full potential. Through our expansive solution ecosystem, we design, build, and run your future business to ignite you into the future - enabling your business to solve, execute, foster, evolve better aligned for growth.",
  },
  services: [
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
  ],
  contact: {
    title: "Let's Connect",
    subtitle:
      "Click here if you're looking for a Concentrix career opportunity.",
    note: "Estimated Response Time",
    form: {
      fields: [
        {
          name: "firstName",
          label: "First Name*",
          type: "text",
          required: true,
        },
        { name: "lastName", label: "Last Name*", type: "text", required: true },
        {
          name: "company",
          label: "Company Name*",
          type: "text",
          required: true,
        },
        {
          name: "businessEmail",
          label: "Business Email*",
          type: "email",
          required: true,
        },
        {
          name: "jobLevel",
          label: "Job Level* (Select)",
          type: "select",
          required: true,
        },
        {
          name: "country",
          label: "Country* (Select)",
          type: "select",
          required: true,
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          required: false,
        },
      ],
      submitText: "Submit",
      disclaimer:
        "Concentrix collects information to provide you relevant information about our products and services. Please read our Concentrix Privacy Policy to understand what personal data we collect and how we use it. We also use Google reCAPTCHA to protect our websites. Google's Privacy Policy and Terms of Service apply.",
    },
  },
};

const HeroSection = ({ hero }) => (
  <section className="relative min-h-[600px] bg-gradient-to-br from-slate-900 via-blue-800 to-teal-800 text-white overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-cyan-400 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-cyan-300 animate-ping"></div>
    </div>

    <div className="relative z-10 container max-w-6xl mx-auto px-6 pt-20 lg:pt-40">
      <div className="max-w-2xl">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">{hero.title}</h1>
        <h2 className="text-xl lg:text-2xl font-light mb-8 text-cyan-100">
          {hero.subtitle}
        </h2>
        <p className="text-lg mb-8 text-gray-200 leading-relaxed">
          {hero.description}
        </p>
      </div>
    </div>
  </section>
);

const EcosystemSection = ({ ecosystem }) => (
  <section className="py-20 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl lg:text-5xl font-bold mb-8">{ecosystem.title}</h2>
      <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
        {ecosystem.description}
      </p>
    </div>
  </section>
);

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`py-28 ${isEven ? "bg-white" : "bg-second text-white"}`}
    >
      <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-6">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 ${
            !isEven ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <div className="flex-1 space-y-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-main">
              {service.title}
            </h3>
            <p className="text-lg leading-relaxed">{service.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.items.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
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

      {/* Decorative Wave */}
      {/* {!isEven && (
        <div className="mt-16">
          <svg
            className="w-full h-16 text-gray-50"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      )} */}
    </section>
  );
};

const ContactSection = ({ contact }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left side - Image and text */}
          <div className="flex-1 space-y-8">
            <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-xl">
              <img
                src="/service2.png"
                alt="Contact representative"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {contact.title}
              </h2>
              <p className="text-lg text-gray-600 mb-4">{contact.subtitle}</p>
              <div className="inline-flex items-center text-green-600">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="font-medium">{contact.note}</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex-1 max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contact.form.fields.slice(0, 2).map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>
                ))}
              </div>

              {contact.form.fields.slice(2, 4).map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contact.form.fields.slice(4, 6).map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <select
                      name={field.name}
                      required={field.required}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select...</option>
                    </select>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contact.form.fields[6].label}
                </label>
                <textarea
                  name={contact.form.fields[6].name}
                  rows={4}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : contact.form.submitText}
              </button>

              <p className="text-sm text-gray-500 leading-relaxed">
                {contact.form.disclaimer}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection hero={servicesData.hero} />
      <EcosystemSection ecosystem={servicesData.ecosystem} />

      {servicesData.services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}

      <ContactSection contact={servicesData.contact} />
    </div>
  );
};

export default ServicesPage;
