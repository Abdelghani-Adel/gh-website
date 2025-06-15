import { CheckCircle, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Positions = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const data = {
    title: "Open Positions",
    subTitle: "Find your perfect role and start your journey with us",
    applicationGuidelines: [
      "CV",
      "Testimonies",
      "Preferably all documents in one PDF file",
      "Alternatively, email us up to 3 attachments (maximum 4MB)",
      "Send us your documents to info@ghdialog.com",
      "We look forward to receiving your application",
    ],
    positions: [
      {
        id: 1,
        title: "Frontend Developer",
        description:
          "Responsible for building UI components and optimizing user experience.",
        location: "Remote/Hybrid",
        type: "Full-time",
        experience: "2-4 years",
        skills: ["React", "JavaScript", "CSS", "HTML"],
      },
      {
        id: 2,
        title: "Backend Developer",
        description: "Handles server-side logic and database architecture.",
        location: "Albania",
        type: "Full-time",
        experience: "3-5 years",
        skills: ["Node.js", "Python", "Database", "API"],
      },
      {
        id: 3,
        title: "DevOps Engineer",
        description: "Manages CI/CD pipelines and cloud infrastructure.",
        location: "Kosovo",
        type: "Full-time",
        experience: "4-6 years",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      },
      {
        id: 4,
        title: "QA Engineer",
        description:
          "Ensures the quality and reliability of applications through testing.",
        location: "Remote",
        type: "Full-time",
        experience: "2-3 years",
        skills: ["Testing", "Automation", "QA Tools", "Bug Tracking"],
      },
      {
        id: 5,
        title: "UI/UX Designer",
        description:
          "Designs intuitive user interfaces and seamless user experiences.",
        location: "Albania",
        type: "Full-time",
        experience: "3-5 years",
        skills: ["Figma", "Adobe", "User Research", "Prototyping"],
      },
      {
        id: 6,
        title: "Product Manager",
        description:
          "Oversees product development and aligns team efforts with business goals.",
        location: "Kosovo",
        type: "Full-time",
        experience: "5-7 years",
        skills: ["Strategy", "Analytics", "Leadership", "Agile"],
      },
      {
        id: 7,
        title: "Data Analyst",
        description: "Analyzes data trends to support decision making.",
        location: "Remote",
        type: "Full-time",
        experience: "2-4 years",
        skills: ["SQL", "Python", "Tableau", "Statistics"],
      },
    ],
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-second mb-4">
              {data.title}
            </h2>
            <p className="text-xl text-gray-600">{data.subTitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.positions.map((position) => (
              <div
                key={position.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {position.location && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                      )}
                      {position.type && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {position.type}
                        </span>
                      )}
                      {position.experience && (
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                          {position.experience}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {position.description}
                </p>

                {position.skills && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setSelectedPosition(position)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  Apply Now
                  <Send className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Application Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Apply for {selectedPosition.title}
              </h3>
              <button
                onClick={() => setSelectedPosition(null)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>

            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                {selectedPosition.description}
              </p>

              {selectedPosition.skills && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Required Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedPosition.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-900 mb-4">How to Apply:</h4>
              <div className="space-y-2 text-sm text-gray-700">
                {data.applicationGuidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{guideline}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setSelectedPosition(null)}
                className="flex-1 border-2 border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-xl font-semibold transition-colors"
              >
                Close
              </button>
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Email Application
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Positions;
