import Link from 'next/link'
import React from 'react'

interface Price {
    actualPrice: string;
    discountedPrice?: string;
}

interface Features {
    have: string[];
    notHave?: string[];
}

interface CTAButton {
    text: string;
    link: string;
}

interface PricingPlan {
    name: string;
    supportLine: string;
    price: Price;
    features: Features;
    ctaButton: CTAButton;
    bottomLine: string;
    highlight?: boolean;
    badge?: string;
}

const Pricing = () => {
    return (
        <div
            className="relative isolate w-full overflow-hidden px-4 py-16 md:py-40 pt-10 md:pt-60 lg:px-4 bg-black"
        >
            <div className="pt-32 md:pt-48 mt-[600px]">
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(255,255,255,0.1)]"
                        style={{
                            width: 1400,
                            height: 1400,
                            clipPath: "circle(50% at 50% 50%)",
                            background:
                                "radial-gradient(circle, rgba(40, 40, 40, 0.8) 0%, rgba(20, 20, 20, 0.6) 30%, rgba(0, 0, 0, 0.4) 70%)"
                        }}
                    >
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
                                backgroundSize: "60px 120px"
                            }}
                        />
                    </div>
                    <div
                        className="absolute bg-black z-2 left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full  border border-[rgba(255,255,255,0.1)] shadow-[0_0_200px_80px_rgba(255,255,255,0.1)]"
                        style={{ width: 1000, height: 1000 }}
                    />
                </div>
            </div>
            <div className="z-20 absolute inset-0 mt-80">
                <div className="relative z-50 mx-auto mb-4 max-w-4xl text-center">
                    <h2 className="inline-block text-3xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
                        Find the Right Plan for Your UI Needs
                    </h2>
                </div>
                <p className="text-sm text-neutral-400 mt-4 px-4 max-w-lg text-center mx-auto">
                    Elevate your projects with our UI component library, featuring customizable designs,
                    premium styles, and seamless integration—built for developers of all levels.
                </p>

                <div className="mx-auto mt-12 md:mt-20">
                    <div className="w-full px-4 py-8">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                            {pricingPlans.map((plan, index) => (
                                <div key={index} className="rounded-3xl bg-neutral-900 p-8 ring-1 ring-neutral-700">
                                    {plan.badge && (
                                        <div className="text-center -mt-12 mb-6">
                                            <span className="text-white text-sm px-4 py-1 rounded-[128px] bg-gradient-to-b from-[#393939] via-[#141414] to-[#303030] shadow-[0px_2px_6.4px_0px_rgba(0,0,0,0.60)]">
                                                {plan.badge}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex flex-col h-full">
                                        <div className="mb-8">
                                            <div className="inline-flex items-center font-bold justify-center p-2 rounded-[10px] border border-[rgba(62,62,64,0.77)] bg-[rgba(255,255,255,0)]">
                                                <h3 className="text-sm text-white">{plan.name} {plan.highlight && '✦'}</h3>
                                            </div>
                                            <div>
                                                <p className="text-md text-neutral-400 my-4">{plan.supportLine}</p>
                                            </div>
                                            {plan.price.discountedPrice ? (
                                                <div className="mt-4">
                                                    <span className="text-neutral-500 line-through mr-2">
                                                        {plan.price.actualPrice}
                                                    </span>
                                                    <span className="text-5xl font-bold text-white">{plan.price.discountedPrice}</span>
                                                    <span className="text-neutral-400 ml-2">one-time</span>
                                                </div>
                                            ) : (
                                                <div className="mt-4">
                                                    <span className="text-5xl font-bold text-white">{plan.price.actualPrice}</span>
                                                    <span className="text-neutral-400 ml-2">one-time</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="space-y-4 mb-8">
                                            {plan.features.have.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="tabler-icon tabler-icon-check h-5 w-5 text-neutral-400"
                                                    >
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="text-sm text-neutral-300">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                            {plan.features.notHave && (
                                                plan.features.notHave.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="tabler-icon tabler-icon-x h-5 w-5 text-neutral-600"
                                                        >
                                                            <path d="M18 6l-12 12" />

                                                            <path d="M6 6l12 12" />
                                                        </svg>
                                                        <span className="text-sm text-neutral-500">
                                                            Access high-ticket programs
                                                        </span>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                        <div className="mt-auto">
                                            <Link href={plan.ctaButton.link} className="px-4 text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center border-[0.6px] border-solid [border-image-source:linear-gradient(180deg,#1F1F1F_0%,#858585_100%),linear-gradient(180deg,#1F1F1F_0%,#858585_100%)] [background:linear-gradient(0deg,#151515,#151515),linear-gradient(180deg,rgba(21,21,21,0)_66.3%,rgba(255,255,255,0.5)_100%),linear-gradient(183.22deg,rgba(255,255,255,0.5)_2.62%,rgba(21,21,21,0)_52.03%)] shadow-[inset_0px_6px_8px_0px_#FAFAFA40,inset_0px_-6px_8px_0px_#FAFAFA40,0px_0px_0px_0px_#FAFAFA40,0px_0px_0px_0px_#FAFAFA40] text-white 0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08), w-full py-3 rounded-xl bg-gradient-to-b from-neutral-700 to-neutral-800 hover:from-neutral-600 hover:to-neutral-700">
                                                {plan.ctaButton.text}
                                            </Link>
                                            <div className="text-sm text-neutral-500 text-center mt-4">
                                                <div className="flex gap-1 justify-center items-center">
                                                    {plan.highlight && (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                        >
                                                            <g clipPath="url(#clip0_997_4570)">
                                                                <path
                                                                    d="M1.51562 13.415C1.51562 13.9336 1.93457 14.3525 2.45312 14.3525H7.14062V9.66504H1.51562V13.415ZM9.01562 14.3525H13.7031C14.2217 14.3525 14.6406 13.9336 14.6406 13.415V9.66504H9.01562V14.3525ZM14.6406 4.97754H13.4072C13.5889 4.62305 13.7031 4.23047 13.7031 3.80566C13.7031 2.38477 12.5459 1.22754 11.125 1.22754C9.90625 1.22754 9.11816 1.85156 8.10742 3.22852C7.09668 1.85156 6.30859 1.22754 5.08984 1.22754C3.66895 1.22754 2.51172 2.38477 2.51172 3.80566C2.51172 4.23047 2.62305 4.62305 2.80762 4.97754H1.51562C0.99707 4.97754 0.578125 5.39648 0.578125 5.91504V8.25879C0.578125 8.5166 0.789062 8.72754 1.04688 8.72754H15.1094C15.3672 8.72754 15.5781 8.5166 15.5781 8.25879V5.91504C15.5781 5.39648 15.1592 4.97754 14.6406 4.97754ZM5.08691 4.97754C4.43945 4.97754 3.91504 4.45312 3.91504 3.80566C3.91504 3.1582 4.43945 2.63379 5.08691 2.63379C5.66992 2.63379 6.10059 2.73047 7.60938 4.97754H5.08691ZM11.125 4.97754H8.60254C10.1084 2.73633 10.5273 2.63379 11.125 2.63379C11.7725 2.63379 12.2969 3.1582 12.2969 3.80566C12.2969 4.45312 11.7725 4.97754 11.125 4.97754Z"
                                                                    fill="url(#paint0_linear_997_4570)"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <linearGradient
                                                                    id="paint0_linear_997_4570"
                                                                    x1="8.07812"
                                                                    y1="1.22754"
                                                                    x2="8.07812"
                                                                    y2="14.3525"
                                                                    gradientUnits="userSpaceOnUse"
                                                                >
                                                                    <stop stopColor="#B6B6B6" />
                                                                    <stop offset={1} stopColor="#313131" />
                                                                </linearGradient>
                                                                <clipPath id="clip0_997_4570">
                                                                    <rect
                                                                        width={15}
                                                                        height={15}
                                                                        fill="white"
                                                                        transform="translate(0.578125 0.290039)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    )}
                                                    {plan.bottomLine}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-0 rounded-[20px]"
                style={{
                    background:
                        "linear-gradient(179.87deg, rgba(0, 0, 0, 0) 0.11%, rgba(0, 0, 0, 0.8) 69.48%, rgb(0, 0, 0) 92.79%)"
                }}
            />
        </div>
    )
}

const pricingPlans: PricingPlan[] = [
    {
        name: 'Starter',
        supportLine: 'Free Plan',
        price: {
            actualPrice: '$0',
        },
        features: {
            have: [
                "Access to basic UI components"
            ],
            notHave: [
                "Premium component library",
                "Customizable themes & styles",
                "Early access to new components",
                "Priority support & updates",
            ]
        },
        ctaButton: {
            text: 'Get Started for Free',
            link: '#'
        },
        bottomLine: 'Try our basic UI components for free!'
    },
    {
        name: 'Pro',
        supportLine: 'Lifetime Access',
        highlight: true,
        badge: `POPULAR CHOICE`,
        price: {
            actualPrice: '$299',
            discountedPrice: '$129'
        },
        features: {
            have: [
                "Access to basic UI components",
                "Premium component library",
                "Customizable themes & styles",
                "Early access to new components",
                "Priority support & updates",
            ],
        },
        ctaButton: {
            text: 'Get Lifetime Access',
            link: '#'
        },
        bottomLine: 'Limited-time discount for early adopters!'
    },
    {
        name: 'Enterprise',
        supportLine: 'Team License',
        price: {
            actualPrice: '$499',
            discountedPrice: '$249'
        },
        features: {
            have: [
                "Access to basic UI components",
                "Premium component library",
                "Customizable themes & styles",
                "Early access to new components",
                "Priority support & updates",
            ],
        },
        ctaButton: {
            text: 'Get Enterprise Plan',
            link: '#'
        },
        bottomLine: 'Best for teams and large-scale projects!'
    },
];


export default Pricing