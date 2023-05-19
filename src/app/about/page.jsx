import Qualification from "@/components/Qualification";
import React from "react";

function page() {
  return (
    <div className="flex max-w-6xl mx-auto justify-between py-44 ">
      <div className="flex flex-col items-center justify-center bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10 min-w-full">
        <h1 className="font-game text-4xl lg:text-5xl p-5">Qualifications</h1>
        <Qualification />
      </div>
    </div>
  );
}

export default page;
