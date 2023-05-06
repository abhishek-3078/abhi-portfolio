import React,{Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {
  Decal,Float,OrbitControls,Preload,useTexture
} from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal]=useTexture([props.imgURL])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.5]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading/>
        <Decal
        position={[0,0,1]}
        map={decal}
        rotation={[2*Math.PI,0,6.25]}
        ></Decal>
      </mesh>
    </Float>
  )
}
const BallCanvas=({icon})=>{
  return (
    <Canvas frameloop='demand'
    // shadows
    // camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}}>
      {/* using Suspense with a fallback component allows you to handle the loading of 3D models or other assets asynchronously.  */}
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}
        />
        <Ball imgURL={icon}/>
      </Suspense>
    </Canvas>
  )
}
export default BallCanvas