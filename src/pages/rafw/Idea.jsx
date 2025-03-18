import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Base Swiper styles
import 'swiper/css/autoplay'; // Autoplay module CSS
import { Autoplay } from 'swiper/modules'; // Import from modules for v11
import './Rafw.css'; // Import the CSS file for styling

const Idea = () => {
  return (
    <div id="idea-grid" className="solit-el-1">
      <div className="h-full w-full">
        <div id="idea-grid" className="grid-container">
          <div className="grid-item item1">
            <img
              src="rafw/collage-image.png"
              className="w-full h-full object-cover"
              alt="Collage"
            />
          </div>
          <div className="grid-item item2">
            <img
              src="rafw/collage-image-v2.png"
              className="w-full h-full object-cover"
              alt="Collage"
            />
          </div>
          <div className="grid-item item3">
            <img
              src="rafw/leaf.gif"
              className="w-full h-full object-cover"
              alt="Collage"
            />
          </div>
          <div className="grid-item item4">
            <img
              src="rafw/collage-image-v3.png"
              className="w-full h-full object-cover"
              alt="Collage"
            />
          </div>
          <div className="grid-item item5 !bg-[#CC9933]">
            <div className="scrolling-text  p-20">
              <Swiper
                modules={[Autoplay]} // Use modules prop for v11
                direction="vertical"
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="custom-swiper" // Add this class
      style={{ height: "300px" }} // Add inline style for height
              >
                <SwiperSlide>
                  <p className="2xl:text-[100px] text-left">Cardo</p>
                  <p className="2xl:text-[100px]">Ab Bb Cc 123</p>
                </SwiperSlide>
                
                <SwiperSlide>
                  <p className="2xl:text-[100px]">New Line 1</p>
                  <p className="2xl:text-[100px]">New Line 2</p>
                </SwiperSlide>
                
                <SwiperSlide>
                  <p className="2xl:text-[100px]">Additional Line 1</p>
                  <p className="2xl:text-[100px]">Additional Line 2</p>
                </SwiperSlide>
               
              </Swiper>
            </div>
          </div>
          <div className="grid-item item6 !bg-[#000]">
          <div className="scrolling-text  p-20">
              <Swiper
                modules={[Autoplay]} // Use modules prop for v11
                direction="vertical"
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="custom-swiper" // Add this class
      style={{ height: "300px" }} // Add inline style for height
              >
                <SwiperSlide>
                  <p className="2xl:text-[100px] text-left text-white">Cardo</p>
                  <p className="2xl:text-[100px] text-white">Ab Bb Cc 123</p>
                </SwiperSlide>
                
                <SwiperSlide>
                  <p className="2xl:text-[100px] text-white">New Line 1</p>
                  <p className="2xl:text-[100px] text-white">New Line 2</p>
                </SwiperSlide>
                
                <SwiperSlide>
                  <p className="2xl:text-[100px] text-white">Additional Line 1</p>
                  <p className="2xl:text-[100px] text-white">Additional Line 2</p>
                </SwiperSlide>
               
              </Swiper>
            </div>
          </div>
          <div className="grid-item item7">
            <img
              src="rafw/collage-image-v4.png"
              className="w-full h-full object-cover"
              alt="Collage"
            />
          </div>
          <div className="grid-item item8">
            <img
              src="solit/solit-collage.jpg"
              className="w-full h-full object-cover"
              alt="Collage"
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Idea;
