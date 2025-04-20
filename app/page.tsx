import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const timelineData = [
  {
    year: "2013",
    content: "GH Dialog was founded in 2013\nFrom the cooperation between Lukas Rütschi and Rainer Götz",
  },
  {
    year: "2014",
    content: "Acquisition of the customer Unister and thus strategic alignment: Tourism",
  },
  {
    year: "2015",
    content: "PCI DSS full certification\nGrowth to 80 FTE, acquired 7 Travel customers and Kuoni Swiss AG",
  },
  {
    year: "2016",
    content:
      "Schmetterling Reisen International is won as a customer\nExpansion of cooperation with Kuoni to include Helvetictours.ch and Lastminute.ch\nGrowth to 100 FTE",
  },
  {
    year: "2017",
    content: "FTI is acquired as a customer. Kurz mal weg.de extends the contract,\nGrowth to 160 FTE",
  },
  {
    year: "2018",
    content:
      "Invia Travel (formerly Unister) and GH Dialog conclude a sales agreement for the creation of a new location in Tirana. With Sunways, the first 24/7/365 shifts are started. Driveboo and LMX are added as travel providers with Dertouristik Suisse (Kuoni) and Schmetterling Reisen together.\nAt the end of the year GH Dialog has 240 employees",
  },
  {
    year: "2019",
    content:
      "GH Dialog has 240 employees spread over 2 locations. The first 24/7/365 shifts are started in cooperation with TUI up with the parallel department. GH Dialog ends the year with Sunways and TUI Austria among our customers.",
  },
  {
    year: "2022",
    content:
      "Invia Travel (formerly Unister) and GH Dialog conclude a sales agreement for the creation of a new location in Tirana. With Sunways, the first 24/7/365 shifts are started. Driveboo and LMX are added as external providers with Dertouristik Suisse (Kuoni) and Schmetterling Reisen.\nAt the end of the year GH Dialog has 240 employees",
  },
];

