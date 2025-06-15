import { getSectionData } from "@/utils/ApiService";

const AboutHero = async () => {
  const data = await getSectionData(20, "en");

  if (!data) {
    return null;
  }

  return (
    <section className="relative mt-24 min-h-[600px] bg-gradient-to-br from-blue-500 via-blue-800 to-blue-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-cyan-400 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-cyan-300 animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl px-5 container mx-auto py-20 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {data.title}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: data.desc }} />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {data.stats.map((stat, index) => (
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
                src={data.heroImage}
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
  );
};

export default AboutHero;
