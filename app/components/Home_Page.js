import { useGLTF, Float } from '@react-three/drei'
import React from 'react'

const Home_Page = () => {
    const scene = useGLTF('./DNA_page.glb')

    return (
        // <Float speed={5} floatIntensity={2} >
            <primitive object={scene.scene} />
        // </Float>
    )
}

export default Home_Page