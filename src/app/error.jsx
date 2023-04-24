"use client";
import { useEffect } from "react";
import React from "react";

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong!</h1>
      <button className="hover:text-red-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}

export default Error;
