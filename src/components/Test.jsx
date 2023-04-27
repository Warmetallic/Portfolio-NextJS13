"use client";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Cube from "./Cube";
import PhotoFrame from "./PhotoFrame";

function Test() {
  return (
    <div className="flex">
      <div className="w-64 h-64">
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Suspense>
        </Canvas>
      </div>
      <div>
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
      </div>
      <div>
        <Canvas camera={{ fov: 25, position: [0, 0, 5] }}>
          <PhotoFrame className="shadow-sm shadow-red-600" />
        </Canvas>
      </div>
    </div>
  );
}

export default Test;
