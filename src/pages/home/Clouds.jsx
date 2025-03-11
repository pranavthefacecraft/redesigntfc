import * as THREE from 'three';
import { useRef, useLayoutEffect, useEffect } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useScroll, Float, useGLTF } from '@react-three/drei';

export default function Clouds() {
  const { nodes, materials } = useGLTF('/models/rubix.glb');
  const { width, height } = useThree((state) => state.viewport);

  const grouponeref = useRef();
  const grouptworef = useRef();
  const groupthreeref = useRef();
  const cuberef = useRef();

  const timelineref = useRef();

  const scroll = useScroll();

  const textureLoader = new THREE.TextureLoader();

  const cloudoneleft = useLoader(THREE.TextureLoader, '/images/new/cloudleft.png');
  cloudoneleft.wrapS = THREE.ClampToEdgeWrapping;
  cloudoneleft.wrapT = THREE.RepeatWrapping;

  const cloudoneright = useLoader(THREE.TextureLoader, '/images/new/cloudright.png');
  cloudoneright.wrapS = THREE.ClampToEdgeWrapping;
  cloudoneright.wrapT = THREE.RepeatWrapping;

  const cloudtwoleft = useLoader(THREE.TextureLoader, '/images/new/cloudtwoleft.png');
  cloudtwoleft.wrapS = THREE.ClampToEdgeWrapping;
  cloudtwoleft.wrapT = THREE.RepeatWrapping;

  const cloudtwomiddle = useLoader(THREE.TextureLoader, '/images/new/cloudtwomiddle.png');
  cloudtwomiddle.wrapS = THREE.ClampToEdgeWrapping;
  cloudtwomiddle.wrapT = THREE.RepeatWrapping;

  const cloudtworight = useLoader(THREE.TextureLoader, '/images/new/cloudtworight.png');
  cloudtworight.wrapS = THREE.ClampToEdgeWrapping;
  cloudtworight.wrapT = THREE.RepeatWrapping;

  const texturecamera = useLoader(THREE.TextureLoader, '/images/new/camera.png');
  texturecamera.wrapS = THREE.ClampToEdgeWrapping;
  texturecamera.wrapT = THREE.RepeatWrapping;

  const layerone_texture = textureLoader.load('/images/new/layerone.jpg');
  layerone_texture.flipY = false;
  layerone_texture.colorSpace = THREE.SRGBColorSpace;

  const layerone_material = new THREE.MeshBasicMaterial({ map: layerone_texture });

  const layertwo_texture = textureLoader.load('/images/new/layertwo.jpg');
  layertwo_texture.flipY = false;
  layertwo_texture.colorSpace = THREE.SRGBColorSpace;

  const layertwo_material = new THREE.MeshBasicMaterial({ map: layertwo_texture });

  const layerthree_texture = textureLoader.load('/images/new/layerthree.jpg');
  layerthree_texture.flipY = false;
  layerthree_texture.colorSpace = THREE.SRGBColorSpace;

  const layerthree_material = new THREE.MeshBasicMaterial({ map: layerthree_texture });

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
        y: 8,
        ease: "power2.out"
      },
      0
    );

    timelineref.current.to(
      grouptworef.current.position,
      {
        duration: 10,
        y: height * 1.5,
        ease: "power2.out"
      },
      "<"
    );

    timelineref.current.to(
      cuberef.current.position,
      {
        duration: 70,
        z: -6.3,
        ease: "power2.out"
      },
      "+=3"
    );

    timelineref.current.to(
      groupthreeref.current.position,
      {
        duration: 70,
        y: height * 0.47,
        ease: "power2.out"
      },
      "<"
    );

    // Sync timeline with initial scroll position
    timelineref.current.seek(scroll.offset * timelineref.current.duration());

    return () => {
      if (timelineref.current) {
        timelineref.current.kill();
      }
    };
  }, [height]);

  return (
    <>
      <group ref={grouponeref}>
        <mesh rotation={[-Math.PI / 40, Math.PI / 3.5, 0]} position={[-1.855, -0.93, 3.0]}>
          <planeGeometry attach="geometry" args={[3.5, 1.6]} />
          <meshBasicMaterial attach="material" map={cloudtwoleft} transparent />
        </mesh>

        <mesh rotation={[0, Math.PI / 3.5, 0]} position={[-1.855, 0.5, -5.1]}>
          <planeGeometry attach="geometry" args={[3.8, 1.9]} />
          <meshBasicMaterial attach="material" map={cloudoneright} transparent />
        </mesh>
      </group>

      <group ref={grouptworef}>
        <mesh rotation={[-Math.PI/24, Math.PI / 3.5, 0]} position={[-1.855, -height * 1.44, -7.9]}>
          <planeGeometry attach="geometry" args={[1.5, 0.8]} />
          <meshBasicMaterial attach="material" map={cloudtworight} transparent />
        </mesh>

        <mesh rotation={[0, Math.PI / 3.5, 0]} position={[-1.855, -height * 1.15, -2.5]}>
          <planeGeometry attach="geometry" args={[1.1, 0.5]} />
          <meshBasicMaterial attach="material" map={cloudtwomiddle} transparent />
        </mesh>

        <mesh rotation={[0, Math.PI / 3.5, 0]} position={[-1.855, -height * 1.2, 5.0]}>
          <planeGeometry attach="geometry" args={[1.4, 0.7]} />
          <meshBasicMaterial attach="material" map={cloudtwoleft} transparent side={THREE.DoubleSide} />
        </mesh>
      </group>

      <group ref={groupthreeref}>
        <mesh rotation={[Math.PI / 35, Math.PI / 3.5, 0]} position={[-1.855, -height * 0.2, -1.1]}>
          <planeGeometry attach="geometry" args={[1.1, 1.08]} />
          <meshBasicMaterial attach="material" map={texturecamera} transparent side={THREE.DoubleSide} />
        </mesh>
      </group>

      <group ref={cuberef} dispose={null} position={[-1.45, -2.09, -11.3]} rotation-x={-Math.PI / 30} rotation-y={-Math.PI * 4} rotation-z={-Math.PI / 14} scale={[0.43, 0.43, 0.43]}>
        <mesh
          name="Layerone"
          castShadow
          receiveShadow
          geometry={nodes.Layerone.geometry}
          material={layertwo_material}
          position={[-0.018, 1.523, 0.012]}
        />
        <mesh
          name="Layertwo"
          castShadow
          receiveShadow
          geometry={nodes.Layertwo.geometry}
          material={layerthree_material}
          position={[-0.018, 0.61, 0.012]}
        />
        <mesh
          name="Layerthree"
          castShadow
          receiveShadow
          geometry={nodes.Layerthree.geometry}
          material={layerone_material}
          position={[-0.018, 2.436, 0.012]}
        />
      </group>
    </>
  );
}

useGLTF.preload('/models/rubix.glb');