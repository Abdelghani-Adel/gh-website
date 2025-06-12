"use client";

import { useState } from "react";

const data = {
  title: "Let's Connect",
  subtitle: "Click here if you're looking for a Concentrix career opportunity.",
  note: "Estimated Response Time",
  form: {
    fields: [
      {
        name: "firstName",
        label: "First Name*",
        type: "text",
        required: true,
      },
      {
        name: "lastName",
        label: "Last Name*",
        type: "text",
        required: true,
      },
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
};

const ContactUs = () => {
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
                {data.title}
              </h2>
              <p className="text-lg text-gray-600 mb-4">{data.subtitle}</p>
              <div className="inline-flex items-center text-green-600">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="font-medium">{data.note}</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex-1 max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.form.fields.slice(0, 2).map((field) => (
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

              {data.form.fields.slice(2, 4).map((field) => (
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
                {data.form.fields.slice(4, 6).map((field) => (
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
                  {data.form.fields[6].label}
                </label>
                <textarea
                  name={data.form.fields[6].name}
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
                {isSubmitting ? "Submitting..." : data.form.submitText}
              </button>

              <p className="text-sm text-gray-500 leading-relaxed">
                {data.form.disclaimer}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
