import "./Home.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Scene from "./Scene.jsx";
import Clouds from "./Clouds.jsx";

const Home = () => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 147, position: [60, 20, 50] }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      className="home"
    >
      <ScrollControls pages={1} damping={1.0}>
        <Clouds />
      </ScrollControls>

      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default Home;
