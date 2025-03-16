import { useFrame } from "@react-three/fiber";
import { patchShaders } from "gl-noise";
import { easing } from "maath";
import * as React from "react";
import * as THREE from "three";
import CSM from "three-custom-shader-material";

import snoise from '../src/GeneralShaders/noise/snoise.glsl?raw';

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition; // use the world position instead of the uv
  void main() {
    vUv = uv;
    vPosition = position;
  }`;

const fragmentShader = patchShaders(/* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uThickness;
  uniform vec3 uColor;
  uniform float uProgress;
  ${snoise}
  
  void main() {
    gln_tFBMOpts opts = gln_tFBMOpts(1.0, 0.3, 2.0, 5.0, 1.0, 5, false, false);
    float noise = snoise(vPosition * 9.0) * 0.7;
    noise = gln_normalize(noise);

    float progress = uProgress;

    float alpha = step(1.0 - progress, noise);
    float border = step((1.0 - progress) - uThickness, noise) - alpha;
    
    csm_DiffuseColor.a = alpha + border;
    csm_DiffuseColor.rgb = mix(csm_DiffuseColor.rgb, uColor, border);
  }`);

export const DissolveMaterial = React.forwardRef(({

  baseMaterial,
  thickness = 0.03,
  color = "#eb5a13",
  intensity = 100,
  duration = 1.5,
  visible = false,
  onFadeOut,
  
}, ref) => {
  const uniforms = React.useRef({
    uThickness: { value: 0.01 },
    uColor: { value: new THREE.Color("#eb5a13").multiplyScalar(1) },
    uProgress: { value: visible ? 1 : 0 },
  });

  React.useEffect(() => {
    uniforms.current.uThickness.value = thickness;
    uniforms.current.uColor.value.set(color).multiplyScalar(intensity);
  }, [thickness, color, intensity]);

  useFrame((_state, delta) => {
    easing.damp(
      uniforms.current.uProgress,
      "value", 
      visible ? 1 : 0,
      duration,
      delta
    );

    if (uniforms.current.uProgress.value < 0.1 && onFadeOut) {
      onFadeOut();
    }
  });

  return (
    <CSM
      ref={ref} // Forward the ref to the CSM component
      baseMaterial={baseMaterial}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms.current}
      toneMapped={false}
      transparent
    />
  );
});