import { useGLTF, OrbitControls, Text, Outlines } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { InstancedRigidBodies, CylinderCollider, BallCollider, CuboidCollider, RigidBody, Physics } from '@react-three/rapier'
import { useMemo, useEffect, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

import { App } from './Heroballs'

export default function HeroCubes()
{
    const cube = useRef()
    const cubeMesh = useRef()
    const text = useRef()
    const [cubesShouldFall, setCubesShouldFall] = useState(false)
    const instancedApi = useRef()
    const instancedMeshRef = useRef()
    
    useEffect(() => {
        if (cubeMesh.current) {
            // Create the floating animation
            gsap.to(cubeMesh.current.position, {
                y: "+=" + 0.2, // Move up by 0.2 units
                duration: 1.5,
                repeat: -1, // Infinite repeat
                yoyo: true, // Go back and forth
                ease: "sine.inOut"
            });
        }
    }, [])

    const cubeJump = () =>
    {
        setCubesShouldFall(true)
    }


    const cubesCount = 100
    const instances = useMemo(() =>
    {
        const instances = [];

        for(let i = 0; i < cubesCount; i++)
        {
            instances.push({
                key: 'instance_' + i,
                position:
                [
                    (Math.random() - 0.5) * 10,
                    6 + i * 0.2,
                    (Math.random() + 4.0) * 2,
                ],
                rotation: [ Math.random(), Math.random(), Math.random() ],
                gravityScale: 1 
            })
        }

        return instances;
    }, [])

    return <>
        <Perf position="top-left"/>

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.2 } />

        <Physics debug={ false } gravity={ [ 0, - 9.08, 0 ] }>

            <RigidBody
                ref={ cube }
                type='fixed'
                position={ [ 0, 0, 10 ] }
                rotation={ [ 0, 0, 0 ] }
                gravityScale={ 1 }
                restitution={ 0 }
                friction={ 0.7 }
                colliders={ false }
            >
                <mesh castShadow scale={[1.4,1.4,1.4]} onClick={ cubeJump } ref={cubeMesh}>
                <Text ref={text} position={[0.0,0.0,1.0]} font='./ProjectPage/Fonts/FuturaCyrillicBold.ttf' fontSize={0.13}  anchorX="center" anchorY="middle">Click me</Text>
                    <boxGeometry />
                    <Outlines thickness={1} />
                    <meshStandardMaterial color= "#8F87F1" transparent={true} />
                </mesh>
                <CuboidCollider mass={ 2 } args={ [ 0.7, 0.7, 0.7 ] } />
            </RigidBody>

            <RigidBody
                type="fixed"
                restitution={ 0 }
                friction={ 0.7 }
            >
                <mesh receiveShadow position-y={ - 4 }>
                    <boxGeometry args={ [ 1000, 0.5, 1000 ] } />
                    <meshStandardMaterial color="greenyellow" transparent={true} opacity={0} visible={false}/>
                </mesh>
            </RigidBody>

            <RigidBody type="fixed">
                <CuboidCollider args={ [ 12, 10, 0.5 ] } position={ [ 0, 1, 0 ] } />
                <CuboidCollider args={ [ 0.5, 10, 5 ] } position={ [ 9, 1, 0 ] } />
                <CuboidCollider args={ [ 0.5, 10, 5 ] } position={ [ - 9, 1, 0 ] } />
            </RigidBody>

            <InstancedRigidBodies 
                instances={ instances }
                type= { cubesShouldFall ? 'dynamic' : 'fixed' }
                ref={instancedApi}
            >
                <instancedMesh 
                    ref={instancedMeshRef}
                    castShadow 
                    receiveShadow 
                    args={ [ null, null, cubesCount ] }
                >
                    <boxGeometry />
                    <Outlines thickness={1} />
                    <meshStandardMaterial 
                        color="tomato" 
                        transparent={true}
                        opacity={1}
                    />
                </instancedMesh>
            </InstancedRigidBodies>

        </Physics>
    </>
}