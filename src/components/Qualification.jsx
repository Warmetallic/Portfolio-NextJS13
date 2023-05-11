import Image from "next/image";
import React from "react";

function Qualification({ title, logo }) {
  return (
    <div className="flex-col items-center justify-center bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10 min-w-full">
      <h1 className="text-center p-4">{title}</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-w-full border-b border-dashed border-gray-500 border-opacity-20">
        <div className="flex min-w-fit">
          <Image src={logo} alt="University logo" width={344} height={344} />
        </div>
        <p>
          SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA
          ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS
          ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS
          SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA
          ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS
          ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS
          SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA
          ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS
          ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS
          SOME TESTS ASDASDA ASD AS
        </p>
        <p>
          SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA
          ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS
          ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS
          SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA
          ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS
          ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS
          SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA
          ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS
          ASDASDA ASD AS SOME TESTS ASDASDA ASD AS SOME TESTS ASDASDA ASD AS
          SOME TESTS ASDASDA ASD AS
        </p>
      </div>
    </div>
  );
}

export default Qualification;
