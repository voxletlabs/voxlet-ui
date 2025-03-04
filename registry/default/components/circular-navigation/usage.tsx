"use client";

import { useState } from "react";
import {
    Home,
    Film,
    Music,
    Trophy,
    FileText,
    Settings,
    Search,
    Menu,
} from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import CircularNavigation from "@/registry/default/ui/circularNavigation";

const navItems = [
    { name: "Home", icon: Home, href: "#" },
    { name: "Movies", icon: Film, href: "#" },
    { name: "Music", icon: Music, href: "#" },
    { name: "Sports", icon: Trophy, href: "#" },
    { name: "News", icon: FileText, href: "#" },
    { name: "Settings", icon: Settings, href: "#" },
    { name: "Search", icon: Search, href: "#" },
];

export default function CircularNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (

        <>
            <div className="h-[10rem] w-full flex items-center justify-center">
                <Button onClick={toggleMenu}>Open Navigation</Button>
            </div>
            <CircularNavigation
                navItems={navItems}
                isOpen={isOpen}
                toggleMenu={toggleMenu}
            />
        </>
    );
}