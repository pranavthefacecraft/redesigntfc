import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Canvas } from "@react-three/fiber";
import { Cube } from "../HomePage/HomePageCube";

export default function ProjectPage() {


  return (
    <>
      <motion.div
        id="intro"
        initial={{ opacity: 0, y: 40  }} 
        animate={{ opacity: 1, y: 0  }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 2 }} 
      >     
        <Canvas
          shadows
          orthographic
          camera={{ zoom: 147, near: 0.0001, position: [60, 20, 50] }}
          gl={{ antialias: true }}
          dpr={[1, 2]}
        >
          <Cube />
        </Canvas>
      </motion.div>  

    </>
  );
}