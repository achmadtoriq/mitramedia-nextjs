import React from "react";

export const metadata = {
  title: "Home | Mitramedia Advertising ",
  description: "Generated Home Page",
};

const page = () => {
  return (
    <main className="bg-banner bg-no-repeat bg-cover bg-center w-full h-screen flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50" />
      <div className="z-10">
        <h1>About Page</h1>
      </div>
    </main>
  );
};

export default page;
