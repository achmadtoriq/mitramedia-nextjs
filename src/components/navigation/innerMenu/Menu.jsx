"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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

const Menu = ({ state }) => {
  const pathname = usePathname();

  return menuName.map((item, index) => (
    <>
      <Link key={index}
        className={`text-sm py-2 font-semibold rounded-full tracking-normal ${
          pathname === item.path
            ? "bg-red-500 text-white"
            : ` ${state ? "text-red-500" : "text-white"} `
        }`}
        href={item.path}
      >
        {item.name}
      </Link>
    </>
  ));
};

export default Menu;
