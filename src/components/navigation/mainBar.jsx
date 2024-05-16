"use client";
import React, { useState } from "react";
// import { ModeToggle } from "../buttonToogle";
import LogoCorp from "./innerMenu/LogoCorp";
import useScroll from "@/hooks/useScroll";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import Menu from "./innerMenu/Menu";

const menuName = [
  {
    name: "Home",
    path: "/",
    className: "py-3 px-10",
    width: "",
  },
  {
    name: "About",
    path: "/about",
    className: "py-3 px-10",
    width: "",
  },
  {
    name: "Projects",
    path: "/project",
    className: "py-3 px-9",
    width: "",
  },
  {
    name: "Location Billboard",
    path: "/location",
    className: "py-3 px-3",
    width: "",
  },
  {
    name: "Contact",
    path: "/contact",
    className: "py-3 px-9",
    width: "",
  },
];

const MainBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const scrollY = useScroll();

  const state = scrollY > 100 || pathname !== "/" ? true : false;

  return (
    <>
      <header
        className={`fixed top-0 w-full shadow-sm p-1 lg:p-3 z-20 ${
          scrollY > 100 ? "bg-white" : "bg-white lg:bg-transparent"
        }`}
      >
        {/* <div className="absolute top-0 right-0 m-2">
          <ModeToggle className="rounded-full" />
        </div> */}
        <div className="lg:container">
          <div className="w-full mx-auto lg:my-2 flex justify-between items-center lg:px-20">
            <div className="w-full lg:w-[50%]">
              <LogoCorp state={state} />
            </div>
            <div className="lg:hidden w-full text-right">
              {/* <Menu state={state} /> */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="border-2 border-black/40 rounded-sm p-1 m-2"
              >
                {isOpen ? (
                  <Cross1Icon className="h-5 w-5" />
                ) : (
                  <HamburgerMenuIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="hidden lg:grid grid-cols-5 gap-5 w-full text-center justify-between items-center">
              <Menu state={state} />
            </div>
            <div
              className={
                isOpen
                  ? "mt-4 top-10 bg-white py-1 left-0 absolute ease-in duration-300 w-screen lg:hidden shadow-xl"
                  : "mt-4 top-10 bg-white py-1 left-[-100%] absolute ease-in duration-300 w-screen lg:hidden"
              }
            >
              <div className="flex flex-col items-start justify-start">
                {menuName.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="w-full py-2 text-black hover:bg-black hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <p className="mx-4 leading-tight">{item.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainBar;
