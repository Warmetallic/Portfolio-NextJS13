import Image from "next/image";
import React from "react";

function Qualification() {
  return (
    <div>
      <div className="flex-col items-center justify-center bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10 min-w-full border-y border-dashed border-gray-500 border-opacity-20 pb-4">
        <h1 className="font-game text-3xl font-bold text-center border-y border-dashed border-gray-500 border-opacity-20 p-4">
          MSc Information Technology, University of Aberdeen
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start min-w-full p-10 pt-4 pb-4 pl-16">
          <div className="flex min-w-fit">
            <Image
              src="/img/aba.png"
              alt="University logo"
              width={344}
              height={344}
            />
          </div>
          <div className="flex items-center justify-center">
            <ul className="lg:list-disc flex-col font-mono text-xl space-y-3 lg:text-start text-center lg:pl-20 pt-4">
              <li>Project in IT</li>
              <li>Information Security</li>
              <li>Database Systems and Big Data</li>
              <li>Introduction to Programming (Python)</li>
              <li>Human Computer Interaction</li>
              <li>Fundamental of Software Project Management</li>
              <li>Web Development</li>
              <li>Advanced Programming (Python)</li>
              <li>Enterprise Software Development</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-col items-center justify-center bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10 min-w-full border-y border-dashed border-gray-500 border-opacity-20 pb-4">
        <h1 className="font-game text-3xl font-bold text-center border-y border-dashed border-gray-500 border-opacity-20 p-4">
          BSc Computer Science with Games Technology, City University
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start min-w-full p-10 pt-4 pb-4 pl-16">
          <div className="flex-col min-w-fit">
            <Image
              src="/img/city.png"
              alt="University logo"
              width={344}
              height={344}
            />
            <h1>Hello there</h1>
          </div>
          <div className="flex items-center justify-center">
            <ul className="lg:list-disc flex-col font-mono text-xl space-y-3 lg:text-start text-center lg:pl-20 pt-4">
              <li>Mathematics for Computing</li>
              <li>Business Systems</li>
              <li>System Architecture</li>
              <li>Programming in Java</li>
              <li>Computation and Reasoning</li>
              <li>Software Engineering</li>
              <li>Team Project</li>
              <li>Networks and Operating Systems</li>
              <li>Object-Oriented Analysis and Design </li>
              <li>Programming in C++</li>
              <li>Professional Development in IT</li>
              <li>Games Technology</li>
              <li>Data Structure and Algorithms</li>
              <li>Advanced Games Technology</li>
              <li>Computer Vision</li>
              <li>Individual Project</li>
              <li>Computer Grpahics</li>
              <li>Human Computer Interaction</li>
              <li>Electronic Commerce</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
