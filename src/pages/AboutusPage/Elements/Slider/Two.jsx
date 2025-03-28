import { forwardRef, useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

const Two = forwardRef((props, ref) => {
  const internalRef = useRef();
  const { width, height } = useThree((state) => state.viewport);
  const { nodes, materials } = useGLTF('./ServicePage/two.glb');
  
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
Two.displayName = 'One';

useGLTF.preload('./ServicePage/two.glb');

export default Two;