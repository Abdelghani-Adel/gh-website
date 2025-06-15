"use client";

import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";

const ContactInfo = () => {
  const [selectedBranch, setSelectedBranch] = useState(0);
  const data = {
    title: "Contact Information",
    description:
      "Choose the most convenient way to reach us. Our team is available to assist you.",
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
        businessHours: {
          weekdays: "Mon - Fri: 9:00 AM - 6:00 PM",
          saturday: "Sat: 9:00 AM - 2:00 PM",
        },
      },
      {
        id: 2,
        name: "Second Office",
        address: "Main Street 123",
        phone: "1234567890",
        email: "main@lts-company.com",
        instagram: "instagram.com/lts",
        facebook: "facebook.com/lts",
        linkedin: "linkedin.com/company/lts",
        businessHours: {
          weekdays: "Mon - Fri: 9:00 AM - 6:00 PM",
          saturday: "Sat: 9:00 AM - 2:00 PM",
        },
      },
    ],
  };

  const CURRENT_BRANCH = data.branches[selectedBranch];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{data.title}</h2>
        <p className="text-gray-600 mb-8">{data.description}</p>
      </div>

      {/* Branch Selector */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Locations</h3>
        <div className="flex gap-2 mb-6">
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
              <p className="font-medium text-gray-900">Business Hours</p>
              <p className="text-gray-600">
                {CURRENT_BRANCH.businessHours.weekdays}
              </p>
              <p className="text-gray-600">
                {CURRENT_BRANCH.businessHours.saturday}
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
  );
};

export default ContactInfo;
