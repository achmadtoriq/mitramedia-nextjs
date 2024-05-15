import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Page | Mitramedia Advertising ",
  description: "Generated About page",
};

const page = () => {
  return (
    <main className="bg-[#DDDDDD] flex min-h-screen flex-col items-center justify-between lg:p-24">
      {/* <h1>About Page</h1> */}
      <div className="px-6 lg:container py-12">
        <h1 className="text-center text-2xl lg:text-4xl uppercase font-semibold py-6 lg:py-12">
          Tentang Kami
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-8">
          <div className="w-full px-4">
            <p className="font-normal text-justify mb-10">
              Mitra Media Advertising adalah perusahaan yang bergerak pada
              bidang jasa periklanan baik indoor maupun outdoor. Mengerjakan
              Biro Reklame; pembuatan Neonbox, Billboard, papan nama, baliho,
              huruf timbul, akrilik, LED, pajak ijin reklame di seluruh kota
              besar Indonesia. Berdiri sejak tahun 2013 kami telah melayani
              banyak pelaku usaha dalam membangun brand bisnis mereka. Didukung
              dengan tenaga yang berpengalaman dan berdedikasi tinggi, kami siap
              memberikan layanan profesional kepada Anda untuk menjangkau pasar
              potensial secara efektif & efisien.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between">
              <div className="w-full rounded-lg shadow-lg p-5 text-justify bg-gray-200">
                <h1 className="text-lg font-bold uppercase mb-3">
                  Core Values
                </h1>
                <p>
                  Bekerja dengan kreativitas tanpa batas, inovasi tiada henti
                  dan etos kerja yang tinggi dan menjunjung tinggi nilai-nilai
                  profesionalisme bisnis.
                </p>
              </div>
              <div className="w-full rounded-lg shadow-lg p-5 text-justify bg-gray-200">
                <h1 className="text-lg font-bold uppercase mb-3">Mission</h1>
                <p>
                  Memperkenalkan merk dan deskripsi produk kepada pelanggan dan
                  menarik minat pembeli potensial pada produk.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 order-first lg:order-last">
            <Image
              src={`/assets/images/aboutus/about-us.webp`}
              alt="Mitra Media Advertising"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
