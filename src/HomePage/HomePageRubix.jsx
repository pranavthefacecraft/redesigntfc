import * as THREE from 'three';
import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useScroll, useGLTF, useAnimations } from '@react-three/drei';

export default function Rubix({ visible, ...props }) {
  const group = useRef();
  const { camera, width, height } = useThree();
  const { nodes, materials, animations } = useGLTF('./Homepage/Models/texturecube.glb');
  const { actions, names } = useAnimations(animations, group);
  const [isHovered, setIsHovered] = useState(false);
  const timelineref = useRef();
  const scroll = useScroll();

  const isClicked = props.isCubeClicked;

  const isMobile = width < 5.224;
  const isDesktop = width > 13.061;

  // Function to create a material with transparency
  const createMaterial = (texturePath) => {
    const texture = useLoader(THREE.TextureLoader, texturePath);
    texture.flipY = false;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;

    const material = new THREE.MeshBasicMaterial({ map: texture });
    material.transparent = true;
    return material;
  };

  // Creating materials
  const cornermaterial = createMaterial('./Homepage/Images/Cubetextures/corner_1.jpg');
  const cornermaterialtwo = createMaterial('./Homepage/Images/Cubetextures/corner_2.jpg');
  const darkpinktexturematerialone = createMaterial('./Homepage/Images/Cubetextures/dark_purple_texture_one.jpg');
  const darkpinktexturematerialtwo = createMaterial('./Homepage/Images/Cubetextures/dark_purple_texture_two.jpg');
  const darkpinktexturematerialthree = createMaterial('./Homepage/Images/Cubetextures/dark_purple_texture_three.jpg');
  const lightpinktexturematerialone = createMaterial('./Homepage/Images/Cubetextures/light_purple_texture_one.jpg');
  const lightpinktexturematerialtwo = createMaterial('./Homepage/Images/Cubetextures/light_purple_texture_two.jpg');
  const lightpinktexturematerialthree = createMaterial('./Homepage/Images/Cubetextures/light_purple_texture_three.jpg');
  const lightpinkgeneral = createMaterial('./Homepage/Images/Cubetextures/light_purple_sides.jpg');
  const darkpinkgeneral = createMaterial('./Homepage/Images/Cubetextures/dark_purple_sides.jpg');

  const allMaterials = [
    cornermaterial,
    cornermaterialtwo,
    darkpinktexturematerialone,
    darkpinktexturematerialtwo,
    darkpinktexturematerialthree,
    lightpinktexturematerialone,
    lightpinktexturematerialtwo,
    lightpinktexturematerialthree,
    lightpinkgeneral,
    darkpinkgeneral,
  ];

  // Handle animation on hover without stopping GSAP
  useEffect(() => {
    if (isHovered && !isClicked) {
      actions[names[0]].reset().fadeIn(0.5).play();
      actions[names[0]].timeScale = 0.96;
    } else {
      actions[names[0]].fadeOut(0.5);
    }
  }, [isHovered, actions, names, isClicked]);

  // Merged useLayoutEffect
  useLayoutEffect(() => {
    timelineref.current = gsap.timeline({ paused: true });

    allMaterials.forEach((material) => {
      material.opacity = 0;
    });

    // Animate opacity from 0 to 1 for all materials
    timelineref.current.to(
      allMaterials,
      {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 0.3,
      },
      "10"
    );

    // Sync timeline with initial scroll position
    timelineref.current.seek(scroll.offset * 0.9 * timelineref.current.duration());

    // Handle camera zoom and group position animation when isClicked is true
    if (isClicked && group.current) {
      gsap.to(camera, {
        zoom: 300,
        duration: 3.0,
        delay: 2.0,
        ease: 'back.inOut',
        onUpdate: () => camera.updateProjectionMatrix(),
      });

      gsap.to(group.current.position, {
        x: -1.5,
        y: -0.8,
        z: -0.2,
        duration: 2.8,
        delay: 2.1,
        ease: 'power4.inOut',
      });


    }

    // Cleanup function
    return () => {
      if (timelineref.current) {
        timelineref.current.kill();
      }
    };
  }, [isClicked, height, isHovered, camera, scroll, allMaterials]);

  useFrame(() => {
    if (timelineref.current) {
      timelineref.current.seek(scroll.offset * timelineref.current.duration());
    }
  });

  return (
    <>
      {/* Rubix */}
      <group ref={group} 
      dispose={null}
      {...props}

      scale={ isDesktop? 0.5: 0.46 }
      rotation={[ -Math.PI/50,Math.PI/52,-Math.PI/11 ]}
      position={[ isDesktop ? -0.2 : -1.40,isDesktop ? -1.56: -1.93,isDesktop ? -4.7 : -4.7 ]}

      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)} 
      >
      <group name="Scene">
        <group name="Cube_3" position={[-2.016, 0.5, 0.001]} scale={0.5}>
          <mesh
            name="Cube028"
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube028_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube028_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube028_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube028_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_2" position={[-1.006, 0.5, 0.001]} scale={0.5}>
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={darkpinktexturematerialtwo}
          />
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_1" position={[0.004, 0.5, 0.001]} scale={0.5}>
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={cornermaterial}
          />
          <mesh
            name="Cube002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_3001" position={[-2.016, 0.5, -1.009]} scale={0.5}>
          <mesh
            name="Cube003"
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_2001" position={[-1.006, 0.5, -1.009]} scale={0.5}>
          <mesh
            name="Cube004"
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_1001" position={[0.004, 0.5, -1.009]} scale={0.5}>
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={lightpinkgeneral}
          />
          <mesh
            name="Cube005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_3002" position={[-2.016, 0.5, -2.019]} scale={0.5}>
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube006_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_2002" position={[-1.006, 0.5, -2.019]} scale={0.5}>
          <mesh
            name="Cube007"
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube007_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube007_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube007_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube007_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_1002" position={[0.004, 0.5, -2.019]} scale={0.5}>
          <mesh
            name="Cube008"
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={lightpinktexturematerialthree}
          />
          <mesh
            name="Cube008_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube008_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_3003" position={[-2.016, 1.51, 0.001]} scale={0.5}>
          <mesh
            name="Cube009"
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube009_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube009_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube009_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_2003" position={[-1.006, 1.51, 0.001]} scale={0.5}>
          <mesh
            name="Cube010"
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={darkpinktexturematerialone}
          />
          <mesh
            name="Cube010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube010_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_1003" position={[0.004, 1.51, 0.001]} scale={0.5}>
          <mesh
            name="Cube011"
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={lightpinkgeneral}
          />
          <mesh
            name="Cube011_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube011_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_3004" position={[-2.016, 1.51, -1.009]} scale={0.5}>
          <mesh
            name="Cube012"
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_2004" position={[-1.006, 1.51, -1.009]} scale={0.5}>
          <mesh
            name="Cube013"
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_1004" position={[0.004, 1.51, -1.009]} scale={0.5}>
          <mesh
            name="Cube014"
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={lightpinktexturematerialone}
          />
          <mesh
            name="Cube014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube014_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_3005" position={[-2.016, 1.51, -2.019]} scale={0.5}>
          <mesh
            name="Cube015"
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube015_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube015_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_2005" position={[-1.006, 1.51, -2.019]} scale={0.5}>
          <mesh
            name="Cube016"
            castShadow
            receiveShadow
            geometry={nodes.Cube016.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube016_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube016_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_1005" position={[0.004, 1.51, -2.019]} scale={0.5}>
          <mesh
            name="Cube017"
            castShadow
            receiveShadow
            geometry={nodes.Cube017.geometry}
            material={lightpinktexturematerialtwo}
          />
          <mesh
            name="Cube017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_3006" position={[-2.016, 2.52, 0.001]} scale={0.5}>
          <mesh
            name="Cube018"
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={darkpinktexturematerialthree}
          />
          <mesh
            name="Cube018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_2006" position={[-1.006, 2.52, 0.001]} scale={0.5}>
          <mesh
            name="Cube019"
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube019_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube019_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube019_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube019_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_1006" position={[0.004, 2.52, 0.001]} scale={0.5}>
          <mesh
            name="Cube020"
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={cornermaterialtwo}
          />
          <mesh
            name="Cube020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_3007" position={[-2.016, 2.52, -1.009]} scale={0.5}>
          <mesh
            name="Cube021"
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube021_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube021_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_2007" position={[-1.006, 2.52, -1.009]} scale={0.5}>
          <mesh
            name="Cube022"
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube022_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube022_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_1007" position={[0.004, 2.52, -1.009]} scale={0.5}>
          <mesh
            name="Cube023"
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={lightpinkgeneral}
          />
          <mesh
            name="Cube023_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube023_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_3008" position={[-2.016, 2.52, -2.019]} scale={0.5}>
          <mesh
            name="Cube024"
            castShadow
            receiveShadow
            geometry={nodes.Cube024.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube024_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube024_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_2008" position={[-1.006, 2.52, -2.019]} scale={0.5}>
          <mesh
            name="Cube025"
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube025_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube025_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube025_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube025_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
        <group name="Cube_1008" position={[0.004, 2.52, -2.019]} scale={0.5}>
          <mesh
            name="Cube026"
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={lightpinkgeneral}
          />
          <mesh
            name="Cube026_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube026_1.geometry}
            material={darkpinkgeneral}
          />
          <mesh
            name="Cube026_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube026_2.geometry}
            material={darkpinkgeneral}
          />
        </group>
      </group>
    </group>

      
    </>
  );
}

useGLTF.preload('./Homepage/Models/texturecube.glb');