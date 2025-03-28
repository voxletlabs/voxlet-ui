
import React from 'react';
import Link from 'next/link'

interface PricingTable {
    name: string;
    design: string;
    projects: string;
    supportAndMaintenance: string;
    responsive: string;
    cms: string;
    analytics: string;
    seo: string;
    ecommerce: string;
}

const PricingOne: React.FC = () => {
    return (
        <main className="overflow-hidden">
            <div className="mt-16 px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <h1 className="text-pretty text-4xl font-medium tracking-tighter text-gray-950 dark:text-white sm:text-6xl">
                        Pricing That Adapts to Your Development Needs.
                    </h1>
                    <p className="mt-6 max-w-3xl text-2xl font-medium text-muted-foreground">
                        Developers worldwide build efficient and scalable interfaces with Kaif UI. Get started today and streamline your design process.
                    </p>
                </div>

            </div>
            {/* pricing cards */}
            <div className="relative py-24">
                <div className="rounded-[2rem] absolute inset-x-2 bottom-0 top-48 bg-gradient-to-r from-[#09f] via-[#2298e7] to-[#0561e2] ring-1 ring-inset ring-black/5 sm:bg-gradient-to-l"></div>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-7xl">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {pricingPlans.map((plan, index) => (
                                <div key={index} className="rounded-[2rem] -m-2 grid grid-cols-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
                                    <div className="rounded-[2rem] grid grid-cols-1 p-2 shadow-md shadow-black/5">
                                        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                                            <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                                {plan.name}
                                            </h2>
                                            <p className="mt-2 text-sm/6 text-gray-950/75">{plan.description}</p>
                                            <div className="mt-8 flex items-center gap-4">
                                                <div className="text-5xl font-medium text-gray-950">${plan.price}</div>
                                                <div className="text-sm/5 text-gray-950/75">
                                                    <p>{plan.currency}</p>
                                                    <p>per month</p>
                                                </div>
                                            </div>
                                            <div className="mt-8">
                                                <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-gray-950 px-4 py-2 text-base font-medium text-white shadow-md hover:bg-gray-800" href="#">
                                                    Start a free trial
                                                </Link>
                                            </div>
                                            <div className="mt-8">
                                                <h3 className="text-sm/6 font-medium text-gray-950">Start selling with:</h3>
                                                <ul className="mt-3 space-y-3">
                                                    {plan.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-4 text-sm/6 text-gray-950/75">
                                                            <span className="inline-flex h-6 items-center">
                                                                <svg viewBox="0 0 15 15" aria-hidden="true" className="w-4 h-4 fill-gray-950/25">
                                                                    <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
                                                                </svg>
                                                            </span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                    {plan.disabledFeatures.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-4 text-sm/6 text-gray-950/25" data-disabled="true">
                                                            <span className="inline-flex h-6 items-center">
                                                                <svg viewBox="0 0 15 15" aria-hidden="true" className="w-4 h-4 fill-gray-950/25">
                                                                    <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
                                                                </svg>
                                                            </span>
                                                            <span className="sr-only">Not included:</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* pricing table */}
            <div className="px-6 py-24 lg:px-8 hidden sm:block">
                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <table className="w-full text-left">
                        <caption className="sr-only">Pricing plan comparison</caption>
                        <colgroup>
                            <col className="w-3/5 sm:w-2/5" />
                            {pricingTable.map((plan, index) => (
                                <col
                                    key={index}
                                    className="w-2/5 max-sm:hidden sm:w-1/5"
                                    data-selected={index === 0}
                                />
                            ))}
                        </colgroup>
                        <thead>
                            <tr className="max-sm:hidden">
                                <td className="p-0"></td>
                                {pricingTable.map((plan, index) => (
                                    <th key={index} scope="col" className="p-0">
                                        <div className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-muted-foreground">
                                            {plan.name}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="group">
                            {/* Loop through pricing table data */}
                            {[
                                { feature: "Projects", key: "projects" },
                                { feature: "Support and Maintenance", key: "supportAndMaintenance" },
                                { feature: "SEO Optimization", key: "seo" },
                                { feature: "Analytics Setup", key: "analytics" },
                                { feature: "Responsive Layout", key: "responsive" },
                                { feature: "Website Design", key: "design" },
                                { feature: "Content Management System (CMS)", key: "cms" },
                                { feature: "E-commerce Integration", key: "ecommerce" },
                            ].map((row, rowIndex) => (
                                <tr key={rowIndex} className="border-b last:border-none">
                                    <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-muted-foreground">
                                        {row.feature}
                                    </th>
                                    {pricingTable.map((plan, planIndex) => (
                                        <td
                                            key={planIndex}
                                            data-selected={planIndex === 0}
                                            className="p-4 max-sm:hidden"
                                        >
                                            <div className="text-sm/6">{(plan as any)[row.key]}</div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};


const pricingPlans = [
    {
        name: "Starter",
        description: "Everything you need to successfully launch your first project.",
        price: 99,
        currency: "USD",
        features: [
            "Up to 3 active projects",
            "Basic support and maintenance",
            "Responsive design for all screens",
            "SEO-friendly templates",
        ],
        disabledFeatures: [
            "Custom animations",
            "Advanced SEO optimization",
            "Priority support",
        ],
    },
    {
        name: "Growth",
        description: "Ideal for businesses looking to scale their online presence.",
        price: 199,
        currency: "USD",
        features: [
            "Up to 10 active projects",
            "Full support and maintenance",
            "Custom animations and interactions",
            "Advanced SEO optimization",
            "Faster loading speeds",
        ],
        disabledFeatures: ["Priority support"],
    },
    {
        name: "Enterprise",
        description: "Comprehensive solutions for larger, high-demand projects.",
        price: 499,
        currency: "USD",
        features: [
            "Unlimited projects",
            "Premium support and maintenance",
            "Custom UI/UX design tailored to your needs",
            "Full SEO and performance optimization",
            "Priority support with 24/7 availability",
        ],
        disabledFeatures: [],
    },
];


const pricingTable: PricingTable[] = [
    {
        name: "Starter",
        design: "No",
        projects: "3",
        supportAndMaintenance: "No",
        responsive: "Yes",
        cms: "No",
        analytics: "Basic",
        seo: "basic seo",
        ecommerce: "No",
    },
    {
        name: "Growth",
        design: "Yes",
        projects: "10",
        supportAndMaintenance: "24/7 Support",
        responsive: "Yes",
        cms: "Yes",
        analytics: "Advance",
        seo: "advance seo",
        ecommerce: "No",
    },
    {
        name: "Enterprise",
        design: "Yes",
        projects: "Unlimited",
        supportAndMaintenance: "24/7 Support",
        responsive: "Yes",
        cms: "Yes",
        analytics: "Advance",
        seo: "advance seo",
        ecommerce: "Yes",
    },
];

export default PricingOne;