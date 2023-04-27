"use client";
import Image from "next/image";
import Typer from "@/components/Typer";
import Test from "@/components/Test";
import PhotoFrame from "@/components/PhotoFrame";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-44">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
        <div className="min-w-max z-10">
          <Typer />
          <p>I am about to play some bungo</p>
        </div>

        <div className="w-72 h-72 border-2 border-red-300 rounded-lg overflow-hidden shadow-lg shadow-red-700 z-10">
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
