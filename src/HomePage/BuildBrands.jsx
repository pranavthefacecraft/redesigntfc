import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

import { DissolveMaterial } from '../DissolveMaterial'

export function BuildBrands({ visible, ...props }) {

  const {width, height, viewport} = useThree((state) => state.viewport)  
  const { nodes, materials } = useGLTF('./Homepage/Models/Text.glb')


  const black = new THREE.MeshToonMaterial({color: '#000000'});
  const lightpurple = new THREE.MeshBasicMaterial({color: '#bf1736'});
  const white = new THREE.MeshToonMaterial({color: '#ffffff'});
  const darkpurple = new THREE.MeshBasicMaterial({color: '#910a00'})

  // BreakPoint Conditions
  const isMobile = width < 5.224;
  const isDesktop = width > 13.061;

  // Scaling responsiveness
  const textScalingFactor = Math.min( Math.max( window.innerWidth / 1920, 0.2 ), 2.5 );
  
  // Positon responsiveness
  const textPositionFactorX = window.innerWidth / 1920;
  const desktopFactorX = textPositionFactorX - 1.0;
  const laptopFactorX = textPositionFactorX - 0.2;
  
  const textPositionFactorZ = window.innerHeight / 1080;
  const desktopFactorZ = textPositionFactorZ - 2.0;
  const laptopFactorZ = textPositionFactorZ - 1.9;

  return (
    <group {...props} dispose={null} 
    rotation={[1.66, -0.22, -1.54]}

    scale={[
     isDesktop ? (textScalingFactor + 1.35) : (textScalingFactor + 1.15),
     isDesktop ? (textScalingFactor + 1.65) : (textScalingFactor + 1.35),
     isDesktop ? (textScalingFactor + 1.6) : (textScalingFactor + 1.4)
    ]}

    position={[
     (isMobile ? textPositionFactorX - 0.1: (isDesktop ? desktopFactorX + 1.5: laptopFactorX + 0.5)),
     (isMobile ? textPositionFactorZ - 1.5: (isDesktop ? desktopFactorZ + 0: laptopFactorZ + 0.1)),
      isDesktop? 0.5 : 0.5
    ]}
    
    >
    <group name="Text"
    >
      <mesh
        name="Text001"
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={black}
      >
         
        <DissolveMaterial
          baseMaterial={black}
          color="#ffffff"
          visible={visible}
        />

      </mesh>
      <mesh
        name="Text001_1"
        castShadow
        receiveShadow
        geometry={nodes.Text001_1.geometry}
        material={white}
      >

        <DissolveMaterial
          baseMaterial={white}
          color="#ffffff"
          visible={visible}
        />

      </mesh>
      <mesh
        name="Text001_2"
        castShadow
        receiveShadow
        geometry={nodes.Text001_2.geometry}
        material={lightpurple}
      >

        <DissolveMaterial
          baseMaterial={lightpurple}
          color="#ffffff"
          visible={visible}
        />

      </mesh>
      <mesh
        name="Text001_3"
        castShadow
        receiveShadow
        geometry={nodes.Text001_3.geometry}
        material={black}
      >
      </mesh>
    </group>
  </group>
  )
}

useGLTF.preload('./Homepage/Models/Text.glb')
