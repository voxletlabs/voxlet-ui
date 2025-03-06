"use client"

import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/registry/default/ui/tubelight-navbar"

export default function TubeLightNavbarDemo() {
    const navItems = [
        { name: 'Home', url: '#', icon: Home },
        { name: 'About', url: '#', icon: User },
        { name: 'Projects', url: '#', icon: Briefcase },
        { name: 'Resume', url: '#', icon: FileText }
    ]

    return (
        <>
            <NavBar items={navItems} />
            <div className="preview flex min-h-[100px] w-full justify-center p-2 sm:p-10 items-center">
                <div className="relative w-full flex items-center justify-center">
                    <p className="text-black dark:text-white">
                        The Navbar will show at top of the page
                    </p>
                </div>
            </div>
        </>
    )
}