import * as THREE from 'three';
import { useThree, useFrame, extend } from '@react-three/fiber';
import { useScroll, shaderMaterial } from '@react-three/drei';
import { useRef } from 'react';

// Gradient Material for Planefour
const GradientMaterial = shaderMaterial(
  { 
    uColorTop: new THREE.Color("#efb7b7"), // Soft pink
    uColorBottom: new THREE.Color("#a9a0ff") // Pastel purple
  },
  // Vertex Shader
  /*glsl*/`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  /*glsl*/`
    varying vec2 vUv;
    uniform vec3 uColorTop;
    uniform vec3 uColorBottom;

    void main() {
      vec3 gradientColor = mix(uColorBottom, uColorTop, vUv.y - 0.04);
      gl_FragColor = vec4(pow(gradientColor, vec3(1.0 / 2.2)), 1.0);
    }
  `
);

extend({ GradientMaterial });

export function Planefour() {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <>
      <ambientLight />
      <mesh position={[0, -height * 5.4, 0]}>
        <planeGeometry args={[width, height]} />
        <gradientMaterial />
      </mesh>
    </>
  );
}

// Gradient Material for Planefive
const GradientMaterialtwo = shaderMaterial(
  { 
    uColorCenter: new THREE.Color("#cbc7fe"), // Soft pastel purple (center)
    uColorEdge: new THREE.Color("#a9a0ff") // Light bluish purple (edges)
  },
  // Vertex Shader
  /*glsl*/`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `, 
  // Fragment Shader (Radial Gradient)
  /*glsl*/`
    varying vec2 vUv;
    uniform vec3 uColorCenter;
    uniform vec3 uColorEdge;

    void main() {
      float dist = distance(vUv, vec2(0.5, 0.5)); // Distance from center
      float gradientFactor = smoothstep(0.0, 0.4, dist); // Controls falloff
      vec3 gradientColor = mix(uColorCenter, uColorEdge, gradientFactor);
      gl_FragColor = vec4(pow(gradientColor, vec3(1.0 / 2.2)), 1.0);
    }
  `
);

extend({ GradientMaterialtwo });

export function Planefive() {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <>
      <ambientLight />
      <mesh position={[0, -height * 4.4, 0]}>
        <planeGeometry args={[width, height]} />
        <gradientMaterialtwo />
      </mesh>
    </>
  );
}

// Gradient Material for Planehero
const GradientMaterialhero = shaderMaterial(
  { 
    uColorCenter: new THREE.Color("#cbc7fe"), // Soft pastel purple (center)
    uColorEdge: new THREE.Color("#a9a0ff") // Light bluish purple (edges)
  },
  // Vertex Shader
  /*glsl*/`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `, 
  // Fragment Shader (Radial Gradient)
  /*glsl*/`
    varying vec2 vUv;
    uniform vec3 uColorCenter;
    uniform vec3 uColorEdge;

    void main() {
      gl_FragColor = vec4(pow(uColorEdge, vec3(1.0 / 2.2)), 1.0);
    }
  `
);

extend({ GradientMaterialhero });

export function Planehero() {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <>
      <ambientLight />
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[width, height * 3.01]} />
        <gradientMaterialhero />
      </mesh>
    </>
  );
}

