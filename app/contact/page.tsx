import Image from "next/image";
import React from "react";
import data from "@/public/data/contact.json";

const Page = () => {
  return (
    <div>
      <section className="relative w-full h-[40vh] 2xl:h-[80vh]">
        <Image src={data.heroImage} alt="" fill />
      </section>

      <section className="bg-secondary p-10">
        <div className="grid grid-cols-2 max-w-6xl mx-auto gap-10">
          {data.branches.map((branch, i) => (
            <div key={i} className="flex justify-between">
              <div className="space-y-3 shrink-0">
                <h2 className="text-3xl font-bold mb-4">{branch.name}</h2>
                <p>{branch.address}</p>
                <p>Phone: {branch.phone}</p>
                <p>Email: {branch.email}</p>
              </div>
              <iframe
                src={branch.mapLocation}
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
                style={{
                  height: "200px",
                  width: "",
                  border: "1px solid #38a636",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
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

          <button className="bg-blue-700 py-4 px-6 rounded-lg text-xl text-white mt-4">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Page;
