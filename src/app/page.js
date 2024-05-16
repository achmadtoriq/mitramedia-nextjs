import InformAds from "@/components/Home/informAds";
import Partner from "@/components/Home/partner";
import Apa from "@/components/Home/Section1/Apa";
import React from "react";

export const metadata = {
  title: "Home | Mitramedia Advertising ",
  description: "Generated Home Page",
};

const page = () => {
  return (
    <>
      <main className="bg-banner bg-no-repeat bg-cover bg-center w-full h-screen flex min-h-screen flex-col items-center justify-between">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50" />
        <div className="z-10 mt-24"></div>
        <InformAds />
      </main>
      <section id="apa-section" className="bg-[#DDDDDD] text-black px-5 py-5 lg:px-20 lg:py-10">
        <Apa />
      </section>
      <section id="indonesia-maps" className="py-1 lg:py-2">
        <div className="lg:container bg-id_maps bg-no-repeat lg:w-full bg-cover lg:bg-right h-36 lg:h-96">
          <div className="px-5 lg:px-20 flex flex-col justify-center items-start h-full">
            <h1 className="text-base lg:text-5xl capitalize font-bold lg:py-6 w-3/4 lg:w-[45%] tracking-wide">
              Banyak Project yang sudah kami kerjakan di seluruh wilayah Indonesia
            </h1>
          </div>
        </div>
      </section>
      <section id="apa-section" className="bg-[#DDDDDD] text-black px-10 py-5 lg:px-20 lg:py-10">
        <Partner />
      </section>
    </>
  );
};

export default page;
