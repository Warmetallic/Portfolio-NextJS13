"use client";
import Image from "next/image";
import Typer from "@/components/Typer";
import Test from "@/components/Test";
import PhotoFrame from "@/components/PhotoFrame";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-44">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto justify-center items-center text-sm font-mono">
        <div className="min-w-max">
          <Typer />
          <p>I am about to play some bungo</p>
        </div>

        <div className="min-w-max sm:w-64 sm:h-64 lg:w-80 lg:h-80 border-2 border-red-300 rounded-lg overflow-hidden shadow-lg shadow-red-700">
          <div className="relative h-full">
            <Canvas camera={{ fov: 25, position: [0, 0, 5] }}>
              <PhotoFrame className="w-full h-full" />
            </Canvas>
          </div>
        </div>
      </div>
    </main>
  );
}
