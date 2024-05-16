import React from "react";
import data from "@/data/apa.json";
import Image from 'next/image'

const Apa = () => {
  return (
    <div className="lg:container">
      <h1 className="w-3/4 lg:w-full mx-auto text-center text-2xl lg:text-4xl uppercase font-semibold lg:py-6">
        <span className="font-extrabold text-red-600">Apa yang</span> Kami
        Kerjakan ?
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 py-6">
        {data.map((val, idx) => (
          <div key={idx} className="relative overflow-hidden h-80">
            <div className={`absolute w-full`}>
              <Image
                src={`/assets/images/services/${val.path}`}
                width={500}
                height={500}
                alt={val.altName}
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 bg-black/70 w-full p-5">
              <h1 className="text-sm lg:text-2xl font-bold text-white capitalize">
                {val.title}
              </h1>
              <p className="text-white">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apa;
