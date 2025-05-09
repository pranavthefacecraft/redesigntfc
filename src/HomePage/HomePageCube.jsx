import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

import { lightpurple_bni, lightpurple_E, lightpurple_Rafw, lightpurple_tree, lightpurple_en } from './CubeMaterial';

export function Cube(props) {
  const group = useRef();
  const { width } = useThree((state) => state.viewport);
  const { nodes, materials, animations } = useGLTF('./Homepage/Models/Rubix.glb');
  const { actions, names } = useAnimations(animations, group);
  const [isHovered, setIsHovered] = useState(false);

  const isClicked = props.isClicked;

  
  const isMobile = width < 5.224;
  const isDesktop = width > 13.061;


  useEffect(() => {
    if (isClicked && group.current) {
      gsap.to(group.current.position, {
        x: -1.5,
        y: -0.8,
        z: -0.2,
        duration: 2, 
        delay: 4,
        ease: 'power4.inOut', 
      });
    }
  }, [isClicked]); 

  // Hover animation logic
  useEffect(() => {
    if (!isClicked && isHovered) {
      actions[names[0]].reset().fadeIn(0.5).play();
      actions[names[0]].timeScale = 0.96;
    } else {
      actions[names[0]].fadeOut(0.5);
    }
  }, [isHovered, isClicked, actions, names]);

  return (
    <>
    <group ref={group} {...props} dispose={null}
    
     scale={ isDesktop? 0.5: 0.46 }
     rotation={[ -Math.PI/50,Math.PI/52,-Math.PI/11 ]}
     position={[ isDesktop ? -0.7 : -1.85,isDesktop ? -1.60: -1.95,isDesktop ? -4.7 : -4.7 ]}

     onPointerOver={() => setIsHovered(true)}
     onPointerOut={() => setIsHovered(false)} 

    >
      <group name="Scene">
        <group name="Rubix" position={[0.5, 0.5, -0.5]} scale={0.5}>
          <mesh
            name="Cube030"
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube030_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube030_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube030_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube030_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube030_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube030_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix001" position={[1.51, 0.5, -0.5]} scale={0.5}>
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube002_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix002" position={[2.52, 0.5, -0.5]} scale={0.5}>
          <mesh
            name="Cube003"
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_2.geometry}
            material={lightpurple_bni}
          />
          <mesh
            name="Cube003_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix003" position={[0.5, 0.5, -1.51]} scale={0.5}>
          <mesh
            name="Cube004"
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube004_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix004" position={[1.51, 0.5, -1.51]} scale={0.5}>
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube005_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix005" position={[2.52, 0.5, -1.51]} scale={0.5}>
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube006_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube006_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix006" position={[0.5, 0.5, -2.52]} scale={0.5}>
          <mesh
            name="Cube007"
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube007_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube007_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube007_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube007_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube007_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube007_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix007" position={[1.51, 0.5, -2.52]} scale={0.5}>
          <mesh
            name="Cube008"
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube008_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube008_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube008_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix008" position={[2.52, 0.5, -2.52]} scale={0.5}>
          <mesh
            name="Cube009"
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube009_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube009_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube009_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube009_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube009_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix009" position={[0.5, 1.51, -0.5]} scale={0.5}>
          <mesh
            name="Cube010"
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube010_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube010_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix010" position={[1.51, 1.51, -0.5]} scale={0.5}>
          <mesh
            name="Cube011"
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube011_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube011_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube011_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix011" position={[2.52, 1.51, -0.5]} scale={0.5}>
          <mesh
            name="Cube012"
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube012_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix012" position={[0.5, 1.51, -1.51]} scale={0.5}>
          <mesh
            name="Cube013"
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube013_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix013" position={[1.51, 1.51, -1.51]} scale={0.5}>
          <mesh
            name="Cube014"
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube014_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube014_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix014" position={[2.52, 1.51, -1.51]} scale={0.5}>
          <mesh
            name="Cube015"
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube015_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube015_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube015_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix015" position={[0.5, 1.51, -2.52]} scale={0.5}>
          <mesh
            name="Cube016"
            castShadow
            receiveShadow
            geometry={nodes.Cube016.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube016_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube016_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube016_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix016" position={[1.51, 1.51, -2.52]} scale={0.5}>
          <mesh
            name="Cube017"
            castShadow
            receiveShadow
            geometry={nodes.Cube017.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube017_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix017" position={[2.52, 1.51, -2.52]} scale={0.5}>
          <mesh
            name="Cube018"
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_2.geometry}
            material={lightpurple_tree}
          />
          <mesh
            name="Cube018_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix018" position={[0.5, 2.518, -0.5]} scale={0.5}>
          <mesh
            name="Cube019"
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube019_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube019_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube019_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube019_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube019_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube019_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix019" position={[1.51, 2.52, -0.5]} scale={0.5}>
          <mesh
            name="Cube020"
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube020_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix020" position={[2.52, 2.518, -0.5]} scale={0.5}>
          <mesh
            name="Cube021"
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube021_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube021_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_2.geometry}
            material={lightpurple_Rafw}
          />
          <mesh
            name="Cube021_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix021" position={[0.5, 2.52, -1.51]} scale={0.5}>
          <mesh
            name="Cube022"
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube022_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube022_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube022_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix022" position={[1.51, 2.518, -1.51]} scale={0.5}>
          <mesh
            name="Cube023"
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube023_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube023_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube023_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix023" position={[2.52, 2.52, -1.51]} scale={0.5}>
          <mesh
            name="Cube024"
            castShadow
            receiveShadow
            geometry={nodes.Cube024.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube024_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube024_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube024_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix024" position={[0.5, 2.518, -2.52]} scale={0.5}>
          <mesh
            name="Cube025"
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube025_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube025_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube025_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube025_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube025_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube025_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix025" position={[1.51, 2.52, -2.52]} scale={0.5}>
          <mesh
            name="Cube026"
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube026_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube026_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube026_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube026_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube026_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube026_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
        <group name="Rubix026" position={[2.52, 2.518, -2.52]} scale={0.5}>
          <mesh
            name="Cube027"
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube027_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube027_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_2.geometry}
            material={materials.LightPurple}
          />
          <mesh
            name="Cube027_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_3.geometry}
            material={materials.Darkpurple}
          />
        </group>
      </group>
    </group>
  
    </>
  )
}

useGLTF.preload('./Homepage/Models/Rubix.glb')
