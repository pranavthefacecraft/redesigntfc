import './aboutus.css';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useScroll, Scroll, ScrollControls } from '@react-three/drei';
import gsap from 'gsap';
import { Planefour, Planefive, Planehero } from './ThreeDComponents';
import ImageSlider from './ImageSlider';



function Videos() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const targetScale = useRef(1); 

  useFrame(() => {
    const videoElement = document.querySelector('.tanda-video');
    if (videoElement) {
      videoElement.style.transformOrigin = 'center center';

      // Get the scroll range
      const scrollRange = data.range(1 / 2, 1 / 4);

      
      if (scrollRange > 1 / 1.5) {
        targetScale.current = 1; 
      } else {
        targetScale.current = 1 - scrollRange / 2; 
      }

      const currentScale = parseFloat(videoElement.style.transform.replace('scale(', '').replace(')', '')) || 1;
      const smoothScale = currentScale + (targetScale.current - currentScale) * 0.04; // Adjust 0.1 for smoother/faster transition
      videoElement.style.transform = `scale(${smoothScale})`;
    }
  });

  return null;
}


export default function AboutusPage() {
  useEffect(() => {
    // const phoneBackground = document.querySelector('#phonebackground');
    // const timeline = gsap.timeline();
    // timeline.to(phoneBackground, {
    //   opacity: 1,
    //   backgroundColor: 'white',
    //   duration: 1.3,
    //   ease: 'power4.out',
    // });

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
        <div className="wrapper bg-white w-screen h-screen">
        <Canvas
          shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
          camera={{ position: [0, 0, 20], fov: 32, near: 0.001, far: 1000 }}
          dpr={[1, 2]}
        >
          <ScrollControls damping={0.5} pages={6.4}>
            <Scroll>
              <Videos />
            </Scroll>

            <Scroll html>
              <div className="sectionhero absolute top-0 h-[200vh] w-screen">
                <div className="absolute top-[1.4em] left-[0.1em] text-white text-center leading-[1.0em] text-[9em] w-screen">
                  A Brand Focused <br /> Digital Partner
                </div>
              </div>

              <div className="sectionone absolute top-[200vh] h-[100vh] w-screen">
                <div className="absolute top-[0.6em] left-[3em] leading-[1.1em] font-futura text-[4.5em] w-screen">
                  We are a global studio based in <br /> Luzern, Switzerland — with leading <br /> talent across animation,
                  strategy, <br /> design, production, and beyond.
                </div>
                <div className="absolute top-[15em] left-[7.2em] font-futura text-[1.9em] text-[#BF1736]">Agency</div>
                <div className="absolute top-[22.3em] left-[35.5em] font-futura text-[1.3em] whitespace-nowrap">
                  From Swiss-based startup to global design studio.
                </div>
                <div className="sectionone-text absolute top-[32.5em] left-[46.2em] leading-[1.3em] font-montserrat text-[#6F6F6F] text-[1.0em] w-[40vw]">
                  We specialize in strategic brand development, web <br /> design, marketing, and visual storytelling,
                  crafting <br /> bespoke digital narratives that embody a brand's <br /> identity and vision.
                </div>
              </div>

              <div className="sectiontwo absolute top-[410vh] h-[100vh] w-screen">
                <div className="sectiontwo-title absolute top-[0.1em] left-[1.8em] leading-[1.1em] font-futura text-[#8C86DB] text-[7.2em] w-[50vw]">
                  We Transform <br /> Brands
                </div>
                <div className="absolute top-[10.2em] left-[35.4em] font-futura text-[1.3em] whitespace-nowrap">
                  From brand development to digital marketing
                </div>
                <div className="sectionone-text absolute top-[17em] left-[46em] leading-[1.3em] font-montserrat text-[#6F6F6F] text-[1.0em] w-[40vw]">
                  We establish ourselves as a dependable partner <br /> for our clients, delivering impactful messages <br /> and serving as a one-stop center for all digital <br /> services a company may need.
                </div>
                <ImageSlider />
              </div>

              <div className="absolute top-[300vh] h-[100vh] w-screen">
                <div className="h-[100vh] w-screen absolute top-0 left-0">
                  <video
                    src="./AboutusPage/Videos/tanda_r4_subtitles_sfx.mp4"
                    autoPlay
                    loop
                    muted
                    className="tanda-video absolute top-0 left-0 h-full w-full rounded-[2em] object-cover"
                  />
                </div>
              </div>
               
              <div className="absolute top-[527vh] h-[100vh] w-screen">
                
              </div>
            </Scroll>

            <Scroll>
              <Planefour />
              <Planehero />
            </Scroll>
          </ScrollControls>
        </Canvas>
        </div>
      </motion.div>
    </>
  );
}