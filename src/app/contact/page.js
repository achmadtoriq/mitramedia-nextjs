import EmailComponent from "@/components/EmailComponent";
import LocationMaps from "@/components/Maps/LocationMaps";
import React from "react";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const metadata = {
  title: "Contact Us Page | Mitramedia Advertising ",
  description: "Generated Contact Us page",
};

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container px-24 py-10">
        <div className="flex flex-row justify-between gap-4">
          <div className="w-full">
            <p className="lg:text-justify mb-3">
              Untuk pertanyaan atau permintaan dapat dilakukan dengan
              menghubungi kami melalui telepon, email, atau kunjungi office dan
              workshop kami dibawah ini.
            </p>
            <div className="p-1">
              <div className="flex flex-row justify-start items-start my-2">
                <FaMapMarkerAlt className="mx-2 lg:mx-3 text-5xl lg:text-4xl" />
                <p className="">
                  Nginden Semolo 38-40, The Mezzanine A15 Kel. Nginden
                  Jangkungan, Kec. Sukolilo, Kota Surabaya Jawa Timur 60118
                </p>
              </div>
              <div className="flex flex-row justify-start items-start my-2">
                <FaWhatsapp className="mx-2 lg:mx-2 text-2xl lg:text-2xl" />
                <p className="">0822-1328-0698 (telp/WA)</p>
              </div>
              <div className="flex flex-row justify-start items-start my-2">
                <MdEmail className="mx-2 lg:mx-2 text-2xl lg:text-2xl" />
                <p className="">adm.mitramedia@gmail.com</p>
              </div>
              <div className="flex flex-row justify-start items-start my-2">
                <MdEmail className="mx-2 lg:mx-2 text-2xl lg:text-2xl" />
                <p className="">adm3.mitramedia@gmail.com</p>
              </div>
            </div>
            <div className="p-1">
                <LocationMaps />
            </div>
          </div>
          <div className="w-full text-center">
            <p className="">
              Dapatkan Penawaran Terbaik Melalui Nomor dibawah Ini
            </p>
            <h1 className="text-red-600 text-3xl font-extrabold lg:text-5xl py-4 lg:py-5">
              0822-1328-0698
            </h1>
            <button className="font-medium bg-red-600 rounded-lg capitalize px-4 py-2 text-sm lg:text-1xl text-white">
              hubungi kami
            </button>
            <p className="py-6">
              atau dapat ditanyakan melalui email berikut :
            </p>
            <EmailComponent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
