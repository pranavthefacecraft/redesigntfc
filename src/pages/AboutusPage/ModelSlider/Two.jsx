import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

const Two = React.forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./ServicePage/two.glb');
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
      <mesh
        name="MacBook_1_MacBook1_0001"
        castShadow
        receiveShadow
        geometry={nodes.MacBook_1_MacBook1_0001.geometry}
        material={materials['MacBook.1']}
      />
      <mesh
        name="MacBook_1_MacBook1_0001_1"
        castShadow
        receiveShadow
        geometry={nodes.MacBook_1_MacBook1_0001_1.geometry}
        material={materials.Mat_0}
      />
      <mesh
        name="MacBook_1_MacBook1_0001_2"
        castShadow
        receiveShadow
        geometry={nodes.MacBook_1_MacBook1_0001_2.geometry}
        material={materials.material}
      />
    </group>
  );
});
useGLTF.preload('./ServicePage/two.glb');
export default Two;