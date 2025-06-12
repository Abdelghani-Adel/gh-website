import React from "react";
import { MapPin, Users, Award, Clock, Globe } from "lucide-react";

const AboutUsPage = () => {
  const pageData = {
    hero: {
      heroImage: "/aboutus-hero2.jfif",
      title: "LTS",
      desc: "<p>Core focus on tourism with unmatched flexibility and expertise</p>",
      stats: [
        { icon: Users, label: "Team Members", value: "350+" },
        { icon: Clock, label: "Available", value: "24/7/365" },
        { icon: Globe, label: "Countries", value: "Multiple" },
        { icon: Award, label: "Years Experience", value: "10+" },
      ],
    },
    managers: [
      {
        avatar: "/lukas.png",
        name: "Lukas Hirschl",
        position: "Director Call Center",
        description:
          "<p>Lukas Hirschl was born on July 16th 1991. Traveling is my passion – I was lucky that my father traveled the world with me</p>",
      },
    ],
    teams: [
      {
        location: "Tirana",
        people: [
          {
            avatar: "/avatar1.png",
            name: "Leonard Ferazini",
            position: "Director Call Center",
          },
          {
            avatar: "/avatar2.png",
            name: "Sarah Johnson",
            position: "Operations Manager",
          },
          {
            avatar: "/avatar3.png",
            name: "Michael Chen",
            position: "Quality Assurance Lead",
          },
        ],
      },
      {
        location: "Kosovo",
        people: [
          {
            avatar: "/avatar4.png",
            name: "Elena Rodriguez",
            position: "Regional Manager",
          },
          {
            avatar: "/avatar4.png",
            name: "David Thompson",
            position: "Customer Success Lead",
          },
          {
            avatar: "/avatar4.png",
            name: "Anna Petrov",
            position: "Training Coordinator",
          },
        ],
      },
    ],
    certificates: [
      {
        logo: "",
        title: "ISO 9001:2015 Quality Management",
      },
      {
        logo: "",
        title: "ISO 27001 Information Security",
      },
      {
        logo: "",
        title: "GDPR Compliance Certification",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-blue-500 via-blue-800 to-blue-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-cyan-400 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-cyan-300 animate-ping"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  {pageData.hero.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: pageData.hero.desc }} />
              </div>

              <div className="grid grid-cols-2 gap-6">
                {pageData.hero.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  >
                    <stat.icon className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:flex justify-center hidden">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur-xl opacity-30"></div>
                <img
                  src={pageData.hero.heroImage}
                  alt="LTS Team"
                  className="relative rounded-2xl shadow-2xl max-w-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Our Team
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Together with our 350 highly skilled employees, it is our
                  mission to provide best-in-class service with greatest
                  flexibility in a constantly changing environment.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  24/7 Support
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  From friendly and knowledgeable customer care agents, to
                  accountants and IT experts - we are here 24/7/365 to provide
                  the perfect solution for your demand.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose LTS?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Tourism Expertise
                      </h4>
                      <p className="text-gray-600">
                        Specialized knowledge in tourism and hospitality sector
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Flexible Solutions
                      </h4>
                      <p className="text-gray-600">
                        Adaptable services that grow with your business needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Quality Assurance
                      </h4>
                      <p className="text-gray-600">
                        Rigorous quality control and continuous improvement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading our organization to
              success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageData.managers.map((manager, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-500/20"></div>
                    <img
                      src={manager.avatar}
                      alt={manager.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {manager.name}
                    </h3>
                    <p className="text-teal-600 font-medium mb-4">
                      {manager.position}
                    </p>
                    <div
                      className="text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: manager.description }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Teams */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Global Presence
            </h2>
            <p className="text-xl text-gray-600">
              Talented teams across multiple locations delivering excellence
              worldwide
            </p>
          </div>

          <div className="space-y-16">
            {pageData.teams.map((team, teamIndex) => (
              <div
                key={teamIndex}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <MapPin className="w-8 h-8" />
                    {team.location}
                  </h3>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.people.map((person, personIndex) => (
                      <div key={personIndex} className="group">
                        <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gradient-to-br hover:from-teal-50 hover:to-blue-50 transition-all duration-300 border border-gray-100 hover:border-teal-200">
                          <div className="relative mb-4">
                            <img
                              src={person.avatar}
                              alt={person.name}
                              className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                          </div>
                          <h4 className="font-bold text-gray-900 mb-1">
                            {person.name}
                          </h4>
                          <p className="text-teal-600 text-sm font-medium">
                            {person.position}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-300">
              Committed to excellence through internationally recognized
              standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pageData.certificates.map((cert, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">Certified Excellence</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the LTS Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their BPO needs
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
