"use client";

import { getSectionData } from "@/utils/ApiService";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
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

type LabelItem = {
  href: string;
  label: string;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [branch, setBranch] = useState<Branch | null>(null);
  const [navItems, setNavItems] = useState<LabelItem[]>([]);
  const [serviceItems, setServiceItems] = useState<LabelItem[]>([]);
  const [legalItems, setLegalItems] = useState<LabelItem[]>([]);

  // Fixed href maps
  const fixedNavMap = {
    home: "/",
    aboutUs: "/about-us",
    services: "/services",
    career: "/career",
    contact: "/contact",
  };

  const fixedLegalMap = {
    privacy: "/policies?tab=privacy",
    terms: "/policies?tab=terms",
    cookies: "/policies?tab=cookies",
  };

  // Default JSON (fallback)
  const defaultJson = {
    navItems: [
      { key: "home", label: "Home" },
      { key: "aboutUs", label: "About Us" },
      { key: "services", label: "Services" },
      { key: "career", label: "Join our team" },
      { key: "contact", label: "Contact Us" },
    ],
    serviceItems: [
      { key: "outsourcing", label: "Outsourcing" },
      { key: "callCenter", label: "Call Center" },
      { key: "consulting", label: "Consulting" },
      { key: "socialMedia", label: "Social Media" },
      { key: "it", label: "IT Services" },
    ],
    legalItems: [
      { key: "privacy", label: "Privacy Policy" },
      { key: "terms", label: "Terms of Service" },
      { key: "cookies", label: "Cookie Policy" },
    ],
  };

  const mergeItems = (
    apiItems: { key: string; label: string }[],
    fixedMap: Record<string, string>
  ): LabelItem[] =>
    apiItems.map((item) => ({
      href: fixedMap[item.key],
      label: item.label,
    }));

  // Fetch branch info
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

  // Fetch nav + legal labels
  useEffect(() => {
    const fetchLabels = async () => {
      try {
        const data = await getSectionData(29);

        setNavItems(mergeItems(data.navItems, fixedNavMap));
        setLegalItems(mergeItems(data.legalItems, fixedLegalMap));
      } catch (err) {
        console.error("Error fetching navigation labels:", err);
        // fallback to default JSON
        setNavItems(mergeItems(defaultJson.navItems, fixedNavMap));
        setLegalItems(mergeItems(defaultJson.legalItems, fixedLegalMap));
      }
    };
    fetchLabels();
  }, []);

  // Fetch services from API (id=15) with filter
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getSectionData(15);

        if (data?.services) {
          const filteredServices = data.services
            .filter((s: any) => s.isActive && s.isShowFooter)
            .map((s: any) => ({
              href: `/services#${s.id}`,
              label: s.title,
            }));

          setServiceItems(filteredServices);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        // fallback to default services
        setServiceItems(
          defaultJson.serviceItems.map((item) => ({
            href: `/services#${item.key}`,
            label: item.label,
          }))
        );
      }
    };
    fetchServices();
  }, []);

  if (!branch) return null;

  const contactInfo = [
    { icon: FaPhone, text: branch.phone, href: `tel:${branch.phone}` },
    { icon: FaEnvelope, text: branch.email, href: `mailto:${branch.email}` },
    { icon: FaMapMarkerAlt, text: branch.address, href: "#" },
  ];

  const socialLinks = [
    {
      href:
        branch.facebook ||
        "https://www.facebook.com/profile.php?id=61576271777849",
      icon: FaFacebook,
      label: "Facebook",
    },
    {
      href:
        branch.linkedin ||
        "https://www.linkedin.com/company/link-talent-support-lts",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: branch.instagram || "https://www.instagram.com/ltsegypt/",
      icon: FaInstagram,
      label: "Instagram",
    },
  ];

  const getLinkStyles = (href: string) =>
    `transition-colors duration-200 hover:text-second text-gray-300`;

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
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-gray-300 hover:text-second transition-colors duration-200"
                    aria-label={social.label}
                    target="_blank"
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
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Link Talent Support. All rights reserved.
            </div>
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
