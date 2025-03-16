import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, shaderMaterial, Bvh } from '@react-three/drei';
import gsap from 'gsap';

import { IslandOne } from './Island';
import { Boxes } from './Cubes';
import { data } from './store'

const GradientMaterial = shaderMaterial(
  { 
    uColorTop: new THREE.Color("#efb7b7"), // Soft pink
    uColorBottom: new THREE.Color("#a9a0ff") // Pastel purple
  },
  // Vertex Shader
  /*glsl*/`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  /*glsl*/`
    varying vec2 vUv;
    uniform vec3 uColorTop;
    uniform vec3 uColorBottom;

    void main() {
      vec3 gradientColor = mix(uColorBottom, uColorTop, vUv.y - 0.04);
      gl_FragColor = vec4(pow(gradientColor, vec3(1.0 / 2.2)), 1.0);
    }
  `
);

extend({ GradientMaterial });

function Planefour() {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <>
      <ambientLight />
      <mesh position={[0, -height * 5.27, 0]}>
        <planeGeometry args={[width, height]} />
        <gradientMaterial />
      </mesh>
    </>
  );
}

const GradientMaterialtwo = shaderMaterial(
  { 
    uColorCenter: new THREE.Color("#cbc7fe"), // Soft pastel purple (center)
    uColorEdge: new THREE.Color("#a9a0ff") // Light bluish purple (edges)
  },
  // Vertex Shader
  /*glsl*/`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `, 
  // Fragment Shader (Radial Gradient)
  /*glsl*/`
    varying vec2 vUv;
    uniform vec3 uColorCenter;
    uniform vec3 uColorEdge;

    void main() {
      float dist = distance(vUv, vec2(0.5, 0.5)); // Distance from center
      float gradientFactor = smoothstep(0.0, 0.4, dist); // Controls falloff
      vec3 gradientColor = mix(uColorCenter, uColorEdge, gradientFactor);
      gl_FragColor = vec4(pow(gradientColor, vec3(1.0 / 2.2)), 1.0);
    }
  `
);

extend({ GradientMaterialtwo });

function Planefive() {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <>
      <ambientLight />
      <mesh position={[0, -height * 4.4, 0]}>
        <planeGeometry args={[width, height]} />
        <gradientMaterialtwo />
      </mesh>
    </>
  );
}

// Hero section Plane
const GradientMaterialhero = shaderMaterial(
  { 
    uColorCenter: new THREE.Color("#cbc7fe"), // Soft pastel purple (center)
    uColorEdge: new THREE.Color("#a9a0ff") // Light bluish purple (edges)
  },
  // Vertex Shader
  /*glsl*/`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `, 
  // Fragment Shader (Radial Gradient)
  /*glsl*/`
    varying vec2 vUv;
    uniform vec3 uColorCenter;
    uniform vec3 uColorEdge;

    void main() {
      gl_FragColor = vec4(pow(uColorEdge, vec3(1.0 / 2.2)), 1.0);
    }
  `
);

extend({ GradientMaterialhero });

function Planehero() {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <>
      <ambientLight />
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[width, height * 3.01]} />
        <gradientMaterialhero />
      </mesh>
    </>
  );
}

function ImageSlider() {
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useEffect(() => {
    const slide1 = slide1Ref.current;
    const slide2 = slide2Ref.current;
    const slide3 = slide3Ref.current;

    const image1 = image1Ref.current;
    const image2 = image2Ref.current;
    const image3 = image3Ref.current;

    const tl = gsap.timeline();
  }, []);

  return (
    <>
      <div className="container">
        <span className="slider" id="slider1"></span>
        <span className="slider" id="slider2"></span>
        <span className="slider" id="slider3"></span>

        <div className="imgContainer">
          <div className="slide_div" id="slide_1" ref={slide1Ref}>
            <img src="./AboutusPage/Images/image-two.png" ref={image1Ref} style={{ height: '16.5em', width: '20em', top: '1em' }} alt="" className="img" id="img1" />
          </div>
          <div className="slide_div" id="slide_2" ref={slide2Ref} style={{ transform: 'rotate(-10deg)' }}>
            <img src="./AboutusPage/Images/image-one.png" ref={image2Ref} alt="" className="img" id="img2" />
          </div>
          <div className="slide_div" id="slide_3" ref={slide3Ref}>
            <img src="./AboutusPage/Images/image-three.png" ref={image3Ref} style={{ height: '16.5em', width: '20em', top: '1em' }} alt="" className="img" id="img3" />
          </div>
        </div>
      </div>
    </>
  );
}

function Videos() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();

  useFrame(() => {
    const videoElement = document.querySelector('.tanda-video');
    if (videoElement) {
      videoElement.style.transformOrigin = 'center center';
      videoElement.style.transform = `scale(${1 - (data.range(1 / 6, 1 / 5) / 5)})`;
    }
  });

  return null;
}

export default function AboutusPage() {
  useEffect(() => {
    const phoneBackground = document.querySelector('#phonebackground');
    const timeline = gsap.timeline();
    timeline.to(phoneBackground, {
      opacity: 1,
      backgroundColor: 'white',
      duration: 1.3,
      ease: 'power4.out',
    });

    return () => timeline.kill();
  }, []);

  return (
    <>
      <motion.div
        id="intro"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Canvas
          shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
          camera={{ position: [0, 0, 20], fov: 32, near: 0.001, far: 100 }}
          dpr={[1, 2]}
        >

        <Bvh firstHitOnly>
        <Boxes data={data} range={20} />
         </Bvh>
      
          <ScrollControls damping={0.5} pages={6.271}>
            <Scroll>
            
              <Videos />
            </Scroll>


            <Scroll html>
              <div className="section-hero"></div>
              <div className="sectionone">
                <div className="intro-text-title">
                  We are a global studio based in <br /> Luzern, Switzerland — with leading <br /> talent across animation,
                  strategy, <br /> design, production, and beyond.
                </div>
                <div className="intro-text-left">Agency</div>
                <div className="intro-text-right-header">From Swiss-based startup to global design studio.</div>
                <div className="intro-text-right-text">
                  We specialize in strategic brand development, web <br /> design, marketing, and visual storytelling,
                  crafting <br /> bespoke digital narratives that embody a brand's <br /> identity and vision.
                </div>
              </div>
              <div className="sectiontwo">
                <div className="second-text-title">
                  We Transform <br /> Brands
                </div>
                <div className="second-text-right-header">From brand development to digital marketing</div>
                <div className="second-text-right-text">
                  We establish ourselves as a dependable partner <br /> for our clients, delivering impactful messages <br /> and serving as a one-stop center for all digital <br /> services a company may need.
                </div>
                <ImageSlider />
              </div>
              <div className="sectionthree">
                <div className='tanda-video'>
                  <video
                    src="./AboutusPage/Videos/tanda_r4_subtitles_sfx.mp4"
                    autoPlay
                    loop
                    muted
                  />
                </div>
              </div>
              <div className="sectionfive"></div>
            </Scroll>

            <Scroll>
              <Planefour />
              <Planehero />
            </Scroll>

            <Scroll>
              <IslandOne />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </motion.div>
    </>
  );
}