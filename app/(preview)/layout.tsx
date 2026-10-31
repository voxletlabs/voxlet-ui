/**
 * Chrome-free layout for full-page component/block previews.
 *
 * Deliberately constrains nothing: no max-width, no centering, no padding —
 * the previewed item gets the exact canvas it would have on a real consumer
 * website, so blocks are full-bleed and components behave natively.
 */
export default function PreviewLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-dvh w-full bg-background text-foreground">
            {children}
        </main>
    );
}
