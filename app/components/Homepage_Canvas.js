'use client'

import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import Home_Page from './Home_Page'

const canvas_variant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'easeInOut',
            duration: .25,
            delay: 3
        }
    }
}

const Homepage_Canvas = () => {
    return (
        <m.div initial="hidden" animate="visible" variants={canvas_variant} className='hero_canvas'>
            <Canvas>
                <PerspectiveCamera makeDefault
                    position={[0, 0, 5]}
                    fov={25}
                    />
                <Environment files='./neon_photostudio_1k.hdr' />
                <OrbitControls />
                <Home_Page />
            </Canvas>
        </m.div>
    )
}

export default Homepage_Canvas