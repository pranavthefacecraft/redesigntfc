import './aboutus.css'
import { Suspense } from 'react';

import HeroSection from './HeroSection/HeroSection';
import FooterSection from './FooterSection/FooterSection';
import LastSection from './LastSection/Lastsection';
import ImageSlider from './ImageSlider';
import Video from './Elements/Video';

import  PageFooter  from '../Tanda/PageFooter'

export default function AboutusPage() {

  const texts = [
    { first: "Digital Branding", second: "Agency" },
    { first: "Web & App", second: "Development" },
    { first: "Social Media", second: "Marketing" }
  ];
  
  return (

    <Suspense fallback={<div>Loading</div>}>

    <div className="relative w-full overflow-hidden">
      
      <div className="fixed top-0 left-0 w-full h-screen z-[0]">

      <Suspense fallback={null}>
        <HeroSection/>
      </Suspense>  
        
      </div>


      <section className="section flex items-center h-screen ">
      
      </section>
      
      <section className="section flex  items-center h-screen">
       
      </section>
      
      <section className="section flex items-center h-screen ">
      
      </section>

      <div className="relative z-10 bg-white" style={{ marginTop: '50vh' }}> 

        <section className="section bg-white flex items-center h-screen mt-[200vh]">
          
        <div className="sectionone text-black h-screen w-screen pointer-events-none">

          <div className="relative top-[0.8em] left-[3em] leading-[1.1em] font-futura text-[4.5em] w-screen">
                We are a global studio based in <br /> Luzern, Switzerland — with leading <br /> talent across animation,
                strategy, <br /> design, production, and beyond.
               </div>
               <div className="relative top-[5em] left-[7.2em] font-futura text-[1.9em] text-[#BF1736]">Agency</div>
               <div className="relative top-[5.4em] left-[35.5em] font-futura text-[1.3em] whitespace-nowrap">
                From Swiss-based startup to global design studio.
               </div>
               <div className="sectionone-text relative top-[8.5em] left-[46.2em] leading-[1.3em] font-montserrat text-[#6F6F6F] text-[1.0em] w-[40vw]">
                We specialize in strategic brand development, web <br /> design, marketing, and visual storytelling,
                crafting <br /> bespoke digital narratives that embody a brand's <br /> identity and vision.
          </div>

        </div>

        </section>

        <section className="section bg-white flex items-center h-screen mt-[3em]">

          <Video/>
        
        </section>
        
        <section className="section bg-black flex items-center h-screen mt-[10em]">
          
         <div className="sectionone bg-white h-screen w-screen pointer-events-none">
         
           <div className="sectiontwo-title relative top-[0.1em] left-[1.8em] leading-[1.1em] font-futura text-[#8C86DB] text-[7.2em] w-[50vw]">
                  We Transform <br /> Brands
                 </div>
                 <div className="sectionone relative top-[-1.6em] left-[35.4em] font-futura text-[1.3em] whitespace-nowrap">
                  From brand development to digital marketing
                 </div>
                 <div className="sectionone-text relative top-[-2.6] left-[46.1em] leading-[1.3em] font-montserrat text-[#6F6F6F] text-[1.0em] w-[40vw]">
                  We establish ourselves as a dependable partner <br /> for our clients, delivering impactful messages <br /> and serving as a one-stop center for all digital <br /> services a company may need.
           </div>

          <Suspense fallback={null}>
           <ImageSlider/>
          </Suspense> 
         
         </div>

        </section>

     
        <div className="w-full h-screen relative z-10 bg-gradient-to-b from-[#f4a9a9] to-[#a3a0ff] mt-[10em]">
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

            <Suspense fallback={null}>
               <FooterSection />
            </Suspense> 
        </div>


        {/* <div className="w-full h-screen relative z-10 bg-[#a3a0ff] ">
            <Suspense fallback={null}>
               <LastSection />
            </Suspense> 
        </div> */}


        
        <Suspense fallback={null}>
        <PageFooter/>
        </Suspense>
        

    
     </div>
    </div>
    </Suspense>
  );
}