const Page = () => {
  return (
    <div className="">
      <section className="relative w-full h-[50vh] 2xl:h-[90vh]">
        <Image src="/hero.png" alt="ddd" fill />

        <div className="absolute top-[40%] left-20 text-white space-y-4">
          <h1 className="text-4xl font-bold">Welcome to the world of GH360</h1>
          <h2 className="text-2xl">The future of tourism</h2>

          <button className="bg-blue-700 py-2 px-5 rounded-lg">
            <Link href="#">More Details</Link>
          </button>
        </div>
      </section>

      <section className="bg-cyan-400 p-10">
        <div className="flex flex-col 2xl:flex-row gap-10">
          <div className="2xl:w-1/2 space-y-5">
            <h1 className="text-4xl text-white">About Us</h1>
            <h2 className="text-blue-700 text-4xl font-bold">
              Welcome to the World of GH360, your near shore tourism service partner.
            </h2>
            <p className="text-xl">
              Founded 2012 fully operational since 2013 we offer tailor made business solutions for the big players in
              tourism industry. GH360 provides you with a range of services such as simple customer care to more complex
              accounting as well as development.
              <strong> All in one for your convenience and satisfaction.</strong>
            </p>
            <button className="bg-blue-700 py-2 px-5 rounded-lg text-white">
              <Link href="#">Read More</Link>
            </button>
          </div>

          <div className="2xl:w-1/2">
            <div className="relative h-[30vh] 2xl:h-[60vh] 2xl:w-[90vh] p-4 outline outline-[15px] outline-blue-700 2xl:rounded-ss-[10rem] 2xl:rounded-ee-[10rem] overflow-hidden">
              <Image src="/hero.png" alt="Team working" fill />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid 2xl:grid-cols-4">
          <div className="bg-purple-800 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">350</h2>
              <h3 className="text-3xl text-white">Employees</h3>
            </div>
          </div>

          <div className="bg-pink-600 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">12</h2>
              <h3 className="text-3xl text-white">Languages</h3>
            </div>
          </div>

          <div className="bg-orange-400 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">3</h2>
              <h3 className="text-3xl text-white">Locations</h3>
            </div>
          </div>

          <div className="bg-yellow-400 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">1</h2>
              <h3 className="text-3xl text-white">QM team</h3>
            </div>
          </div>
        </div>

        <div className="grid 2xl:grid-cols-3">
          <div className="bg-blue-500 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">5</h2>
              <h3 className="text-3xl text-white">Coaches</h3>
            </div>
          </div>

          <div className="bg-gray-300 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">4</h2>
              <h3 className="text-3xl text-white">PL</h3>
            </div>
          </div>

          <div className="bg-blue-300 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">10</h2>
              <h3 className="text-3xl text-white">TL</h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="min-h-screen bg-white py-10 px-4">
          <div className="text-center mb-16 text-3xl">
            <h2 className="text-blue-500 font-medium">
              Founded 2012 fully operational since 2013 we offer tailor made
            </h2>
            <h2 className="text-blue-500 font-medium">business solutions for the big players in tourism industry</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 w-1 bg-blue-500 h-full transform -translate-x-1/2"></div>

            <div className="flex flex-col space-y-12">
              {timelineData.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className="grid grid-cols-9 items-center">
                    {/* Left Side */}
                    <div className={`col-span-4 ${isLeft ? "text-right pr-4" : ""}`}>
                      {isLeft && (
                        <div className="inline-block">
                          <h3 className="text-xl font-bold text-gray-900">{item.year}</h3>
                          <p className="text-gray-700 mt-2 whitespace-pre-line">{item.content}</p>
                        </div>
                      )}
                    </div>

                    {/* Dot */}
                    <div className="col-span-1 flex justify-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                    </div>

                    {/* Right Side */}
                    <div className={`col-span-4 ${!isLeft ? "text-left pl-4" : ""}`}>
                      {!isLeft && (
                        <div className="inline-block">
                          <h3 className="text-xl font-bold text-gray-900">{item.year}</h3>
                          <p className="text-gray-700 mt-2 whitespace-pre-line">{item.content}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <h2 className="text-blue-500 font-medium max-w-4xl mt-16 text-center m-auto text-3xl">
            A smooth modern day to day operation, with high flexibility to ramp up and down as well as a higher margin
            for the client as well as an state of the art customer experience.
          </h2>
        </div>
      </section>

      <section className="relative w-full h-[90vh] p-10">
        {/* Background Image */}
        <Image src="/testi-back.jpeg" alt="testi" fill className="object-cover" />

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-blue-800 bg-opacity-50 z-10"></div>

        {/* Content */}
        <div className="z-20 relative py-20">
          <h1 className="text-2xl font-bold text-white text-center">Testimonials</h1>
          <h2 className="text-4xl mt-2 font-bold text-white text-center">From Our Customers</h2>

          <div className="flex flex-col 2xl:flex-row justify-evenly px-10 mt-10">
            <div className="bg-white p-10 2xl:w-1/4 relative">
              <div className="flex items-center gap-5">
                <RxAvatar className="text-6xl text-blue-500" />

                <div>
                  <p>Jahannes Sehring</p>
                  <p className="font-bold">CEO of Travador</p>
                </div>
              </div>

              <p>
                "Since the outsourcing of our customer service, we work more or less cost- covering through the
                generated sales."
              </p>

              <FaQuoteLeft className="absolute right-5 -bottom-5 text-6xl text-blue-500" />
            </div>

            <div className="bg-white p-10 2xl:w-1/4 relative hidden 2xl:block">
              <div className="flex items-center gap-5">
                <RxAvatar className="text-6xl text-blue-500" />

                <div>
                  <p>Jahannes Sehring</p>
                  <p className="font-bold">CEO of Travador</p>
                </div>
              </div>

              <p>
                "Since the outsourcing of our customer service, we work more or less cost- covering through the
                generated sales."
              </p>

              <FaQuoteLeft className="absolute right-5 -bottom-5 text-6xl text-blue-500" />
            </div>

            <div className="bg-white p-10 2xl:w-1/4 relative hidden 2xl:block">
              <div className="flex items-center gap-5">
                <RxAvatar className="text-6xl text-blue-500" />

                <div>
                  <p>Jahannes Sehring</p>
                  <p className="font-bold">CEO of Travador</p>
                </div>
              </div>

              <p>
                "Since the outsourcing of our customer service, we work more or less cost- covering through the
                generated sales."
              </p>

              <FaQuoteLeft className="absolute right-5 -bottom-5 text-6xl text-blue-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="p-20 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-blue-500">Drop Us A Message</h1>

        <form action="" className="2xl:max-w-4xl m-auto mt-12">
          <div className="flex flex-col 2xl:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-black text-xl rounded-sm p-2 w-full"
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-black text-xl rounded-sm p-2 w-full"
            />
          </div>

          <input
            type="text"
            placeholder="Enter your phone number"
            className="border border-black text-xl rounded-sm p-2 w-full mt-4"
          />

          <textarea
            placeholder="Enter you message"
            rows={4}
            className="border border-black text-xl rounded-sm p-2 w-full mt-4"
          />

          <button className="bg-blue-700 py-4 px-6 rounded-lg text-xl text-white mt-4">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Page;
