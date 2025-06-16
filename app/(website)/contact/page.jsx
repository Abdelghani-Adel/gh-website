import React from "react";

// Import the new components
import ContactHero from "@/components/pages/ContactUs/ContactHero";
import ContactMap from "@/components/pages/ContactUs/ContactMap";
import ContactCTA from "@/components/pages/ContactUs/ContactCTA";
import ContactForm from "@/components/pages/ContactUs/ContactForm";
import ContactInfo from "@/components/pages/ContactUs/ContactInfo";

const ContactPage = async () => {
  return (
    <>
      <ContactHero />

      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <ContactMap />
      <ContactCTA />
    </>
  );
};

export default ContactPage;
