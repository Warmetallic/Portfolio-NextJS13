import Qualification from "@/components/Qualification";
import Skills from "@/components/Skills";
import React from "react";
import Script from "next/script";

function page() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto justify-between py-44 ">
      <div className="flex flex-col items-center justify-center bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10 min-w-full">
        <h1 className="font-game text-4xl text-center lg:text-5xl p-5">
          Qualifications
        </h1>
        <Qualification />
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10 min-w-full">
        <h1 className="font-game text-4xl text-center lg:text-5xl p-5">
          Additional Skills
        </h1>
        <Skills />
      </div>
    </div>
  );
}

export default page;
