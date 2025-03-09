import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <div className='bg-white pt-4'>
            <div className="w-full z-50">
                <div
                    className="hidden lg:flex flex-row self-center items-center justify-between py-3 mx-auto px-8 rounded-full relative z-[50] w-[80%]"
                >
                    <Link
                        className="font-normal flex gap-2 justify-center items-center text-sm text-black px-2 py-1 shrink-0 relative z-20"
                        href="/"
                    >
                        <span className="font-medium text-black text-lg">Voxlet UI</span>
                    </Link>
                    <div
                        className="lg:flex flex-row flex-1 items-center justify-center space-x-2 text-sm"
                        style={{ justifyContent: "center", transform: "none" }}
                    >
                        <div className="relative">
                            <Link
                                className="text-black/90 relative px-3 py-1.5 transition-colors"
                                href="/#home"
                            >
                                <span className="relative z-10">Home</span>
                            </Link>
                        </div>
                        <div className="relative">
                            <Link
                                className="text-black/90 relative px-3 py-1.5 transition-colors"
                                href="/#product"
                            >
                                <span className="relative z-10">Product</span>
                            </Link>
                        </div>
                        <div className="relative">
                            <Link
                                className="text-black/90 relative px-3 py-1.5 transition-colors"
                                href="/#pricing"
                            >
                                <span className="relative z-10">Pricing</span>
                            </Link>
                        </div>
                        <div className="relative">
                            <Link
                                className="text-black/90 relative px-3 py-1.5 transition-colors"
                                href="/blog"
                            >
                                <span className="relative z-10">Blog</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <Link
                                className="px-4 py-2 text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center text-black bg-white rounded-[6px] border border-[#E5E5E5]"
                                href="/login"
                            >
                                Login
                            </Link>
                            <Link
                                className="px-4 py-2 text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center rounded-[6px] bg-[linear-gradient(181deg,_#5E5E5E_18.12%,_#000_99.57%)] shadow-[0px_4px_8px_0px_rgba(3,_7,_18,_0.06),_0px_2px_4px_0px_rgba(3,_7,_18,_0.06), 0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_1px_2px_rgba(255,_255,_255,_0.40)_inset, 0px_-1px_5px_2px_rgba(255,_255,_255,_0.40)_inset] text-white"
                                href="/signup"
                            >
                                Signup
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="flex relative flex-col lg:hidden w-full justify-between items-center max-w-[calc(100vw-2rem)] mx-auto z-50 w-[90%]"
                >
                    <div className="flex flex-row justify-between items-center w-full">
                        <Link
                            className="font-normal flex gap-2 justify-center items-center text-sm text-black px-2 py-1 shrink-0 relative z-20"
                            href="/"
                        >
                            <span className="font-medium text-black  text-lg">Voxlet UI</span>
                        </Link>
                        <div tabIndex={0}>
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
                                className="tabler-icon tabler-icon-menu-2 text-black/90"
                            >
                                <path d="M4 6l16 0" />
                                <path d="M4 12l16 0" />
                                <path d="M4 18l16 0" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex max-w-7xl rounded-b-3xl my-2 md:my-20  mx-auto flex-col items-center justify-center pt-16 overflow-hidden px-4 md:px-8 bg-gradient-to-t from-blue-600  via-blue-100 to-white">
                <div className="text-balance relative z-20 mx-auto mb-4 max-w-6xl text-center text-4xl font-semibold tracking-tight text-gray-700  md:text-7xl">
                    <span
                        data-br=":R4btfb:"
                        data-brr={1}
                        style={{
                            display: "inline-block",
                            verticalAlign: "top",
                            textDecoration: "inherit",
                            textWrap: "balance"
                        }}
                    >
                        <h2
                            className="inline-block bg-gradient-to-b from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)] bg-clip-text text-transparent"
                            style={{ opacity: 1 }}
                        >
                            Where Your {/* */}{" "}
                            <span className="bg-gradient-to-b from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                Dreams
                            </span>
                        </h2>
                        <h2
                            className="inline-block bg-gradient-to-b from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)] bg-clip-text text-transparent py-2"
                            style={{ opacity: 1 }}
                        >
                            Become {/* */}{" "}
                            <span className="bg-gradient-to-b from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                Reality
                            </span>
                        </h2>
                    </span>
                </div>
                <p
                    className="relative z-20 mx-auto mt-4 max-w-2xl px-4 text-center text-base/6 text-gray-600  sm:text-base"
                    style={{ opacity: 1, transform: "none" }}
                >
                    Discover breathtaking destinations and seamless travel planning with our expert guidance.
                    Unforgettable experiences await—book your journey today!
                </p>
                <div
                    className="mb-8 mt-6 z-10 sm:mb-10 sm:mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:px-8 sm:flex-row md:mb-20"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <Link
                        className="px-4 py-2 text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 rounded-[6px] bg-[linear-gradient(181deg,_#5E5E5E_18.12%,_#000_99.57%)] shadow-[0px_4px_8px_0px_rgba(3,_7,_18,_0.06),_0px_2px_4px_0px_rgba(3,_7,_18,_0.06), 0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_1px_2px_rgba(255,_255,_255,_0.40)_inset, 0px_-1px_5px_2px_rgba(255,_255,_255,_0.40)_inset] text-white w-full sm:w-40 h-12 flex items-center justify-center"
                        href="/login"
                    >
                        Get Started
                    </Link>
                </div>
                <div className="pt-[2rem] w-full min-h-[21rem] relative">
                    <div
                        className="absolute top-0 left-0 right-0  z-10"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        <div className="relative mx-auto h-[600px] w-[300px] md:h-[680px] md:w-[340px]">
                            <div className="absolute inset-0 rounded-[50px] border-[14px] border-black bg-black shadow-xl">
                                <div className="absolute left-1/2 top-[0.5rem] h-[1.8rem] w-[6rem] -translate-x-1/2 rounded-full bg-black z-10">
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[0.6rem] h-[0.6rem] rounded-full bg-[#1a1a1a] ring-[1.5px] ring-[#2a2a2a]">
                                        <div className="absolute inset-[1.5px] rounded-full bg-[#0f0f0f]">
                                            <div className="absolute inset-[1.5px] rounded-full bg-[#151515] ring-[0.75px] ring-[#202020]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-full w-full overflow-hidden rounded-[35px] bg-white">
                                    <Image
                                        src={'https://images.pexels.com/photos/1317943/pexels-photo-1317943.jpeg?auto=compress&cs=tinysrgb&w=600'}
                                        alt=""
                                        height={300}
                                        width={150}
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 z-0 flex items-center justify-center">
                        <div
                            className="absolute z-0 rounded-full border border-white/30"
                            style={{ width: 1400, height: 1400 }}
                        />
                        <div
                            className="absolute z-0 rounded-full border border-white"
                            style={{
                                width: 1100,
                                height: 1100,
                                clipPath: "circle(50% at 50% 50%)",
                                background:
                                    "radial-gradient(circle, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0) 60%)",
                                transform: "translateY(-1.65972px) scale(1.00664)"
                            }}
                        />
                        <div
                            className="absolute bg-white/5 z-2  rounded-full  border border-[rgba(255,255,255,0.1)] shadow-[0_0_200px_80px_rgba(255,255,255,0.1)]"
                            style={{
                                width: 800,
                                height: 800,
                                transform: "translateY(-6.79899px) scale(1.02914)"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection