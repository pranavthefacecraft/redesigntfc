import * as THREE from 'three';
import React, { useRef, useLayoutEffect } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { DissolveMaterial } from '../../DissolveMaterial';

export function HomeIsland({ visible, ...props }) {
  const { nodes, materials } = useGLTF('./ServicePage/Home.glb');
  const { width, height, camera } = useThree();
  const timelineref = useRef();
  const group = useRef();
  const scroll = useScroll();
  
  const isClicked = props.isIslandClicked

  const isMobile = width < 5.224;
  const isDesktop = width > 13.061;

  const cat = new THREE.MeshBasicMaterial({ color: '#3E3F5B'});
  const surface = new THREE.MeshBasicMaterial({ color: '#d5d6da' });
  const mouse = new THREE.MeshBasicMaterial({ color: '#3E3F5B' });
  const laptopbody = new THREE.MeshBasicMaterial({ color: '#FDFAF6'})
  const islandtop = new THREE.MeshBasicMaterial({ color : '#FDFAF6'});
  const lightpurple = new THREE.MeshBasicMaterial({ color: '#bcb4ff' });
  const darkpurple = new THREE.MeshBasicMaterial({ color: '#8278fb' });


  // After click animations
    useLayoutEffect(() => {
      if (isClicked && group.current) {
        // Camera zoom animation
        gsap.to(camera, {
          zoom: 220,
          duration: 3.0,
          delay: 3,
          ease: 'back.inOut',
          onUpdate: () => camera.updateProjectionMatrix(),
        });
    
        // Group position animation
        gsap.to(group.current.position, {
          x: 2.5,
          y: 1,
          z: 2.5,
          duration: 2.5,
          delay: 3.0,
          ease: 'back.inOut',
          onComplete: () => {
            gsap.to(group.current.position, {
                y: '+=0.1',
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
          });
          }
        });
    
      }
    }, [isClicked]);

  useLayoutEffect(() => {
      timelineref.current = gsap.timeline({ paused: true });
  
      if (group.current) {
          group.current.scale.set(0.001, 0.001, 0.001);
      }
  
      timelineref.current.to(
        group.current.scale,
        {
          x: 0.4,
          y: 0.4,
          z: 0.4,
          duration: 0.1,
          ease: 'back.out',
        },
        '1.5'
      );
  
      timelineref.current.seek(scroll.offset * 0.9 * timelineref.current.duration());
  
      return () => {
        if (timelineref.current) {
          timelineref.current.kill();
        }
      };
  }, [scroll.offset]); // Add scroll.offset as a dependency

  useFrame(() => {
      if (timelineref.current) {
        timelineref.current.seek(scroll.offset * timelineref.current.duration());
      }
  });

  return (
    <group ref={group} {...props} dispose={null}
    rotation={[ 0,0,0 ]}
    position={[ isDesktop ? -0.2 : 4.0 ,isDesktop ? -1.56: 1.1 ,isDesktop ? -4.7 : 8.4 ]} 
    >
      <ambientLight intensity={2.5}/>  
      <mesh
        name="Body"
        castShadow
        receiveShadow
        geometry={nodes.Body.geometry}
        material={materials['Body.001']}
        position={[1.065, 0.202, 0.249]}
        scale={0.466}
      >
        <DissolveMaterial
            baseMaterial={cat}
            color="#ffffff"
            visible={visible}
        />
        </mesh>
      <mesh
        name="MacBook_1_MacBook1_0001"
        castShadow
        receiveShadow
        geometry={nodes.MacBook_1_MacBook1_0001.geometry}
        material={laptopbody}
        position={[0.086, 0, -0.06]}
        rotation={[0, 0.146, 0]}
      >
        <DissolveMaterial
            baseMaterial={laptopbody}
            color="#ffffff"
            visible={visible}
        />
        </mesh>
      <group name="Muis_1_Mat_2" position={[0.086, 0, -0.06]} rotation={[0, 0.146, 0]}>
        <mesh
          name="Muis_1_Mat_2_1"
          castShadow
          receiveShadow
          geometry={nodes.Muis_1_Mat_2_1.geometry}
          material={surface}
        >
            <DissolveMaterial
            baseMaterial={surface}
            color="#ffffff"
            visible={visible}
        />
            </mesh>
        <mesh
          name="Muis_1_Mat_2_2"
          castShadow
          receiveShadow
          geometry={nodes.Muis_1_Mat_2_2.geometry}
          material={mouse}
        >
            <DissolveMaterial
            baseMaterial={mouse}
            color="#ffffff"
            visible={visible}
        />
            </mesh>
      </group>
      <mesh
        name="Cube002"
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={lightpurple}
      >
        <DissolveMaterial
            baseMaterial={lightpurple}
            color="#ffffff"
            visible={visible}
        />
        </mesh>
      <mesh
        name="Cube002_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube002_1.geometry}
        material={darkpurple}
      >
        <DissolveMaterial
            baseMaterial={darkpurple}
            color="#ffffff"
            visible={visible}
        />
        </mesh>
      <mesh
        name="Cube002_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube002_2.geometry}
        material={islandtop}
      >
        <DissolveMaterial
            baseMaterial={islandtop}
            color="#ffffff"
            visible={visible}
        />
        </mesh>
    </group>
  );
}

useGLTF.preload('./ServicePage/HomeIsland.glb');