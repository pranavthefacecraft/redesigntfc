// ImageSlider.js
import React from 'react';
import { Suspense } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
    {
      img: './AboutusPage/Images/image-two.png'
    },
    {
      img: './AboutusPage/Images/image-one.png'
    },
    {
      img: './AboutusPage/Images/image-three.png'
    }
  ]
  

const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    rtl: true,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <Suspense>
    <div className="w-screen h-[57vh] flex py-[2em] relative top-[3em]">
    <div className="w-full max-w-[1800px] px-0 mr-5"> {/* Adjust max-width as needed */}
      <Slider {...settings}>
        {data.map((d, index) => (
          <div className='flex items-center justify-center' key={index}>
            <div className='rounded-xl mx-[3em]'>
              <img src={d.img} alt={`Slide ${index}`} className='h-[20em] w-full transition-all duration-700 rounded-lg object-cover'/>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  </Suspense>
  );
};

export default ImageSlider;