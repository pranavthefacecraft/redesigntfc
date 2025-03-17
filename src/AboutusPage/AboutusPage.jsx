import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useScroll, Scroll, ScrollControls } from '@react-three/drei';
import gsap from 'gsap';
import { Planefour, Planefive, Planehero, Videos } from './ThreeDComponents';

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
          camera={{ position: [0, 0, 20], fov: 32, near: 0.001, far: 1000 }}
          dpr={[1, 2]}
        >
          <ScrollControls damping={0.5} pages={6.271}>
            <Scroll>
              <Videos />
            </Scroll>

            <Scroll html>
              <div className="section-hero">
              <div className="hero-text-title">A Brand Focused <br /> Digital Partner</div>
              </div>
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
              <div className="sectionfour">
            

              </div>
            </Scroll>

            <Scroll>
              <Planefour />
              <Planehero />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </motion.div>
    </>
  );
}