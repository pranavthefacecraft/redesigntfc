import * as THREE from 'three'
import React, { useRef, useEffect, Suspense } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Anne } from '../Elements/LastSection/Anne'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export function Sean(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./AboutusPage/Models/sean.glb')
  const {width, height, viewport} = useThree((state) => state.viewport) 

  const texture = new THREE.TextureLoader().load('./AboutusPage/Images/demo.png');
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = true;

  const lightpurplematerial = new THREE.MeshBasicMaterial({ map: texture });

  const isMobile = width < 5.224;
  const isDesktop = width > 13.061;


  return (
    <group ref={group} {...props} dispose={null} rotation={[0,-Math.PI/2,0]}
     position={[ isDesktop ? -1.3 : -1.3,isDesktop ? -9.8: -12.8,isDesktop ? 0: 0 ]}
      >
      <group name="Scene">
        <mesh
          name="Island_big"
          castShadow
          receiveShadow
          geometry={nodes.Island_big.geometry}
          material={materials.Island_big}
          position={[0.138, -1.175, -1.208]}
          rotation={[0, 0.018, 0]}
        />
        <group
          name="Rest"
          position={[-0.087, 0.799, -1.377]}
          rotation={[0, 0.018, Math.PI / 2]}
          scale={[2.015, 0.103, 3.426]}>
          <mesh
            name="����������1_Mat6_0"
            castShadow
            receiveShadow
            geometry={nodes['����������1_Mat6_0'].geometry}
            material={materials['Mat.6']}
          >
             
            </mesh>
          <mesh
            name="����������1_Mat6_0_1"
            castShadow
            receiveShadow
            geometry={nodes['����������1_Mat6_0_1'].geometry}
            material={materials.beliy_mat}
          >
            <meshStandardMaterial color={'#DDA853'}/>
            </mesh>
          <mesh
            name="����������1_Mat6_0_2"
            castShadow
            receiveShadow
            geometry={nodes['����������1_Mat6_0_2'].geometry}
            material={materials['Mat.4']}
          />
          <mesh
            name="����������1_Mat6_0_3"
            castShadow
            receiveShadow
            geometry={nodes['����������1_Mat6_0_3'].geometry}
            material={materials['material.001']}
          />
          <mesh
            name="����������1_Mat6_0_4"
            castShadow
            receiveShadow
            geometry={nodes['����������1_Mat6_0_4'].geometry}
            material={materials['Mat.5']}
          />
          <mesh
            name="����������1_Mat6_0_5"
            castShadow
            receiveShadow
            geometry={nodes['����������1_Mat6_0_5'].geometry}
            material={materials.pCube31__0}
          />
          <mesh
            name="����������1_Mat6_0_6"
            castShadow
            receiveShadow
            geometry={nodes['����������1_Mat6_0_6'].geometry}
            material={materials['Mat.2']}
          />
          <mesh
            name="����������1_Mat6_0_7"
            castShadow
            receiveShadow
            geometry={nodes['����������1_Mat6_0_7'].geometry}
            material={materials['Mat.1']}
          />
          <mesh
            name="����������1_Mat6_0_8"
            castShadow
            receiveShadow
            geometry={nodes['����������1_Mat6_0_8'].geometry}
            material={materials['Mat.3']}
          />
          <mesh
            name="����������1_Mat6_0_9"
            castShadow
            receiveShadow
            geometry={nodes['����������1_Mat6_0_9'].geometry}
            material={materials['Mat.8']}
          />
          <mesh
            name="����������1_Mat6_0_10"
            castShadow
            receiveShadow
            geometry={nodes['����������1_Mat6_0_10'].geometry}
            material={materials['Mat.9']}
          />
        </group>
        <mesh
          name="Screen"
          castShadow
          receiveShadow
          geometry={nodes.Screen.geometry}
          material={lightpurplematerial}
          position={[-0.087, 0.799, -1.377]}
          rotation={[0, 0.018, Math.PI / 2]}
          scale={[2.015, 0.103, 3.426]}
        >
        {/* <Suspense fallback={null}>
          <Html
          distanceFactor={1.17}
          >
            <iframe className='w-[125em] h-[73em] fixed top-[-36.5em] left-[-62.8em]' src='https://thefacecraft.com/en/home/'/>
          </Html>
        </Suspense>     */}
          </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./AboutusPage/Models/sean.glb')
