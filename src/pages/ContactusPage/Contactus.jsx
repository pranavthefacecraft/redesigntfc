import './contactus.css'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import PageFooter from '../Tanda/PageFooter';

const ContactUs = () => {
  const textRef = useRef(null);
  const cloudRef = useRef(null);

  useEffect(() => {
    // const wordElement = document.querySelector('.word');
    // const textDescription = document.querySelector('.text-description');
  
    // // Reset display property to ensure elements are visible on rerender
    // if (wordElement) {
    //   wordElement.style.display = 'block'; // or whatever the original display value is (e.g., 'inline', 'flex', etc.)
    // }
    // if (textDescription) {
    //   textDescription.style.display = 'block'; // or whatever the original display value is
    // }
  
    // // Animate .word element
    // gsap.to(wordElement, {
    //   y: 25,
    //   opacity: 1,
    //   duration: 1.3,
    //   stagger: 0.2,
    //   ease: "power3.out",
    // });
  
    // if (textDescription) {
    //   gsap.set(textDescription, { clipPath: 'inset(70% 0% 0% 0%)', opacity: 0 });
    //   gsap.to(textDescription, {
    //     clipPath: 'inset(0% 0% 0% 0%)',
    //     opacity: 1,
    //     duration: 1.5,
    //     ease: 'power3.out',
    //     delay: 0.5,
    //   });
    // }
  
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
     
     <section className="contactuswrapper hero w-full h-screen">
      <div className="title absolute pointer-events-none leading-[0.9em] left-[1.3em] top-[1.5em] text-[9em] font-Futura">
        <div className='relative'>TRANSFORM  <br/> </div>
        <div className='relative left-[1.8em]'>YOUR BRAND</div>
      </div>

      <div className="description absolute pointer-events-none leading-[1.4em] left-[56em] top-[13em] text-[1.15em]">
      We empower brands to evolve,<br/>  connect, and stand out in the <br/> digital world.
      </div>

      <div className="description absolute pointer-events-none leading-[1.4em] left-[5.0em] top-[12em] text-[2.5em]">
      Say Hello
      </div>

      {/* Email Text with Clickable Mailto Link */}
      <a href="mailto:hello@thefacecraft.com" 
        className="description absolute left-[5.0em] top-[13.3em] text-[2.5em] text-black underline font-thin ">
        hello@thefacecraft.com
      </a>





      </section>

      <section className="middle w-full h-screen bg-[#B1ACF5]">

      </section>

      <section className="footer w-full h-screen">
        <PageFooter/>
      </section>


    </div>
  );
};

export default ContactUs;
