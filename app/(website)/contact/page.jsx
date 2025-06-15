"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  Instagram,
  Facebook,
  Linkedin,
  CheckCircle,
} from "lucide-react";

const ContactPage = () => {
  const [selectedBranch, setSelectedBranch] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    branch: "Main Office",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [contactData, setContactData] = useState(null);

  // API Configuration
  const API_CONFIG = {
    baseUrl:
      process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.lts-company.com",
    endpoints: {
      contactInfo: "/api/contact-info",
      submitForm: "/api/contact-form",
      services: "/api/services",
    },
  };

  // Default data structure (fallback)
  const DEFAULT_CONTACT_DATA = {
    hero: {
      title: "Get in Touch",
      subtitle:
        "Ready to transform your business? Let's start the conversation.",
      description:
        "Whether you're looking to optimize operations, enhance customer experience, or explore new markets, our team is here to help you succeed.",
    },
    form: {
      title: "Send us a Message",
      description:
        "Fill out the form below and we'll get back to you within 24 hours.",
      successMessage: {
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll be in touch soon.",
      },
    },
    branches: [
      {
        id: 1,
        name: "Main Office",
        address: "Main Street 123",
        phone: "1234567890",
        email: "main@lts-company.com",
        instagram: "instagram.com/lts",
        facebook: "facebook.com/lts",
        linkedin: "linkedin.com/company/lts",
        mapLocation:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123456789!2d33.123456789!3d27.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef!2sHurghada!5e0!3m2!1sen!2seg!4v1234567890",
      },
      {
        id: 2,
        name: "Branch Office",
        address: "Business District 456",
        phone: "0987654321",
        email: "branch@lts-company.com",
        instagram: "instagram.com/lts",
        facebook: "facebook.com/lts",
        linkedin: "linkedin.com/company/lts",
        mapLocation:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123456789!2d33.123456789!3d27.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef!2sHurghada!5e0!3m2!1sen!2seg!4v1234567890",
      },
    ],
    businessHours: {
      weekdays: "Mon - Fri: 9:00 AM - 6:00 PM",
      saturday: "Sat: 9:00 AM - 2:00 PM",
    },
    map: {
      title: "Find Us",
      description: "Visit us at our convenient locations",
    },
    cta: {
      title: "Ready to Transform Your Business?",
      description:
        "Join hundreds of companies that trust LTS for their operational excellence",
      primaryButton: "Get Started Today",
      secondaryButton: "Learn More",
    },
  };

  const DEFAULT_SERVICES = [
    "Outsourcing Services",
    "Consulting Services",
    "Social Media Services",
    "Training Services",
    "Call Center Services",
    "Other",
  ];

  // API Functions
  const fetchContactData = async () => {
    try {
      const response = await fetch(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.contactInfo}`
      );
      if (!response.ok) throw new Error("Failed to fetch contact data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching contact data:", error);
      return DEFAULT_CONTACT_DATA;
    }
  };

  const fetchServices = async () => {
    try {
      const response = await fetch(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.services}`
      );
      if (!response.ok) throw new Error("Failed to fetch services");
      const data = await response.json();
      return data.services || DEFAULT_SERVICES;
    } catch (error) {
      console.error("Error fetching services:", error);
      return DEFAULT_SERVICES;
    }
  };

  const submitContactForm = async (formData) => {
    try {
      const response = await fetch(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.submitForm}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to submit form");
      return await response.json();
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };

  // State for services
  const [services, setServices] = useState(DEFAULT_SERVICES);

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [contactInfo, servicesList] = await Promise.all([
          fetchContactData(),
          fetchServices(),
        ]);

        setContactData(contactInfo);
        setServices(servicesList);

        // Set default branch in form
        if (contactInfo.branches && contactInfo.branches.length > 0) {
          setFormData((prev) => ({
            ...prev,
            branch: contactInfo.branches[0].name,
          }));
        }
      } catch (error) {
        console.error("Error loading data:", error);
        setContactData(DEFAULT_CONTACT_DATA);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitContactForm(formData);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          branch: contactData?.branches?.[0]?.name || "Main Office",
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (could show error message to user)
    }
  };

  // Loading state
  if (isLoading || !contactData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading contact information...</p>
        </div>
      </div>
    );
  }

  const CURRENT_BRANCH = contactData.branches[selectedBranch];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-blue-800 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 lg:px-16 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {contactData.hero.title}
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100 mb-8">
              {contactData.hero.subtitle}
            </p>
            <p className="text-lg text-teal-50 max-w-2xl mx-auto">
              {contactData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {contactData.form.title}
                </h2>
                <p className="text-gray-600">{contactData.form.description}</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {contactData.form.successMessage.title}
                  </h3>
                  <p className="text-gray-600">
                    {contactData.form.successMessage.description}
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Branch
                      </label>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      >
                        {contactData.branches.map((branch) => (
                          <option key={branch.id} value={branch.name}>
                            {branch.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Choose the most convenient way to reach us. Our team is
                  available to assist you.
                </p>
              </div>

              {/* Branch Selector */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Locations
                </h3>
                <div className="flex gap-2 mb-6">
                  {contactData.branches.map((branch, index) => (
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

                {/* Selected Branch Info */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">{CURRENT_BRANCH.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href={`tel:${CURRENT_BRANCH.phone}`}
                        className="text-teal-600 hover:text-teal-700"
                      >
                        {CURRENT_BRANCH.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href={`mailto:${CURRENT_BRANCH.email}`}
                        className="text-teal-600 hover:text-teal-700"
                      >
                        {CURRENT_BRANCH.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Business Hours
                      </p>
                      <p className="text-gray-600">
                        {contactData.businessHours.weekdays}
                      </p>
                      <p className="text-gray-600">
                        {contactData.businessHours.saturday}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-medium text-gray-900 mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    <a
                      href={`https://${CURRENT_BRANCH.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://${CURRENT_BRANCH.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://${CURRENT_BRANCH.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {contactData.map.title}
            </h2>
            <p className="text-xl text-gray-600">
              {contactData.map.description}
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={CURRENT_BRANCH.mapLocation}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">{contactData.cta.title}</h2>
          <p className="text-xl text-teal-100 mb-8">
            {contactData.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300">
              {contactData.cta.primaryButton}
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300">
              {contactData.cta.secondaryButton}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
