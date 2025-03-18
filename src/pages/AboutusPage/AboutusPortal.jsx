import * as THREE from 'three'
import { useLoader } from '@react-three/fiber';
import { Text, Outlines } from '@react-three/drei';



export default function AboutusPortal() {

 
  const texture = useLoader(THREE.TextureLoader, './Homepage/Images/Aboutusbg.png');
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  return (
    <>

    <mesh position={[0,2.3,0]} rotation={[0,0,0]}>a
        <Text position={[0,0,0.77]} font='./ProjectPage/Fonts/FuturaCyrillicExtraBold.ttf' fontSize={0.45} anchorX="center" anchorY="middle">Click me</Text>
        <boxGeometry args={[0.8,0.8,1.5]}/>
        <Outlines thickness={3.05} color="black" />
        <meshToonMaterial color={'#837bfb'}/>
    </mesh>

    <ambientLight intensity={3}/>

    <mesh>
        <planeGeometry args={[10,10]}/>
        <meshBasicMaterial color={'#4D55CC'}/>
    </mesh>


    </>
  );
}