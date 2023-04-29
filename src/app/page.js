"use client";
import Image from "next/image";
import Typer from "@/components/Typer";
import Test from "@/components/Test";
import PhotoFrame from "@/components/PhotoFrame";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-44 space-y-32 overflow-y-scroll">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10">
        <div className="min-w-max z-10">
          <Typer />
          <p>I am about to play some bungo</p>
        </div>

        <div className="w-72 h-72 border-2 border-red-300 rounded-lg overflow-hidden shadow-lg shadow-red-700 z-10">
          <div className="relative h-full">
            <Canvas
              style={{ pointerEvents: "none" }}
              camera={{ fov: 25, position: [0, 0, 5] }}
            >
              <PhotoFrame className="w-full h-full" />
            </Canvas>
          </div>
        </div>
      </div>
      <div className="flex z-10 space-x-16 lg:space-x-32">
        <button className="w-28 h-12 bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg hover:border-2 hover:border-red-300 hover:shadow-red-700 font-bold">
          CV
        </button>
        <button className="w-28 h-12 bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg hover:border-2 hover:border-red-300 hover:shadow-red-700 font-bold">
          Contact
        </button>
      </div>
    </main>
  );
}
