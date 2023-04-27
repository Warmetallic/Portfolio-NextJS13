import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <header className="fixed justify-between sm:mx-auto items-center px-24 py-6 w-full dark:bg-gray-900 bg-gray-100 bg-opacity-80 z-40">
      <nav className="flex max-w-6xl mx-auto justify-between">
        <div className="flex items-center space-x-4 lg:space-x-12 xl:space-x-16">
          <Link href="/" className="h-10 w-10">
            <Image width={60} height={60} src="/logo.svg" alt="logo" />
          </Link>
          <MenuItem title="Home" url="/" />
          <MenuItem title="Projects" url="/projects" />
          <MenuItem title="About" url="/about" />
        </div>
        <div className="flex items-center space-x-2 pl-4">
          <DarkModeSwitch />
          <span className="font-cursive text-lg sm:hidden text-red-600">
            GK
          </span>
          <span className="font-cursive text-lg hidden sm:inline truncate">
            <span className="text-red-600">G</span>leb{" "}
            <span className="text-red-600">K</span>harlamov
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
