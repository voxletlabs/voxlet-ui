"use client"

import { useEffect, useRef, useState } from "react"
import Matter from "matter-js"

type GravityBoxProps = {
    tags: {
        text: string
        color: string
    }[]
}

export default function GravityBox({ tags: initialTags }: GravityBoxProps) {
    const boxRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    // Track bodies for physics simulation
    const bodiesRef = useRef<Record<string, Matter.Body>>({})
    const engineRef = useRef<Matter.Engine>()
    const renderRef = useRef<Matter.Render>()
    const runnerRef = useRef<Matter.Runner>()

    // Process tags to add IDs and initial positions
    const [tags, setTags] = useState(() =>
        initialTags.map((tag, index) => ({
            id: `tag-${index}`,
            text: tag.text,
            color: tag.color,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        })),
    )

    // Initialize the physics engine
    useEffect(() => {
        if (!boxRef.current || !canvasRef.current) return

        // Clean up any existing physics engine
        if (engineRef.current) {
            Matter.Engine.clear(engineRef.current)
        }
        if (runnerRef.current) {
            Matter.Runner.stop(runnerRef.current)
        }

        // Get box dimensions
        const box = boxRef.current
        const { width, height } = box.getBoundingClientRect()
        setDimensions({ width, height })

        // Create engine with appropriate gravity
        const engine = Matter.Engine.create({
            gravity: { x: 0, y: 0.5 }, // Moderate gravity
        })
        engineRef.current = engine

        // Create renderer (hidden but needed for mouse interaction)
        const render = Matter.Render.create({
            canvas: canvasRef.current,
            engine: engine,
            options: {
                width,
                height,
                wireframes: false,
                background: "transparent",
                pixelRatio: "auto",
            } as any,
        })
        renderRef.current = render

        // Create walls with proper dimensions
        const wallOptions = {
            isStatic: true,
            render: { visible: false },
            friction: 0.1,
            restitution: 0.6,
        }

        // Create walls slightly inside the visible boundaries
        const offset = 2 // Offset to keep bodies inside visible area
        const ground = Matter.Bodies.rectangle(width / 2, height - offset, width, 10, wallOptions)
        const leftWall = Matter.Bodies.rectangle(offset, height / 2, 10, height, wallOptions)
        const rightWall = Matter.Bodies.rectangle(width - offset, height / 2, 10, height, wallOptions)
        const ceiling = Matter.Bodies.rectangle(width / 2, offset, width, 10, wallOptions)

        // Add walls to the world
        Matter.World.add(engine.world, [ground, leftWall, rightWall, ceiling])

        // Calculate tag dimensions based on text content
        const tempElement = document.createElement("div")
        tempElement.style.position = "absolute"
        tempElement.style.visibility = "hidden"
        tempElement.style.padding = "0.25rem 0.5rem" // py-1 px-2
        tempElement.style.fontSize = "0.875rem" // text-sm
        tempElement.style.display = "inline-block"
        document.body.appendChild(tempElement)

        // Update tags with calculated dimensions and random positions
        const updatedTags = tags.map((tag) => {
            tempElement.textContent = tag.text
            const rect = tempElement.getBoundingClientRect()

            return {
                ...tag,
                // Random position in top half of the box
                x: Math.random() * (width - 100) + 50,
                y: Math.random() * (height / 3) + 50, // Start a bit lower
                width: Math.max(rect.width, 40), // Ensure minimum width
                height: Math.max(rect.height, 24), // Ensure minimum height
            }
        })

        // Remove the temporary element
        document.body.removeChild(tempElement)

        // Update tags state
        setTags(updatedTags)

        // Create bodies for each tag
        const bodies: Record<string, Matter.Body> = {}

        updatedTags.forEach((tag) => {
            const body = createTagBody(tag, engine.world)
            bodies[tag.id] = body
        })

        bodiesRef.current = bodies

        // Add mouse control
        const mouse = Matter.Mouse.create(render.canvas)
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: true,
                    lineWidth: 1,
                    strokeStyle: "#90cdf4",
                },
            },
        })

        // Make sure mouse events work properly
        render.mouse = mouse

        // Add mouse constraint to world
        Matter.World.add(engine.world, mouseConstraint)

        // Run the engine and renderer
        const runner = Matter.Runner.create()
        Matter.Runner.run(runner, engine)
        Matter.Render.run(render)
        runnerRef.current = runner

        // Animation loop to update tag positions based on physics bodies
        let animationFrameId: number

        const updateTagPositions = () => {
            setTags((prevTags) =>
                prevTags.map((tag) => {
                    const body = bodiesRef.current[tag.id]
                    if (!body) return tag

                    return {
                        ...tag,
                        x: body.position.x,
                        y: body.position.y,
                    }
                }),
            )

            animationFrameId = requestAnimationFrame(updateTagPositions)
        }

        // Start the animation loop
        animationFrameId = requestAnimationFrame(updateTagPositions)

        return () => {
            // Cleanup
            cancelAnimationFrame(animationFrameId)
            if (runnerRef.current) Matter.Runner.stop(runnerRef.current)
            if (renderRef.current) Matter.Render.stop(renderRef.current)
            if (engineRef.current) {
                Matter.World.clear(engineRef.current.world, false)
                Matter.Engine.clear(engineRef.current)
            }
        }
    }, [])

    // Function to create a body for a tag
    const createTagBody = (tag: (typeof tags)[0], world: Matter.World) => {
        // Create the body with proper physics properties
        const body = Matter.Bodies.rectangle(tag.x, tag.y, tag.width, tag.height, {
            restitution: 0.5, // Moderate bounciness
            friction: 0.1,
            frictionAir: 0.02, // More air friction for better control
            density: 0.001, // Light weight
            chamfer: { radius: 5 }, // Rounded corners
            label: tag.id,
            collisionFilter: {
                group: 0,
                category: 0x0001,
                mask: 0xffffffff,
            },
        })

        // Add the body to the world
        Matter.Composite.add(world, body)
        return body
    }

    return (
        <div ref={boxRef} className="relative w-full border border-[#e5e5e5] dark:border-[#292929] rounded-lg bg-[#f2f2f2]/50 dark:bg-[#292929]/50 h-96 overflow-hidden">
            {/* Hidden canvas for physics rendering */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-0 pointer-events-auto" />

            {/* Render the tags */}
            {tags.map((tag) => {
                const body = bodiesRef.current[tag.id]
                if (!body) return null

                const angle = body ? body.angle : 0

                return (
                    <div
                        key={tag.id}
                        className="absolute px-2 py-1 text-sm rounded-md shadow-md text-white font-medium flex items-center justify-center pointer-events-none"
                        style={{
                            backgroundColor: tag.color.startsWith("#") ? tag.color : `#${tag.color}`,
                            width: tag.width,
                            height: tag.height,
                            left: tag.x - tag.width / 2,
                            top: tag.y - tag.height / 2,
                            transform: `rotate(${angle}rad)`,
                            zIndex: 10,
                        }}
                    >
                        {tag.text}
                    </div>
                )
            })}
        </div>
    )
}

