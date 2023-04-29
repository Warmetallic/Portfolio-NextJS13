"use client";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function Threebg() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-screen h-screen fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Canvas
          style={{ pointerEvents: "none" }}
          camera={{ fov: 25, position: [5, 5, 5] }}
        >
          <Suspense fallback={null}>
            <OrbitControls
              enableZoom={false}
              enableRotate={false}
              enablePan={false}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 200, 200]} scale={2}>
              <MeshDistortMaterial
                color="#5e0e0e"
                attach="material"
                distort={2.5}
                speed={0.3}
              />
            </Sphere>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default Threebg;
