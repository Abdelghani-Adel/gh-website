import Image from "next/image";
import React from "react";
import data from "@/public/data/aboutUs.json";

const Page = () => {
  return (
    <div>
      <section className="relative w-full h-[20vh] lg:h-[80vh]">
        <div className="z-20 absolute text-white top-[40%] left-[10%]">
          <h1 className="text-2xl lg:text-6xl font-bold">About LTS</h1>
        </div>
        <div className="absolute inset-0 bg-primary opacity-30 z-10" />
        <Image src={data.heroBackground} alt="" fill className="blur-[2px]" />
      </section>

      <section className="bg-secondary p-10 space-y-5 text-white">
        <div className="flex flex-col-reverse 2xl:flex-row justify-between items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-5">{data.heroTitle}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.heroShortDesc }} />
          </div>

          <div className="mb-7 relative h-[30vh] 2xl:h-[60vh] w-full 2xl:w-[90vh] p-4 outline outline-[15px] outline-primary 2xl:rounded-ss-[10rem] 2xl:rounded-ee-[10rem] overflow-hidden">
            <Image src={data.heroImage} alt="Team working" fill />
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: data.heroDescription }} />
      </section>

      {data.managers.map((manager, i) => (
        <div
          key={i}
          className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto p-10"
        >
          <div className="relative h-[400px] lg:h-[500px] lg:w-[600px] rounded-lg overflow-hidden mb-5">
            <Image src={manager.avatar} alt="" fill />
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-5 text-secondary">
              {manager.name}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: manager.description }} />
          </div>
        </div>
      ))}

      {data.teams.map((team, i) => (
        <section key={i} className="p-10">
          <h1 className="text-4xl font-bold mb-10 text-center text-primary">
            Meet our team in {team.location}
          </h1>

          <div className="flex justify-around flex-col gap-4 2xl:flex-row">
            {team.people.map((person, i) => (
              <div key={i}>
                <div className="relative h-[400px] w-[300px] rounded-lg overflow-hidden mb-5">
                  <Image src={person.avatar} alt="" fill />
                </div>

                <h2 className="text-center mb-2 text-3xl font-bold text-secondary">
                  {person.name}
                </h2>
                <h2 className="text-center font-bold text-xl">
                  {person.position}
                </h2>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="p-20 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-primary">Drop Us A Message</h1>

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

          <button className="bg-primary py-4 px-6 rounded-lg text-xl text-white mt-4">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Page;
