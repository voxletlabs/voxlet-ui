"use client"

import { useEffect, useRef, useState } from "react"

interface GridPoint {
  x: number
  y: number
}

interface Beam {
  startPoint: GridPoint
  endPoint: GridPoint
  progress: number
  speed: number
  color: string
  size: number
  duration: number
  animationProgress: number
}

interface GridBeamsProps {
  beamColor?: string | string[]
  gridSize?: number
  beamSize?: number
  beamDuration?: number
  showBeams?: boolean
}

export default function GridBeams({
  beamColor = "#ffffff",
  gridSize = 150,
  beamSize = 1.5,
  beamDuration = 1,
  showBeams = true,
}: GridBeamsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gridPointsRef = useRef<GridPoint[]>([])
  const beamsRef = useRef<Beam[]>([])
  const animationRef = useRef<number>()
  const [beamColors, setBeamColors] = useState<string[]>(Array.isArray(beamColor) ? beamColor : [beamColor])

  // Update beam colors when prop changes
  useEffect(() => {
    setBeamColors(Array.isArray(beamColor) ? beamColor : [beamColor])
  }, [beamColor])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Grid settings
    const gridColor = "rgba(255, 255, 255, 0.15)"
    const dotSize = 2.5
    const dotColor = "rgba(255, 255, 255, 0.4)"

    // Generate grid points
    const generateGridPoints = () => {
      const points: GridPoint[] = []

      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          points.push({ x, y })
        }
      }

      gridPointsRef.current = points

      // Initialize beams after grid points are generated
      if (beamsRef.current.length === 0) {
        beamsRef.current = Array(8)
          .fill(0)
          .map(() => createRandomBeam())
      }
    }

    // Create a random beam between two grid points
    const createRandomBeam = (): Beam => {
      const points = gridPointsRef.current
      if (points.length < 2) return createEmptyBeam()

      const startPointIndex = Math.floor(Math.random() * points.length)
      const startPoint = points[startPointIndex]

      // Find adjacent points (horizontally or vertically)
      const adjacentPoints: GridPoint[] = []

      points.forEach((point) => {
        // Check if point is horizontally adjacent
        if (point.y === startPoint.y && Math.abs(point.x - startPoint.x) === gridSize) {
          adjacentPoints.push(point)
        }
        // Check if point is vertically adjacent
        else if (point.x === startPoint.x && Math.abs(point.y - startPoint.y) === gridSize) {
          adjacentPoints.push(point)
        }
      })

      if (adjacentPoints.length === 0) return createEmptyBeam()

      const endPoint = adjacentPoints[Math.floor(Math.random() * adjacentPoints.length)]

      // Get a random color from the beamColors array
      const color = beamColors[Math.floor(Math.random() * beamColors.length)]

      // Use the same color for start and end to create a uniform beam
      const duration = beamDuration + Math.random() * 1 // Add a little randomness

      return {
        startPoint,
        endPoint,
        progress: 0,
        speed: 1 / (60 * duration), // Speed based on 60fps and duration
        color,
        size: beamSize + Math.random() * 0.5,
        duration,
        animationProgress: 0,
      }
    }

    const createEmptyBeam = (): Beam => ({
      startPoint: { x: 0, y: 0 },
      endPoint: { x: 0, y: 0 },
      progress: 0,
      speed: 0,
      color: "#ffffff",
      size: 0,
      duration: 0,
      animationProgress: 0,
    })

    // Define resize function after the functions it depends on
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      generateGridPoints()
    }

    // Initialize canvas
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const updateBeams = () => {
      beamsRef.current = beamsRef.current.map((beam) => {
        // Update the animation progress
        beam.animationProgress += beam.speed

        // Reset animation when it completes
        if (beam.animationProgress >= 1) {
          return createRandomBeam()
        }

        return beam
      })

      // Occasionally add a new beam
      if (Math.random() < 0.01 && beamsRef.current.length < 12) {
        beamsRef.current.push(createRandomBeam())
      }
    }

    const drawGrid = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      gridSize: number,
      color: string,
    ) => {
      ctx.strokeStyle = color
      ctx.lineWidth = 1

      // Draw vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
    }

    const drawGridPoints = (ctx: CanvasRenderingContext2D, dotSize: number, dotColor: string) => {
      ctx.fillStyle = dotColor

      gridPointsRef.current.forEach((point) => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, dotSize, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawBeams = (ctx: CanvasRenderingContext2D) => {
      beamsRef.current.forEach((beam) => {
        const { startPoint, endPoint, animationProgress, color, size } = beam

        if (animationProgress <= 0) return

        ctx.save()

        // Calculate the path length
        const dx = endPoint.x - startPoint.x
        const dy = endPoint.y - startPoint.y
        const pathLength = Math.sqrt(dx * dx + dy * dy)

        // Use a linear easing for consistent speed
        const easedProgress = animationProgress

        // Calculate the beam length (shorter than the path)
        const beamLength = pathLength * 0.3 // 30% of the path length

        // Calculate the beam center position
        const beamCenter = easedProgress * pathLength

        // Calculate the beam start and end positions
        const beamStart = beamCenter - beamLength / 2
        const beamEnd = beamCenter + beamLength / 2

        // Calculate the visible portion of the beam
        // This handles the fade in/out at the endpoints
        const visibleStart = Math.max(0, beamStart)
        const visibleEnd = Math.min(pathLength, beamEnd)

        // Calculate the positions as percentages of the path
        const startPercent = visibleStart / pathLength
        const endPercent = visibleEnd / pathLength

        // Calculate the actual points on the path
        const getPointOnPath = (percent: number) => {
          return {
            x: startPoint.x + dx * percent,
            y: startPoint.y + dy * percent,
          }
        }

        // Calculate opacity based on proximity to endpoints
        // Fade in as it leaves the start point, fade out as it approaches the end point
        let opacity = 1.0

        // Fade in from start point
        if (beamStart < 0) {
          // Calculate how much of the beam is "inside" the start point
          const insideRatio = Math.abs(beamStart) / (beamLength / 2)
          opacity = Math.min(opacity, 1 - insideRatio)
        }

        // Fade out to end point
        if (beamEnd > pathLength) {
          // Calculate how much of the beam is "inside" the end point
          const insideRatio = (beamEnd - pathLength) / (beamLength / 2)
          opacity = Math.min(opacity, 1 - insideRatio)
        }

        // Only draw if there's a visible portion
        if (visibleStart < visibleEnd && opacity > 0) {
          const visibleStartPoint = getPointOnPath(startPercent)
          const visibleEndPoint = getPointOnPath(endPercent)

          // Draw the path with the base color (very subtle)
          ctx.beginPath()
          ctx.moveTo(startPoint.x, startPoint.y)
          ctx.lineTo(endPoint.x, endPoint.y)
          ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
          ctx.lineWidth = size / 3
          ctx.stroke()

          // Draw the beam
          ctx.beginPath()
          ctx.moveTo(visibleStartPoint.x, visibleStartPoint.y)
          ctx.lineTo(visibleEndPoint.x, visibleEndPoint.y)
          ctx.strokeStyle = `rgba(${hexToRgb(color)}, ${opacity})`
          ctx.lineWidth = size
          ctx.lineCap = "round"
          ctx.shadowColor = color
          ctx.shadowBlur = 8
          ctx.stroke()

          // Add a glow at the leading edge when entering a dot
          if (beamEnd > pathLength * 0.9) {
            const glowPoint = getPointOnPath(endPercent)
            const glowGradient = ctx.createRadialGradient(
              glowPoint.x,
              glowPoint.y,
              0,
              glowPoint.x,
              glowPoint.y,
              size * 2,
            )
            glowGradient.addColorStop(0, `rgba(${hexToRgb(color)}, ${opacity * 0.8})`)
            glowGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

            ctx.fillStyle = glowGradient
            ctx.beginPath()
            ctx.arc(glowPoint.x, glowPoint.y, size * 2, 0, Math.PI * 2)
            ctx.fill()
          }

          // Add a glow at the trailing edge when leaving a dot
          if (beamStart < pathLength * 0.1) {
            const glowPoint = getPointOnPath(startPercent)
            const glowGradient = ctx.createRadialGradient(
              glowPoint.x,
              glowPoint.y,
              0,
              glowPoint.x,
              glowPoint.y,
              size * 2,
            )
            glowGradient.addColorStop(0, `rgba(${hexToRgb(color)}, ${opacity * 0.8})`)
            glowGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

            ctx.fillStyle = glowGradient
            ctx.beginPath()
            ctx.arc(glowPoint.x, glowPoint.y, size * 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        ctx.restore()
      })
    }

    // Helper function to convert hex color to rgb
    const hexToRgb = (hex: string): string => {
      // Remove # if present
      hex = hex.replace("#", "")

      // Convert 3-digit hex to 6-digit
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      }

      // Parse the hex values
      const r = Number.parseInt(hex.substring(0, 2), 16)
      const g = Number.parseInt(hex.substring(2, 4), 16)
      const b = Number.parseInt(hex.substring(4, 6), 16)

      return `${r}, ${g}, ${b}`
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      drawGrid(ctx, canvas.width, canvas.height, gridSize, gridColor)

      // Draw grid points (dots)
      drawGridPoints(ctx, dotSize, dotColor)

      // Only update and draw beams if showBeams is true
      if (showBeams) {
        updateBeams()
        drawBeams(ctx)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [beamColors, gridSize, beamSize, beamDuration, showBeams])

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
