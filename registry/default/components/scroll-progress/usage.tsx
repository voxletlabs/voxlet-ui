import ScrollProgress from "@/registry/default/ui/scroll-progress"

export default function ScrollProgressDemo() {
    return (
        <main className="p-8">
            <ScrollProgress className="z-[200]" />
            <div className="flex min-h-[50vh] w-full justify-center p-2 sm:p-10 items-center">
                <div className="relative w-full flex items-center justify-center">
                    <p className="text-black dark:text-white text-lg">
                        Scroll to see progress
                    </p>
                </div>
            </div>
        </main>
    )
}

