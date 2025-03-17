import "./style.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";
import gsap from "gsap";

// Pages
import Home from "./pages/home/Home.jsx";
import Solit from "./pages/solit/Solit.jsx";
import Tanda from "./pages/Tanda/Tanda.jsx";
import HomePage from "./HomePage/HomePage";
import ProjectPage from "./ProjectPage/ProjectPage";
import AboutusPage from "./AboutusPage/AboutusPage";

// 3D Components
import { Cube } from "./HomePage/HomePageCube";
import Rubix from "./HomePage/HomePageRubix";
import { Le } from "./HomePage/HomePageRubixtwo";
import { Phone } from "./AboutusPage/Phone";
import { BuildBrands } from "./HomePage/BuildBrands";

// Root element
const root = ReactDOM.createRoot(document.querySelector("#root"));

// MainpageWithRouting Component
function MainpageWithRouting() {
  const navigate = useNavigate();
  const [isCubeClicked, setIsCubeClicked] = useState(false);
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);

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
      >
        <EffectComposer sampling={64}>
          
          <ambientLight intensity={3.5} />

          <Suspense fallback={null}>
            {/* <Cube isClicked={isCubeClicked} onClick={handleCubeClick} /> */}
            {/* <Rubix/> */}
          </Suspense>

          <ScrollControls pages={1.0} damping={3.0} smoothTime={0.35}>
            <HomePage />
            {/* <Rubix isCubeClicked={isCubeClicked} onClick={handleCubeClick} /> */}
            <Le isClicked={isCubeClicked} visible={!isPhoneClicked} onClick={handleCubeClick} />
            <Phone isPhoneClicked={isPhoneClicked} visible={!isCubeClicked} onClick={handlePhoneClick} />
            {/* <Phone visible={!isCubeClicked}  /> */}
          </ScrollControls>

          <BuildBrands visible={!isCubeClicked && !isPhoneClicked} />
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
          {/* Additional routes */}
          <Route path="/solit" element={<Solit />} />
          <Route path="/Tanda" element={<Tanda />} />
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