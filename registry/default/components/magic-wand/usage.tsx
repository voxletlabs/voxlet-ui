"use client"

import { Camera, FileImage } from "lucide-react"
import { MagicWandContainer, MagicWandTile } from "@/registry/default/ui/magic-wand"

export default function MagicWandDemo() {
    return (
        <div className="bg-[rgb(2,6,23)] h-screen overflow-hidden grid place-items-center">
            <MagicWandContainer>
                <MagicWandTile
                    image="https://assets.codepen.io/1468070/edgar-infocus-eCSsB3sIEHs-unsplash.jpg?width=1000&height=1250&format=auto&quality=70"
                    icon={{
                        icon: Camera,
                        className: "text-[20vmin] text-white/20",
                    }}
                    className="rotate-3 z-[3]"
                />
                <MagicWandTile
                    image="https://assets.codepen.io/1468070/eugene-golovesov-ItyV8UzZzzw-unsplash.jpg?width=818&height=1228&format=auto&quality=80"
                    icon={{
                        icon: FileImage,
                        className: "text-[12vmin] text-white/15",
                    }}
                    className="-rotate-2 z-[2] -ml-[10vmin]"
                />
                <MagicWandTile
                    image="https://assets.codepen.io/1468070/alex-shuper-3OpOV8ntLj4-unsplash.jpg?width=1000&height=1500&format=auto&quality=80"
                    icon={{
                        className: "text-[20vmin] text-white/20",
                    }}
                    className="rotate-5 z-[1] -ml-[10vmin]"
                />
            </MagicWandContainer>
        </div>
    )
}
