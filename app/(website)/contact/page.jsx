import React from "react";

// Import the new components
import ContactHero from "@/components/pages/ContactUs/ContactHero";
import ContactMap from "@/components/pages/ContactUs/ContactMap";
import ContactCTA from "@/components/pages/ContactUs/ContactCTA";
import ContactForm from "@/components/pages/ContactUs/ContactForm";
import ContactInfo from "@/components/pages/ContactUs/ContactInfo";
import { getSectionData } from "@/utils/ApiService";

export const metadata = {
  title: "Contact Us | Link Talent Support",
  description: "Get in touch with Link Talent Support. Reach out for inquiries about our outsourcing services for the tourism industry.",
  keywords: ["contact Link Talent Support",
    "tourism outsourcing contact",
    "customer service support",
    "travel industry services contact",
    "Link Talent Support",
    "Link Talent",
  ],
  openGraph: {
    title: "Contact Link Talent Support",
    description:
      "Reach out to our support and sales teams for more info on our services.",
    url: "https://linktalentsupport.com/contact",
    siteName: "Link Talent Support",
    images: [
      {
        url: "https://www.linktalentsupport.com/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "Contact Link Talent Support",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Link Talent Support",
    description:
      "Talk to us about customer support, IT, or social media outsourcing for tourism.",
    images: ["https://www.linktalentsupport.com/logo-icon.png"],
  },
};

const ContactPage = async () => {
  const contactForm = await getSectionData(26);

  return (
    <>
      <ContactHero />

      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              {contactForm?.formText && (
                <ContactForm data={contactForm.formText} />
              )}
            </div>

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
