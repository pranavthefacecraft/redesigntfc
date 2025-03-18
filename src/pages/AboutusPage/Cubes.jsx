import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bvh, Instances, Instance, OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

import { data } from './store'

// export default function App() {
//   const { range } = useControls({ range: { value: 100, min: 0, max: 300, step: 10 } })
//   return (
//     <Canvas camera={{ position: [0, 0, 20], fov: 16 }}>
//       <ambientLight intensity={0.5 * Math.PI} />
//       <directionalLight intensity={0.3} position={[5, 25, 20]} />
//       <Bvh firstHitOnly>
//         <Shoes data={data} range={range} />
//       </Bvh>
//       <Environment preset="city" />
//     </Canvas>
//   )
// }

export function Shoes({ data, range }) {
  const boxgeometry = new THREE.BoxGeometry(2,2,2)
  const material = new THREE.MeshStandardMaterial({ color: 'yellow'});
  return (
    <>
     <ambientLight intensity={0.5 * Math.PI} />
     <directionalLight intensity={1.3} position={[5, 25, 20]} />
    <Instances range={range} material={material} geometry={boxgeometry}>
      {data.map((props, i) => (
        <Shoe key={i} {...props} />
      ))}
    </Instances>
    </>
  )
}

function Shoe({ random, color = new THREE.Color(), ...props }) {
  const ref = useRef()
  const [hovered, setHover] = useState(false)
  useFrame((state) => {
    const t = state.clock.getElapsedTime() + random * 10000
    ref.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
    ref.current.position.y = Math.sin(t / 1.5) / 2
    ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, hovered ? 1.4 : 1, 0.1)
  })
  return (
    <group {...props}>
      <Instance ref={ref} onPointerOver={(e) => (e.stopPropagation(), setHover(true))} onPointerOut={(e) => setHover(false)} />
    </group>
  )
}
