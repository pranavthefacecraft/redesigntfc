import React, { useEffect, useRef } from 'react';
import { Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const section = document.querySelector('.video')  
  const videoRef = useRef(null);


  useEffect(() => {
    if (!videoRef.current) return;

   
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.set(videoRef.current, { scale: 0.8 });
      },
      onLeave: () => {
        gsap.to(videoRef.current, {
          scale: 1,
          duration: 1,
          ease: "power2.out"
        });
      },
      onEnterBack: () => {
        gsap.to(videoRef.current, {
          scale: 0.8,
          duration: 1,
          ease: "power2.out"
        });
      },
     
    });

    return () => {
    
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    };
  }, []);

  return (
    <Suspense>
      <div 
        className="h-[100vh] w-screen absolute top-0 left-0"
      >
        <video
          ref={videoRef}
          src="./AboutusPage/Videos/tanda_r4_subtitles_sfx.mp4"
          autoPlay
          loop
          muted
          controls
          className="video absolute top-0 left-0 h-full w-full rounded-[2em] object-cover origin-center" // Added origin-center for proper scaling
        />
      </div>
    </Suspense>
  );
};

export default Video;