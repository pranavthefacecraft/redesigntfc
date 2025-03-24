import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

const Three = React.forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./ServicePage/three.glb')
  const { width, height } = useThree((state) => state.viewport);

  useEffect(() => {
    const startPosTwo = { x: width * 0.7, y: -height * 5.9, z: 0 };
    // Set initial position for grouptwo
    gsap.set(ref.current.position, startPosTwo);
  }, [width, height, ref]);

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      scale={1.3}
      rotation={[0.2, -1.2, 0]}
    >
      <mesh
        name="Island_big"
        castShadow
        receiveShadow
        geometry={nodes.Island_big.geometry}
        material={materials.Island_big}
      />
      <group
        name="Phone"
        position={[-0.346, 2.487, 0.299]}
        rotation={[1.559, 0.337, 2.232]}
        scale={[0.039, 0.039, 0.031]}>
        <mesh
          name="Volume_Down_PhoneButton_Mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Down_PhoneButton_Mat_0.geometry}
          material={materials.PhoneButton_Mat}
        />
        <mesh
          name="Volume_Down_PhoneButton_Mat_0_1"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Down_PhoneButton_Mat_0_1.geometry}
          material={materials.PhoneCase_Mat}
        />
        <mesh
          name="Volume_Down_PhoneButton_Mat_0_2"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Down_PhoneButton_Mat_0_2.geometry}
          material={materials.PhoneFace_Mat}
        />
        <mesh
          name="Volume_Down_PhoneButton_Mat_0_3"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Down_PhoneButton_Mat_0_3.geometry}
          material={materials.Camera_Light1}
        />
      </group>
    </group>
  );
});
useGLTF.preload('./ServicePage/three.glb');
export default Three;