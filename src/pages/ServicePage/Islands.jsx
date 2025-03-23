import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';

export function Islands(props) {
  const group = useRef();
  const scroll = useScroll();
  const { height } = useThree((state) => state.viewport);
  const { nodes, materials, animations } = useGLTF('./ServicePage/Islands.glb');
  const { actions, names } = useAnimations(animations, group);

  // GSAP animation reference
  const scaleAnimation = useRef(null);

  useEffect(() => {
    // Initialize the animation in a paused state
    actions[names[0]].reset().play().paused = true;

    // Initialize GSAP animation for scaling
    scaleAnimation.current = gsap.to(group.current.scale, {
      x: 0.9, // Scale down to 80%
      y: 0.9,
      z: 0.9,
      duration: 1, // Animation duration
      paused: true, // Start paused
      ease: 'power2.inOut', // Smooth easing
    });
  }, [actions, names]);

  useFrame(() => {
    // Define the scroll range (e.g., from 0.25 to 0.75 of the total scrollable area)
    const scrollRangeStart = 0.15;
    const scrollRangeEnd = 0.50;

    const offset = scroll.offset;
    const animationTime = actions[names[0]].getClip().duration * offset * 0.90;
    actions[names[0]].time = animationTime;
    scaleAnimation.current.progress(animationTime * 0.2); // Set GSAP animation progress

    // Get the normalized scroll value within the defined range
    const scrollRange = scroll.range(scrollRangeStart, scrollRangeEnd - scrollRangeStart);

    // Interpolate the y and z displacement based on the scroll range
    const yDisplacement = scrollRange * height * 0.66; // Adjust multiplier for y movement
    const zDisplacement = scrollRange * height * 0.1; // Adjust multiplier for z movement

    // Update the model's position
    if (group.current) {
      group.current.position.y = -height * 0.75 + yDisplacement; // Adjust initial y position
      group.current.position.z = zDisplacement; // Adjust z position
    }

 
  });

  return (
    <group ref={group} {...props} dispose={null} rotation={[0.3,-0.9,0.03]} position={[-1.3,0,0]} scale={[1.3,1.3,1.3]}>
      <ambientLight intensity={2}/>
      <group name="Scene">
        <mesh
          name="Island_big"
          castShadow
          receiveShadow
          geometry={nodes.Island_big.geometry}
          material={materials.Island_big}
          position={[0.395, 0.663, -0.484]}
          rotation={[0, 0.318, 0]}>
          <group
            name="LivingRoom"
            position={[0.615, -0.201, 0.924]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.041}>
            <group
              name="644c8f08750e4362bafef715b26f90effbx"
              position={[-0.051, 0.594, -0.013]}
              rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode002">
                <group name="sofa" position={[-1.509, 0.4, 0.115]} scale={0.848}>
                  <group
                    name="pCube31"
                    position={[1.591, 0.574, -0.19]}
                    scale={[1.25, 0.357, 3.468]}>
                    <mesh
                      name="pCube31__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube31__0.geometry}
                      material={materials.pCube31__0}
                    />
                  </group>
                  <group name="pCube32" position={[1.601, 0.546, 1.447]} scale={[1.25, 0.95, 0.27]}>
                    <mesh
                      name="pCube32_Mat3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube32_Mat3_0.geometry}
                      material={materials['Mat.3']}
                    />
                  </group>
                  <group name="pCube33" position={[1.601, 0.546, -1.9]} scale={[1.25, 0.95, 0.27]}>
                    <mesh
                      name="pCube33_Mat3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube33_Mat3_0.geometry}
                      material={materials['Mat.3']}
                    />
                  </group>
                  <group
                    name="pCube34"
                    position={[2.172, 0.988, -0.236]}
                    rotation={[Math.PI / 2, 1.396, -Math.PI / 2]}
                    scale={[3.059, 0.95, 0.27]}>
                    <mesh
                      name="pCube34_Mat3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube34_Mat3_0.geometry}
                      material={materials['Mat.3']}
                    />
                  </group>
                  <group
                    name="pCube35"
                    position={[2.004, 0.988, -0.236]}
                    rotation={[Math.PI / 2, 1.396, -Math.PI / 2]}
                    scale={[0.925, 0.95, 0.047]}>
                    <mesh
                      name="pCube35_beliy_mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube35_beliy_mat_0.geometry}
                      material={materials.beliy_mat}
                    />
                  </group>
                  <group
                    name="pCube36"
                    position={[2.004, 0.988, -1.219]}
                    rotation={[Math.PI / 2, 1.396, -Math.PI / 2]}
                    scale={[0.925, 0.95, 0.047]}>
                    <mesh
                      name="pCube36_beliy_mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube36_beliy_mat_0.geometry}
                      material={materials.beliy_mat}
                    />
                  </group>
                  <group
                    name="pCube37"
                    position={[2.004, 0.988, 0.746]}
                    rotation={[Math.PI / 2, 1.396, -Math.PI / 2]}
                    scale={[0.925, 0.95, 0.047]}>
                    <mesh
                      name="pCube37_beliy_mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube37_beliy_mat_0.geometry}
                      material={materials.beliy_mat}
                    />
                  </group>
                  <group
                    name="pCube38"
                    position={[1.591, 0.732, -0.227]}
                    scale={[1.216, 0.095, 0.904]}>
                    <mesh
                      name="pCube38_beliy_mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube38_beliy_mat_0.geometry}
                      material={materials.beliy_mat}
                    />
                  </group>
                  <group
                    name="pCube39"
                    position={[1.591, 0.732, 0.751]}
                    scale={[1.216, 0.095, 0.904]}>
                    <mesh
                      name="pCube39_beliy_mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube39_beliy_mat_0.geometry}
                      material={materials.beliy_mat}
                    />
                  </group>
                  <group
                    name="pCube40"
                    position={[1.591, 0.732, -1.205]}
                    scale={[1.216, 0.095, 0.904]}>
                    <mesh
                      name="pCube40_beliy_mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube40_beliy_mat_0.geometry}
                      material={materials.beliy_mat}
                    />
                  </group>
                </group>
                <group name="��������_����_��������">
                  <group name="pCylinder13" />
                  <group
                    name="pCylinder14"
                    position={[-3.137, 1.35, -0.924]}
                    scale={[0.092, 0.043, 0.092]}
                  />
                  <group
                    name="����������10"
                    position={[-3.111, 0.684, -0.269]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.302, 0.386, 0.246]}
                  />
                  <group
                    name="����������11"
                    position={[-3.111, 0.684, 0.052]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.302, 0.386, 0.246]}
                  />
                  <group
                    name="����������12"
                    position={[-3.111, 0.669, 0.343]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.017, 0.386, 0.233]}
                  />
                  <group
                    name="����������13"
                    position={[-3.111, 0.669, 0.369]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.017, 0.386, 0.233]}
                  />
                  <group
                    name="����������14"
                    position={[-3.111, 0.669, 0.392]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.017, 0.386, 0.233]}
                  />
                  <group
                    name="����������15"
                    position={[-3.111, 0.669, 0.418]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.017, 0.386, 0.233]}
                  />
                  <group
                    name="����������16"
                    position={[-3.111, 0.669, 0.444]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.017, 0.386, 0.233]}>
                    <mesh
                      name="����������16_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['����������16_Mat_0'].geometry}
                      material={materials['material.001']}
                    />
                  </group>
                  <group
                    name="����������18"
                    position={[-3.111, 0.669, 0.496]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.017, 0.386, 0.233]}
                  />
                  <group
                    name="����������19"
                    position={[-3.111, 0.669, 0.522]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.017, 0.386, 0.233]}
                  />
                  <group
                    name="����������2"
                    position={[-3.111, 0.531, -0.257]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={[0.07, 0.386, 2.305]}
                  />
                  <group
                    name="����������20"
                    position={[-3.111, 0.669, 0.548]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.017, 0.386, 0.233]}
                  />
                  <group
                    name="����������21"
                    position={[-3.111, 0.669, 0.577]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.017, 0.386, 0.233]}
                  />
                  <group
                    name="����������22"
                    position={[-3.111, 0.669, 0.603]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.017, 0.386, 0.233]}
                  />
                  <group
                    name="����������24"
                    position={[-3.111, 0.957, 0.496]}
                    rotation={[-Math.PI, 0, Math.PI / 2]}
                    scale={[0.087, 0.386, 0.46]}>
                    <mesh
                      name="����������24_Mat1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['����������24_Mat1_0'].geometry}
                      material={materials['Mat.1']}
                    />
                  </group>
                  <group
                    name="����������24_1"
                    position={[-3.111, 1.021, 0.496]}
                    rotation={[-Math.PI, 0, Math.PI / 2]}
                    scale={[0.087, 0.386, 0.46]}>
                    <mesh
                      name="����������24_1_Mat4_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['����������24_1_Mat4_0'].geometry}
                      material={materials['Mat.4']}
                    />
                  </group>
                  <group
                    name="����������25"
                    position={[-3.091, 1.039, -0.048]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.159, 0.386, 0.246]}
                  />
                  <group
                    name="����������26"
                    position={[-3.091, 1.024, -1.013]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.408, 0.386, 0.235]}
                  />
                  <group
                    name="����������26_1"
                    position={[-3.091, 1.157, -1.013]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.408, 0.386, 0.235]}
                  />
                  <group
                    name="����������27"
                    position={[-3.111, 1.318, -0.277]}
                    rotation={[-Math.PI, 0, Math.PI / 2]}
                    scale={[0.026, 0.186, 0.644]}
                  />
                  <group
                    name="����������28"
                    position={[-3.111, 1.341, -0.043]}
                    rotation={[-Math.PI, 0, Math.PI / 2]}
                    scale={[0.026, 0.033, 0.126]}
                  />
                  <group
                    name="����������29"
                    position={[-3.111, 1.341, -0.477]}
                    rotation={[-Math.PI, 0, Math.PI / 2]}
                    scale={[0.026, 0.033, 0.126]}
                  />
                  <group
                    name="����������3"
                    position={[-3.111, 0.887, -0.257]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={[0.07, 0.386, 2.305]}>
                    <mesh
                      name="����������3_beliy_mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['����������3_beliy_mat_0'].geometry}
                      material={materials.beliy_mat}
                    />
                  </group>
                  <group
                    name="����������30"
                    position={[-3.111, 1.396, -0.531]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.026, 0.033, 0.126]}
                  />
                  <group
                    name="����������32"
                    position={[-3.111, 1.446, -0.477]}
                    rotation={[-Math.PI, 0, Math.PI / 2]}
                    scale={[0.026, 0.033, 0.126]}
                  />
                  <group
                    name="����������33"
                    position={[-3.111, 1.405, -0.018]}
                    rotation={[1.134, 0, Math.PI / 2]}
                    scale={[0.026, 0.033, 0.126]}
                  />
                  <group
                    name="����������34"
                    position={[-3.111, 1.405, -0.067]}
                    rotation={[2.007, 0, -Math.PI / 2]}
                    scale={[0.026, 0.033, 0.126]}
                  />
                  <group
                    name="����������35"
                    position={[-3.111, 1.455, -0.042]}
                    rotation={[-Math.PI, 0, Math.PI / 2]}
                    scale={[0.026, 0.033, 0.02]}
                  />
                  <group
                    name="����������36"
                    position={[-3.111, 1.399, -0.329]}
                    rotation={[0.873, 0, Math.PI / 2]}
                    scale={[0.026, 0.033, 0.159]}
                  />
                  <group
                    name="����������37"
                    position={[-3.111, 1.399, -0.329]}
                    rotation={[2.269, 0, -Math.PI / 2]}
                    scale={[0.026, 0.033, 0.159]}
                  />
                  <group name="����������38" position={[0, 0, -0.12]} />
                  <group
                    name="����������4"
                    position={[-3.111, 1.275, -0.257]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={[0.07, 0.386, 2.305]}
                  />
                  <group
                    name="����������5"
                    position={[-3.111, 1.076, -1.374]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.07, 0.386, 0.402]}
                  />
                  <group
                    name="����������6"
                    position={[-3.111, 1.076, -0.629]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.07, 0.386, 0.402]}
                  />
                  <group
                    name="����������7"
                    position={[-3.111, 1.076, 0.077]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.07, 0.386, 0.402]}
                  />
                  <group
                    name="����������8"
                    position={[-3.111, 1.076, 0.862]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.07, 0.386, 0.402]}>
                    <mesh
                      name="����������8_beliy_mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['����������8_beliy_mat_0'].geometry}
                      material={materials.beliy_mat}
                    />
                  </group>
                  <group
                    name="����������9"
                    position={[-3.111, 0.684, -0.589]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.302, 0.386, 0.246]}>
                    <mesh
                      name="����������9_beliy_mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['����������9_beliy_mat_0'].geometry}
                      material={materials.beliy_mat}
                    />
                  </group>
                </group>
                <group name="����������001">
                  <group
                    name="pCube21"
                    position={[0.919, 1.623, -3.047]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={[0.31, 0.083, 2.514]}
                  />
                </group>
                <group name="����������1">
                  <group name="����������" position={[0, 0, 0.039]} />
                </group>
                <group
                  name="����������1001"
                  position={[-3.098, 2.377, -0.257]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[1.323, 0.067, 2.249]}>
                  <mesh
                    name="����������1_Mat6_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['����������1_Mat6_0'].geometry}
                    material={materials['Mat.6']}
                    scale={1.253}
                  />
                  <mesh
                    name="����������1_Mat7_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['����������1_Mat7_0'].geometry}
                    material={materials['Mat.7']}
                    scale={1.253}
                  />
                  <group
                    name="����������_����������"
                    position={[0, 1.768, 0]}
                    scale={[0.558, 2.419, 0.306]}
                  />
                </group>
                <mesh
                  name="����������10_beliy_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������10_beliy_mat_0'].geometry}
                  material={materials.beliy_mat}
                  position={[-3.111, 0.684, -0.269]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.302, 0.386, 0.246]}
                />
                <mesh
                  name="����������11_beliy_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������11_beliy_mat_0'].geometry}
                  material={materials.beliy_mat}
                  position={[-3.111, 0.684, 0.052]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.302, 0.386, 0.246]}
                />
                <mesh
                  name="����������12_Mat4_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������12_Mat4_0'].geometry}
                  material={materials['Mat.4']}
                  position={[-3.111, 0.669, 0.343]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.017, 0.386, 0.233]}
                />
                <mesh
                  name="����������13_Mat5_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������13_Mat5_0'].geometry}
                  material={materials['Mat.5']}
                  position={[-3.111, 0.669, 0.369]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.017, 0.386, 0.233]}
                />
                <mesh
                  name="����������14__0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������14__0'].geometry}
                  material={materials.pCube31__0}
                  position={[-3.111, 0.669, 0.392]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.017, 0.386, 0.233]}
                />
                <mesh
                  name="����������15_Mat2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������15_Mat2_0'].geometry}
                  material={materials['Mat.2']}
                  position={[-3.111, 0.669, 0.418]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.017, 0.386, 0.233]}
                />
                <group
                  name="����������17"
                  position={[-3.111, 0.669, 0.47]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.017, 0.386, 0.233]}>
                  <mesh
                    name="����������17_beliy_mat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['����������17_beliy_mat_0'].geometry}
                    material={materials.beliy_mat}
                  />
                </group>
                <mesh
                  name="����������18_Mat1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������18_Mat1_0'].geometry}
                  material={materials['Mat.1']}
                  position={[-3.111, 0.669, 0.496]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.017, 0.386, 0.233]}
                />
                <mesh
                  name="����������19_Mat2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������19_Mat2_0'].geometry}
                  material={materials['Mat.2']}
                  position={[-3.111, 0.669, 0.522]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.017, 0.386, 0.233]}
                />
                <mesh
                  name="����������20_Mat4_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������20_Mat4_0'].geometry}
                  material={materials['Mat.4']}
                  position={[-3.111, 0.669, 0.548]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.017, 0.386, 0.233]}
                />
                <mesh
                  name="����������21_Mat1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������21_Mat1_0'].geometry}
                  material={materials['Mat.1']}
                  position={[-3.111, 0.669, 0.577]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.017, 0.386, 0.233]}
                />
                <mesh
                  name="����������22_Mat3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������22_Mat3_0'].geometry}
                  material={materials['Mat.3']}
                  position={[-3.111, 0.669, 0.603]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.017, 0.386, 0.233]}
                />
                <mesh
                  name="����������25_Mat3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������25_Mat3_0'].geometry}
                  material={materials['Mat.3']}
                  position={[-3.091, 1.039, -0.048]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.159, 0.386, 0.246]}
                />
                <mesh
                  name="����������26_1_Mat1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������26_1_Mat1_0'].geometry}
                  material={materials['Mat.1']}
                  position={[-3.091, 1.157, -1.013]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.408, 0.386, 0.235]}
                />
                <mesh
                  name="����������26_Mat3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������26_Mat3_0'].geometry}
                  material={materials['Mat.3']}
                  position={[-3.091, 1.024, -1.013]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.408, 0.386, 0.235]}
                />
                <mesh
                  name="����������27_Mat1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������27_Mat1_0'].geometry}
                  material={materials['Mat.1']}
                  position={[-3.111, 1.318, -0.277]}
                  rotation={[Math.PI, 0, Math.PI / 2]}
                  scale={[0.026, 0.186, 0.644]}
                />
                <mesh
                  name="����������28_Mat8_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������28_Mat8_0'].geometry}
                  material={materials['Mat.8']}
                  position={[-3.111, 1.341, -0.043]}
                  rotation={[Math.PI, 0, Math.PI / 2]}
                  scale={[0.026, 0.033, 0.126]}
                />
                <mesh
                  name="����������29_beliy_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������29_beliy_mat_0'].geometry}
                  material={materials.beliy_mat}
                  position={[-3.111, 1.341, -0.477]}
                  rotation={[Math.PI, 0, Math.PI / 2]}
                  scale={[0.026, 0.033, 0.126]}
                />
                <mesh
                  name="����������2_beliy_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������2_beliy_mat_0'].geometry}
                  material={materials.beliy_mat}
                  position={[-3.111, 0.531, -0.257]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[0.07, 0.386, 2.305]}
                />
                <mesh
                  name="����������30_beliy_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������30_beliy_mat_0'].geometry}
                  material={materials.beliy_mat}
                  position={[-3.111, 1.396, -0.531]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.026, 0.033, 0.126]}
                />
                <group
                  name="����������31"
                  position={[-3.111, 1.396, -0.422]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.026, 0.033, 0.126]}>
                  <mesh
                    name="����������31_beliy_mat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['����������31_beliy_mat_0'].geometry}
                    material={materials.beliy_mat}
                  />
                </group>
                <mesh
                  name="����������32_beliy_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������32_beliy_mat_0'].geometry}
                  material={materials.beliy_mat}
                  position={[-3.111, 1.446, -0.477]}
                  rotation={[Math.PI, 0, Math.PI / 2]}
                  scale={[0.026, 0.033, 0.126]}
                />
                <mesh
                  name="����������33_Mat8_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������33_Mat8_0'].geometry}
                  material={materials['Mat.8']}
                  position={[-3.111, 1.405, -0.018]}
                  rotation={[1.134, 0, Math.PI / 2]}
                  scale={[0.026, 0.033, 0.126]}
                />
                <mesh
                  name="����������34_Mat8_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������34_Mat8_0'].geometry}
                  material={materials['Mat.8']}
                  position={[-3.111, 1.405, -0.067]}
                  rotation={[2.007, 0, -Math.PI / 2]}
                  scale={[0.026, 0.033, 0.126]}
                />
                <mesh
                  name="����������35_Mat8_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������35_Mat8_0'].geometry}
                  material={materials['Mat.8']}
                  position={[-3.111, 1.455, -0.042]}
                  rotation={[Math.PI, 0, Math.PI / 2]}
                  scale={[0.026, 0.033, 0.02]}
                />
                <mesh
                  name="����������36_Mat9_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������36_Mat9_0'].geometry}
                  material={materials['Mat.9']}
                  position={[-3.111, 1.399, -0.329]}
                  rotation={[0.873, 0, Math.PI / 2]}
                  scale={[0.026, 0.033, 0.159]}
                />
                <mesh
                  name="����������37_Mat9_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������37_Mat9_0'].geometry}
                  material={materials['Mat.9']}
                  position={[-3.111, 1.399, -0.329]}
                  rotation={[2.269, 0, -Math.PI / 2]}
                  scale={[0.026, 0.033, 0.159]}
                />
                <mesh
                  name="����������38_Mat3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������38_Mat3_0'].geometry}
                  material={materials['Mat.3']}
                  position={[0, 0, -0.12]}
                />
                <mesh
                  name="����������4_beliy_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������4_beliy_mat_0'].geometry}
                  material={materials.beliy_mat}
                  position={[-3.111, 1.275, -0.257]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[0.07, 0.386, 2.305]}
                />
                <mesh
                  name="����������5_beliy_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������5_beliy_mat_0'].geometry}
                  material={materials.beliy_mat}
                  position={[-3.111, 1.076, -1.374]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.07, 0.386, 0.402]}
                />
                <mesh
                  name="����������6_beliy_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������6_beliy_mat_0'].geometry}
                  material={materials.beliy_mat}
                  position={[-3.111, 1.076, -0.629]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.07, 0.386, 0.402]}
                />
                <mesh
                  name="����������7_beliy_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['����������7_beliy_mat_0'].geometry}
                  material={materials.beliy_mat}
                  position={[-3.111, 1.076, 0.077]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.07, 0.386, 0.402]}
                />
                <group
                  name="������������_����_���005"
                  position={[-3.349, 1.947, -0.257]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[4.06, 0.212, 3.158]}
                />
                <group name="��������������">
                  <group
                    name="pCylinder9_2"
                    position={[-3.016, 1.998, -1.782]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.14, 0.015, 0.14]}
                  />
                  <group name="������������_����_���002" />
                </group>
                <group name="��������������001">
                  <group
                    name="pCube1"
                    position={[-0.396, 0, -0.169]}
                    scale={[6.128, 0.212, 6.128]}
                  />
                  <group
                    name="pCube2"
                    position={[-3.529, 2.222, -0.282]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={[4.75, 0.212, 6.224]}
                  />
                  <group
                    name="pCube3"
                    position={[-0.396, 2.222, -3.285]}
                    rotation={[-Math.PI / 2, -1.571, 0]}
                    scale={[4.75, 0.212, 6.085]}
                  />
                  <group name="��������">
                    <group
                      name="pCube4"
                      position={[-0.414, 0.159, 2.792]}
                      rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                      scale={[0.584, 0.212, 6.317]}
                    />
                    <group
                      name="pCube5"
                      position={[2.635, 0.159, -0.184]}
                      rotation={[Math.PI, 0, -Math.PI / 2]}
                      scale={[0.584, 0.212, 6.167]}
                    />
                  </group>
                </group>
                <group name="��������������002">
                  <group
                    name="pCube22"
                    position={[0.202, 3.044, -3.21]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[1.573, 0.172, 1.26]}
                  />
                  <group
                    name="pCube23"
                    position={[1.754, 3.044, -3.21]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[1.573, 0.172, 1.26]}
                  />
                </group>
                <group name="��������������2" position={[0, 0, 3.057]}>
                  <group name="������������_����_����" />
                </group>
                <group name="����������������_����">
                  <group
                    name="pCube29"
                    position={[-3.456, 4.451, -0.116]}
                    rotation={[Math.PI, 0, -Math.PI / 2]}
                    scale={[0.412, 0.291, 6.077]}
                  />
                  <group
                    name="pCube30"
                    position={[-0.385, 4.462, -3.24]}
                    rotation={[-Math.PI / 2, -1.571, 0]}
                    scale={[0.398, 0.239, 6.218]}
                  />
                  <group
                    name="pCube6"
                    position={[-3.456, 0.159, -0.224]}
                    rotation={[Math.PI, 0, -Math.PI / 2]}
                    scale={[0.398, 0.212, 6.067]}
                  />
                  <group
                    name="pCube7"
                    position={[-0.387, 0.159, -3.224]}
                    rotation={[-Math.PI / 2, -1.571, 0]}
                    scale={[0.398, 0.212, 6.029]}
                  />
                </group>
                <group name="���������������������">
                  <group name="pCube26" />
                </group>
              </group>
            </group>
            <mesh
              name="pCylinder13_Mat5_0"
              castShadow
              receiveShadow
              geometry={nodes.pCylinder13_Mat5_0.geometry}
              material={materials['Mat.5']}
              position={[-0.051, 0.594, -0.013]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="pCylinder14_Mat4_0"
              castShadow
              receiveShadow
              geometry={nodes.pCylinder14_Mat4_0.geometry}
              material={materials['Mat.4']}
              position={[-3.188, 1.518, 1.337]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.092, 0.043, 0.092]}
            />
          </group>
          <group
            name="Ragdoll_Cat"
            position={[0.722, 0.004, 1.074]}
            rotation={[Math.PI, -0.125, Math.PI]}
            scale={4.366}>
            <mesh
              name="Body"
              castShadow
              receiveShadow
              geometry={nodes.Body.geometry}
              material={materials['Body.001']}
            />
            <mesh
              name="Lashes"
              castShadow
              receiveShadow
              geometry={nodes.Lashes.geometry}
              material={materials.Lashes}
            />
            <mesh
              name="Left_Eye"
              castShadow
              receiveShadow
              geometry={nodes.Left_Eye.geometry}
              material={materials.Eyes}
              rotation={[-0.165, 0.239, 0.011]}
            />
            <mesh
              name="Muzzle"
              castShadow
              receiveShadow
              geometry={nodes.Muzzle.geometry}
              material={materials.Muzzle}
            />
            <mesh
              name="Right_Eye"
              castShadow
              receiveShadow
              geometry={nodes.Right_Eye.geometry}
              material={materials.Eyes}
              rotation={[-0.165, -0.23, -0.067]}
            />
            <mesh
              name="Tongue"
              castShadow
              receiveShadow
              geometry={nodes.Tongue.geometry}
              material={materials.Tongue}
            />
          </group>
        </mesh>
        <mesh
          name="Island_middle"
          castShadow
          receiveShadow
          geometry={nodes.Island_middle.geometry}
          material={materials.Island_middle}
          position={[-3.759, 0.629, -1.371]}
          rotation={[0, -1.235, 0]}
          scale={1.003}>
          <group
            name="Camera_film_model"
            position={[0.57, -0.208, 0.428]}
            rotation={[-3.135, -1.24, -3.137]}
            scale={0.997}>
            <mesh
              name="Camera002"
              castShadow
              receiveShadow
              geometry={nodes.Camera002.geometry}
              material={materials.Camera}
            />
            <mesh
              name="Lens"
              castShadow
              receiveShadow
              geometry={nodes.Lens.geometry}
              material={materials.Lens}
              position={[-3.231, -3.279, -2.182]}
              rotation={[Math.PI, -0.002, Math.PI]}
            />
          </group>
          <mesh
            name="Movie_numberator"
            castShadow
            receiveShadow
            geometry={nodes.Movie_numberator.geometry}
            material={materials['Material.004']}
            position={[-0.168, 1.236, 1.798]}
            rotation={[-2.944, 0.491, 2.945]}
            scale={8.192}>
            <mesh
              name="Bolt003"
              castShadow
              receiveShadow
              geometry={nodes.Bolt003.geometry}
              material={materials['Material.006']}
              position={[-0.158, 0.113, 0.006]}
            />
            <mesh
              name="Bolt004"
              castShadow
              receiveShadow
              geometry={nodes.Bolt004.geometry}
              material={materials['Material.006']}
              position={[-0.135, 0.113, 0.006]}
            />
            <mesh
              name="Bolt005"
              castShadow
              receiveShadow
              geometry={nodes.Bolt005.geometry}
              material={materials['Material.006']}
              position={[-0.159, 0.155, 0.005]}
            />
            <mesh
              name="Bolt006"
              castShadow
              receiveShadow
              geometry={nodes.Bolt006.geometry}
              material={materials['Material.006']}
              position={[-0.158, 0.113, -0.006]}
            />
            <mesh
              name="Bolt007"
              castShadow
              receiveShadow
              geometry={nodes.Bolt007.geometry}
              material={materials['Material.006']}
              position={[-0.135, 0.113, -0.006]}
            />
            <mesh
              name="Bolt008"
              castShadow
              receiveShadow
              geometry={nodes.Bolt008.geometry}
              material={materials['Material.006']}
              position={[-0.159, 0.155, -0.005]}
            />
            <mesh
              name="Cube006"
              castShadow
              receiveShadow
              geometry={nodes.Cube006.geometry}
              material={materials['Material.005']}
              position={[0, 0.115, 0]}
            />
            <mesh
              name="Cube008"
              castShadow
              receiveShadow
              geometry={nodes.Cube008.geometry}
              material={materials.Material}
              position={[0.149, 0.115, 0]}
            />
            <mesh
              name="Plane003"
              castShadow
              receiveShadow
              geometry={nodes.Plane003.geometry}
              material={materials['Material.003']}
              position={[-0.153, 0.116, 0.009]}>
              <mesh
                name="Cube007"
                castShadow
                receiveShadow
                geometry={nodes.Cube007.geometry}
                material={materials['Material.005']}
                position={[-0.006, 0.039, -0.004]}
                rotation={[0, 0, 0.202]}>
                <mesh
                  name="Cube009"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube009.geometry}
                  material={materials.Material}
                  position={[0.308, -0.002, -0.005]}
                />
              </mesh>
            </mesh>
            <mesh
              name="Plane008"
              castShadow
              receiveShadow
              geometry={nodes.Plane008.geometry}
              material={materials['Material.003']}
              position={[-0.153, 0.116, -0.009]}
            />
          </mesh>
        </mesh>
        <mesh
          name="Island_middle001"
          castShadow
          receiveShadow
          geometry={nodes.Island_middle001.geometry}
          material={materials['Island_middle.001']}
          position={[0.24, 0.524, -4.251]}
          rotation={[0, 0.365, 0]}
          scale={0.977}>
          <group
            name="Macbook"
            position={[0.555, 0.527, -0.407]}
            rotation={[-Math.PI / 2, 0, -1.575]}
            scale={0.005}>
            <group
              name="Macbook_Cartoon_2fbx"
              position={[1.371, 7.675, -57.106]}
              rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode">
                <group
                  name="MacBook_1"
                  position={[8.578, 13.853, 133.996]}
                  rotation={[0, 1.571, 0]}>
                  <mesh
                    name="MacBook_1_MacBook1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.MacBook_1_MacBook1_0.geometry}
                    material={materials['MacBook.1']}
                  />
                  <mesh
                    name="MacBook_1_MacBook1_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.MacBook_1_MacBook1_0001.geometry}
                    material={materials['MacBook.1']}
                  />
                </group>
                <group
                  name="Muis_1"
                  position={[-8.578, -13.853, -133.996]}
                  rotation={[Math.PI, -0.281, Math.PI]}>
                  <mesh
                    name="Muis_1_Mat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Muis_1_Mat_0.geometry}
                    material={materials.Mat_0}
                  />
                  <mesh
                    name="Muis_1_Mat_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Muis_1_Mat_2.geometry}
                    material={materials.material}
                  />
                </group>
              </group>
            </group>
          </group>
        </mesh>
        <mesh
          name="Island_small"
          castShadow
          receiveShadow
          geometry={nodes.Island_small.geometry}
          material={materials.Island_small}
          position={[-3.077, 0.562, -4.226]}
          rotation={[0, 0.26, -Math.PI]}
          scale={[-0.433, -0.276, -0.643]}>
          <group
            name="iPhone"
            position={[-0.092, 1.01, 1.768]}
            rotation={[0.792, -0.234, -2.882]}
            scale={[-8.467, -10.807, -11.13]}>
            <group
              name="Phone"
              position={[-0.015, 0.018, -0.032]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}>
              <group
                name="Base"
                position={[-31.625, 96.071, 200.697]}
                rotation={[-0.762, -0.446, 0]}
                scale={25.838}>
                <mesh
                  name="Cube011"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube011.geometry}
                  material={materials['Glass Blue']}
                />
                <mesh
                  name="Cube011_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube011_1.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group name="Frame">
                <mesh
                  name="Camera_1_PhoneFace_Mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera_1_PhoneFace_Mat_0.geometry}
                  material={materials.PhoneFace_Mat}
                  position={[-69.949, 94.712, 197.648]}
                  rotation={[-0.762, -0.631, 0]}
                  scale={25.838}
                />
                <mesh
                  name="Camera_2_PhoneFace_Mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera_2_PhoneFace_Mat_0.geometry}
                  material={materials.PhoneFace_Mat}
                  position={[-69.949, 94.712, 197.648]}
                  rotation={[-0.762, -0.631, 0]}
                  scale={25.838}
                />
                <mesh
                  name="Camera_Front_PhoneButton_Mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera_Front_PhoneButton_Mat_0.geometry}
                  material={materials.PhoneButton_Mat}
                  position={[-69.949, 94.712, 197.648]}
                  rotation={[-0.762, -0.631, 0]}
                  scale={25.838}
                />
                <mesh
                  name="Camera_Light_Camera_Light1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera_Light_Camera_Light1_0.geometry}
                  material={materials.Camera_Light1}
                  position={[-69.949, 94.712, 197.648]}
                  rotation={[-0.762, -0.631, 0]}
                  scale={25.838}
                />
                <mesh
                  name="Phone_Camera_PhoneCase_Mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Phone_Camera_PhoneCase_Mat_0.geometry}
                  material={materials.PhoneCase_Mat}
                  position={[-69.949, 94.712, 197.648]}
                  rotation={[-0.762, -0.631, 0]}
                  scale={25.838}
                />
                <mesh
                  name="Phone_Case_PhoneCase_Mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Phone_Case_PhoneCase_Mat_0.geometry}
                  material={materials.PhoneCase_Mat}
                  position={[-69.949, 94.712, 197.648]}
                  rotation={[-0.762, -0.631, 0]}
                  scale={25.838}
                />
                <mesh
                  name="Power_Button_PhoneButton_Mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Power_Button_PhoneButton_Mat_0.geometry}
                  material={materials.PhoneButton_Mat}
                  position={[-69.949, 94.712, 197.648]}
                  rotation={[-0.762, -0.631, 0]}
                  scale={25.838}
                />
                <mesh
                  name="Volume_Down_PhoneButton_Mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Volume_Down_PhoneButton_Mat_0.geometry}
                  material={materials.PhoneButton_Mat}
                  position={[-69.949, 94.712, 197.648]}
                  rotation={[-0.762, -0.631, 0]}
                  scale={25.838}
                />
                <mesh
                  name="Volume_Up_PhoneButton_Mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Volume_Up_PhoneButton_Mat_0.geometry}
                  material={materials.PhoneButton_Mat}
                  position={[-69.949, 94.712, 197.648]}
                  rotation={[-0.762, -0.631, 0]}
                  scale={25.838}
                />
              </group>
            </group>
            <mesh
              name="Phone_Display"
              castShadow
              receiveShadow
              geometry={nodes.Phone_Display.geometry}
              material={materials.PhoneFace_Mat}
              position={[-0.015, 0.004, 0.422]}
              rotation={[2.362, 0, 0.002]}
              scale={[0.14, 0.258, 0.282]}
            />
          </group>
          <group
            name="Plant"
            position={[-1.561, -0.409, -1.059]}
            rotation={[1.55, 0, 0]}
            scale={[-0.029, -0.027, -0.051]}>
            <mesh
              name="Plant_01"
              castShadow
              receiveShadow
              geometry={nodes.Plant_01.geometry}
              material={materials['Material.008']}
              position={[-10.133, -21.171, -8.341]}
              rotation={[Math.PI / 2, -0.866, 0]}
              scale={3.496}
            />
            <mesh
              name="Pot"
              castShadow
              receiveShadow
              geometry={nodes.Pot.geometry}
              material={materials['material.002']}
              position={[-10.133, -21.171, -8.341]}
              rotation={[Math.PI / 2, -0.866, 0]}
              scale={3.496}
            />
            <mesh
              name="Soil"
              castShadow
              receiveShadow
              geometry={nodes.Soil.geometry}
              material={materials.Dirt}
              position={[-10.133, -21.171, -8.341]}
              rotation={[Math.PI / 2, -0.866, 0]}
              scale={3.496}
            />
          </group>
        </mesh>
        <group name="Pot001" scale={[1, 0.618, 1]} />
        <group name="Soil001" position={[0, 1.486, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Islands.glb')
