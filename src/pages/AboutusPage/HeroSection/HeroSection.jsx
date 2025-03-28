import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useEffect, useRef } from "react"
import { Text } from "@react-three/drei"
import HeroCubes from "./Herocubes"
import { Sean } from "./Sean"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Anne } from "../Elements/LastSection/Anne"

gsap.registerPlugin(ScrollTrigger)

function Scene() {
  const cameraGroup = useRef()
  const textref = useRef()
  const textreftwo = useRef()
  const cursor = useRef({ x: 0, y: 0 })
  const scrollY = useRef(0)
  const maxScroll = 2200 // Maximum scroll value before stopping camera movement
  const objectsDistance = 4
  const cameraPosition = useRef({ y: 0, z: 20 }) // Track camera position separately

  const { camera, size } = useThree()

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [size.height])

  useEffect(() => {
    const handleMouseMove = (event) => {
      cursor.current.x = event.clientX / size.width - 0.5
      cursor.current.y = event.clientY / size.height - 0.5
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [size.width, size.height])


  useFrame((state, delta) => {
    //Parallax effect

    // const parallaxX = cursor.current.x * 0.5
    // const parallaxY = -cursor.current.y * 0.5
    // if (cameraGroup.current) {
    //   cameraGroup.current.position.x += (parallaxX - cameraGroup.current.position.x) * 5 * delta
    //   cameraGroup.current.position.y += (parallaxY - cameraGroup.current.position.y) * 5 * delta
    // }
  
    
    if (scrollY.current <= maxScroll) {
      cameraPosition.current.y = -scrollY.current / size.height * objectsDistance
      cameraPosition.current.z = -(scrollY.current / size.height * objectsDistance) + 20

      if(textref.current && textreftwo.current){
      textref.current.position.y = -scrollY.current / size.height * objectsDistance + 1
      textref.current.position.z = -scrollY.current / size.height * objectsDistance

      textreftwo.current.position.y = -scrollY.current / size.height * objectsDistance - 0.9 
      textreftwo.current.position.z = -scrollY.current / size.height * objectsDistance
      }
    }

    else {
      cameraPosition.current.z = -(scrollY.current / size.height * objectsDistance) + 20
    }


    camera.position.y = cameraPosition.current.y
    camera.position.z = cameraPosition.current.z

  })

  return (
    <group ref={cameraGroup}>
      <ambientLight intensity={0.1} />
      <directionalLight color="#ffffff" intensity={6} position={[-5, 2, -4]} />
      <Suspense fallback={null}>
      <HeroCubes/>
      </Suspense>
      <Suspense fallback={null}>
        <Sean/>
      </Suspense>
      <Suspense fallback={null}>
        <Anne/>
      </Suspense>

      <Suspense fallback={null}>

            <Text ref={textref} position={[0.1,0.0,-5]} font='./ProjectPage/Fonts/FuturaCyrillicBold.ttf' fontSize={2} anchorX="center" anchorY="middle">
            <meshToonMaterial
             color={'#ffffff'}
            />
            A Brand Focused
            </Text>

            <Text ref={textreftwo} position={[0.1,-2.0,-5]} font='./ProjectPage/Fonts/FuturaCyrillicBold.ttf' fontSize={2} anchorX="center" anchorY="middle">
            <meshToonMaterial
             color={'#ffffff'}
            />
            Digital Partner
            </Text>

      </Suspense>      
    
    </group>
  )
}

export default function HeroSection() {
  return (
    <Suspense fallback={null}>

      <Canvas
        className="fixed top-0 left-0 w-full h-full z-0 bg-white"
        shadows
        gl={{ alpha: true, stencil: true, antialias: true }}
        camera={{ position: [0, 0, 20], fov: 32, near: 0.1, far: 1000 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#bcb4ff']} />
        <Suspense fallback={null}>
        <Scene />
        </Suspense>
      </Canvas>
    </Suspense>
  )
}