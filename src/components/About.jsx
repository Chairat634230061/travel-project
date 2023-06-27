import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { styles } from "../styles";

const About = () => {
  return (
    <section className="h-screen bg-[#181818] overflow-y-auto scrollbar-none scroll-snap-align-center py-5">
    
            <img className="tourist" src="src/assets/tourist1.png" alt="tourist" />
      <Canvas className="Canvas">
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#3d1c56"
              attach="material"
              distort={0.5}
              speed={1}
            />
          </Sphere>
        </Suspense>
      </Canvas>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Placeholder for additional content */}
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Dooy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Welcome to my world
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
