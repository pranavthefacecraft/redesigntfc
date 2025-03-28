
import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Anne(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./AboutusPage/Models/WAVING.glb')
  const { actions, names } = useAnimations(animations, group)
  

  useEffect(() => {

    actions[names[0]].reset().fadeIn(0.5).play();
    actions[names[0]].timeScale = 0.96;
     
    actions[names[1]].reset().fadeIn(0.5).play();
    actions[names[1]].timeScale = 0.96;
    
  }, [actions, names]);

  return (
    <group ref={group}
    {...props}
    dispose={null}
    position={[-1.7,-13.8,2]}
    scale={1.0}
    >
      <group name="Scene">
        <group name="SEAN">
          <skinnedMesh
            name="BODY"
            geometry={nodes.BODY.geometry}
            material={materials['SSS Skin Shader']}
            skeleton={nodes.BODY.skeleton}
          >
            <meshStandardMaterial color={'#FFDDAB'}/>
            </skinnedMesh>
          <skinnedMesh
            name="Button_1"
            geometry={nodes.Button_1.geometry}
            material={materials['Top.001']}
            skeleton={nodes.Button_1.skeleton}
          >
            <meshStandardMaterial color={'black'}/>
            </skinnedMesh>
          <skinnedMesh
            name="Button_2"
            geometry={nodes.Button_2.geometry}
            material={materials['Top.001']}
            skeleton={nodes.Button_2.skeleton}
          >
             <meshStandardMaterial color={'black'}/>
            </skinnedMesh>
          <group name="FC_Web_Characters" />
          <skinnedMesh
            name="FOOT_L"
            geometry={nodes.FOOT_L.geometry}
            material={materials.Shoes}
            skeleton={nodes.FOOT_L.skeleton}
          >
             <meshStandardMaterial color={'black'}/>
            </skinnedMesh>
          <skinnedMesh
            name="FOOT_R"
            geometry={nodes.FOOT_R.geometry}
            material={materials.Shoes}
            skeleton={nodes.FOOT_R.skeleton}
          >
             <meshStandardMaterial color={'black'}/>
            </skinnedMesh>
          <skinnedMesh
            name="Pants"
            geometry={nodes.Pants.geometry}
            material={materials.Pants}
            skeleton={nodes.Pants.skeleton}
          >
             <meshStandardMaterial color={'#DDA853'}/>
            </skinnedMesh>
          <skinnedMesh
            name="TOP_Shirt"
            geometry={nodes.TOP_Shirt.geometry}
            material={materials.Top}
            skeleton={nodes.TOP_Shirt.skeleton}
          >
            <meshStandardMaterial color={'#210F37'}/>
            </skinnedMesh>
          <primitive object={nodes.root} />
          <primitive object={nodes['MCH-torsoparent']} />
          <primitive object={nodes['MCH-hand_ikparentL']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL']} />
          <primitive object={nodes['MCH-hand_ikparentR']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR']} />
          <primitive object={nodes['MCH-foot_ikparentL']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL']} />
          <primitive object={nodes['MCH-foot_ikparentR']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./AboutusPage/Models/WAVING.glb')
