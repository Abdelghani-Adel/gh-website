import React from "react";
import {
  ArrowRight,
  Play,
  Users,
  BarChart3,
  Zap,
  Monitor,
  Globe,
  MapPin,
  Shield,
  Award,
  Target,
  Command,
} from "lucide-react";

const LTSHomepage = () => {
  // JSON data structure for backend integration
  const pageData = {
    hero: {
      title: "We're LTS.",
      subtitle: "The future of trouism.",
      description:
        "We're an intelligent solutions-first technology leader dedicated to helping our clients evolve their business, organizations, and sales lines everywhere LTS touches them.",
      primaryButton: {
        text: "Learn More",
        href: "#learn-more",
      },
      backgroundImage: "/api/placeholder/1200/600",
      announcement: {
        text: "LTS Launches Hannon Approach to Apply for Drive Critical Push Points of the Customer Experience",
        link: "#announcement",
      },
    },
    featuredContent: {
      title: "Featured Content",
      items: [
        {
          id: 1,
          type: "video",
          title: "Trust in Years Your Analytics Within an Industry",
          author: "Learn More",
          image: "/api/placeholder/300/200",
          link: "#video1",
        },
        {
          id: 2,
          type: "article",
          title: "Top Ways to Strengthen and Transform Your Customer",
          author: "Learn More",
          image: "/api/placeholder/300/200",
          link: "#article1",
        },
        {
          id: 3,
          type: "insight",
          title:
            "The Age of Intelligent Transformation: What Are Facts for EX Success",
          author: "Learn More",
          image: "/api/placeholder/300/200",
          link: "#insight1",
        },
      ],
    },
    solutionSection: {
      title: "Welcome to the world of LTS. your near shore tourism partner.",
      description:
        "Founded 2012 fully operational since 2013 we offer tailor made business solutions for the big players in tourism industry. GH360 provides you with a range of services such as simple customer care to more complex accounting as well as development. All in one for your convenience and  satisfaction.",
      image: "/api/placeholder/500/300",
      button: {
        text: "Our Story",
        href: "#our-story",
      },
    },
    services: {
      title: "Our Solutions & Services",
      subtitle:
        "Harness our data and AI expertise to power intelligent work operations and performance that make a difference.",
      items: [
        {
          id: 1,
          title: "Outsourcing Services",
          description:
            "G&H Dialog is your trustworthy partner to successfully implement these wishes. We have specialized in advising and improving customer  companies in particular to attract customers.",
          icon: "users",
          link: "#strategy",
          image: "/api/placeholder/150/150",
        },
        {
          id: 2,
          title: "Consulting Services",
          description:
            "We harness predictive intelligence and actionable insights that enable smarter business decisions",
          icon: "bar-chart",
          link: "#data",
          image: "/api/placeholder/150/150",
        },
        {
          id: 3,
          title: "Social Media Services",
          description:
            "We simplify all the technology for operational efficiency and competitive differentiation",
          icon: "monitor",
          link: "#enterprise",
          image: "/api/placeholder/150/150",
        },
        {
          id: 4,
          title: "Training Services",
          description:
            "We connect people and processes to make operations run seamlessly, innovatively, and sustainably",
          icon: "zap",
          link: "#digital",
          image: "/api/placeholder/150/150",
        },
        {
          id: 5,
          title: "Call Center Services",
          description:
            "We connect people and processes to make operations run seamlessly, innovatively, and sustainably",
          icon: "zap",
          link: "#digital",
          image: "/api/placeholder/150/150",
        },
        {
          id: 6,
          title: "Consulting Services",
          description:
            "We connect people and processes to make operations run seamlessly, innovatively, and sustainably",
          icon: "zap",
          link: "#digital",
          image: "/api/placeholder/150/150",
        },
      ],
    },
    analytics: {
      title: "LTS by the Numbers",
      subtitle: "Our global presence and team strength",
      stats: [
        {
          id: 1,
          number: "350",
          label: "Employees",
          description: "Dedicated professionals",
          icon: "users",
        },
        {
          id: 2,
          number: "12",
          label: "Languages",
          description: "Multi-lingual support capabilities",
          icon: "globe",
        },
        {
          id: 3,
          number: "3",
          label: "Locations",
          description: "Strategic global offices",
          icon: "map",
        },
        {
          id: 4,
          number: "1",
          label: "QM Team",
          description: "Quality management excellence",
          icon: "shield",
        },
        {
          id: 5,
          number: "5",
          label: "Coaches",
          description: "Expert training specialists",
          icon: "award",
        },
        {
          id: 6,
          number: "4",
          label: "Project Leaders",
          description: "Strategic project management",
          icon: "target",
        },
        {
          id: 7,
          number: "10",
          label: "Team Leaders",
          description: "Operational team leadership",
          icon: "command",
        },
      ],
    },
    ixHero: {
      title: "iXHero",
      subtitle: "Your advisors. With AI superpowers.",
      description:
        "iX years ago we moved to artificial intelligence to optimize their smartest performance capabilities to make work much better. They blend business intelligence with AI automation, enabling self-sufficient advisory solutions that make smart work across all teams.",
      button: {
        text: "Learn More",
        href: "#ixhero",
      },
      image: "/api/placeholder/400/300",
    },
    insights: {
      title: "Featured Insights",
      subtitle: "Stay informed with what matters most across industries",
      items: [
        {
          id: 1,
          title: "Navigating the Insurance Claims Management Landscape",
          image: "/api/placeholder/250/200",
          link: "#insight1",
        },
        {
          id: 2,
          title:
            "The Age of Artificial Intelligence: What Does This Say & Give Era of AI",
          image: "/api/placeholder/250/200",
          link: "#insight2",
        },
        {
          id: 3,
          title:
            "Unlocking a Culture Revolution: How to Change the Game Course",
          image: "/api/placeholder/250/200",
          link: "#insight3",
        },
        {
          id: 4,
          title:
            "Digital CX stands transformation: How Do Customers AI Define Success",
          image: "/api/placeholder/250/200",
          link: "#insight4",
        },
      ],
    },
    sustainability: {
      title: "Our sustainability commitment",
      description:
        "As a global business, we are responsible for protecting the world around us. That's why we focus on sustainable and responsible business practices that make a positive difference for people, planet and profit.",
      subtitle:
        "At LTS, we see great opportunity to use our vision for smart and meaningful work to make the world a better place.",
      button: {
        text: "Learn More",
        href: "#sustainability",
      },
      teamImages: [
        "/api/placeholder/100/100",
        "/api/placeholder/100/100",
        "/api/placeholder/100/100",
        "/api/placeholder/100/100",
        "/api/placeholder/100/100",
        "/api/placeholder/100/100",
      ],
    },
    timeline: {
      title: "Our Journey",
      subtitle: "Building excellence through the years",
      events: [
        {
          id: 1,
          year: "2012",
          title: "Company Founded",
          description:
            "LTS was established with a vision to transform the tourism industry through innovative technology solutions.",
          milestone: "Foundation",
        },
        {
          id: 2,
          year: "2013",
          title: "Fully Operational",
          description:
            "Became fully operational, launching our first suite of business solutions for major tourism industry players.",
          milestone: "Launch",
        },
        {
          id: 3,
          year: "2015",
          title: "Service Expansion",
          description:
            "Expanded our service portfolio to include comprehensive customer care and accounting solutions.",
          milestone: "Growth",
        },
        {
          id: 4,
          year: "2018",
          title: "AI Integration",
          description:
            "Introduced artificial intelligence capabilities to optimize performance and enhance client solutions.",
          milestone: "Innovation",
        },
        {
          id: 5,
          year: "2020",
          title: "Global Reach",
          description:
            "Extended our nearshore partnership model to serve clients across multiple continents.",
          milestone: "Expansion",
        },
        {
          id: 6,
          year: "2024",
          title: "Future-Ready",
          description:
            "Leading the industry with intelligent transformation solutions and sustainable business practices.",
          milestone: "Excellence",
        },
      ],
    },
    finalCta: {
      title: "LTS. Powering a world that works",
      button: {
        text: "Get Started",
        href: "#get-started",
      },
    },
  };

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ComponentType<any>> = {
      users: Users,
      "bar-chart": BarChart3,
      monitor: Monitor,
      zap: Zap,
      globe: Globe,
      map: MapPin,
      shield: Shield,
      award: Award,
      target: Target,
      command: Command,
    };
    const IconComponent = icons[iconName] || Users;
    return <IconComponent className="w-8 h-8" />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-blue-800 to-teal-800 text-white overflow-hidden">
        <div className="relative container mx-auto px-6 lg:px-16 pb-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                {pageData.hero.title}
              </h1>
              <p className="text-xl lg:text-2xl text-teal-100 mb-4 font-medium">
                {pageData.hero.subtitle}
              </p>
              <p className="text-lg text-teal-50 mb-8 leading-relaxed">
                {pageData.hero.description}
              </p>
              <button className="bg-teal-400 hover:bg-teal-300 text-teal-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2">
                {pageData.hero.primaryButton.text}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            {/* <div className="relative">
              <div className="w-96 h-96 border-4 border-teal-400 rounded-full flex items-center justify-center mx-auto">
                <div className="text-center">
                  <div className="w-64 h-32 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-full h-2 bg-teal-400 rounded"></div>
                  </div>
                  <p className="text-sm text-teal-100">Intelligent Solutions</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Announcement Bar */}
          {/* <div className="mt-16 bg-teal-800/50 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-teal-100 flex-1">
                {pageData.hero.announcement.text}
              </p>
              <button className="bg-teal-400 hover:bg-teal-300 text-teal-900 px-6 py-2 rounded-full font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Featured Content */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {pageData.featuredContent.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pageData.featuredContent.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  {item.id === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <button className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2">
                    {item.author}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                {pageData.solutionSection.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {pageData.solutionSection.description}
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                {pageData.solutionSection.button.text}
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-white text-center">
                  <Zap className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-xl font-medium">Intelligent Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {pageData.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {pageData.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {pageData.services.items.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">{getIcon(service.icon)}</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 mx-auto">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* iXHero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-teal-900 text-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl font-bold">
                  {pageData.ixHero.title}
                </span>
                <span className="text-sm bg-teal-400 text-teal-900 px-2 py-1 rounded">
                  TM
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {pageData.ixHero.subtitle}
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {pageData.ixHero.description}
              </p>
              <button className="bg-teal-400 hover:bg-teal-300 text-teal-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                {pageData.ixHero.button.text}
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-2xl p-8 h-80 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <Monitor className="w-16 h-16 mx-auto mb-4 text-teal-400" />
                  <p className="text-xl font-medium">AI-Powered Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {pageData.insights.title}
            </h2>
            <p className="text-xl text-gray-600">
              {pageData.insights.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageData.insights.items.map((insight) => (
              <div key={insight.id} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl h-48 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 group-hover:text-teal-600 transition-colors">
                  {insight.title}
                </h3>
                <button className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-blue-900 text-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-3 gap-4">
              {pageData.sustainability.teamImages.map((image, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full"
                ></div>
              ))}
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {pageData.sustainability.title}
              </h2>
              <p className="text-lg text-teal-100 mb-6 leading-relaxed">
                {pageData.sustainability.description}
              </p>
              <p className="text-lg text-teal-50 mb-8 leading-relaxed">
                {pageData.sustainability.subtitle}
              </p>
              <button className="bg-teal-400 hover:bg-teal-300 text-teal-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                {pageData.sustainability.button.text}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Analytics */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {pageData.analytics.title}
            </h2>
            <p className="text-xl text-teal-100">
              {pageData.analytics.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {pageData.analytics.stats.map((stat) => (
              <div
                key={stat.id}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                    <div className="text-white">{getIcon(stat.icon)}</div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-2 text-teal-100">
                    {stat.label}
                  </div>
                  <div className="text-sm text-teal-200 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional visual elements */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse"></div>
                <span className="text-teal-100">Growing Team</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
                <span className="text-blue-100">Global Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-white">Quality Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {pageData.timeline.title}
            </h2>
            <p className="text-xl text-gray-600">
              {pageData.timeline.subtitle}
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></div>

            <div className="space-y-12">
              {pageData.timeline.events.map((event, index) => (
                <div
                  key={event.id}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <span className="text-2xl font-bold text-teal-600">
                          {event.year}
                        </span>
                        <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-medium">
                          {event.milestone}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-6 h-6 bg-white border-4 border-teal-400 rounded-full shadow-lg z-10">
                      <div className="w-full h-full bg-teal-400 rounded-full transform scale-0 hover:scale-100 transition-transform duration-300"></div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            {pageData.finalCta.title}
          </h2>
          <button className="bg-white hover:bg-gray-100 text-teal-600 px-10 py-4 rounded-full font-bold text-lg transition-colors duration-300">
            {pageData.finalCta.button.text}
          </button>
        </div>
      </section>
    </div>
  );
};

export default LTSHomepage;
