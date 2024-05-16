import React from "react";
import Image from "next/image";

const LogoCorp = ({ state }) => {
  return (
    <>
      <Image
        src={`/assets/images/${
          !state ? "mitramedia2.webp" : "mitramedia.webp"
        }`}
        width={200}
        height={24}
        priority={true}
        alt="Logo Mitramedia Advertising"
        className="aspect-auto hidden lg:block mx-auto"
        quality={100}
      />

      <Image
        src={`/assets/images/mitramedia.webp`}
        width={200}
        height={24}
        priority={true}
        alt="Logo Mitramedia Advertising"
        className="aspect-auto lg:hidden w-[80%] ml-2"
        quality={100}
      />

      {/* <Image
        src={"/assets/images/mitramedia.webp"}
        alt="Logo Mitramedia Advertising"
        width={200}
        height={24}
        priority={true}
        className="aspect-auto block dark:hidden"
        quality={100}
      />
      <Image
        src={"/assets/images/mitramedia2.webp"}
        alt="Logo Mitramedia Advertising"
        width={200}
        height={24}
        priority={true}
        className="aspect-auto hidden dark:block"
        quality={100} 
      />*/}
    </>
  );
};

export default LogoCorp;
