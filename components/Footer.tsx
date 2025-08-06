"use client";

import { getSectionData } from "@/utils/ApiService";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


type Branch = {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  businessHours: {
    weekdays: string;
    saturday: string;
  };
  facebook: string;
  instagram: string;
  linkedin: string;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [branch, setBranch] = useState<Branch | null>(null);

  // Navigation items configuration (same as header)
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about-us", label: "About Us" },
    { href: "/career", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

  // Services links
  const serviceItems = [
    { href: "/services#outsourcing", label: "Outsourcing" },
    { href: "/services#call-center", label: "Call Center" },
    { href: "/services#consulting", label: "Consulting" },
    { href: "/services#social-media", label: "Social Media" },
    { href: "/services#it", label: "IT Services" },
  ];

  // Legal links
  const legalItems = [
    { href: "/policies?tab=privacy", label: "Privacy Policy" },
    { href: "/policies?tab=terms", label: "Terms of Service" },
    { href: "/policies?tab=cookies", label: "Cookie Policy" },
  ];

  // Social media links
  const socialLinks = [
    { href: "#", icon: FaFacebook, label: "Facebook" },
    { href: "#", icon: FaTwitter, label: "Twitter" },
    { href: "#", icon: FaLinkedin, label: "LinkedIn" },
    { href: "#", icon: FaInstagram, label: "Instagram" },
  ];

  // Contact information
  useEffect(() => {
    const fetchBranch = async () => {
      try {
        const data = await getSectionData(17);
        if (data && data.branches?.length > 0) {
          setBranch(data.branches[0]);
        }
      } catch (err) {
        console.error("Error loading contact info:", err);
      }
    };

    fetchBranch();
  }, []);

   if (!branch) return null;

  const contactInfo = [
    {
      icon: FaPhone,
      text: branch.phone,
      href: `tel:${branch.phone}`,
    },
    {
      icon: FaEnvelope,
      text: branch.email,
      href: `mailto:${branch.email}`,
    },
    {
      icon: FaMapMarkerAlt,
      text: branch.address,
      href: "#",
    },
  ];

  // Function to get link styles
  const getLinkStyles = (href: string) => {
    const baseStyles = "transition-colors duration-200 hover:text-second";
    const inactiveStyles = "text-gray-300";

    return `${baseStyles} ${inactiveStyles}`;
  };

  return (
    <footer className="bg-main text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="relative block h-[50px] w-[100px]">
              <Image
                src="/logo_white.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are a leading company providing exceptional services and
              solutions to help businesses grow and succeed in the digital
              world.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-gray-300 hover:text-second transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={getLinkStyles(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {serviceItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={getLinkStyles(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={index} className="flex items-start space-x-3">
                    <IconComponent className="h-5 w-5 text-second mt-0.5 flex-shrink-0" />
                    {contact.href !== "#" ? (
                      <Link
                        href={contact.href}
                        className="text-gray-300 hover:text-second transition-colors duration-200 text-sm"
                      >
                        {contact.text}
                      </Link>
                    ) : (
                      <span className="text-gray-300 text-sm">
                        {contact.text}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Link Talent Support. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-col md:items-end text-center md:text-right space-y-2">
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                {legalItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-400 hover:text-second transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Email under legal links */}
              <a
                href={contactInfo[1].href}
                className="text-gray-400 hover:text-second transition-colors duration-200 text-sm"
              >
                {contactInfo[1].text}
              </a>
            </div>
          </div>
        </div>
    </div>
  </footer>
  );
};

export default Footer;
