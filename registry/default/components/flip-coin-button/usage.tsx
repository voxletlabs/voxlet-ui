import FlipCoinButton from "@/registry/default/ui/flip-coin-button"

export default function FlipCoinButtonDemo() {
    return (
        <div className="flex min-h-[10rem] flex-col items-center justify-center p-4 relative">
            <p className="text-muted-foreground absolute top-2">Click to flip the coin</p>
            <FlipCoinButton>Support Us</FlipCoinButton>
        </div>
    )
}

