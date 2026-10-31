
export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-[100rem] flex-col items-center justify-center px-4 py-12">
        {children}
      </div>
    </main>
  );
}
