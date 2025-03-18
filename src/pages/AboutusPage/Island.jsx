import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function IslandOne(props) {
  const { nodes, materials } = useGLTF('./AboutusPage/Models/Islandone.glb')
  const { width, height } = useThree((state) => state.viewport);


  const grey = new THREE.MeshBasicMaterial({ color: '#848494', side: THREE.DoubleSide })
  const lightpurple = new THREE.MeshBasicMaterial({ color: '#bcb4ff', side: THREE.DoubleSide });
  const darkpurple = new THREE.MeshBasicMaterial({ color: '#8278fb', side: THREE.DoubleSide });


  return (
    <group {...props} dispose={null} position={[width * 0.2,-height * 5.4,0]} scale={[1.3,1.3,1.3]} rotation={[0,1.0    ,0]}>
      <group name="Island_big" rotation={[0.076, -1.123, 0]}>
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={lightpurple}
        />
        <mesh
          name="Cube001_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={darkpurple}
        />
        <mesh
          name="Cube001_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={grey}
        />
      </group>
      <mesh
        name="Body"
        castShadow
        receiveShadow
        geometry={nodes.Body.geometry}
        material={grey}
        rotation={[0.076, -1.123, 0]}
      />
    </group>
  )
}

useGLTF.preload('/Islandone.glb')
