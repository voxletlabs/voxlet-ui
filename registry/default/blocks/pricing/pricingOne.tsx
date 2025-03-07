import React from "react";
import Link from "next/link"

const Pricing = () => {
    return (
        <div className="py-24 px-4 max-w-7xl mx-auto bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-black">
                    <span className="text-orange-500">Simple</span> Pricing for Everyone
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Choose the plan that fits your needs, whether you're just getting started or ready to scale with premium features and dedicated support.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 items-center">
                {pricingPlans.map((plan) => (
                    <div className={`relative rounded-[37px] flex flex-col gap-3 p-4 ${plan.isHighlighted ? "border border-white bg-gradient-to-b from-[#FFA756] via-[#F68441] to-[#EE602C]" : "bg-[#DCDCDC]"}`}>
                        <div className="space-y-8 p-4 bg-[#F5F5F5] rounded-[28px] shadow-[0px_95px_27px_0px_rgba(0,0,0,0.00),_0px_61px_24px_0px_rgba(0,0,0,0.03),_0px_34px_21px_0px_rgba(0,0,0,0.11),_0px_15px_15px_0px_rgba(0,0,0,0.19),_0px_4px_8px_0px_rgba(0,0,0,0.22)] pb-20 px-4">
                            <div className="flex flex-col">
                                <h3 className="text-[18px] w-fit font-medium text-gray-900 rounded-[9999px] border border-[#DCDCDC] bg-white flex justify-center items-center px-[14.32px] py-1">
                                    {plan.name}
                                </h3>
                                <div className="mt-2 flex items-baseline text-black">
                                    <span className="text-[40px] font-bold">{plan.price}</span>
                                    <span className="ml-1 text-gray-500">/month</span>
                                </div>
                            </div>
                            <Link href={plan.ctaButton.link} className="relative cursor-pointer hover:-translate-y-0.5 duration-200 inline-flex items-center justify-center rounded-[6px] bg-[linear-gradient(181deg,_#5E5E5E_18.12%,_#000_99.57%)] shadow-[0px_4px_8px_0px_rgba(3,_7,_18,_0.06),_0px_2px_4px_0px_rgba(3,_7,_18,_0.06), 0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_1px_2px_rgba(255,_255,_255,_0.40)_inset, 0px_-1px_5px_2px_rgba(255,_255,_255,_0.40)_inset] w-full py-4 px-6 bg-gray-900 text-white text-md font-medium shadow-sm hover:bg-gray-800 transition-colors">
                                {plan.ctaButton.text}
                            </Link>
                            <ul className="space-y-4">
                                {plan.features.map((feature) => (
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-orange-500 mr-3"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            />
                                        </svg>
                                        <span className="text-[14px] text-gray-600">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const pricingPlans = [
    {
        name: "Starter",
        price: "$19",
        isHighlighted: false,
        ctaButton: { text: "Get Started", link: "/signup" },
        features: [
            "Access to core components",
            "Basic documentation",
            "Community support",
            "Code examples & integrations",
            "Limited updates",
        ],
    },
    {
        name: "Pro",
        price: "$49",
        isHighlighted: true,
        ctaButton: { text: "Most Popular", link: "/signup" },
        features: [
            "Full access to all components",
            "Advanced documentation & guides",
            "Priority support",
            "Frequent updates & new components",
            "Customizable themes & templates",
            "Code examples & integrations",
            "Early access to beta features",
            "Commercial usage license",
            "Exclusive Discord community access",
        ],
    },
    {
        name: "Enterprise",
        price: "$199",
        isHighlighted: false,
        ctaButton: { text: "Contact Us", link: "/contact" },
        features: [
            "Everything in Pro, plus:",
            "Dedicated support & consultation",
            "Team license & collaboration tools",
            "Custom component development",
            "White-label solutions",
        ],
    },
];


export default Pricing;
