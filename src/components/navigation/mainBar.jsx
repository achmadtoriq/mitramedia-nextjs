"use client";
import React from "react";
import { ModeToggle } from "../buttonToogle";
import Menu from "./innerMenu/Menu";
import LogoCorp from "./innerMenu/LogoCorp";
import useScroll from "@/hooks/useScroll";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const MainBar = () => {

  const pathname = usePathname();
  const scrollY = useScroll();

  const state =
    scrollY > 100 || pathname !== "/" ? true : false;
  
  return (
    <>
      <header className={`fixed top-0 w-full shadow-sm p-1 lg:p-3 z-20 ${
          scrollY > 100 ? "bg-white" : "bg-white lg:bg-transparent"
        }`}>
        {/* <div className="absolute top-0 right-0 m-2">
          <ModeToggle className="rounded-full" />
        </div> */}
        <div className="lg:container">
          <div className="w-full mx-auto lg:my-2 flex justify-between items-center lg:px-20">
            <div className="w-full lg:w-[70%]">
              <LogoCorp state={state} />
            </div>
            <div className="hidden lg:flex w-full justify-between items-center">
              <Menu state={state} />
            </div>
            <div className="lg:hidden w-full text-right">
              {/* <Menu state={state} /> */}
              <button className="border-2 border-black/40 rounded-sm p-1 m-2">
                <HamburgerMenuIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainBar;
