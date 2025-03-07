import GravityBox from "@/registry/default/ui/gravity-box"

export default function GravityBoxDemo() {
    // Example tags with text and color
    const tags = [
        { text: "React", color: "#3b82f6" },
        { text: "Next.js", color: "#000000" },
        { text: "Tailwind", color: "#06b6d4" },
        { text: "TypeScript", color: "#1d4ed8" },
        { text: "JavaScript", color: "#eab308" },
        { text: "CSS", color: "#f97316" },
        { text: "HTML", color: "#ef4444" },
        { text: "Node.js", color: "#16a34a" },
        { text: "GraphQL", color: "#e535ab" },
        { text: "Redux", color: "#764abc" },
        { text: "Firebase", color: "#ffca28" },
        { text: "MongoDB", color: "#47a248" },
    ]

    return (
        <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Gravity Box</h2>
            <GravityBox tags={tags} />
            <p className="mt-4 text-sm text-muted-foreground">
                Drag the tags to move them around. Watch them collide and respond to gravity!
            </p>
        </div>
    )
}

