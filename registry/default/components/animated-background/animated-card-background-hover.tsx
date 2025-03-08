import AnimatedBackground from '@/registry/default/ui/animated-background';

export default function AnimatedCardBackgroundHover() {
    const ITEMS = [
        {
            id: 1,
            title: "Bugatti Chiron",
            description: "Quad-turbo W16, pure speed. A masterpiece of engineering designed for breathtaking acceleration and top speeds.",
        },
        {
            id: 2,
            title: "Lamborghini Revuelto",
            description: "Hybrid V12 with insane power. Combines electrification with legendary Italian performance for unmatched thrill.",
        },
        {
            id: 3,
            title: "Ferrari SF90",
            description: "Plug-in hybrid with 1000 HP. A blend of electrification and raw horsepower delivering unparalleled driving dynamics.",
        },
        {
            id: 4,
            title: "McLaren P1",
            description: "F1 tech in a road car. A hybrid hypercar that merges Formula 1 innovations with everyday drivability and power.",
        },
        {
            id: 5,
            title: "Porsche 918 Spyder",
            description: "Hybrid hypercar, ultimate grip. A fusion of cutting-edge technology and extreme handling precision on any road.",
        },
        {
            id: 6,
            title: "Koenigsegg Jesko",
            description: "Revs up to 8500 RPM. Designed for extreme speed, aerodynamics, and record-breaking track performance.",
        },
    ];

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:py-10 md:px-20 md:grid-cols-3'>
            <AnimatedBackground
                className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
                transition={{
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.6,
                }}
                enableHover
            >
                {ITEMS.map((item, index) => (
                    <div key={index} data-id={`card-${index}`}>
                        <div className='flex select-none flex-col space-y-1 p-4'>
                            <h3 className='text-base font-medium text-zinc-800 dark:text-zinc-50'>
                                {item.title}
                            </h3>
                            <p className='text-base text-zinc-600 dark:text-zinc-400'>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </AnimatedBackground>
        </div>
    );
}
