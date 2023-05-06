"use client";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

function Typer({ text, code }) {
  return (
    <div className="flex flex-col border-b border-dashed border-gray-500 border-opacity-20 truncate">
      <ReactTypingEffect
        className={`font-game text-2xl  text-center font-bold ${
          code === "Repeat" ? "text-red-500" : ""
        }`}
        // text={[", I am a full"]}
        text={[`${text}`, `${code}`]}
        speed={250}
        eraseSpeed={50}
        cursorRenderer={(cursor) => (
          <h1 className={` ${code === "Repeat" ? "font-help font-light" : ""}`}>
            {cursor}
          </h1>
        )}
      />
    </div>
  );
}

export default Typer;
