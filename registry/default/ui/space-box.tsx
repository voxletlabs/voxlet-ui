"use client"

import React, { useState, useEffect, useMemo, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/registry/default/lib/utils"

// Deterministic pseudo-random generator (pure: stable across renders and hydration)
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const Star = ({ seed }: { seed: number }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{
      width: `${seededRandom(seed * 5 + 1) * 3 + 1}px`,
      height: `${seededRandom(seed * 5 + 2) * 3 + 1}px`,
      top: `${seededRandom(seed * 5 + 3) * 100}%`,
      left: `${seededRandom(seed * 5 + 4) * 100}%`,
    }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      delay: seededRandom(seed * 5 + 5) * 2,
    }}
  />
)

type ShootingStarData = { id: string; seed: number }

const ShootingStar = ({ seed }: { seed: number }) => {
  // Randomly decide if the star starts from the top or the left
  const startsFromTop = seededRandom(seed) > 0.5

  // For stars starting from the top, randomize the x position
  // For stars starting from the left, randomize the y position
  const startPosition = startsFromTop
    ? { top: "0%", left: `${seededRandom(seed + 1) * 100}%` }
    : { top: `${seededRandom(seed + 1) * 100}%`, left: "0%" }

  // Animation will be diagonal, but with different angles based on starting position
  const endPosition = startsFromTop
    ? { top: "110%", left: `${seededRandom(seed + 1) * 100 + 50}%` }
    : { top: `${seededRandom(seed + 1) * 100 + 50}%`, left: "110%" }

  return (
    <motion.div
      className="absolute bg-white rounded-full"
      style={{
        width: "2px",
        height: "2px",
        ...startPosition,
        boxShadow: "0 0 0 1px #ffffff10, 0 0 0 2px #ffffff10, 0 0 20px #ffffff50",
      }}
      animate={{
        top: endPosition.top,
        left: endPosition.left,
      }}
      transition={{
        duration: seededRandom(seed + 2) * 1.5 + 1,
        ease: "linear",
      }}
    />
  )
}

interface SpaceBoxProps {
  highlightedWord: string
  text: string
  animatedText: string
  starDensity: "low" | "medium" | "high"
  className?: string
}

const getStarCount = (density: NonNullable<SpaceBoxProps["starDensity"]>) => {
  switch (density) {
    case "low":
      return { regular: 25, shooting: 2 }
    case "medium":
      return { regular: 50, shooting: 4 }
    case "high":
      return { regular: 100, shooting: 6 }
    default:
      return { regular: 50, shooting: 4 }
  }
}

const ShootingStarLayer = ({ starDensity }: { starDensity: NonNullable<SpaceBoxProps["starDensity"]> }) => {
  const { shooting: shootingStarCount } = getStarCount(starDensity)

  // First batch is deterministic; every later batch is spawned from the interval callback
  const [shootingStars, setShootingStars] = useState<ShootingStarData[]>(() =>
    Array.from({ length: shootingStarCount }, (_, i) => ({ id: `shooting-${i}`, seed: i + 1 }))
  )

  useEffect(() => {
    // Create new shooting stars periodically
    const interval = setInterval(() => {
      const now = Date.now()
      setShootingStars((prev) => {
        // Only remove stars that have likely completed their animation
        // This is a simple approach - we're removing older stars based on array position
        const newStars = prev.length > shootingStarCount * 2 ? prev.slice(prev.length - shootingStarCount) : [...prev]

        // Add new shooting stars
        for (let i = 0; i < Math.ceil(shootingStarCount / 3); i++) {
          newStars.push({ id: `shooting-${now}-${i}`, seed: now + i * 17 })
        }
        return newStars
      })
    }, 800) // Create new shooting stars every 800ms

    return () => {
      clearInterval(interval)
    }
  }, [shootingStarCount])

  return (
    <>
      {shootingStars.map((star) => (
        <ShootingStar key={star.id} seed={star.seed} />
      ))}
    </>
  )
}

export default function SpaceBox({ highlightedWord, text, animatedText, starDensity, className }: SpaceBoxProps) {
  const [isHovered, setIsHovered] = useState(false)

  const stars = useMemo(() => {
    if (!isHovered) return null
    const { regular: starCount } = getStarCount(starDensity)
    return Array.from({ length: starCount }, (_, i) => <Star key={i} seed={i + 1} />)
  }, [isHovered, starDensity])

  return (
    <motion.div
      className={cn(
        "p-8 h-[25rem] w-[60rem] max-w-[90vw] flex items-center justify-center rounded-xl transition-colors duration-300 border-2 relative overflow-hidden",
        isHovered ? "bg-black text-white" : "bg-muted/50",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
    >
      {stars}
      {isHovered && <ShootingStarLayer starDensity={starDensity} />}
      <div className="flex flex-col sm:flex-row items-center gap-3 text-3xl relative z-10">
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.div
              key="animated-word"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative h-14 w-[13rem] rounded-full overflow-hidden"
              style={{
                background: "linear-gradient(to right, #3b82f6, #2563eb)",
                padding: "0.20rem",
              }}
            >
              <div className="bg-black h-full w-full rounded-full overflow-hidden flex items-center">
                <motion.div
                  animate={{ x: [0, "-100%"] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 15,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  className="whitespace-nowrap font-bold text-white px-4 text-xl"
                >
                  {`${animatedText} • ${animatedText} • `}
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.span
              key="bold-word"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="font-bold"
            >
              {highlightedWord}
            </motion.span>
          )}
        </AnimatePresence>
        <span>{text}</span>
      </div>
    </motion.div>
  )
}
