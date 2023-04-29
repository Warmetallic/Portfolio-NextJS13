"use client";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

function Typer() {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl">Welcome</h1>
      <ReactTypingEffect
        className="text-xl"
        text={[", I am a full"]}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
      />
    </div>
  );
}

export default Typer;
