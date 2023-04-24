import Link from "next/link";
import React from "react";

function MenuItem({ text, url }) {
  const isHome = text === "Home";

  return (
    <Link
      href={url}
      className={`text-base lg:text-lg xl:text-xl font-semibold hover:text-red-500 ${
        isHome ? "hidden sm:block" : ""
      }`}
    >
      <div>{text}</div>
    </Link>
  );
}

export default MenuItem;
