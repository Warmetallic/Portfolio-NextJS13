"use client";
import React from "react";

function Skills() {
  return (
    <div className="flex-col min-w-full">
      <div className="flex-col items-center justify-center bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10 min-w-full border-y border-dashed border-gray-500 border-opacity-20 pb-4">
        <div
          id="menu-list2"
          className="flex flex-col lg:flex-row items-center justify-center min-w-full py-4"
        >
          <div className="lg:flex items-center justify-center lg:space-x-12 space-y-3">
            <ul className="lg:list-disc lg:marker:text-red-700 flex-col font-mono text-2xl space-y-3 lg:text-start text-center">
              <li className="custom-border">NextJS 13</li>
              <li className="custom-border">TailwindCSS</li>
              <li className="custom-border">Vercel</li>
              <li className="custom-border">Heroku</li>
            </ul>
            <ul className="lg:list-disc lg:marker:text-red-700 flex-col font-mono text-2xl space-y-3 lg:text-start text-center lg:pl-20">
              <li className="custom-border">Git</li>
              <li className="custom-border">Github</li>
              <li className="custom-border">SQL</li>
              <li className="custom-border">Axure</li>
            </ul>
            <ul className="lg:list-disc lg:marker:text-red-700 flex-col font-mono text-2xl space-y-3 lg:text-start text-center lg:pl-20">
              <li className="custom-border">Amazon AWS</li>
              <li className="custom-border">Django</li>
              <li className="custom-border">Flask</li>
              <li className="custom-border">Visual Paradigm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
