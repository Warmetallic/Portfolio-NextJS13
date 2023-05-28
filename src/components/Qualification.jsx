"use client";
import Image from "next/image";
import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";
import { useState } from "react";
import Script from "next/script";

function Qualification() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div className="flex-col min-w-full">
      <div className="flex-col items-center justify-center bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10  border-y border-dashed border-gray-500 border-opacity-20 pb-4">
        <div className="flex lg:flex-row flex-col items-center justify-center border-y border-dashed border-gray-500 border-opacity-20 p-4">
          <div className="flex flex-col lg:ml-52">
            <h1 className="font-game text-3xl font-bold text-center">
              MSc Information Technology
            </h1>
            <h1 className="font-game text-3xl font-bold text-center text-red-600">
              University of Aberdeen
            </h1>
          </div>
          <button
            id="menu-toggle"
            className="lg:ml-52 pt-2"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <BiDownArrow className="text-4xl text-red-600" />
            ) : (
              <BiUpArrow className="text-4xl  text-red-600 " />
            )}
          </button>
        </div>

        <div
          id="menu-list"
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-start p-10 pt-6 pb-4 pl-16"
        >
          <div className="flex min-w-fit pt-4">
            <Image
              src="/img/aba.png"
              alt="University logo"
              width={344}
              height={344}
            />
          </div>
          <div className="flex items-center justify-center">
            <ul className="lg:list-disc lg:marker:text-red-700 flex-col font-mono text-xl space-y-3 lg:text-start text-center lg:pl-20 pt-4">
              <li className="custom-border">Web Development</li>
              <li className="custom-border">Information Security</li>
              <li className="custom-border">Database Systems and Big Data</li>
              <li className="custom-border">Introduction to Programming</li>
              <li className="custom-border">Human Computer Interaction</li>
              <li className="custom-border">
                Fundamental of Software Project Management
              </li>
              <li className="custom-border"> Project in IT</li>
              <li className="custom-border">Advanced Programming </li>
              <li className="custom-border">Enterprise Software Development</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-col items-center justify-center bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10 min-w-full border-y border-dashed border-gray-500 border-opacity-20 pb-4">
        <div className="flex lg:flex-row flex-col items-center justify-center border-y border-dashed border-gray-500 border-opacity-20 p-4">
          <div className="flex flex-col lg:ml-14">
            <h1 className="font-game text-3xl font-bold text-center">
              BSc Computer Science with Games Technology
            </h1>
            <h1 className="font-game text-3xl font-bold text-center text-red-600">
              City University
            </h1>
          </div>

          <button
            id="menu-toggle2"
            className="lg:ml-14 pt-2"
            onClick={toggleMenu2}
          >
            {isOpen2 ? (
              <BiDownArrow className="text-4xl text-red-600" />
            ) : (
              <BiUpArrow className="text-4xl text-red-600" />
            )}
          </button>
        </div>

        <div
          id="menu-list2"
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-start min-w-full p-10 pt-4 pb-4 pl-16"
        >
          <div className="flex-col min-w-fit">
            <Image
              src="/img/city.png"
              alt="University logo"
              width={344}
              height={344}
            />
          </div>
          <div className="lg:flex items-center justify-center">
            <ul className="lg:list-disc lg:marker:text-red-700 flex-col font-mono text-xl space-y-3 lg:text-start text-center lg:pl-20 pt-2">
              <li className="custom-border">Mathematics for Computing</li>
              <li className="custom-border">Business Systems</li>
              <li className="custom-border">System Architecture</li>
              <li className="custom-border">Programming in Java</li>
              <li className="custom-border">Computation and Reasoning</li>
              <li className="custom-border">Software Engineering</li>
              <li className="custom-border">Team Project</li>
              <li className="custom-border">Networks and Operating Systems</li>
              <li className="custom-border">
                Object-Oriented Analysis and Design{" "}
              </li>
              <li className="custom-border">Programming in C++</li>
            </ul>
            <ul className="lg:list-disc lg:marker:text-red-700 flex-col font-mono text-xl space-y-3 lg:text-start text-center lg:pl-20 pt-5">
              <li className="custom-border">Professional Development in IT</li>
              <li className="custom-border">Games Technology</li>
              <li className="custom-border">Data Structure and Algorithms</li>
              <li className="custom-border">Advanced Games Technology</li>
              <li className="custom-border">Computer Vision</li>
              <li className="custom-border">Individual Project</li>
              <li className="custom-border">Computer Grpahics</li>
              <li className="custom-border">Human Computer Interaction</li>
              <li className="custom-border">Electronic Commerce</li>
            </ul>
          </div>
        </div>
      </div>
      <Script src="/hide.js" />
      <Script src="/hide2.js" />
    </div>
  );
}

export default Qualification;
