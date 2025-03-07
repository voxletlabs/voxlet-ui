"use client"

import * as React from "react"
import { Home, FileText, CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "@/registry/default/ui/anime-navbar"

const items = [
    {
        name: "Home",
        url: "#",
        href: "#",
        icon: Home,
    },
    {
        name: "Convert",
        url: "#",
        href: "#",
        icon: FileText,
    },
    {
        name: "Pricing",
        url: "#",
        href: "#",
        icon: CreditCard,
    },
    {
        name: "About",
        url: "#",
        href: "#",
        icon: Info,
    },
]

export default function AnimeNavBarDemo() {
    return (
        <>
            <AnimeNavBar items={items} defaultActive="Home" />
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
