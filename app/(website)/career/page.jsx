"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Send,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle,
  Mail,
  FileText,
  Download,
  Star,
  Handshake,
  Brain,
  Target,
  UserCheck,
  Building,
  Heart,
  Globe,
} from "lucide-react";

import CareerHero from "@/components/pages/career/CareerHero";
import CareerIntro from "@/components/pages/career/CareerIntro";
import Positions from "@/components/pages/career/Positions";
import CareerBenefits from "@/components/pages/career/CareerBenefits";

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <CareerHero />

      <CareerIntro />

      <Positions />

      <CareerBenefits />
    </div>
  );
};

export default CareersPage;
