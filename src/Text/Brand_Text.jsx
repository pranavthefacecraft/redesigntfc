import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import React, { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber';

export function BrandsText() {
    const { scene } = useThree();
    const textBrandsRef = useRef(null);

    useEffect(() => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');

        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        const textureLoader = new THREE.TextureLoader();
        const bakedTexture_brands = textureLoader.load('/images/ReBuild_texture_brand.jpg');
        bakedTexture_brands.flipY = false;
        bakedTexture_brands.colorSpace = THREE.SRGBColorSpace;

        const bakedMaterial_brands = new THREE.MeshBasicMaterial({ map: bakedTexture_brands });
        const outlineMaterial = new THREE.MeshBasicMaterial({ color: "black" });

        gltfLoader.load('/models/Outlines_brand.glb', (gltf) => {
            const textBrands = gltf.scene;
            textBrandsRef.current = textBrands;
            textBrands.position.x = 0.8

            textBrands.traverse((node) => {
                if (node.isMesh) {
                    if (node.name === "Text002") {
                        node.material = bakedMaterial_brands;
                    }
                    if (node.name === "Text002_1") {
                        node.material = outlineMaterial;
                    }
                }
            });

            scene.add(textBrands);
        });

        return () => {
            if (textBrandsRef.current) {
                textBrandsRef.current.traverse((node) => {
                    if (node.isMesh) {
                        node.geometry.dispose();
                        if (node.material.map) node.material.map.dispose();
                        node.material.dispose();
                    }
                });

                scene.remove(textBrandsRef.current);
                textBrandsRef.current = null;
            }

            bakedTexture_brands.dispose();
            bakedMaterial_brands.dispose();
            outlineMaterial.dispose();
        };
    }, [scene]);

    return null;
}
