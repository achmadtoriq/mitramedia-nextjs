import React from "react";
import { ModeToggle } from "../buttonToogle";
import Menu from "./innerMenu/Menu";

const MainBar = () => {
  return (
    <>
      <header className="fixed top-0 w-full z-10 bg-transparent shadow-sm p-5">
        <div className="absolute top-0 right-0 m-2">
          <ModeToggle className="rounded-full" />
        </div>
        <div className="container mx-auto my-4 flex justify-between items-center ">
          <div className="w-[50%]">
            <h1>Logo</h1>
          </div>
          <div className="w-full flex justify-between items-center">
            <Menu/>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainBar;
