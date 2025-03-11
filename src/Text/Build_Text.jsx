import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import React, { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'

export function BuildText() {
    const { scene } = useThree();
    const textBuildRef = useRef(null);

    useEffect(() => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');

        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        const textureLoader = new THREE.TextureLoader();
        const bakedTexture_build = textureLoader.load('/images/Build_bugfix.jpg');
        bakedTexture_build.flipY = false;
        bakedTexture_build.colorSpace = THREE.SRGBColorSpace;

        const bakedMaterial_build = new THREE.MeshBasicMaterial({ map: bakedTexture_build });
        const outlineMaterial = new THREE.MeshBasicMaterial({ color: "black" });

        gltfLoader.load('/models/Outlines_build.glb', (gltf) => {
            const textBuild = gltf.scene;
            textBuildRef.current = textBuild;
            textBuild.position.x = 0.8

            textBuild.traverse((node) => {
                if (node.isMesh) {
                    if (node.name === "Text001") {
                        node.material = bakedMaterial_build;
                    }
                    if (node.name === "Text001_1") {
                        node.material = outlineMaterial;
                    }
                }
            });

            scene.add(textBuild);
        });

        return () => {
            if (textBuildRef.current) {
                textBuildRef.current.traverse((node) => {
                    if (node.isMesh) {
                        node.geometry.dispose();
                        if (node.material.map) node.material.map.dispose();
                        node.material.dispose();
                    }
                });

                scene.remove(textBuildRef.current);
                textBuildRef.current = null;
            }

            bakedTexture_build.dispose();
            bakedMaterial_build.dispose();
            outlineMaterial.dispose();
        };
    }, [scene]);

    return null;
}
