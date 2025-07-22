import { getSectionData } from "@/utils/ApiService";
import ContactForm from "./ContactUs/ContactForm";

// const content = {
//   title: "Let's Connect",
//   subtitle: "We are excited to get in touch with you.",
//   note: "We are online",
//   formText: {
//     title: "Send us a message",
//     subtitle:
//       "Fill out the form below and we'll get back to you within 24 hours.",
//     nameField: {
//       label: "Full Name",
//       placeHolder: "Enter your full name",
//     },
//     emailField: {
//       label: "Email",
//       placeHolder: "Enter your email",
//     },
//     phoneField: {
//       label: "Phone Number",
//       placeHolder: "Enter your phone number",
//     },
//     companyField: {
//       label: "Company / Organization",
//       placeHolder: "Enter your company name",
//     },
//     messageField: {
//       label: "Message",
//       placeHolder: "How can we help you?",
//     },
//     buttonText: "Send Message",
//   },
// };

const ContactUs = async () => {
  const content = await getSectionData(26);

  if (!content) {
    return null;
  }

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
                {content?.title}
              </h2>
              <p className="text-lg text-gray-600 mb-4">{content?.subtitle}</p>
              <div className="inline-flex items-center text-green-600">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="font-medium">{content?.note}</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex-1 max-w-lg">
            <ContactForm data={content.formText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
