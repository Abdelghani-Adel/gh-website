import { getSectionData } from "@/utils/ApiService";

const TimeLine = async () => {
  const content = await getSectionData(4);

  if (!content) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50" id="timeline">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {content?.title}
          </h2>
          <p className="text-xl text-gray-600">{content?.subtitle}</p>
        </div>

        <div className="relative">
          {/* Vertical Line - hide on mobile, show from 2xl up */}
          <div className="hidden 2xl:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></div>

          <div className="space-y-12">
            {content?.events?.map((event, index) => (
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

                    <div
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    />
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
  );
};

export default TimeLine;
