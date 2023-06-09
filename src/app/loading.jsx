import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="flex justify-center p-40">
      <Image height={96} width={96} src="spinner.svg" alt="loading" />
    </div>
  );
}

export default Loading;
