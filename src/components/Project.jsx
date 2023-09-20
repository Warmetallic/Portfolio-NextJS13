import Image from "next/image";
import Link from "next/link";
import React from "react";

function Project({ image, href, title, description, date }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={href}>
        <Image
          src={image}
          width={500}
          height={300}
          className="rounded-xl group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            maxHeight: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
        <div className="p-2">
          <h2 className="truncate text-lg font-bold group-hover:text-red-500">
            {title}
          </h2>
          <p className="line-clamp-2 text-m">{description}</p>
          <p className="flex items-center">{date}</p>
        </div>
      </Link>
    </div>
  );
}

export default Project;
