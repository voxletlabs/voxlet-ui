import React from 'react'
 
const MacBookKeyboard = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-center gap-10 max-w-[88rem] mx-auto w-full">
                <div className="absolute md:relative rounded-md bg-zinc-800 p-1 translate-y-14 scale-[0.9] sm:scale-[1.5] md:scale-[1.7] w-fit h-fit mx-auto">
                    <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 bg-[#0A090D] rounded-[3.5px] flex w-10 items-end justify-start pl-[4px] pb-[2px]"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center flex-col items-start text-white">
                                    esc
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M12 5l0 .01" />
                                        <path d="M17 7l0 .01" />
                                        <path d="M19 12l0 .01" />
                                        <path d="M17 17l0 .01" />
                                        <path d="M12 19l0 .01" />
                                        <path d="M7 17l0 .01" />
                                        <path d="M5 12l0 .01" />
                                        <path d="M7 7l0 .01" />
                                    </svg>
                                    <span className="inline-block mt-1">F1</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M12 5l0 -2" />
                                        <path d="M17 7l1.4 -1.4" />
                                        <path d="M19 12l2 0" />
                                        <path d="M17 17l1.4 1.4" />
                                        <path d="M12 19l0 2" />
                                        <path d="M7 17l-1.4 1.4" />
                                        <path d="M6 12l-2 0" />
                                        <path d="M7 7l-1.4 -1.4" />
                                    </svg>
                                    <span className="inline-block mt-1">F2</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                                        <path d="M3 10h18" />
                                        <path d="M10 3v18" />
                                    </svg>
                                    <span className="inline-block mt-1">F3</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                        <path d="M21 21l-6 -6" />
                                    </svg>
                                    <span className="inline-block mt-1">F4</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
                                        <path d="M5 10a7 7 0 0 0 14 0" />
                                        <path d="M8 21l8 0" />
                                        <path d="M12 17l0 4" />
                                    </svg>
                                    <span className="inline-block mt-1">F5</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                                    </svg>
                                    <span className="inline-block mt-1">F6</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M21 5v14l-8 -7z" />
                                        <path d="M10 5v14l-8 -7z" />
                                    </svg>
                                    <span className="inline-block mt-1">F7</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M4 5v14l12 -7z" />
                                        <path d="M20 5l0 14" />
                                    </svg>
                                    <span className="inline-block mt-1">F8</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M3 5v14l8 -7z" />
                                        <path d="M14 5v14l8 -7z" />
                                    </svg>
                                    <span className="inline-block mt-1">F8</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                                        <path d="M16 10l4 4m0 -4l-4 4" />
                                    </svg>
                                    <span className="inline-block mt-1">F10</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M15 8a5 5 0 0 1 0 8" />
                                        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                                    </svg>
                                    <span className="inline-block mt-1">F11</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                        className="h-[6px] w-[6px]"
                                    >
                                        <path d="M15 8a5 5 0 0 1 0 8" />
                                        <path d="M17.7 5a9 9 0 0 1 0 14" />
                                        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                                    </svg>
                                    <span className="inline-block mt-1">F12</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <div className="h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
                                        <div className="bg-black h-full w-full rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">~</span>
                                    <span className="block mt-1">`</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block ">!</span>
                                    <span className="block">1</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">@</span>
                                    <span className="block">2</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">#</span>
                                    <span className="block">3</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">$</span>
                                    <span className="block">4</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">%</span>
                                    <span className="block">5</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">^</span>
                                    <span className="block">6</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">&amp;</span>
                                    <span className="block">7</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">*</span>
                                    <span className="block">8</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">(</span>
                                    <span className="block">9</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">)</span>
                                    <span className="block">0</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">—</span>
                                    <span className="block">_</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">+</span>
                                    <span className="block"> = </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 bg-[#0A090D] rounded-[3.5px] flex w-10 items-end justify-end pr-[4px] pb-[2px]"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center flex-col items-end text-white">
                                    delete
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 bg-[#0A090D] rounded-[3.5px] flex w-10 items-end justify-start pl-[4px] pb-[2px]"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center flex-col items-start text-white">
                                    tab
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">Q</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">W</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">E</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">R</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">T</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">Y</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">U</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">I</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">O</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">P</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">{"{"}</span>
                                    <span className="block">[</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">{"}"}</span>
                                    <span className="block">]</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">|</span>
                                    <span className="block">\</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 bg-[#0A090D] rounded-[3.5px] flex w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center flex-col items-start text-white">
                                    caps lock
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">A</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">S</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">D</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">F</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">G</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">H</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">J</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">K</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">L</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">:</span>
                                    <span className="block">;</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">"</span>
                                    <span className="block">'</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 bg-[#0A090D] rounded-[3.5px] flex w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center flex-col items-end text-white">
                                    return
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 bg-[#0A090D] rounded-[3.5px] flex w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center flex-col items-start text-white">
                                    shift
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">Z</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">X</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">C</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">V</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">B</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">N</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">M</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">&lt;</span>
                                    <span className="block">,</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">&gt;</span>
                                    <span className="block">.</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
                                    <span className="block">?</span>
                                    <span className="block">/</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 bg-[#0A090D] rounded-[3.5px] flex w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center flex-col items-end text-white">
                                    shift
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                                    <div className="flex justify-end w-full pr-1">
                                        <span className="block">fn</span>
                                    </div>
                                    <div className="flex justify-start w-full pl-1">
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
                                            className="h-[6px] w-[6px]"
                                        >
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                            <path d="M3.6 9h16.8" />
                                            <path d="M3.6 15h16.8" />
                                            <path d="M11.5 3a17 17 0 0 0 0 18" />
                                            <path d="M12.5 3a17 17 0 0 1 0 18" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                                    <div className="flex justify-end w-full pr-1">
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
                                            className="h-[6px] w-[6px]"
                                        >
                                            <path d="M6 15l6 -6l6 6" />
                                        </svg>
                                    </div>
                                    <div className="flex justify-start w-full pl-1">
                                        <span className="block">control</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                                    <div className="flex justify-end w-full pr-1">
                                        <svg
                                            fill="none"
                                            version="1.1"
                                            id="icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 32 32"
                                            className="h-[6px] w-[6px]"
                                        >
                                            <rect
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                x={18}
                                                y={5}
                                                width={10}
                                                height={2}
                                            />
                                            <polygon
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
                                            />
                                            <rect
                                                id="_Transparent_Rectangle_"
                                                className="st0"
                                                width={32}
                                                height={32}
                                                stroke="none"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex justify-start w-full pl-1">
                                        <span className="block">option</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-8"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                                    <div className="flex justify-end w-full pr-1">
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
                                            className="h-[6px] w-[6px]"
                                        >
                                            <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
                                        </svg>
                                    </div>
                                    <div className="flex justify-start w-full pl-1">
                                        <span className="block">command</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-[8.2rem]"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex justify-center items-center flex-col text-white" />
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-8"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                                    <div className="flex justify-start w-full pl-1">
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
                                            className="h-[6px] w-[6px]"
                                        >
                                            <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
                                        </svg>
                                    </div>
                                    <div className="flex justify-start w-full pl-1">
                                        <span className="block">command</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                            <div
                                className="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                }}
                            >
                                <div className="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                                    <div className="flex justify-start w-full pl-1">
                                        <svg
                                            fill="none"
                                            version="1.1"
                                            id="icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 32 32"
                                            className="h-[6px] w-[6px]"
                                        >
                                            <rect
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                x={18}
                                                y={5}
                                                width={10}
                                                height={2}
                                            />
                                            <polygon
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
                                            />
                                            <rect
                                                id="_Transparent_Rectangle_"
                                                className="st0"
                                                width={32}
                                                height={32}
                                                stroke="none"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex justify-start w-full pl-1">
                                        <span className="block">option</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
                            <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                                <div
                                    className="bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-6 h-3"
                                    style={{
                                        boxShadow:
                                            "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                    }}
                                >
                                    <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                            className="h-[6px] w-[6px]"
                                        >
                                            <path
                                                d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z"
                                                fill="currentColor"
                                                strokeWidth={0}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                                    <div
                                        className="bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-6 h-3"
                                        style={{
                                            boxShadow:
                                                "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                        }}
                                    >
                                        <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                                className="h-[6px] w-[6px]"
                                            >
                                                <path
                                                    d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                                    <div
                                        className="bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-6 h-3"
                                        style={{
                                            boxShadow:
                                                "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                        }}
                                    >
                                        <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                                className="h-[6px] w-[6px]"
                                            >
                                                <path
                                                    d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-md shadow-white/50 hover:shadow-none hover:scale-[0.98] cursor-pointer transition duration-100">
                                    <div
                                        className="bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-6 h-3"
                                        style={{
                                            boxShadow:
                                                "rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset"
                                        }}
                                    >
                                        <div className="text-[5px] w-full flex justify-center items-center flex-col text-white">
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
                                                className="h-[6px] w-[6px]"
                                            >
                                                <path
                                                    d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default MacBookKeyboard