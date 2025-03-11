import { Perf } from "r3f-perf";
import {
  DepthOfField,
  Noise,
  ToneMapping,
  EffectComposer,
  SMAA,
} from "@react-three/postprocessing";
import {
  GlitchMode,
  BlendFunction,
  ToneMappingMode,
  EdgeDetectionMode,
  SMAAPreset,
} from "postprocessing";
import Drunk from "./Drunk.jsx";
import { useControls } from "leva";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";

import Text from "../../Text/3Dtext.jsx";
import Clouds from "./Clouds.jsx";

export default function Scene() {
  const { gl, scene } = useThree();

  const drunkRef = useRef();

  // Using the CSS Background
  scene.background = null;

  const drunkProps = useControls("Drunk Effect", {
    frequency: { value: 0.1, min: 0, max: 20, step: 0.1 },
    amplitude: { value: 0.009, min: 0, max: 1, step: 0.01 },
  });

  return (
    <>
      {/* <color args={ [ '#ffffff' ] } attach="background" /> */}

      <EffectComposer multisampling={32}>
        {/* <ToneMapping mode={ ToneMappingMode.ACES_FILMIC } /> */}
        {/* <Noise
                premultiply
                blendFunction={ BlendFunction.SOFT_LIGHT }
            /> */}
        {/* <Bloom
                mipmapBlur
                intensity={ 0.5 }
                luminanceThreshold={ 0 }
            /> */}
        {/* <DepthOfField
                focusDistance={ 0.025 }
                focalLength={ 0.025 }
                bokehScale={ 6 }
            /> */}
        {/* <Drunk
                ref={ drunkRef }
                { ...drunkProps }
                blendFunction={ BlendFunction.MULTIPLY }
            /> */}
        {/* <SMAA preset={SMAAPreset.High}
             edgeDetectionMode={EdgeDetectionMode.COLOR} /> */}
      </EffectComposer>

      {/* <Perf position="top-left" /> */}

      <Text />
    </>
  );
}
