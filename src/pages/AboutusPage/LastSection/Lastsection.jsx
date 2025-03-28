// FooterSection.js (updated)
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useEffect } from "react"
import { useThree } from "@react-three/fiber"

import { Anne } from "../Elements/LastSection/Anne";


// Add a simple scene component if you haven't
function Main() {
  
  return (
    <>
    <Anne/>
    </>
  )
}

export default function LastSection() {
  return (
    <div className="w-full h-full relative">
      <Suspense fallback={null}>
        <Canvas
          className="w-full h-full"
          shadows
          gl={{ alpha: true, stencil: true, antialias: true }}
          camera={{ position: [0, 0, 20], fov: 25, near: 0.1, far: 1000 }}
          dpr={[1, 2]}
        >
          <directionalLight color="#ffffff" intensity={3} position={[1, 1, 0]} />  
          <ambientLight intensity={2.5} />
          <Main />
        </Canvas>
      </Suspense>
    </div>
  )
}