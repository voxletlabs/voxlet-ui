import AnimatedBackground from '@/registry/default/ui/animated-background';

export default function AnimatedNavLinksHover() {
    const TABS = ['Home', 'Services', 'Pricing', 'Contact'];

    return (
        <div className='flex items-center justify-center min-h-[10rem]'>
            <div className='flex flex-row'>
                <AnimatedBackground
                    defaultValue={TABS[0]} // Remove this if you don’t want any tab to be highlighted by default.
                    className='rounded-md bg-zinc-100 dark:bg-zinc-800'
                    transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.3,
                    }}
                    enableHover
                >
                    {TABS.map((tab, index) => (
                        <button
                            key={index}
                            data-id={tab}
                            type='button'
                            className='px-2 py-0.5 inline-flex items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50'
                        >
                            {tab}
                        </button>
                    ))}
                </AnimatedBackground>
            </div>
        </div>
    );
}
