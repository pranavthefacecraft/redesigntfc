
import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Anne(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./AboutusPage/Models/standing.glb')
  const { actions, names } = useAnimations(animations, group)
  

  useEffect(() => {

    actions[names[0]].reset().fadeIn(0.5).play();
    actions[names[0]].timeScale = 0.96;
     
 

  }, [actions, names]);

  return (
    <group ref={group}
    {...props}
    dispose={null}
    position={[-1.5,-13.8,2]}
    scale={2.0}
    >
     <group name="Scene">
        <group name="rig_CharRoot" scale={0.005}>
          <group name="bip" position={[0, 92.405, -2.69]} rotation={[Math.PI, -1.551, Math.PI]}>
            <group name="lpMaleG">
              <skinnedMesh
                name="Mesh"
                geometry={nodes.Mesh.geometry}
                material={materials.White}
                skeleton={nodes.Mesh.skeleton}
              >
                <meshStandardMaterial color={'#FFB4A2'}/>
                </skinnedMesh>
              <skinnedMesh
                name="Mesh_1"
                geometry={nodes.Mesh_1.geometry}
                material={materials.Purple}
                skeleton={nodes.Mesh_1.skeleton}
              >
                <meshStandardMaterial color={'#DCA06D'}/>
                </skinnedMesh>
              <skinnedMesh
                name="Mesh_2"
                geometry={nodes.Mesh_2.geometry}
                material={materials.White}
                skeleton={nodes.Mesh_2.skeleton}
              >
                <meshStandardMaterial color={'#FFB4A2'}/>
                </skinnedMesh>
              <skinnedMesh
                name="Mesh_3"
                geometry={nodes.Mesh_3.geometry}
                material={materials.White}
                skeleton={nodes.Mesh_3.skeleton}
              >
                <meshStandardMaterial color={'#FFB4A2'}/>
                </skinnedMesh>
              <skinnedMesh
                name="Mesh_4"
                geometry={nodes.Mesh_4.geometry}
                material={materials.Shirt}
                skeleton={nodes.Mesh_4.skeleton}
              />
              <skinnedMesh
                name="Mesh_5"
                geometry={nodes.Mesh_5.geometry}
                material={materials.Skin}
                skeleton={nodes.Mesh_5.skeleton}
              >
                 <meshStandardMaterial color={'#FFB4A2'}/>
                </skinnedMesh>
              <skinnedMesh
                name="Mesh_6"
                geometry={nodes.Mesh_6.geometry}
                material={materials.Purple}
                skeleton={nodes.Mesh_6.skeleton}
              >
                <meshStandardMaterial color={'#3B3030'}/> 
                </skinnedMesh>
            </group>
            <primitive object={nodes.bip_Pelvis} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./AboutusPage/Models/standing.glb')
