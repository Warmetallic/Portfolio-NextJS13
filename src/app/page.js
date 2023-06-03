"use client";
import Image from "next/image";
import Typer from "@/components/Typer";
import Test from "@/components/Test";
import PhotoFrame from "@/components/PhotoFrame";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import DownloadButton from "@/components/DonwloadButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-44 space-y-32 overflow-y-scroll z-10">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10">
        <div className="w-80 z-10 p-2 h-80 space-y-2 text-center">
          <Typer text="Eat" code="01100101 01100001" />
          <Typer text="Code" code="01000011 01101111" />
          <Typer text="Sleep" code="01010011 01101100" />
          <Typer text="01010010 01100101" code="Repeat" />

          <p className="font-serif font-medium py-6">
            Thank you for taking the time to visit my portfolio. I invite you to
            explore my work and learn more about me.
          </p>
        </div>

        <div className="w-72 h-72 border-2 lg:mr-2 mb-4 border-red-300 rounded-lg overflow-hidden shadow-lg shadow-red-700 z-10 bg-black">
          <div className="relative h-72">
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
        <DownloadButton />
        <Link href="/contact">
          <button className="w-28 h-12 bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg hover:border-2 hover:border-red-300 hover:shadow-red-700 font-bold">
            <span className=" font-blade text-4xl text-red-700">K</span>ontaс
            <span className=" font-help text-red-700">T</span>
          </button>
        </Link>
      </div>
    </main>
  );
}
