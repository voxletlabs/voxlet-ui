"use client"

import { createContext, useContext, useRef, useState, useEffect, type ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Image, type LucideIcon } from "lucide-react"
import { cn } from "@/registry/default/lib/utils"

// Context to share mouse position data between container and tiles
type MagicWandContextType = {
    mousePosition: { x: number; y: number }
}

const MagicWandContext = createContext<MagicWandContextType | undefined>(undefined)

// Hook to use the magic wand context
function useMagicWand() {
    const context = useContext(MagicWandContext)
    if (!context) {
        throw new Error("Magic Wand components must be used within a MagicWandContainer")
    }
    return context
}

// Props for the MagicWandContainer
interface MagicWandContainerProps {
    children: ReactNode
    className?: string
    wandClassName?: string
}

export function MagicWandContainer({ children, className, wandClassName }: MagicWandContainerProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Motion values for wand position and rotation
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotation = useMotionValue(0)

    // Add spring physics for smoother movement
    const springX = useSpring(x, { damping: 25, stiffness: 200 })
    const springY = useSpring(y, { damping: 25, stiffness: 200 })
    const springRotation = useSpring(rotation, { damping: 25, stiffness: 200 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window

            // Calculate modified position with multipliers and offsets
            const modifiedX = clientX * 1.3 + innerWidth * -0.15
            const modifiedY = clientY * 0.4 - innerHeight * 0.1

            // Update rotation based on mouse position
            const rotationValue = (clientX / innerWidth) * 20 - 10

            // Update motion values
            x.set(modifiedX)
            y.set(modifiedY)
            rotation.set(rotationValue)

            setMousePosition({ x: modifiedX, y: modifiedY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [x, y, rotation])

    return (
        <MagicWandContext.Provider value={{ mousePosition }}>
            <div className={cn("flex", className)}>
                <motion.div
                    className={cn(
                        "w-[10vmin] aspect-[1/10] absolute left-[5%] top-[20%] -translate-x-1/2 z-[100] rounded-[3vmin] shadow-[0vmin_1vmin_4vmin_rgba(0,0,0,0.8)] overflow-hidden pointer-events-none",
                        wandClassName,
                    )}
                    style={{
                        x: springX,
                        y: springY,
                        rotate: springRotation,
                        background: "linear-gradient(to right, rgb(26,24,28) 10%, rgb(42,40,44) 45% 55%, rgb(26,24,28) 90%)",
                    }}
                >
                    <div
                        className="h-[20%] w-full"
                        style={{
                            background:
                                "linear-gradient(to right, rgb(212,221,236) 10%, rgb(255,255,255) 45% 55%, rgb(212,221,236) 90%)",
                        }}
                    ></div>
                </motion.div>

                {children}
            </div>
        </MagicWandContext.Provider>
    )
}

// Icon configuration type
interface IconConfig {
    icon?: LucideIcon
    className?: string
}

// Props for the MagicWandTile
interface MagicWandTileProps {
    image: string
    icon?: IconConfig | LucideIcon
    className?: string
}

export function MagicWandTile({ image, icon, className }: MagicWandTileProps) {
    const { mousePosition } = useMagicWand()
    const tileRef = useRef<HTMLDivElement>(null)
    const [tileState, setTileState] = useState({ opacity: 0, blur: 10 })

    // Determine the icon component and className
    let IconComponent: LucideIcon = Image // Default to Image
    let iconClassName = "text-[15vmin] text-white/10" // Default className

    if (icon) {
        if (typeof icon === "function") {
            // If icon is a direct LucideIcon component
            IconComponent = icon
        } else {
            // If icon is an IconConfig object
            if (icon.icon) {
                IconComponent = icon.icon
            }
            // Apply custom className if provided
            if (icon.className) {
                iconClassName = cn(iconClassName, icon.className)
            }
        }
    }

    useEffect(() => {
        if (!tileRef.current) return

        const updateTileState = () => {
            const rect = tileRef.current?.getBoundingClientRect()
            if (!rect) return

            const relativeMouseX = mousePosition.x - rect.left
            const mouseXAsDecimal = Math.max(0, Math.min(relativeMouseX / rect.width, 1))

            setTileState({
                opacity: mouseXAsDecimal,
                blur: (1 - mouseXAsDecimal) * 10,
            })
        }

        updateTileState()
    }, [mousePosition])

    return (
        <div
            ref={tileRef}
            className={cn(
                "tile grid place-items-center w-[38vmin] aspect-square bg-[rgb(31,41,55)] rounded-[6vmin] shadow-[0vmin_3vmin_6vmin_rgba(0,0,0,0.25),inset_0vmin_0.5vmin_1vmin_rgba(255,255,255,0.15)] relative overflow-hidden",
                className,
            )}
        >
            <IconComponent className={iconClassName} />
            <motion.img
                src={image}
                alt="Tile image"
                className="h-full aspect-square absolute left-0 top-0 object-cover"
                style={{
                    opacity: tileState.opacity,
                    filter: `blur(${tileState.blur}px)`,
                }}
                transition={{ duration: 0.1 }}
            />
        </div>
    )
}

