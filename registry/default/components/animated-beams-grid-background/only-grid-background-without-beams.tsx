import React from 'react'
import GridBeams from '@/registry/default/ui/animated-beams-grid-background'

export default function OnlyGridBackgroundWithoutBeams() {
    return (
        <GridBeams gridSize={150} beamDuration={1} showBeams={false} />
    )
}
