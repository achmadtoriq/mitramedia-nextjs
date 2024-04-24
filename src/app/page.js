import InformAds from "@/components/Home/informAds";
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
        <div className="z-10 mt-24">
          
        </div>
        <InformAds />
      </main>
      <section id="apa-section" className="bg-[#DDDDDD] text-black px-20 py-10">
        <Apa/>
      </section>
    </>
  );
};

export default page;
