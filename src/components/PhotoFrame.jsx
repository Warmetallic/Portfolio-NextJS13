"use client";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, DoubleSide, MeshStandardMaterial } from "three";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

function PhotoFrame(props) {
  const texture = useLoader(TextureLoader, "/photo.jpg");

  return (
    <mesh scale={0.25} position={[0, 0, 0]} castShadow>
      <planeBufferGeometry args={[10, 10]} />
      <MeshDistortMaterial
        map={texture}
        distort={0.25}
        speed={1}
        attach="material"
        side={DoubleSide}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        rotateSpeed={1}
      />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
    </mesh>
  );
}

export default PhotoFrame;
