import * as THREE from 'three'
import { useLoader } from '@react-three/fiber';
import { Text, Outlines, Bvh } from '@react-three/drei';

export default function AboutusPortal() {

 
  const texture = useLoader(THREE.TextureLoader, './Homepage/Images/Aboutusbg.png');
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  return (
    <>

    <mesh position={[0,2.7,0]} rotation={[0,0,0]}>
        <Text position={[0.1,0.0,0.87]} font='./ProjectPage/Fonts/FuturaCyrillicBold.ttf' fontSize={0.55} anchorX="center" anchorY="middle">Click me</Text>
    </mesh>

    <ambientLight intensity={3}/>

    <mesh>
        <planeGeometry args={[10,10]}/>
        <meshBasicMaterial color={'#4D55CC'}/>
    </mesh>


    </>
  );
}