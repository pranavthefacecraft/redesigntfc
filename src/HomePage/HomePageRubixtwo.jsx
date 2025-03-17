import * as THREE from 'three';
import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useScroll, useGLTF, useAnimations} from '@react-three/drei';

import { DissolveMaterial } from '../DissolveMaterial';

import { lightpurple_bni } from './CubeMaterial';

export function Le({ visible, ...props }) {
  const group = useRef()
  const { width, height, camera } = useThree();
  const { nodes, materials, animations } = useGLTF('./Homepage/Models/uchalo.glb')
  const { actions, names } = useAnimations(animations, group);
  const [isHovered, setIsHovered] = useState(false);

  const timelineref = useRef();
  const scroll = useScroll();
  const dissolveref = useRef();
  

  const isMobile = width < 5.224;
  const isDesktop = width > 13.061;

  const isClicked = props.isClicked;

  // Function to create a material with transparency
    const createMaterial = (texturePath) => {
      const texture = useLoader(THREE.TextureLoader, texturePath);
      texture.flipY = false;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.colorSpace = THREE.SRGBColorSpace;
  
      const material = new THREE.MeshBasicMaterial({ map: texture });
      material.side = THREE.DoubleSide
      material.transparent = true;
      return material;
    };
  
  // Creating materials
  const lightpinkgeneral = createMaterial('./Homepage/Images/Cubetextures/light_purple_sides.jpg');
  const lightpinkgeneraltwo = createMaterial('./Homepage/Images/Cubetextures/light_purple_sides.jpg');
  const cornermaterial = createMaterial('./Homepage/Images/Cubetextures/corner_1.jpg');
  const cornermaterialtwo = createMaterial('./Homepage/Images/Cubetextures/corner_2.jpg');
  const cornermaterialtwocopy = createMaterial('./Homepage/Images/Cubetextures/corner_2.jpg');
  const darkpinktexturematerialtwo = createMaterial('./Homepage/Images/Cubetextures/dark_purple_texture_two.jpg');
  const darkpinktexturematerialthree = createMaterial('./Homepage/Images/Cubetextures/dark_purple_texture_three.jpg');
  const lightpinktexturematerialone = createMaterial('./Homepage/Images/Cubetextures/light_purple_texture_one.jpg');
  const lightpinktexturematerialtwo = createMaterial('./Homepage/Images/Cubetextures/light_purple_texture_two.jpg');
  const lightpinktexturematerialthree = createMaterial('./Homepage/Images/Cubetextures/light_purple_texture_three.jpg');
  const lightpinktexturematerialthreecopy = createMaterial('./Homepage/Images/Cubetextures/light_purple_texture_three.jpg');
 
  const allMaterials = [
    lightpinkgeneral,
    cornermaterial,
    cornermaterialtwo,
    darkpinktexturematerialtwo,
    darkpinktexturematerialthree,
    lightpinktexturematerialone,
    lightpinktexturematerialtwo,
    lightpinktexturematerialthree,
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

  useLayoutEffect(() => {
      
      if (isClicked && group.current) {
        gsap.to(group.current.position, {
          x: -1.5,
          y: -0.8,
          z: -0.2,
          duration: 3, 
          delay: 2.2,
          ease: 'back.inOut', 
        });
  
        gsap.to(camera, {
          zoom: 290,
          duration: 3.0,
          delay: 2.2,
          ease: 'back.inOut',
          onUpdate: () => camera.updateProjectionMatrix(),
        });
  
      }
    }, [isClicked]); 

   useFrame(() => {
      if (timelineref.current) {
        timelineref.current.seek(scroll.offset * timelineref.current.duration());
      }
    });

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
          stagger: 0.5 
        },
        "10" 
      );

      if(dissolveref)
      {
        console.log(dissolveref.current.uniforms.uProgress.value)
      }  
  
      // Sync timeline with initial scroll position
      timelineref.current.seek(scroll.offset * 0.9 *  timelineref.current.duration());

  
      return () => {
        if (timelineref.current) {
          timelineref.current.kill();
        }
      };
    }, [height,isHovered]); 
  
  

  return (
    <group ref={group}
     {...props}
     dispose={null}
     scale={ isDesktop? 0.5: 0.46 }
     rotation={[ -Math.PI/50,Math.PI/52,-Math.PI/11 ]}
     position={[ isDesktop ? -0.2 : -1.40,isDesktop ? -1.56: -1.93,isDesktop ? -4.7 : -4.7 ]}

     onPointerOver={() => setIsHovered(true)}
     onPointerOut={() => setIsHovered(false)} 
     >
      <group name="Scene">
      <mesh
          name="Cube_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={cornermaterial}
          position={[0.004, 0.5, 0.001]}
          scale={0.5}
        >
          <DissolveMaterial
            ref={dissolveref}
            baseMaterial={cornermaterial}
            color="#ffffff"
            visible={visible}
          />
          </mesh>
        <mesh
          name="Cube_2001"
          castShadow
          receiveShadow
          geometry={nodes.Cube_2001.geometry}
          material={lightpinkgeneral}
          position={[-1.006, 0.5, -1.009]}
          scale={0.5}
        >
          <DissolveMaterial
            baseMaterial={lightpinkgeneral}
            color="#ffffff"
            visible={visible}
          />
          </mesh>
        <mesh
          name="Cube_1001"
          castShadow
          receiveShadow
          geometry={nodes.Cube_1001.geometry}
          material={lightpinktexturematerialthree}
          position={[0.004, 0.5, -1.009]}
          scale={0.5}
        >
          <DissolveMaterial
            baseMaterial={lightpinktexturematerialthree}
            color="#ffffff"
            visible={visible}
          />
          </mesh>
        <mesh
          name="Cube_2003"
          castShadow
          receiveShadow
          geometry={nodes.Cube_2003.geometry}
          material={darkpinktexturematerialtwo}
          position={[-1.006, 1.51, 0.001]}
          scale={0.5}
        >
          <DissolveMaterial
            baseMaterial={darkpinktexturematerialtwo}
            color="#ffffff"
            visible={visible}
          />
          </mesh>
        <mesh
          name="Cube_1004"
          castShadow
          receiveShadow
          geometry={nodes.Cube_1004.geometry}
          material={lightpinktexturematerialtwo}
          position={[0.004, 1.51, -1.009]}
          scale={0.5}
        >
          <DissolveMaterial
            baseMaterial={lightpinktexturematerialtwo}
            color="#ffffff"
            visible={visible}
          />
          </mesh>
        <mesh
          name="Cube_3006"
          castShadow
          receiveShadow
          geometry={nodes.Cube_3006.geometry}
          material={cornermaterialtwocopy}
          position={[-2.016, 2.52, 0.001]}
          scale={0.5}
        >
          <DissolveMaterial
            baseMaterial={cornermaterialtwocopy}
            color="#ffffff"
            visible={visible}
          />
          </mesh>
        <mesh
          name="Cube_1006"
          castShadow
          receiveShadow
          geometry={nodes.Cube_1006.geometry}
          material={cornermaterialtwo}
          position={[0.004, 2.52, 0.001]}
          scale={0.5}
        >
          <DissolveMaterial
            baseMaterial={cornermaterialtwo}
            color="#ffffff"
            visible={visible}
          />
          </mesh>
        <mesh
          name="Cube_2007"
          castShadow
          receiveShadow
          geometry={nodes.Cube_2007.geometry}
          material={lightpinkgeneraltwo}
          position={[-1.006, 2.52, -1.009]}
          scale={0.5}
        >
          <DissolveMaterial
            baseMaterial={lightpinkgeneraltwo}
            color="#ffffff"
            visible={visible}
          />
          </mesh>
        <mesh
          name="Cube_3008"
          castShadow
          receiveShadow
          geometry={nodes.Cube_3008.geometry}
          material={lightpinktexturematerialthreecopy}
          position={[-2.016, 2.52, -2.019]}
          scale={0.5}
        >
          <DissolveMaterial
            baseMaterial={lightpinktexturematerialthreecopy}
            color="#ffffff"
            visible={visible}
          />
          </mesh>
        <mesh
          name="Cube_1008"
          castShadow
          receiveShadow
          geometry={nodes.Cube_1008.geometry}
          material={lightpinktexturematerialone}
          position={[0.004, 2.52, -2.019]}
          scale={0.5}
        >
          <DissolveMaterial
            baseMaterial={lightpinktexturematerialone}
            color="#ffffff"
            visible={visible}
          />
          </mesh>
        </group>
    
    </group>
  )
}

useGLTF.preload('./AboutusPage/Models/TrialCube.glb')
