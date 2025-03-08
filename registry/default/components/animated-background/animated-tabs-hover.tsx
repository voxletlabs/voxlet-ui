import AnimatedBackground from '@/registry/default/ui/animated-background';

export default function AnimatedTabsHover() {

    return (
        <div className='flex items-center justify-center min-h-[10rem]'>
            <div className='rounded-[8px] bg-gray-100 p-[2px] dark:bg-zinc-800'>
                <AnimatedBackground
                    defaultValue='Overview'
                    className='rounded-lg bg-white dark:bg-zinc-700'
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.2,
                    }}
                >
                    {['Overview', 'Integrations', 'Activity', 'Domains'].map((label, index) => {
                        return (
                            <button
                                key={index}
                                data-id={label}
                                type='button'
                                aria-label={`${label} view`}
                                className='inline-flex w-[8rem] py-[0.4rem] items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50'
                            >
                                {label}
                            </button>
                        );
                    })}
                </AnimatedBackground>
            </div>
        </div>
    );
}
