import React, { useState, useEffect } from "react";
import "./css/main.css";
import logo1 from "../common/images/logo-tfc.png"; // Adjust the path if necessary
import circleLogo from "../common/images/logo-tfc.png"; // Adjust the path if necessary
import section1Image from "../common/images/cube-v1.png"; // Adjust the path if necessary
import section2Image from "../common/images/section2.png"; // Adjust the path if necessary
import section3Image from "../common/images/section3.png"; // Adjust the path if necessary
import section4Image from "../common/images/section4.png"; // Adjust the path if necessary
import section5Image from "../common/images/section5.png"; // Adjust the path if necessary

const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(section1Image);
  const [logoImage, setLogoImage] = useState(logo1); // State for the logo image
  const [cubeClass, setCubeClass] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoImage((prevLogo) => (prevLogo === logo1 ? circleLogo : logo1)); // Toggle between the two logos
    }, 5000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (event, image) => {
    event.preventDefault();
    setCurrentImage(image);
  };

  const handleMouseEnter = (className) => {
    setCubeClass(className);
  };

  const handleMouseLeave = () => {
    setCubeClass("");
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src={logo1}
            alt="Logo"
            className={`logo1 h-40 ${logoImage === circleLogo ? "fade-out" : ""}`}
          />
          <img
            src={circleLogo}
            alt="Circle Logo"
            className={`logo1 h-40 ${logoImage === circleLogo ? "" : "fade-out"}`}
          />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div
            className={`cube ${cubeClass}`}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="square"
              onMouseEnter={() => handleMouseEnter("rotate-close")}
            >
              Close
            </div>
            <div
              className="square2"
              onMouseEnter={() => handleMouseEnter("hover-menu")}
            >
              Menu
            </div>
            <div className="square3"></div>
          </div>
        </div>
        <div className={`menu-modal ${isMenuOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={toggleMenu}>
            ✖
          </div>
          <div className="menu-content">
            <div className="menu-items">
              <ul>
                <li>
                  <a
                    href="#section1"
                    onMouseEnter={(e) => handleMenuClick(e, section1Image)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#section2"
                    onMouseEnter={(e) => handleMenuClick(e, section2Image)}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#section3"
                    onMouseEnter={(e) => handleMenuClick(e, section3Image)}
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#section4"
                    onMouseEnter={(e) => handleMenuClick(e, section4Image)}
                  >
                    Agency
                  </a>
                </li>
                <li>
                  <a
                    href="#section5"
                    onMouseEnter={(e) => handleMenuClick(e, section5Image)}
                  >
                    Contact
                  </a>
                </li>
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
