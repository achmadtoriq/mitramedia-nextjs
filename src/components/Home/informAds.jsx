import React from "react";

const InformAds = () => {
  return (
    <div className="z-10 bg-black w-screen">
      <div className="lg:container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 bottom-0 justify-center items-center py-4 text-white lg:px-32">
          <div className="px-4 lg:px-8">
            <h1 className="hidden lg:block text-base lg:text-3xl font-bold">
              JADIKAN IKLAN ANDA <br />
              MENJADI PUSAT <br />
              PERHATIAN
            </h1>
            <h1 className="lg:hidden text-base lg:text-3xl text-center font-bold">
              JADIKAN IKLAN ANDA MENJADI PUSAT PERHATIAN
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="p-3 text-center lg:text-left lg:p-0">Pemasangan yang sudah kami selesaikan</p>
            <div className="grid grid-cols-3 gap-3 justify-center items-start text-center px-5 lg:pt-5">
              <div className="lg:px-4">
                <h1 className="text-red-500 text-xl lg:text-3xl font-bold">100+</h1>
                <p className="text-sm/3 lg:text-lg leading-5 lg:leading-snug">Lokasi Pemasangan</p>
              </div>
              <div className="lg:px-4">
                <h1 className="text-red-500 text-xl lg:text-3xl font-bold">100+</h1>
                <p className="text-sm/3 lg:text-lg leading-5 lg:leading-snug">Client</p>
              </div>
              <div className="lg:px-4">
                <h1 className="text-red-500 text-xl lg:text-3xl font-bold">100+</h1>
                <p className="text-sm/3 lg:text-lg leading-5 lg:leading-snug">Kota yang dijangkau</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformAds;
