import BackendIcon from "@/components/BackendIcon";
import HeroBackgroundPattern from "@/components/HeroBackgroundPattern";
import { getSectionData } from "@/utils/ApiService";
import { API_URL } from "@/utils/constants";

const AboutHero = async () => {
  const data = await getSectionData(20);

  if (!data) {
    return null;
  }

  return (
    <section className="hero_wrapper">
      <HeroBackgroundPattern />

      <div className="relative z-10 max-w-7xl px-5 container mx-auto py-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold">{data.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: data.desc }} />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {data.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  {/* <stat.icon className="w-8 h-8 text-teal-400 mx-auto mb-2" /> */}
                  <BackendIcon
                    iconName={stat.icon}
                    className="w-8 h-8 text-teal-400 mx-auto mb-2"
                  />
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
                src={API_URL + data.heroImage}
                alt="Link Talent Support Team"
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
  );
};

export default AboutHero;
