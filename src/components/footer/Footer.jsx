import Image from "next/image";
import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaTwitterSquare,
  FaFacebookMessenger,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaPhoneSquare,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container m-auto">
      <div className="flex justify-between">
        <div className="flex flex-col items-center w-[25%]">
          <Image
            src={`/assets/images/mitramedia2.webp`}
            alt="Logo Mitramedia Advertising"
            className=""
            width={200}
            height={24}
            priority
          />
          <h1 className="italic text-md font-semibold py-4">
            Your Trust Ads Partner
          </h1>
        </div>
        <div className="flex flex-col overflow-hidden w-[27%]">
          <h1 className="text-xl font-semibold">Product & Services</h1>
          <div className="flex flex-col my-2">
            <p className="text-xs font-medium">
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Letter Timbul{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Neon Box{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Vinyl{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Baliho{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Event Booth{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Led Box{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Wall Branding{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Stiker{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Billboard{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Sign Board / PNT{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Branding Mobil{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Pajak & Perijinan{" "}
              </span>
              <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                Escalator Branding{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[23%]">
          <h1 className="text-xl font-semibold">Find us on</h1>
          <div className="flex flex-row items-center gap-5 text-5xl my-2">
            <Link href={"#"}>
              <FaFacebookMessenger className="" />
            </Link>
            <Link href={"#"}>
              <FaTwitterSquare className="" />
            </Link>
            <Link href={"#"}>
              <FaInstagramSquare className="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[25%]">
          <h1 className="text-xl font-semibold">Head Office</h1>
          <p className="my-2">
            Nginden Semolo 38-40, The Mezzanine A15 Kel. Nginden Jangkungan,
            Kec. Sukolilo, Kota Surabaya Jawa Timur 60118
          </p>
          <div className="flex flex-row items-center gap-2 my-2">
            <FaWhatsappSquare className="text-3xl" />
            <p className="">0822-1328-0698 (telp/WA)</p>
          </div>
          <div className="flex flex-row items-center gap-2 my-2">
            <FaPhoneSquare className="text-3xl" />
            <p className="">(031) 58253549 (Telp)</p>
          </div>
          <div className="flex flex-row items-center gap-2 my-2">
            <MdEmail className="text-3xl" />
            <p className="">adm.mitramedia@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
