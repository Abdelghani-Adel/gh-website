"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSectionData } from "@/utils/ApiService";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// const policyList = {
//   privacy:
//     '<h1>Privacy Policy</h1><p>Effective date: July 29, 2025</p><p>This Privacy Policy describes how [Your Website Name] ("we", "us", or "our") collects, uses, and shares information about you when you use our website.</p><h2>Information We Collect</h2><ul><li>Personal information you provide (name, email, etc.)</li><li>Usage data and cookies</li><li>Analytics information</li></ul><h2>How We Use Information</h2><p>We use the information to:</p><ul><li>Provide and maintain our service</li><li>Improve user experience</li><li>Send updates or promotional materials</li></ul><h2>Sharing Your Information</h2><p>We do not sell your personal data. We may share it with service providers or for legal reasons if required.</p><h2>Your Rights</h2><p>You may have the right to access, correct, or delete your personal data.</p><h2>Contact Us</h2><p>If you have any questions, contact us at [email@example.com].</p>',
//   termsOfService:
//     '<h1>Terms of Service</h1><p>Effective date: July 29, 2025</p><p>By using our website, you agree to these Terms of Service ("Terms"). If you do not agree, do not use the website.</p><h2>Use of Site</h2><p>You must be at least 13 years old to use this website. You agree to use the site only for lawful purposes.</p><h2>Intellectual Property</h2><p>All content on this site is owned by or licensed to us. You may not reproduce or distribute it without permission.</p><h2>Account Responsibilities</h2><p>You are responsible for maintaining the confidentiality of your account and password.</p><h2>Termination</h2><p>We may suspend or terminate your access to the site at any time for violation of these Terms.</p>',
//   cookiePolicy:
//     "<h1>Cookies Policy</h1><p>Effective date: July 29, 2025</p><p>This Cookies Policy explains what cookies are, how we use them, and your choices regarding cookies.</p><h2>What Are Cookies?</h2><p>Cookies are small text files stored on your device when you visit a website. They help us enhance your user experience.</p><h2>How We Use Cookies</h2><ul><li>To remember your preferences</li><li>To analyze site traffic and performance</li><li>To personalize content and ads</li></ul><h2>Your Choices</h2><p>You can control or delete cookies through your browser settings. Disabling cookies may affect your experience on our site.</p><h2>Contact Us</h2><p>If you have any questions, contact us at [email@example.com].</p>",
// };

const Policies = () => {
  const [policyList, setPolicyList] = useState<any>();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the tab from URL search params, default to "privacy" if not provided
  const activeTab = searchParams.get("tab") || "privacy";

  // Validate that the tab is one of the allowed values
  const validTabs = ["privacy", "terms", "cookies"];
  const defaultTab = validTabs.includes(activeTab) ? activeTab : "privacy";

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", value);
    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const content = await getSectionData(27);
        setPolicyList(content);
      } catch (error) {
        console.error("Error fetching policies:", error);
      }
    };

    fetchPolicies();
  }, []);

  if (!policyList) return null;

  return (
    <div className="container max-w-7xl mx-auto px-6 py-6">
      <h1 className="text-5xl my-10 text-center font-bold text-second">
        Our Policies
      </h1>
      <Tabs
        value={defaultTab}
        onValueChange={handleTabChange}
        className="text-center"
      >
        <TabsList className="bg-second text-white mb-4">
          <TabsTrigger value="privacy">Privacy policy</TabsTrigger>
          <TabsTrigger value="terms">Terms of service policy</TabsTrigger>
          <TabsTrigger value="cookies">Cookies policy</TabsTrigger>
        </TabsList>

        <TabsContent value="privacy" className="text-left">
          <div dangerouslySetInnerHTML={{ __html: policyList.privacyPolicy }} />
        </TabsContent>

        <TabsContent value="terms" className="text-left">
          <div
            dangerouslySetInnerHTML={{ __html: policyList.termsOfService }}
          />
        </TabsContent>

        <TabsContent value="cookies" className="text-left">
          <div dangerouslySetInnerHTML={{ __html: policyList.cookiePolicy }} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Policies;
