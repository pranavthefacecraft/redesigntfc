import './servicepage.css';
import { motion } from 'framer-motion';
import { useEffect, useRef, Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useScroll, Scroll, ScrollControls } from '@react-three/drei';
import gsap from 'gsap';

import { Islands } from './Islands';

export default function ServicePage() {
  
  return (
    <motion.div
      id="serviceintro"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="wrapper w-screen h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas
            shadows
            gl={{ alpha: true, stencil: true, antialias: true }}
            camera={{ position: [0, 0, 20], fov: 32, near: 0.1, far: 1000 }}
            dpr={[1, 2]}
          >
            <ScrollControls damping={0.5} pages={5}>

               <Scroll html>
            
               <div className="flex-col sectionhero absolute top-[12em] left-[6em] h-[100vh] w-screen pointer-events-none">
                 <div className="text-black text-left leading-[1.0em] text-[9em] w-screen">
                  SHAPING BRANDS
                 </div>
                 <div className=" text-black text-center leading-[1.0em] text-[9em] w-screen">
                  TELLING STORIES
                 </div>
               </div>

               </Scroll>  

               <Suspense fallback={null}>

                <Islands/>

               </Suspense>

            </ScrollControls>
          </Canvas>
        </Suspense>
      </div>
    </motion.div>
  );
}