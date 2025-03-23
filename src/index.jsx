import './style.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";
import gsap from "gsap";

// Pages
import Solit from "./pages/solit/Solit.jsx";
import Tanda from "./pages/Tanda/Tanda.jsx";
import Rafw from "./pages/rafw/Rafw.jsx";
import HomePage from "./HomePage/HomePage";
import ProjectPage from './pages/ProjectPage/ProjectPage.jsx';
import AboutusPage from "./pages/AboutusPage/AboutusPage.jsx";
import ServicePage from "./pages/ServicePage/ServicePage.jsx";

// 3D Components
import { Le } from "./HomePage/HomePageRubixtwo.jsx";
import { Phone } from "./pages/AboutusPage/Phone.jsx";
import { BuildBrands } from "./HomePage/BuildBrands";
import { HomeIsland } from "./pages/ServicePage/HomeIsland.jsx"

// Root element
const root = ReactDOM.createRoot(document.getElementById("root"));


// MainpageWithRouting Component
function MainpageWithRouting() {
  const navigate = useNavigate();
  const [isCubeClicked, setIsCubeClicked] = useState(false);
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);
  const [isIslandClicked, setIsIslandClicked] = useState(false);

  const handleCubeClick = (e) => {
    e.stopPropagation();
    setIsCubeClicked(true);

    setTimeout(() => {
      navigate("/ProjectPage");
    }, 6500);
  };

  const handlePhoneClick = (e) => {
    e.stopPropagation();
    setIsPhoneClicked(true);

    setTimeout(() => {
      navigate("/AboutusPage");
    }, 10000);
  };

  const handleIslandClick = (e) => {
    e.stopPropagation();
    setIsIslandClicked(true);

    // setTimeout(() => {
    //   navigate("/ServicePage");
    // }, 10000);
  };


  const handlePhonePageTransition = async (e) => {
    e.stopPropagation();

    const phonebackground = document.querySelector("#phonebackground");

    gsap.to(phonebackground, {
      opacity: 1,
      duration: 1.3,
      ease: "power4.out",
    });

    setTimeout(() => {
      navigate("/AboutusPage");
    }, 2000);
  };

  return (
    <>
      {isPhoneClicked && (
        <div className="AboutusPagebox" onClick={handlePhonePageTransition}></div>
      )}
      <Canvas
        shadows
        orthographic
        camera={{ zoom: 147, near: 0.0001, position: [60, 20, 50] }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
        style={{ background: null }} // Set background color here
      >
        <EffectComposer sampling={64}>
          <ScrollControls pages={1.0} damping={3.0} smoothTime={0.35}>
            <Suspense fallback={null}>
              <Le isClicked={isCubeClicked} visible={!isPhoneClicked && !isIslandClicked} onClick={handleCubeClick} />
              <Phone isPhoneClicked={isPhoneClicked} visible={!isCubeClicked && !isIslandClicked} onClick={handlePhoneClick} />
              <HomeIsland isIslandClicked={isIslandClicked} visible={!isCubeClicked && !isPhoneClicked}  onClick={handleIslandClick} />
            </Suspense>
            <HomePage />
            <BuildBrands visible={!isCubeClicked && !isPhoneClicked && !isIslandClicked} />
          </ScrollControls>
        </EffectComposer>
      </Canvas>
    </>
  );
}

// App Component
function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          {/* Home route */}
          <Route
            path="/"
            element={
              <motion.div
                id="exit"
                className="fixed top-0 left-0 w-full h-full z-[-1]"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <Suspense fallback={null}>
                  <MainpageWithRouting />
                </Suspense>
              </motion.div>
            }
          />
          {/* ProjectPage route */}
          <Route
            path="/ProjectPage"
            element={
              <Suspense fallback={null}>
                <ProjectPage />
              </Suspense>
            }
          />
          {/* AboutusPage route */}
          <Route
            path="/AboutusPage"
            element={
              <Suspense fallback={null}>
                <AboutusPage />
              </Suspense>
            }
          />
          {/* ServicePage route */}
          <Route
            path="/ServicePage"
            element={
              <Suspense fallback={null}>
                <ServicePage />
              </Suspense>
            }
          />
          
          {/* Additional routes */}
          <Route path="/solit" element={<Solit />} />
          <Route path="/Tanda" element={<Tanda />} />
          <Route path="/Rafw" element={<Rafw />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

// Render the app
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);