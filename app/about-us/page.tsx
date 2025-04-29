import Image from "next/image";
import React from "react";
import data from "@/public/data/aboutUs.json";

const Page = () => {
  return (
    <div>
      <section className="relative w-full h-[80vh]">
        <Image src={data.heroBackground} alt="" fill />
      </section>

      <section className="bg-secondary p-10 space-y-5 text-white">
        <div className="flex justify-between items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-5">{data.heroTitle}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.heroShortDesc }} />
          </div>
          <div className="relative h-[30vh] 2xl:h-[60vh] 2xl:w-[90vh] p-4 outline outline-[15px] outline-primary 2xl:rounded-ss-[10rem] 2xl:rounded-ee-[10rem] overflow-hidden">
            <Image src={data.heroImage} alt="Team working" fill />
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: data.heroDescription }} />
      </section>

      {data.teams.map((team, i) => (
        <section key={i} className="p-10">
          <h1 className="text-4xl font-bold mb-10 text-center text-primary">Meet our team in {team.location}</h1>

          <div className="flex justify-around">
            {team.people.map((person, i) => (
              <div key={i}>
                <div className="relative h-[400px] w-[300px] rounded-lg overflow-hidden mb-5">
                  <Image src={person.avatar} alt="" fill />
                </div>

                <h2 className="text-center mb-2 text-3xl font-bold text-secondary">{person.name}</h2>
                <h2 className="text-center font-bold text-xl">{person.position}</h2>
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

          <button className="bg-primary py-4 px-6 rounded-lg text-xl text-white mt-4">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Page;
