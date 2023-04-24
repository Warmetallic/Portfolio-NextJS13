import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";

function Header() {
  return (
    <header className="fixed justify-between sm:mx-auto items-center px-24 py-6 w-full bg-black bg-opacity-80 text-white z-40">
      <nav className="flex items-center justify-start h-30 space-x-8 lg:space-x-12 xl:space-x-16 max-w-6xl mx-auto px-0">
        <Link href="/" className="h-10 w-10">
          <Image width={60} height={60} src="/logo.svg" alt="logo" />
        </Link>
        <MenuItem text="Home" url="/"></MenuItem>
        <MenuItem text="Projects" url="/projects"></MenuItem>
        <MenuItem text="About" url="/about"></MenuItem>
      </nav>
    </header>
  );
}

export default Header;
