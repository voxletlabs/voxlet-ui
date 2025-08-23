"use client"

import GridBeams from '@/registry/default/ui/animated-beams-grid-background'
import React from 'react'

const TestingPage = () => {

    return (
        // <div className='max-w-[85rem] mx-auto px-4 py-[6rem]'></div>
        <GridBeams gridSize={150} beamDuration={10} showBeams={true} />
    )
}

export default TestingPage