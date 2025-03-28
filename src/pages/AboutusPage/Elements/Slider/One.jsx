import { forwardRef, useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

const One = forwardRef((props, ref) => {
  const internalRef = useRef();
  const { width, height } = useThree((state) => state.viewport);
  const { nodes, materials } = useGLTF('./ServicePage/one.glb');

  const meshRef = ref || internalRef;

  useEffect(() => {
    if (!meshRef.current) return;

    const startPosOne = { x: width * 0.5, y: -height * 1, z: 0 };
    gsap.set(meshRef.current.position, startPosOne);
    
    // Cleanup function
    return () => {
      gsap.killTweensOf(meshRef.current.position);
    };
  }, [width, height, meshRef]);

  return (
    <group
      ref={meshRef}
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


One.displayName = 'One';

useGLTF.preload('./ServicePage/one.glb');

export default One;