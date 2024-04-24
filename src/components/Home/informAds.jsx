import React from "react";

const InformAds = () => {
  return (
    <div className="z-10 flex bg-black bottom-0 w-screen justify-center items-center py-6 text-white px-32">
      <div className="w-[50%] px-8">
        <h1 className="text-3xl font-bold">
          JADIKAN IKLAN ANDA <br/>MENJADI PUSAT <br/>PERHATIAN
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>Pemasangan yang sudah kami selesaikan</p>
        <div className="flex flex-row justify-center items-center text-center pt-5">
          <div className="px-4">
            <h1 className="text-red-500 text-3xl font-bold">100+</h1>
            <p>Lokasi Pemasangan</p>
          </div>
          <div className="px-4">
            <h1 className="text-red-500 text-3xl font-bold">100+</h1>
            <p>Client</p>
          </div>
          <div className="px-4">
            <h1 className="text-red-500 text-3xl font-bold">100+</h1>
            <p>Kota yang dijangkau</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformAds;
