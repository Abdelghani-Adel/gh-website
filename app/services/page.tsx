import Image from "next/image";
import React from "react";
import data from "@/public/data/services.json";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <section className="relative w-full h-[40vh] 2xl:h-[80vh]">
        <Image src="/placeholder.jpg" alt="" fill />
      </section>

      <section className="p-10 bg-secondary space-y-14">
        {data.map((service, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div
              key={i}
              className={`max-w-5xl m-auto text-white flex items-center flex-col-reverse gap-10 2xl:flex-row 2xl:flex-${
                isLeft && "row-reverse"
              }`}
            >
              <div className="2xl:w-1/2">
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: service.shortDescription }} />
                <button className="bg-primary text-white py-2 px-5 rounded-lg mt-4">
                  <Link href="/services/1">Read More</Link>
                </button>
              </div>

              <div className="relative h-[250px] w-full 2xl:w-1/2 rounded-lg overflow-hidden">
                <Image src={service.images[0]} alt="" fill />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Page;
