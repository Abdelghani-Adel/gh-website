import React from "react";

// Import the new components

import ContactMap from "@/components/pages/contact/ContactMap";
import ContactCTA from "@/components/pages/contact/ContactCTA";
import ContactForm from "@/components/pages/contact/ContactForm";
import ContactInfo from "@/components/pages/contact/ContactInfo";
import ContactHero from "@/components/pages/contact/ContactHero";

const ContactPage = async () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ContactHero />

      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>
      {/* Map Section */}
      <ContactMap />
      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
