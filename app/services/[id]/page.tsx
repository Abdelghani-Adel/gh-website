import React from "react";
import data from "@/public/data/services.json";
import Image from "next/image";

const Page = () => {
  const service = data[0];

  return (
    <div>
      <section className="relative -top-[110vh] 2xl:-top-[60vh] -left-[10vw] h-[140vh] w-[120vw] bg-primary rounded-ee-full rounded-es-full">
        <div className="absolute bottom-[10vh] 2xl:bottom-1/4 left-1/2 -translate-x-1/2 text-white">
          <h1 className="text-5xl font-bold text-center">{service.title}</h1>
        </div>
      </section>

      <section className="p-10 max-w-6xl mx-auto -mt-[110vh] 2xl:-mt-[60vh]">
        <div className="flex flex-col-reverse 2xl:flex-row mb-10 gap-10">
          <div>
            <h2 className="text-4xl text-secondary font-bold mb-4">{service.details.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: service.details.description }} />
          </div>

          <div className="relative h-[300px] w-[300px] shrink-0 rounded-xl overflow-hidden">
            <Image src={service.images[0]} alt="" fill />
          </div>
        </div>

        <div className="grid 2xl:grid-cols-2 gap-5">
          {service.details.products.map((product, i) => (
            <div key={i}>
              <h2 className="text-2xl text-secondary font-bold">{product.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
