// Entire homepage background

import * as THREE from 'three';
import { useRef, useLayoutEffect } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useScroll } from '@react-three/drei';


export default function HomePage() {
  const group = useRef();
  const { width, height, viewport } = useThree((state) => state.viewport);

  const grouponeref = useRef();
  const grouptworef = useRef();

  const timelineref = useRef();
  const scroll = useScroll();


  // Scaling responsiveness
  const isDesktop = width > 13.061; 
  const isTablet = width < 5.224;
  const cloudsScalingFactorX = width;
  const cloudsScalingFactorY = height;

  const desktopFactorX = cloudsScalingFactorX * 0.31;
  const laptopFactorX = cloudsScalingFactorX * 0.30;

  const desktopFactorY = cloudsScalingFactorY * 0.33;
  const laptopFactorY = cloudsScalingFactorY * 0.32;

  // Positon responsiveness
  const cloudsPositionFactorX = window.innerWidth / 1920;
  //const isTablet = window.innerWidth / 768;



  const desktopFactorPositionX = cloudsPositionFactorX + 0.9;
  const laptopFactorPositionX = cloudsPositionFactorX + 0.3;

  const cloudsPositionFactorY = window.innerHeight / 1080;
  const desktopFactorPositionY = cloudsPositionFactorY + 0.15;
  const laptopFactorPositionY = cloudsPositionFactorY + 0.26;
  
  const cloudsPositionFactorZ =  3.1
  const desktopFactorPositionZ = cloudsPositionFactorZ;
  const laptopFactorPositionZ = cloudsPositionFactorZ + 0.03;


  const textures = useLoader(THREE.TextureLoader, [
    './Homepage/Images/cloudleft.png',
    './Homepage/Images/cloudright.png',
    './Homepage/Images/cloudtwoleft.png',
    './Homepage/Images/cloudtworight.png',
    './Homepage/Images/cloudtwomiddle.png',
  ]);

  const [cloudoneleft, cloudoneright, cloudtwoleft, cloudtworight, cloudtwomiddle] = textures;

  textures.forEach((texture) => {
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;
  });

  useFrame(() => {
    if (timelineref.current) {
      timelineref.current.seek(scroll.offset * timelineref.current.duration());
    }
  });

  useLayoutEffect(() => {
    timelineref.current = gsap.timeline({ paused: true });

    timelineref.current.to(
      grouponeref.current.position,
      {
        duration: 3,
        y: isDesktop ? height : height,
        ease: 'back.in',
      },
      0
    );

    timelineref.current.to(
      grouptworef.current.position,
      {
        duration: 3,
        y: isDesktop ? 0 : 0,
        ease: 'power3.out',
      },
      '>0.5'
    );

    timelineref.current.seek(scroll.offset * 2.0 * timelineref.current.duration());

    return () => {
      if (timelineref.current) {
        timelineref.current.kill();
      }
    };
  }, [height, scroll.offset, width]);

  return (
    <>
     
      <group ref={grouponeref}>
        <mesh rotation={[-Math.PI / 40, Math.PI / 3.5, 0]} position={[
          (isTablet ? -(cloudsPositionFactorX - 0.1): (isDesktop ? -desktopFactorPositionX: -laptopFactorPositionX - 0.5)),
          (isTablet ? -(cloudsPositionFactorY - 0.1): (isDesktop ? -desktopFactorPositionY: -laptopFactorPositionY - 0.3)),
          (isTablet ? -(cloudsPositionFactorZ - 0.1): (isDesktop ? desktopFactorPositionZ: laptopFactorPositionZ))
          ]}
           >
          <planeGeometry
            attach="geometry"
            args={[
              isDesktop ? desktopFactorX : laptopFactorX,
              isDesktop ? desktopFactorY : laptopFactorY,
              1
            ]}
          />
          <meshBasicMaterial attach="material" map={cloudtwoleft} transparent />
        </mesh>

        <mesh rotation={[0, Math.PI / 3.5, 0]} position={[
          (isTablet ? -(cloudsPositionFactorX - 0.1): (isDesktop ? desktopFactorPositionX + 8.2: laptopFactorPositionX + 8.2)),
          (isTablet ? -(cloudsPositionFactorY - 0.1): (isDesktop ? desktopFactorPositionY + 3.6: laptopFactorPositionY + 3.1)),
          (isTablet ? -(cloudsPositionFactorZ - 0.1): (isDesktop ? desktopFactorPositionZ: laptopFactorPositionZ))
          ]}
          >
          <planeGeometry
          attach="geometry"
          args={[
            isDesktop ? desktopFactorX : laptopFactorX,
            isDesktop ? desktopFactorY : laptopFactorY,
          ]}
          />
          <meshBasicMaterial attach="material" map={cloudoneright} transparent />
        </mesh>
      </group>

      <group ref={grouptworef} position={[0,-height * 1.5,0]}>
        <mesh rotation={[-Math.PI / 24, Math.PI / 3.5, 0]} position={[
          (isTablet ? -(cloudsPositionFactorX - 0.1): (isDesktop ? -desktopFactorPositionX - 1.3 : -laptopFactorPositionX - 4.0)),
          (isTablet ? -(cloudsPositionFactorY - 0.1): (isDesktop ? desktopFactorPositionY - 2.1 : laptopFactorPositionY - 2.0)),
          (isTablet ? -(cloudsPositionFactorZ - 0.1): (isDesktop ? desktopFactorPositionZ - 13.0 : laptopFactorPositionZ - 13.0))
           ]}
           >
          <planeGeometry attach="geometry" args={[
             isDesktop ? desktopFactorX - 1.9 : laptopFactorX - 1.8,
             isDesktop ? desktopFactorY - 0.8 : laptopFactorY - 0.75,
             1
            ]} 
            />
          <meshBasicMaterial attach="material" map={cloudtworight} transparent />
        </mesh>

        <mesh rotation={[0, Math.PI / 3.5, 0]} position={[
          (isTablet ? -(cloudsPositionFactorX - 0.1): (isDesktop ? -desktopFactorPositionX - 3.8 : -laptopFactorPositionX - 4.5 )),
          (isTablet ? -(cloudsPositionFactorY - 0.1): (isDesktop ? desktopFactorPositionY + 0.3  : laptopFactorPositionY - 0.3)),
          (isTablet ? -(cloudsPositionFactorZ - 0.1): (isDesktop ? desktopFactorPositionZ - 8.0 : laptopFactorPositionZ - 8.0))
          ]}
          >
          <planeGeometry attach="geometry" args={[
           isDesktop ? desktopFactorX - 2.2 : laptopFactorX - 1.85,
           isDesktop ? desktopFactorY - 1.05 : laptopFactorY - 0.9,
           1
          ]}
          />
          <meshBasicMaterial attach="material" map={cloudtwomiddle} transparent />
        </mesh>

        <mesh rotation={[0, Math.PI / 3.5, 0]} position={[
           (isTablet ? -(cloudsPositionFactorX - 0.1): (isDesktop ? desktopFactorPositionX - 7.6 : laptopFactorPositionX - 5.1)),
           (isTablet ? -(cloudsPositionFactorY - 0.1): (isDesktop ? desktopFactorPositionY - 1.5 : laptopFactorPositionY - 0.7)),
           (isTablet ? -(cloudsPositionFactorZ - 0.1): (isDesktop ? desktopFactorPositionZ : laptopFactorPositionZ))
           ]}
           >
          <planeGeometry attach="geometry" args={[
           isDesktop ? desktopFactorX - 1.9 : laptopFactorX - 1.8,
           isDesktop ? desktopFactorY - 1.0 : laptopFactorY - 0.9,
           1
           ]} 
           />
          <meshBasicMaterial attach="material" map={cloudtwoleft} transparent side={THREE.DoubleSide} />
        </mesh>
      </group>

   
    </>
  );
}