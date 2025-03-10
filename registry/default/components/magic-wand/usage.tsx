"use client"

import { Camera, FileImage } from "lucide-react"
import { MagicWandContainer, MagicWandTile } from "@/registry/default/ui/magic-wand"

export default function MagicWandDemo() {
    return (
        <div className="bg-[rgb(2,6,23)] h-screen overflow-hidden grid place-items-center">
            <MagicWandContainer>
                <MagicWandTile
                    image="https://images.pexels.com/photos/27073784/pexels-photo-27073784/free-photo-of-bumblebee-on-a-sunflower.jpeg?auto=compress&cs=tinysrgb&w=600"
                    icon={{
                        icon: Camera,
                        className: "text-[20vmin] text-white/20",
                    }}
                    className="rotate-3 z-[3]"
                />
                <MagicWandTile
                    image="https://images.pexels.com/photos/19087694/pexels-photo-19087694/free-photo-of-ice-cream-with-cookies-and-chocolate.jpeg?auto=compress&cs=tinysrgb&w=600"
                    icon={{
                        icon: FileImage,
                        className: "text-[12vmin] text-white/15",
                    }}
                    className="-rotate-2 z-[2] -ml-[10vmin]"
                />
                <MagicWandTile
                    image="https://images.pexels.com/photos/638341/pexels-photo-638341.jpeg?auto=compress&cs=tinysrgb&w=600"
                    icon={{
                        className: "text-[20vmin] text-white/20",
                    }}
                    className="rotate-5 z-[1] -ml-[10vmin]"
                />
            </MagicWandContainer>
        </div>
    )
}
