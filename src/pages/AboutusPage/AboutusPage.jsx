import './aboutus.css';
import { motion } from 'framer-motion';
import { useEffect, useRef, Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useScroll, Scroll, ScrollControls, Text } from '@react-three/drei';
import gsap from 'gsap';
import { Planefour, Planefive, Planehero } from './ThreeDComponents';
import ImageSlider from './ImageSlider';

import Scene from './ModelSlider';
import PageFooter from './Footer';
import HeroCubes from './HeroSection/Herocubes';
import { App } from './HeroSection/Heroballs';

const texts = [
  { first: "Digital Branding", second: "Agency" },
  { first: "Web & App", second: "Development" },
  { first: "Social Media", second: "Marketing" }
];

function Videos() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const targetScale = useRef(1);

  useFrame(() => {
    const videoElement = document.querySelector('.tanda-video');
    if (videoElement) {
      videoElement.style.transformOrigin = 'center center';
      const scrollRange = data.range(1 / 2.5, 1 / 4);

      if (scrollRange > 1 / 1.5) {
        targetScale.current = 1;
      } else {
        targetScale.current = 1 - scrollRange / 2;
      }

      const currentScale = parseFloat(videoElement.style.transform.replace('scale(', '').replace(')', '')) || 1;
      const smoothScale = currentScale + (targetScale.current - currentScale) * 0.04;
      videoElement.style.transform = `scale(${smoothScale})`;
    }
  });

  return null;
}

export default function AboutusPage() {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to('#phonebackground', {
      opacity: 1,
      backgroundColor: 'white',
      duration: 1.3,
      ease: 'power4.out',
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <motion.div
      id="aboutintro"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="wrapper bg-white w-screen h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas
            shadows
            gl={{ alpha: true, stencil: true, antialias: true }}
            camera={{ position: [0, 0, 20], fov: 32, near: 0.1, far: 1000 }}
            dpr={[1, 2]}
          >
            <ScrollControls damping={0.5} pages={7.4}>

              <Scroll>
                <Videos />
              </Scroll>

              <Scroll>
                <HeroCubes/>
              </Scroll>

              <Text position={[0.0,1.0,1.0]} font='./ProjectPage/Fonts/FuturaCyrillicBold.ttf' fontSize={2.4} scale={[0.9,1.1,1]}  anchorX="center" anchorY="middle" >A Brand Focused</Text>
              <Text position={[0.0,-1.5,1.0]} font='./ProjectPage/Fonts/FuturaCyrillicBold.ttf' fontSize={2.4} scale={[0.9,1.1,1]}  anchorX="center" anchorY="middle">Digital Partner</Text>

              <Scroll html>
            
               <div className="sectionhero absolute top-0 h-[200vh] w-screen pointer-events-none">
               </div>

               <div className="sectionone bg-white absolute top-[200vh] h-[100vh] w-screen pointer-events-none">
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

               <div className="sectiontwo bg-white absolute top-[410vh] h-[130vh] w-screen pointer-events-none">
                 <div className="sectiontwo-title absolute top-[0.1em] left-[1.8em] leading-[1.1em] font-futura text-[#8C86DB] text-[7.2em] w-[50vw]">
                  We Transform <br /> Brands
                 </div>
                 <div className="absolute top-[10.2em] left-[35.4em] font-futura text-[1.3em] whitespace-nowrap">
                  From brand development to digital marketing
                 </div>
                 <div className="sectionone-text absolute top-[17em] left-[46em] leading-[1.3em] font-montserrat text-[#6F6F6F] text-[1.0em] w-[40vw]">
                  We establish ourselves as a dependable partner <br /> for our clients, delivering impactful messages <br /> and serving as a one-stop center for all digital <br /> services a company may need.
                 </div>
                 <Suspense fallback={null}>
                   <ImageSlider />
                 </Suspense>
               </div>

               <div className="absolute bg-white top-[300vh] h-[110vh] w-screen">
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
               
               <div className="absolute top-[540vh] h-[100vh] w-screen">
                  <div className="absolute text-center top-[13em] left-[3em]">
                        {/* First */}
                        <div className='absolute top-0 left-0 w-screen'>
                        <div className="my-text-one" style={{ fontSize: '1.5em', color: '#645EAD', marginLeft: '0.2em', marginBottom: '0.7em'}}>The FaceCraft is a</div>
                          <h1 className="my-text-one">{texts[0].first}</h1>
                          <h1 className="my-text-one">{texts[0].second}</h1>
                          <div className="my-text-one" style={{ fontSize: '1.1em', marginTop: '1em', color: '#3F3F3F', marginLeft: '0.2em', fontFamily: 'Monserrat', lineHeight: '1.5em' }}>We create visually stunning designs <br/> that effectively communicate your <br/> brand message and attract customers.</div>
                        </div>
                        {/* Second */}
                        <div className='absolute top-0 left-0 w-screen'>
                        <div className="my-text-two" style={{ fontSize: '1.5em', color: '#645EAD', marginLeft: '0.2em', marginBottom: '0.7em'}}>Offering Services from</div>
                          <h1 className="my-text-two">{texts[1].first}</h1>
                          <h1 className="my-text-two">{texts[1].second}</h1>
                          <div className="my-text-two" style={{ fontSize: '1.1em', marginTop: '1em', color: '#3F3F3F', marginLeft: '0.2em', fontFamily: 'Monserrat', lineHeight: '1.5em' }}>We create visually stunning designs <br/> that effectively communicate your <br/> brand message and attract customers.</div>
                        </div>
                        {/* Third */}
                        <div className='absolute top-0 left-0 w-screen'>
                        <div className="my-text-three" style={{ fontSize: '1.5em', color: '#645EAD', marginLeft: '0.2em', marginBottom: '0.7em'}}>to Comprehensive</div>
                          <h1 className="my-text-three">{texts[2].first}</h1>
                          <h1 className="my-text-three">{texts[2].second}</h1>
                          <div className="my-text-three" style={{ fontSize: '1.1em', marginTop: '1em', color: '#3F3F3F', marginLeft: '0.2em', fontFamily: 'Monserrat', lineHeight: '1.5em' }}>We create visually stunning designs <br/> that effectively communicate your <br/> brand message and attract customers.</div>
                        </div>
                  </div>
               </div>

               <div className="absolute top-[640vh] bg-black h-[100vh] w-screen">
                  {/* <PageFooter/> */}
               </div>
           
              </Scroll>
              <Scroll>
                <Planefour />


                <Planehero />
              </Scroll>

              <Scroll>
     
                <Scene/>
              
              </Scroll>

              
            </ScrollControls>
           
          </Canvas>
          
        </Suspense>
      </div>

      
    </motion.div>
  );
}