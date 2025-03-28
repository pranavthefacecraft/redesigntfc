import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Outlines } from "@react-three/drei";
import { Physics, useBox, useSphere } from "@react-three/cannon";

const rfs = THREE.MathUtils.randFloatSpread;
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshToonMaterial({ 
  color: "mediumpurple", 
  roughness: 1.0, 
  envMapIntensity: 0 
});

const CubesPhysics = () => (
  <Physics gravity={[0, 2, 0]} iterations={10}>
    <Pointer />
    <Clump />
  </Physics>
);

function Clump({ mat = new THREE.Matrix4(), vec = new THREE.Vector3(0,0,0), ...props }) {
  const [ref, api] = useBox(() => ({ 
    args: [1.0, 1.0, 1.0], 
    mass: 0.5, 
    angularDamping: 0.1, 
    linearDamping: 0.65, 
    position: [rfs(80), rfs(80), rfs(10)] 
  }));
  
  useFrame((state) => {
    for (let i = 0; i < 50; i++) {
      ref.current.getMatrixAt(i, mat);
      api.at(i).applyForce(
        vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-9).toArray(), 
        [0.0, 0.0, 0.0]
      );
    }
  });
  
  return (
    <instancedMesh ref={ref} castShadow receiveShadow args={[boxGeometry, boxMaterial, 50]}>
      <Outlines thickness={2} />
    </instancedMesh>
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [ref, api] = useSphere(() => ({ // Using useSphere instead of useBox
    type: "Kinematic",
    args: [3.5], // Radius of the sphere
    position: [0, 0, 0]
  }));
  
  useFrame((state) => 
    api.position.set(
      (state.mouse.x * viewport.width) / 2, 
      (state.mouse.y * viewport.height) / 2, 
      0
    )
  );
  
  return (
    <mesh ref={ref} scale={0.1}>
      <sphereGeometry />
      <meshBasicMaterial color={[4, 4, 4]} toneMapped={false}/>
      <pointLight intensity={8} distance={10} />
    </mesh>
  );
}

export default CubesPhysics;