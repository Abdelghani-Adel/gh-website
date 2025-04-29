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
    </div>
  );
};

export default Page;
