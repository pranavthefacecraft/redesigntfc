import * as THREE from 'three'
import React, { useRef } from 'react'
import { useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'


export function IslandOne(props) {
  const { nodes, materials } = useGLTF('./AboutusPage/Models/islandonetransformed.glb')
  const { width, height, viewport } = useThree((state) => state.viewport);

  const greyscreen = new THREE.MeshBasicMaterial({ color: '#848494', side: THREE.DoubleSide });
  const button = new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide });
  const lightpurple = new THREE.MeshBasicMaterial({ color: '#bcb4ff', side: THREE.DoubleSide });
  const darkpurple = new THREE.MeshBasicMaterial({ color: '#8278fb', side: THREE.DoubleSide });

  return (
    <group {...props} position={[width * 0.6,-height * 3.5,0]} scale={[1.3,1.3,1.3]} dispose={null}>
      <mesh
        name="Cube003"
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={lightpurple}
      />
      <mesh
        name="Cube003_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_1.geometry}
        material={greyscreen}
      />
      <mesh
        name="Cube003_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_2.geometry}
        material={button}
      />
      <mesh
        name="BSurfaceMesh"
        castShadow
        receiveShadow
        geometry={nodes.BSurfaceMesh.geometry}
        material={darkpurple}
      />
      <mesh
        name="BSurfaceMesh_1"
        castShadow
        receiveShadow
        geometry={nodes.BSurfaceMesh_1.geometry}
        material={greyscreen}
      />
      <mesh
        name="BSurfaceMesh_2"
        castShadow
        receiveShadow
        geometry={nodes.BSurfaceMesh_2.geometry}
        material={greyscreen}
      />
      <mesh
        name="BSurfaceMesh_3"
        castShadow
        receiveShadow
        geometry={nodes.BSurfaceMesh_3.geometry}
        material={greyscreen}
      />
      <mesh
        name="BSurfaceMesh_4"
        castShadow
        receiveShadow
        geometry={nodes.BSurfaceMesh_4.geometry}
        material={greyscreen}
      />
    </group>
  );
}

useGLTF.preload('./AboutusPage/Models/Islandone.glb')