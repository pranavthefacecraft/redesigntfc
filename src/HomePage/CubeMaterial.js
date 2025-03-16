import * as THREE from 'three';

// Import shaders
import lightpurplevertex from '../HomePage/Shaders/vertex.glsl';
import lightpurplefragment from '../HomePage/Shaders/fragment.glsl';

// Load textures
const LogostexturePaths = [
  '../ProjectPage/Logos/bni.png',
  '../ProjectPage/Logos/E.png',
  '../ProjectPage/Logos/en.png',
  '../ProjectPage/Logos/Rafw.png',
  '../ProjectPage/Logos/tree.png'
];

const textures = LogostexturePaths.map((path) => {
  const texture = new THREE.TextureLoader().load(path);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = true;
  texture.flipY = false;
  return texture;
});

// Define different rotation angles for each material
const rotationAngles = [0, 0, 0, 0, 0]; 

// Create uniforms for each texture with unique rotation angles
const uniformsArray = textures.map((texture, index) => ({
  uLogoTexture: { value: texture },
  uRotationAngle: { value: rotationAngles[index] } 
}));

// Function to create a material with specific uniforms
const createMaterial = (uniforms) => {
  return new THREE.ShaderMaterial({
    vertexShader: lightpurplevertex,
    fragmentShader: lightpurplefragment,
    uniforms: uniforms,
    transparent: true
  });
};

// Create materials for each texture
export const lightpurple_bni = createMaterial(uniformsArray[0]); // bni.png
export const lightpurple_E = createMaterial(uniformsArray[1]);   // E.png
export const lightpurple_en = createMaterial(uniformsArray[2]);  // en.png
export const lightpurple_Rafw = createMaterial(uniformsArray[3]); // Rafw.png
export const lightpurple_tree = createMaterial(uniformsArray[4]); // tree.png