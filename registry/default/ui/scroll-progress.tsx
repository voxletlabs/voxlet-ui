"use client"

import { useState, useEffect } from "react"
import { cn } from "@/registry/default/lib/utils"

interface ScrollProgressProps {
    className?: string
}

export default function ScrollProgress({ className }: ScrollProgressProps) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPosition = window.scrollY
            const newProgress = Math.min(Math.round((scrollPosition / totalHeight) * 100), 100)
            setProgress(newProgress)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const radius = 18
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
        <div
            className={cn(
                "fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full flex items-center space-x-4 border border-black dark:border-[#292929]",
                className,
            )}
        >
            <span className="text-sm font-medium">Progress</span>
            <div className="relative w-12 h-12">
                <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r={radius} stroke="#3f3f46" strokeWidth="4" fill="transparent" />
                    <circle
                        cx="20"
                        cy="20"
                        r={radius}
                        stroke="white"
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        fill="transparent"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] font-bold">{progress}%</span>
                </div>
            </div>
        </div>
    )
}

