import React, { useState } from 'react';
import './css/main.css';
import logo1 from '../common/images/the-facecraft-hover-v5.gif'; // Adjust the path if necessary
import section1Image from '../common/images/cube-v1.png'; // Adjust the path if necessary
import section2Image from '../common/images/section2.png'; // Adjust the path if necessary
import section3Image from '../common/images/section3.png'; // Adjust the path if necessary
import section4Image from '../common/images/section4.png'; // Adjust the path if necessary
import section5Image from '../common/images/section5.png'; // Adjust the path if necessary

const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(section1Image);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (event, image) => {
    event.preventDefault();
    setCurrentImage(image);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo1} alt="Logo" className="w-40 logo1" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`menu-modal ${isMenuOpen ? 'open' : ''}`}>
          <div className="close-icon" onClick={toggleMenu}>
            ✖
          </div>
          <div className="menu-content">
            <div className="menu-items">
              <ul>
                <li><a href="#section1" onClick={(e) => handleMenuClick(e, section1Image)}>Home</a></li>
                <li><a href="#section2" onClick={(e) => handleMenuClick(e, section2Image)}>Services</a></li>
                <li><a href="#section3" onClick={(e) => handleMenuClick(e, section3Image)}>Work</a></li>
                <li><a href="#section4" onClick={(e) => handleMenuClick(e, section4Image)}>Agency</a></li>
                <li><a href="#section5" onClick={(e) => handleMenuClick(e, section5Image)}>Contact</a></li>
              </ul>
            </div>
            <div className="menu-images">
              <img src={currentImage} alt="Section" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default PageHeader;
