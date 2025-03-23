import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import One from './ModelSlider/One';
import Two from './ModelSlider/Two';
import Three from './ModelSlider/Three';
import SplitType from 'split-type';

const Scene = () => {
  const groupone = useRef();
  const grouptwo = useRef();
  const groupthree = useRef();

  const { width, height } = useThree((state) => state.viewport);

  useEffect(() => {
    // Wait for the DOM elements to be available
    const initAnimations = () => {
      const one = document.querySelectorAll('.my-text-one');
      const two = document.querySelectorAll('.my-text-two');
      const three = document.querySelectorAll('.my-text-three');

      if (one.length === 0 || two.length === 0 || three.length === 0) {
        // If elements are not available, retry after a short delay
        setTimeout(initAnimations, 100);
        return;
      }

      const textone = new SplitType(one);
      const texttwo = new SplitType(two);
      const textthree = new SplitType(three);

      gsap.set([textone.chars, texttwo.chars, textthree.chars], {
        y: 100,
        opacity: 0 
      });

      // Ensure refs are initialized
      if (!groupone.current || !grouptwo.current || !groupthree.current) return;


      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 }); 

     
      tl.to(groupone.current.position, {
        x: width * 0.15,
        y: -height * 5.35,
        z: 0,
        duration: 2,
        ease: 'power4.inOut',
      })
      .to(textone.chars, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out'
      }, "-=1.0") 
      .to(groupone.current.position, {
        x: -width * 0.05,
        y: -height * 4.51,
        z: 0,
        duration: 1,
        ease: 'power4.inOut',
        delay: 0.5,
      })
      .to(textone.chars, {
        y: -100,
        opacity: 0,
        duration: 1.0,
        ease: 'power4.in'
      }, "+=0.5") 

      
      tl.to(grouptwo.current.position, {
        x: width * 0.15,
        y: -height * 5.35,
        z: 0,
        duration: 2,
        delay: -1,
        ease: 'power4.inOut',
      })
      .to(texttwo.chars, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out'
      }, "-=1.0") 
      .to(grouptwo.current.position, {
        x: -width * 0.05,
        y: -height * 4.51,
        z: 0,
        duration: 1,
        ease: 'power4.inOut',
        delay: 0.5,
      })
      .to(texttwo.chars, {
        y: -100,
        opacity: 0,
        duration: 1.0,
        ease: 'power4.in'
      }, "+=0.5") 

      
      tl.to(groupthree.current.position, {
        x: width * 0.15,
        y: -height * 5.35,
        z: 0,
        duration: 2,
        delay: -1,
        ease: 'power4.inOut',
      })
      .to(textthree.chars, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out'
      }, "-=1.0")
      .to(groupthree.current.position, {
        x: -width * 0.05,
        y: -height * 4.51,
        z: 0,
        duration: 1,
        ease: 'power4.inOut',
        delay: 0.5,
      })
      .to(textthree.chars, {
        y: -100,
        opacity: 0,
        duration: 1.0,
        ease: 'power4.in'
      }, "+=0.5") 
    };

    
    initAnimations();

    return () => {
      gsap.globalTimeline.clear();
    };
  }, [width, height]);

  return (
    <>
      <One ref={groupone} />
      <Two ref={grouptwo} />
      <Three ref={groupthree} />
    </>
  );
};

export default Scene;