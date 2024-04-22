"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuName = [
  {
    name: "Home",
    path: "/",
    className: "py-3 px-10",
    width: "w-[90%]",
  },
  {
    name: "About",
    path: "/about",
    className: "py-3 px-10",
    width: "w-[90%]",
  },
  {
    name: "Projects",
    path: "/project",
    className: "py-3 px-9",
    width: "w-[90%]",
  },
  {
    name: "Location Billboard",
    path: "/location",
    className: "py-3 px-3",
    width: "w-full",
  },
  {
    name: "Contact",
    path: "/contact",
    className: "py-3 px-9",
    width: "w-[90%]",
  },
];

const Menu = ({ ...props }) => {
  const pathname = usePathname();

  return menuName.map((item, index) => (
    <>
      <div
        className={`${item.width + props.className}`}
        key={index}
      >
        <Link
          key={index}
          className={`${item.className} font-semibold rounded-full tracking-wider ${ pathname === item.path ? "bg-red-500 text-white" : "text-red-500 dark:text-white"}`}
          href={item.path}
        >
          {item.name}
        </Link>
      </div>
    </>
  ));
};

export default Menu;
