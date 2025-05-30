"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import homeData from "@/public/data/home.json";
import { getPageData } from "@/utils/ApiService";

const Page = () => {
  const [sections, setSections] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const sections = await getPageData(1, "en");
      console.log(sections);
      setSections(sections);
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <section className="relative w-full h-[50vh] 2xl:h-[90vh]" id="hero">
        <Image src="/hero.png" alt="ddd" fill />

        <div className="absolute top-[40%] left-10 2xl:left-20 text-white space-y-6">
          <h1 className="text-2xl 2xl:text-6xl">{sections?.hero?.title}</h1>
          <div
            className="text-xl 2xl:text-4xl font-bold"
            dangerouslySetInnerHTML={{ __html: sections?.hero?.description }}
          />

          <button className="bg-primary py-3 px-6 rounded-lg text-xl">
            <Link href="/about-us">More Details</Link>
          </button>
        </div>
      </section>

      <section className="bg-secondary p-10" id="about-us">
        <div className="flex flex-col 2xl:flex-row gap-10">
          <div className="2xl:w-1/2 space-y-5">
            <h1 className="text-4xl text-white">About Us</h1>
            <h2 className="text-primary text-4xl font-bold">
              {sections?.aboutus?.title}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: sections?.aboutus?.description,
              }}
            />
            <button className="bg-primary py-3 px-6 rounded-lg text-xl text-white">
              <Link href="/about-us">Read More</Link>
            </button>
          </div>

          <div className="2xl:w-1/2">
            <div className="relative h-[30vh] 2xl:h-[60vh] 2xl:w-[90vh] p-4 outline outline-[15px] outline-primary 2xl:rounded-ss-[10rem] 2xl:rounded-ee-[10rem] overflow-hidden">
              <Image src={sections?.aboutus?.image} alt="Team working" fill />
            </div>
          </div>
        </div>
      </section>

      <section id="analytics">
        <div className="grid 2xl:grid-cols-4">
          <div className="bg-purple-800 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">
                {sections?.analytics?.employees}
              </h2>
              <h3 className="text-3xl text-white">Employees</h3>
            </div>
          </div>

          <div className="bg-pink-600 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">
                {sections?.analytics?.languages}
              </h2>
              <h3 className="text-3xl text-white">Languages</h3>
            </div>
          </div>

          <div className="bg-orange-400 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">
                {sections?.analytics?.locations}
              </h2>
              <h3 className="text-3xl text-white">Locations</h3>
            </div>
          </div>

          <div className="bg-yellow-400 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">
                {sections?.analytics?.qmTeam}
              </h2>
              <h3 className="text-3xl text-white">QM team</h3>
            </div>
          </div>
        </div>

        <div className="grid 2xl:grid-cols-3">
          <div className="bg-blue-500 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">
                {sections?.analytics?.coaches}
              </h2>
              <h3 className="text-3xl text-white">Coaches</h3>
            </div>
          </div>

          <div className="bg-gray-300 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">
                {sections?.analytics?.pl}
              </h2>
              <h3 className="text-3xl text-white">PL</h3>
            </div>
          </div>

          <div className="bg-blue-300 p-10 flex items-center justify-center text-center">
            <div className="space-y-3">
              <h2 className="text-white text-6xl font-bold">
                {sections?.analytics?.tl}
              </h2>
              <h3 className="text-3xl text-white">TL</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline">
        <div className="min-h-screen bg-white py-10 px-4">
          <div className="text-center mb-16 text-3xl">
            <h2 className="text-secondary font-medium">
              {sections?.timeline?.title}
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 w-1 bg-secondary h-full transform -translate-x-1/2"></div>

            <div className="flex flex-col space-y-12">
              {sections?.timeline?.years.map((year: any, idx: any) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className="grid grid-cols-9 items-center">
                    {/* Left Side */}
                    <div
                      className={`col-span-4 ${
                        isLeft ? "text-right pr-4" : ""
                      }`}
                    >
                      {isLeft && (
                        <div className="inline-block">
                          <h3 className="text-xl font-bold text-gray-900">
                            {year.year}
                          </h3>
                          <p className="text-gray-700 mt-2 whitespace-pre-line">
                            {year.title}
                          </p>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: year.description,
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Dot */}
                    <div className="col-span-1 flex justify-center">
                      <div className="w-8 h-8 bg-secondary rounded-full border-4 border-white z-10"></div>
                    </div>

                    {/* Right Side */}
                    <div
                      className={`col-span-4 ${
                        !isLeft ? "text-left pl-4" : ""
                      }`}
                    >
                      {!isLeft && (
                        <div className="inline-block">
                          <h3 className="text-xl font-bold text-gray-900">
                            {year.year}
                          </h3>
                          <p className="text-gray-700 mt-2 whitespace-pre-line">
                            {year.title}
                          </p>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: year.description,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[90vh] p-10">
        {/* Background Image */}
        <Image
          src="/testi-back.jpeg"
          alt="testi"
          fill
          className="object-cover"
        />

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-blue-800 bg-opacity-50 z-10"></div>

        {/* Content */}
        <div className="z-20 relative py-20">
          <h1 className="text-2xl font-bold text-white text-center">
            Testimonials
          </h1>
          <h2 className="text-4xl mt-2 font-bold text-white text-center">
            From Our Customers
          </h2>

          <div className="flex flex-col 2xl:flex-row justify-evenly px-10 mt-10">
            {sections?.testimonials?.map((review: any) => (
              <div className="bg-white p-10 2xl:w-1/4 relative">
                <div className="flex items-center gap-5">
                  <RxAvatar className="text-6xl text-blue-500" />

                  <div>
                    <p>{review.name}</p>
                    <p className="font-bold">{review.position}</p>
                  </div>
                </div>

                <p>{review.comment}</p>

                <FaQuoteLeft className="absolute right-5 -bottom-5 text-6xl text-blue-500" />
              </div>
            ))}

            {/* <div className="bg-white p-10 2xl:w-1/4 relative">
              <div className="flex items-center gap-5">
                <RxAvatar className="text-6xl text-blue-500" />

                <div>
                  <p>Jahannes Sehring</p>
                  <p className="font-bold">CEO of Travador</p>
                </div>
              </div>

              <p>
                "Since the outsourcing of our customer service, we work more or
                less cost- covering through the generated sales."
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
                "Since the outsourcing of our customer service, we work more or
                less cost- covering through the generated sales."
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
                "Since the outsourcing of our customer service, we work more or
                less cost- covering through the generated sales."
              </p>

              <FaQuoteLeft className="absolute right-5 -bottom-5 text-6xl text-blue-500" />
            </div> */}
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

          <button className="bg-blue-700 py-4 px-6 rounded-lg text-xl text-white mt-4">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Page;
