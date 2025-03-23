import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

const One = React.forwardRef((props, ref) => {
  const { width, height } = useThree((state) => state.viewport);
  const { nodes, materials } = useGLTF('./ServicePage/one.glb');

  useEffect(() => {
    const startPosOne = { x: width * 0.7, y: -height * 5.9, z: 0 };
    // Set initial position for groupone
    gsap.set(ref.current.position, startPosOne);
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
        name="Body"
        castShadow
        receiveShadow
        geometry={nodes.Body.geometry}
        material={materials['Body.001']}
      />
    </group>
  );
});
useGLTF.preload('./ServicePage/one.glb');
export default One;