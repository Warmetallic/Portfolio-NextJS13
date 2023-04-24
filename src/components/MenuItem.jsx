import Link from "next/link";
import React from "react";

function MenuItem({ title, url }) {
  const isHome = title === "Home";

  return (
    <Link
      href={url}
      className={`text-base lg:text-lg xl:text-xl font-semibold hover:text-red-500 ${
        isHome ? "hidden sm:block" : ""
      }`}
    >
      <div>{title}</div>
    </Link>
  );
}

export default MenuItem;
