"use client";
import React from "react";
import DataClient from "@/data/clients.json";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const Partner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "free",      
      // slides: {
      //   perView: 5,
      //   spacing: 15,
      // },
      breakpoints: {
        '(min-width: 320px)': {
          slides: { perView: 2, spacing: 15 },
        },
        '(min-width: 768px)': {
          slides: { perView: 2, spacing: 10 },
        },
        '(min-width: 1200px)': {
          slides: { perView: 5, spacing: 5 },
        },
      },
      slides: { perView: 2, spacing: 5 }, // Default settings
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="lg:container mx-auto">
      <h1 className="text-center text-2xl lg:text-4xl uppercase font-semibold lg:py-6">
        <span className="font-extrabold text-red-600">Clients</span> Kami
      </h1>

      <div ref={sliderRef} className="keen-slider items-center">
        {DataClient.map((item, index) => {
          return (
            <>
              <div className="keen-slider__slide " key={index}>
                <Image
                  width={150}
                  height={150}
                  src={`/assets/images/clients/${item.path}`}
                  alt={item.altName}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
