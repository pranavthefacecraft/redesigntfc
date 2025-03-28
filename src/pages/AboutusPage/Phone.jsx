import * as THREE from 'three';
import React, { useRef, useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useGLTF, useScroll, MeshPortalMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { DissolveMaterial } from '../../DissolveMaterial';

import AboutusPortal from './Portal/AboutusPortal';

export function Phone({ visible, ...props }) {
  const group = useRef()
  const planeref = useRef()
  const dissolveref = useRef();
  const portalMaterialRef = useRef(); // Reference for MeshPortalMaterial
  const timelineref = useRef();
  const scroll = useScroll();
  const { nodes, materials } = useGLTF('./AboutusPage/Models/Phone.glb')
  const { camera } = useThree();
  const {width, height, viewport} = useThree((state) => state.viewport) 

  const isMobile = width < 5.224;
  const isDesktop = width > 13.061;

  const letters = document.querySelectorAll('.ProjectTitle span');
  const isClicked = props.isPhoneClicked

  // Define materials
  const greyscreen = new THREE.MeshBasicMaterial({ color: '#4D55CC' });
  const button = new THREE.MeshBasicMaterial({ color: '#848494' });
  const lightpurple = new THREE.MeshBasicMaterial({ color: '#bcb4ff' });
  const darkpurple = new THREE.MeshBasicMaterial({ color: '#8278fb' });

  // After click animations
  useLayoutEffect(() => {
    if (isClicked && group.current) {
      // Camera zoom animation
      gsap.to(camera, {
        zoom: 300,
        duration: 2.0,
        delay: 3,
        ease: 'back.inOut',
        onUpdate: () => camera.updateProjectionMatrix(),
      });
  
      // Group position animation
      gsap.to(group.current.position, {
        x: -1.0,
        y: -1.2,
        z: -0.9,
        duration: 2.5,
        delay: 3.0,
        ease: 'power3.out',
        onComplete: () => {
           // Switch material from DissolveMaterial to MeshPortalMaterial
           if (planeref.current) {
            planeref.current.material = portalMaterialRef.current;
          }
        }
      });
  
      // Group rotation animation
      gsap.to(group.current.rotation, {
        x: -0.5,
        z: 0.3,
        y: Math.PI * 2,
        duration: 3.0,
        delay: 2.8,
        ease: 'back.out',
        onComplete: () => {
          // Subtle floating animation after rotation completes

          gsap.to(group.current.position, {
            y: '+=0.1',
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
          });
  
          gsap.to(group.current.rotation, {
            y: '+=0.06',
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
          });
           
          
        },
      });
      

      // Text reveal animation
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          stagger: 0.4,
          delay: 3,
          ease: 'power3.out',
          onComplete: () => {
            // Reverse text animation (disappear)
            gsap.to(letters, {
              opacity: 0,
              y: 20,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power4.in',
            });

          },
        }
      );
    }
  }, [isClicked]);

  // GSAP animation setup
  useLayoutEffect(() => {
    timelineref.current = gsap.timeline({ paused: true });

    group.current.scale.set(0, 0, 0);

    timelineref.current.to(
      group.current.scale,
      {
        x: 0.45,
        y: 0.37,
        z: 0.7,
        duration: 0.1,
        ease: 'back.out',
      },
      '0.8'
    );

    timelineref.current.seek(scroll.offset * 0.9 * timelineref.current.duration());

    return () => {
      if (timelineref.current) {
        timelineref.current.kill();
      }
    };
  }, []);

  useFrame(() => {
    if (timelineref.current) {
      timelineref.current.seek(scroll.offset * timelineref.current.duration());
    }
  });

  return (
    <group {...props} 
      ref={group}
      dispose={null}
      rotation={[-0.5, 0.2, 0.3]}
      position={[ isDesktop ? -3.6 : -4.0,isDesktop ? -0.4: -1.0,isDesktop ? -3: -3.2 ]}
    >
      <group name="Plane" scale={[1, 1, 0.261]}>
        <mesh
          ref={planeref} 
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.PhoneFace_Mat}
        >

          <DissolveMaterial
            baseMaterial={greyscreen}
            color="#ffffff"
            visible={visible}
          />

          <MeshPortalMaterial ref={portalMaterialRef}  blend={0} side={THREE.DoubleSide} >
              <AboutusPortal/>
          </MeshPortalMaterial>

        </mesh>
        <mesh
          name="Plane001_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.PhoneCase_Mat}
        >
          <DissolveMaterial
            ref={dissolveref}
            baseMaterial={darkpurple}
            color="#ffffff"
            visible={visible}
          />
        </mesh>
        <mesh
          name="Plane001_2"
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.PhoneButton_Mat}
        >
          <DissolveMaterial
            baseMaterial={button}
            color="#ffffff"
            visible={visible}
          />
        </mesh>
        <mesh
          name="Plane001_3"
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials.lightpurple}
        >
          <DissolveMaterial
            baseMaterial={lightpurple}
            color="#ffffff"
            visible={visible}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./AboutusPage/Models/Phone.glb')