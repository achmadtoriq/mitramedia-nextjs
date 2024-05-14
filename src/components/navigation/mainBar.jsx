"use client";
import React from "react";
import { ModeToggle } from "../buttonToogle";
import Menu from "./innerMenu/Menu";
import LogoCorp from "./innerMenu/LogoCorp";
import useScroll from "@/hooks/useScroll";
import { usePathname } from "next/navigation";

const MainBar = () => {

  const pathname = usePathname();
  const scrollY = useScroll();

  const state =
    scrollY > 100 || pathname !== "/" ? true : false;
  
  return (
    <>
      <header className={`fixed top-0 w-full shadow-sm p-3 z-20 ${
          scrollY > 100 ? "lg:bg-white" : "bg-opacity-75"
        }`}>
        {/* <div className="absolute top-0 right-0 m-2">
          <ModeToggle className="rounded-full" />
        </div> */}
        <div className="container">
          <div className="mx-auto my-2 flex justify-between items-center px-20">
            <div className="w-[70%]">
              <LogoCorp state={state} />
            </div>
            <div className="w-full flex justify-between items-center">
              <Menu state={state} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainBar;
