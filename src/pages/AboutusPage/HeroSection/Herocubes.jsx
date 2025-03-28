import { Outlines } from '@react-three/drei'
import { InstancedRigidBodies, CuboidCollider, RigidBody, Physics } from '@react-three/rapier'
import { useMemo, useRef } from 'react'


export default function HeroCubes()
{

    const text = useRef()
    const instancedApi = useRef()
    const instancedMeshRef = useRef()
    

    const cubesCount = 50
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
                    (Math.random() - 1.5) * 2,
                ],
                rotation: [ Math.random(), Math.random(), Math.random() ],
                gravityScale: 1 
            })
        }

        return instances;
    }, [])

    return <>
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 2.5 } />

        <Physics debug={ false } gravity={ [ 0, - 9.08, 0 ] }>


            <RigidBody
                type="fixed"
                restitution={ 0 }
                friction={ 0.7 }
            >
                <mesh receiveShadow position-y={ -6 }>
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
                type= 'dynamic'
                ref={instancedApi}
            >
                <instancedMesh 
                    ref={instancedMeshRef}
                    castShadow 
                    receiveShadow 
                    args={ [ null, null, cubesCount ] }
                >
                    <boxGeometry args={[2,2,2]} />
                    <Outlines thickness={0.5}/>
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