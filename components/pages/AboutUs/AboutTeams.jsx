import { getSectionData } from "@/utils/ApiService";
import { MapPin } from "lucide-react";
import { API_URL } from "@/utils/constants";

const AboutTeams = async () => {
  const data = await getSectionData(23);

  if (!data) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>

        <div className="space-y-16">
          {data.teams.map((team, teamIndex) => (
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
                            src={API_URL + person.avatar}
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
  );
};

export default AboutTeams;
