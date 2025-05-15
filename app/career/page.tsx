import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { PiHeadCircuitFill } from "react-icons/pi";
import { SiCodementor } from "react-icons/si";

const Page = () => {
  const positions = [
    {
      id: 1,
      title: "Frontend Developer",
      description:
        "Responsible for building UI components and optimizing user experience.",
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "Handles server-side logic and database architecture.",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      description: "Manages CI/CD pipelines and cloud infrastructure.",
    },
    {
      id: 4,
      title: "QA Engineer",
      description:
        "Ensures the quality and reliability of applications through testing.",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      description:
        "Designs intuitive user interfaces and seamless user experiences.",
    },
    {
      id: 6,
      title: "Product Manager",
      description:
        "Oversees product development and aligns team efforts with business goals.",
    },
    {
      id: 7,
      title: "Data Analyst",
      description: "Analyzes data trends to support decision making.",
    },
  ];

  return (
    <div>
      <section className="relative w-full h-[20vh] lg:h-[80vh]">
        <div className="z-20 absolute text-white top-[40%] left-[10%]">
          <h1 className="text-2xl lg:text-6xl font-bold">Career</h1>
        </div>
        <div className="absolute inset-0 bg-primary opacity-20 z-10" />
        <Image src="/career-hero.jpeg" alt="" fill className="blur-[1px]" />
      </section>

      <section className="bg-secondary px-10 py-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-20  items-start">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-10">
            Are you dedicated, hardworking and fun? Join us at G&H Dialogue!
          </h2>
          <p className="mb-10 text-xl">
            We have a corporate culture of a high performance work ethic,
            wonderful team member engagement, respectful jobs and a commitment
            to corporate social responsibility. We focus on customer
            satisfaction and developing long-term relationships with our
            customers, our customers' customers and our employees.
          </p>

          <div className="flex flex-col lg:flex-row gap-3 justify-evenly">
            <button className="bg-primary py-3 px-6 rounded-lg block w-full text-xl text-white">
              <Link href="/about-us">Apply Now in Albania</Link>
            </button>
            <button className="bg-primary py-3 px-6 rounded-lg block w-full text-xl text-white">
              <Link href="/about-us">Apply Now in Kosvo</Link>
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-primary mb-10">
            Guidelines For Application
          </h2>
          <ul className="space-y-3 text-xl">
            <li className="flex items-center gap-3">
              <FaRegCircleCheck />
              <span>CV</span>
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircleCheck />
              <span>Testimonies</span>
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircleCheck />
              <span>Preferably all documents in one PDF file</span>
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircleCheck />
              <span>
                Alternatively, email us up to 3 attachments (maximum 4MB)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircleCheck />
              <span>Send us your documents to info@ghdialog.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircleCheck />
              <span>We look forward to receiving your application</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-4xl p-4 mb-6 text-center">
          We are currently looking for the following positions
        </h2>

        <div
          className={`
                  grid grid-cols-1 gap-4 p-8
                  ${
                    positions.length % 4 === 1
                      ? "lg:grid-cols-1"
                      : positions.length % 4 === 2
                      ? "lg:grid-cols-2"
                      : positions.length % 4 === 3
                      ? "lg:grid-cols-3"
                      : "lg:grid-cols-4"
                  }
                `}
        >
          {positions.map((p, i) => (
            <div
              key={p.id}
              className={`p-10 rounded-xl shadow text-center ${
                i % 2 == 0 ? "bg-primary text-white" : "bg-secondary"
              }`}
            >
              <h3 className="font-bold text-2xl mb-3">{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary p-10 text-white flex flex-col lg:flex-row gap-10 items-center justify-evenly">
        <div className="bg-primary shrink-0 h-[200px] w-[200px] rounded-full relative">
          <div className="absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] max-w-[150%]">
            <div className="flex flex-col justify-center items-center gap-4">
              <FaHandshake className="text-6xl" />
              <h4 className="text-xl font-bold text-center">Welcome Day</h4>
            </div>
          </div>
        </div>

        <div className="bg-primary shrink-0 h-[200px] w-[200px] rounded-full relative">
          <div className="absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] max-w-[150%]">
            <div className="flex flex-col justify-center items-center gap-4">
              <PiHeadCircuitFill className="text-6xl" />
              <h4 className="text-xl font-bold text-center">
                Soft Skills Training
              </h4>
            </div>
          </div>
        </div>

        <div className="bg-primary shrink-0 h-[200px] w-[200px] rounded-full relative">
          <div className="absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] max-w-[150%]">
            <div className="flex flex-col justify-center items-center gap-4">
              <GoProjectRoadmap className="text-6xl" />
              <h4 className="text-xl font-bold text-center">
                Project Specific Training
              </h4>
            </div>
          </div>
        </div>

        <div className="bg-primary shrink-0 h-[200px] w-[200px] rounded-full relative">
          <div className="absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] max-w-[150%]">
            <div className="flex flex-col justify-center items-center gap-4">
              <SiCodementor className="text-6xl" />
              <h4 className="text-xl font-bold text-center">
                On the job coaching
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
