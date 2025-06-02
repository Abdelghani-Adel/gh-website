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
  Quote,
  Star,
  CircleCheck,
} from "lucide-react";
import Image from "next/image";

const LTSHomepage = () => {
  // JSON data structure for backend integration
  const pageData = {
    hero: {
      title: "We're LTS.",
      subtitle: "The future of trouism.",
      description:
        "<p>We're an intelligent solutions-first technology leader dedicated to helping our clients evolve their business, organizations, and sales lines everywhere LTS touches them.</p>",
    },
    about: {
      title: "Welcome to the world of LTS. your near shore tourism partner.",
      description:
        "<p>Founded 2012 fully operational since 2013 we offer tailor made business solutions for the big players in tourism industry. GH360 provides you with a range of services such as simple customer care to more complex accounting as well as development. All in one for your convenience and  satisfaction.</p>",
      image: {
        src: "/career-hero-image.jpg",
        alt: "Company Image",
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
            "<p>G&H Dialog is your trustworthy partner to successfully implement these wishes. We have specialized in advising and improving customer  companies in particular to attract customers.</p>",
        },
        {
          id: 2,
          title: "Consulting Services",
          description:
            "<p>We harness predictive intelligence and actionable insights that enable smarter business decisions</p>",
        },
        {
          id: 3,
          title: "Social Media Services",
          description:
            "<p>We simplify all the technology for operational efficiency and competitive differentiation</p>",
        },
        {
          id: 4,
          title: "Training Services",
          description:
            "<p>We connect people and processes to make operations run seamlessly, innovatively, and sustainably</p>",
        },
        {
          id: 5,
          title: "Call Center Services",
          description:
            "<p>We connect people and processes to make operations run seamlessly, innovatively, and sustainably</p>",
        },
        {
          id: 6,
          title: "Consulting Services",
          description:
            "<p>We connect people and processes to make operations run seamlessly, innovatively, and sustainably</p>",
        },
      ],
    },
    sustainability: {
      title: "Our sustainability commitment",
      subtitle:
        "At LTS, we see great opportunity to use our vision for smart and meaningful work to make the world a better place.",
      description:
        "<p>As a global business, we are responsible for protecting the world around us. That's why we focus on sustainable and responsible business practices that make a positive difference for people, planet and profit.</p>",
    },
    timeline: {
      title: "Our Journey",
      subtitle: "Building excellence through the years",
      events: [
        {
          id: 1,
          year: "2013",
          title: "Company Founded",
          description:
            "<p>LTS. was founded in 2013 from the cooperation between Lukas Hirschl and Rajner Goeg</p>",
          milestone: "Foundation",
        },
        {
          id: 2,
          year: "2014",
          title: "Strategic Alignment",
          description:
            "<p>Acquisition of the customer Unister and thus strategic alignment: Tourism</p>",
          milestone: "Tourism Focus",
        },
        {
          id: 3,
          year: "2015",
          title: "Major Growth & Certification",
          description:
            "<p>PCI DSS full certification. Growth to 80 FTE, acquired 7 Travel customers and Kuoni Swiss AG</p>",
          milestone: "Growth",
        },
        {
          id: 4,
          year: "2016",
          title: "International Expansion",
          description:
            "<p>Schmetterling Reisen International is won as a costumer. Expansion of the cooperation with Kuoni to include Helvetictours.ch and Lastminute.ch growth to 100 FTE</p>",
          milestone: "Expansion",
        },
        {
          id: 5,
          year: "2017",
          title: "FTI Partnership",
          description:
            "<p>FTI is acquired as a customer. Kurz mal weg.de extends the contract, Growth to 140 FTE</p>",
          milestone: "Partnership",
        },
        {
          id: 6,
          year: "2018",
          title: "Invia Travel & New Projects",
          description:
            "<p>Invia Travel (formerly Unister) and LTS. conclude an exclusive agreement for the creation of a sales location in Tirana. With Sunnycare, the first 24/7/365 shifts are started Driveboo and LMX are added</p>",
          milestone: "Innovation",
        },
        {
          id: 7,
          year: "2019",
          title: "Major Milestone",
          description:
            "<p>LTS. has 240 employees spread over 2 locations, for the first time the business travel sector is opened up with the partner Depart24. Tour Online expands together with LTS. and we can also count TUI Suisse LTS. and Sonnenklar.TV work together. At the end of the year LTS. has 240 employees</p>",
          milestone: "Excellence",
        },
      ],
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Trusted by leading tourism companies worldwide",
      items: [
        {
          id: 1,
          quote:
            "LTS transformed our customer service operations completely. Their nearshore team seamlessly integrated with our business, delivering exceptional results that exceeded our expectations.",
          author: "Sarah Mitchell",
          position: "Head of Operations",
          company: "Global Travel Solutions",
          rating: 5,
        },
        {
          id: 2,
          quote:
            "Working with LTS has been a game-changer. Their AI-powered solutions and multilingual support helped us expand into new markets while maintaining the highest quality standards.",
          author: "Carlos Rodriguez",
          position: "CEO",
          company: "Mediterranean Tours",
          rating: 5,
        },
        {
          id: 3,
          quote:
            "The expertise and dedication of the LTS team is unmatched. They don't just provide services - they become true partners in your success.",
          author: "Emma Thompson",
          position: "VP Customer Experience",
          company: "Adventure Holidays Group",
          rating: 5,
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
          title: "Employees",
          subTitle: "Dedicated professionals",
          icon: "users",
        },
        {
          id: 2,
          number: "12",
          title: "Languages",
          subTitle: "Multi-lingual support capabilities",
          icon: "globe",
        },
        {
          id: 3,
          number: "3",
          title: "Locations",
          subTitle: "Strategic global offices",
          icon: "map",
        },
        {
          id: 4,
          number: "1",
          title: "QM Team",
          subTitle: "Quality management excellence",
          icon: "shield",
        },
        {
          id: 5,
          number: "5",
          title: "Coaches",
          subTitle: "Expert training specialists",
          icon: "award",
        },
        {
          id: 6,
          number: "4",
          title: "Project Leaders",
          subTitle: "Strategic project management",
          icon: "target",
        },
        {
          id: 7,
          number: "10",
          title: "Team Leaders",
          subTitle: "Operational team leadership",
          icon: "command",
        },
      ],
    },
    customers: {
      title: "Trusted by Industry Leaders",
      subtitle: "Partnering with the world's most innovative tourism companies",
      logos: [
        {
          id: 1,
          name: "TravelTech Solutions",
          logo: {
            src: "/api/placeholder/150/60",
            alt: "TravelTech Solutions Logo",
          },
        },
        {
          id: 2,
          name: "Global Hospitality Group",
          logo: {
            src: "/api/placeholder/150/60",
            alt: "TravelTech Solutions Logo",
          },
        },
        {
          id: 3,
          name: "Adventure Tours International",
          logo: {
            src: "/api/placeholder/150/60",
            alt: "TravelTech Solutions Logo",
          },
        },
        {
          id: 4,
          name: "Luxury Travel Partners",
          logo: {
            src: "/api/placeholder/150/60",
            alt: "TravelTech Solutions Logo",
          },
        },
        {
          id: 5,
          name: "Eco Tourism Alliance",
          logo: {
            src: "/api/placeholder/150/60",
            alt: "TravelTech Solutions Logo",
          },
        },
        {
          id: 6,
          name: "Digital Booking Systems",
          logo: {
            src: "/api/placeholder/150/60",
            alt: "TravelTech Solutions Logo",
          },
        },
      ],
      stats: [
        {
          id: 1,
          number: "98%",
          label: "Client Satisfaction",
          description: "Customer satisfaction rate",
        },
        {
          id: 2,
          number: "45%",
          label: "Cost Reduction",
          description: "Average operational savings",
        },
        {
          id: 3,
          number: "24/7",
          label: "Support Coverage",
          description: "Round-the-clock availability",
        },
        {
          id: 4,
          number: "150+",
          label: "Active Projects",
          description: "Ongoing client engagements",
        },
      ],
    },
    cta: {
      title: "LTS. Powering a world that works",
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
      <section className="relative min-h-[600px] bg-gradient-to-br from-slate-900 via-blue-800 to-teal-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-cyan-400 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-cyan-300 animate-ping"></div>
        </div>

        <div className="relative container mx-auto px-6 lg:px-16 pb-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                {pageData.hero.title}
              </h1>
              <p className="text-xl lg:text-2xl text-teal-100 mb-4 font-medium">
                {pageData.hero.subtitle}
              </p>

              <div
                className="mb-8"
                dangerouslySetInnerHTML={{ __html: pageData.hero.description }}
              />
              <button className="bg-second hover:bg-teal-300 text-teal-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                {pageData.about.title}
              </h2>
              <div
                className="mb-8"
                dangerouslySetInnerHTML={{
                  __html: pageData.about.description,
                }}
              />

              <button className="bg-second hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Our Story
              </button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden p-8 h-80 relative">
                <Image
                  src={pageData.about.image.src}
                  alt={pageData.about.image.alt}
                  fill
                />
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
                  <div className="text-white">
                    <CircleCheck className="text-6xl h-12 w-12" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>

                <div
                  className="mb-6"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />

                <button className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 mx-auto">
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
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {pageData.sustainability.title}
              </h2>
              <p className="text-lg text-teal-50 mb-8 leading-relaxed">
                {pageData.sustainability.subtitle}
              </p>

              <div
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: pageData.sustainability.description,
                }}
              />

              <button className="bg-second hover:bg-teal-300 text-teal-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Learn More
              </button>
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
            {/* Vertical Line - hide on mobile, show from 2xl up */}
            <div className="hidden 2xl:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></div>

            <div className="space-y-12">
              {pageData.timeline.events.map((event, index) => (
                <div
                  key={event.id}
                  className={`flex flex-col 2xl:flex-row 2xl:items-center ${
                    index % 2 === 0 ? "2xl:flex-row" : "2xl:flex-row-reverse"
                  }`}
                >
                  {/* Content - full width on mobile, 5/12 on 2xl */}
                  <div
                    className={`w-full 2xl:w-5/12 ${
                      index % 2 === 0
                        ? "2xl:text-right 2xl:pr-8"
                        : "2xl:text-left 2xl:pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          index % 2 === 0
                            ? "justify-start 2xl:justify-end"
                            : "justify-start"
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

                  {/* Center Circle - hide on mobile, show from 2xl up */}
                  <div className="hidden 2xl:flex relative items-center justify-center">
                    <div className="w-6 h-6 bg-white border-4 border-teal-400 rounded-full shadow-lg z-10">
                      <div className="w-full h-full bg-second rounded-full transform scale-0 hover:scale-100 transition-transform duration-300"></div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout - only on 2xl */}
                  <div className="hidden 2xl:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {pageData.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">
              {pageData.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pageData.testimonials.items.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 relative hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-6 right-6 text-teal-400">
                  <Quote className="w-8 h-8" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full"></div> */}
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-teal-600 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                    {stat.title}
                  </div>
                  <div className="text-sm text-teal-200 leading-relaxed">
                    {stat.subTitle}
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

      {/* Customers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {pageData.customers.title}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {pageData.customers.subtitle}
            </p>

            {/* Client Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {pageData.customers.stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Logos */}
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {pageData.customers.logos.map((customer) => (
                <div
                  key={customer.id}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-32 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-teal-50 group-hover:to-blue-50 transition-colors duration-300">
                    <div className="text-gray-500 group-hover:text-teal-600 transition-colors duration-300 text-sm font-medium text-center px-2">
                      {customer.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Join hundreds of companies already transforming their operations
                with LTS
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center gap-2">
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-second text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            {pageData.cta.title}
          </h2>
          <button className="bg-white hover:bg-gray-100 text-teal-600 px-10 py-4 rounded-full font-bold text-lg transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default LTSHomepage;
