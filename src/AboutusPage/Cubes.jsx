import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bvh, Instances, Instance, OrbitControls, Environment } from '@react-three/drei'

import { data } from './store'

// export default function App() {
//   const { range } = useControls({ range: { value: 100, min: 0, max: 300, step: 10 } })
//   return (
//     <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
//       <ambientLight intensity={0.5 * Math.PI} />
//       <directionalLight intensity={0.3} position={[5, 25, 20]} />
//       <Bvh firstHitOnly>
//         <Boxes data={data} range={range} />
//       </Bvh>
//       <Environment preset="city" />
//       <OrbitControls /> {/* Optional: Add controls for easier camera movement */}
//     </Canvas>
//   )
// }

export function Boxes({ data, range }) {
  // Create a box geometry and material
  const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5)
  const material = new THREE.MeshStandardMaterial({ color: '#645EAD' })

  return (
    <>
    <ambientLight intensity={1} />
    <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow shadow-mapSize={[512, 512]} />
    <directionalLight position={[0, 5, -4]} intensity={4} />
    <directionalLight position={[0, -15, -0]} intensity={4} color="white" />
    <Instances range={range} geometry={geometry} material={material}>
      {data.map((props, i) => (
        <Box key={i} {...props} />
      ))}
    </Instances>
    </>
  )
}

function Box({ random, color = new THREE.Color(), ...props }) {
  const ref = useRef()
  const [hovered, setHover] = useState(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime() + random * 10000
    ref.current.position.y = Math.sin(t / 1.5) / 4
    ref.current.position.x = Math.sin(t / 1.5) / 4
  })

  return (
    <group {...props}>
      <Instance ref={ref} />
    </group>
  )
}
