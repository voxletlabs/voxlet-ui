'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/registry/default/ui/button"
import { Card } from "@/registry/default/ui/card"
import { ScrollArea } from "@/registry/default/ui/scroll-area"
import { ChevronDown, MessageSquare, SendHorizontal, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/registry/default/lib/utils'

interface ChatWidgetProps {
    className?: string
    calendarLink: string
    email: string
    logo?: string
    greeting?: string
    headline?: string
}

export default function ChatWidget({
    className,
    calendarLink,
    email,
    logo = "https://voxlet.vercel.app/logo-transperant-bg.svg",
    greeting = "Hi there 👋",
    headline = "How can we help?",
}: ChatWidgetProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={cn("fixed bottom-4 right-4 z-[110] flex flex-col items-end", className)}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mb-2"
                    >
                        <Card className="bg-background max-w-[calc(100vw-30px)] w-[380px] h-[600px] max-h-[calc(100vh-100px)] flex flex-col rounded-xl overflow-hidden shadow-xl">

                            <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-400 p-6 pb-[6rem] text-white relative">
                                <div className='absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-background via-background/50 to-transperant pointer-events-none'></div>
                                <div className="flex justify-start items-start">
                                    <Image
                                        src={logo}
                                        alt={'logo'}
                                        height={35}
                                        width={35}
                                        className="rounded-md z-[111]"
                                    />
                                </div>

                                <div className="mt-16 mb-2 z-[10]">
                                    <h2 className="text-2xl font-semibold">{greeting}</h2>
                                    <h1 className="text-3xl font-bold mt-1">{headline}</h1>
                                </div>
                            </div>

                            <ScrollArea className="flex-1 -mt-20">
                                <div className="p-4 flex flex-col gap-3">
                                    <Link href={calendarLink}>
                                        <button className="w-full bg-background hover:bg-muted text-left px-4 py-3 rounded-xl border flex justify-between items-center group transition-colors">
                                            <div>
                                                <div className="font-medium">Book a Call</div>
                                                <div className="text-sm text-muted-foreground">Let&apos;s discuss your needs</div>
                                            </div>
                                            <Users className="size-5" />
                                        </button>
                                    </Link>

                                    <a href={`mailto:${email}`}>
                                        <button
                                            className="w-full text-left px-4 py-3 bg-background hover:bg-muted rounded-lg flex justify-between items-center group transition-colors border"
                                        >
                                            <div>
                                                <div className="font-medium">Send an Email</div>
                                                <div className="text-sm text-muted-foreground">{email}</div>
                                            </div>
                                            <SendHorizontal className="size-5" />
                                        </button>
                                    </a>

                                </div>
                            </ScrollArea>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Button
                    size="icon"
                    className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg text-white scale-[0.8]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <ChevronDown className="w-8 h-8 text-white scale-[1.5]" />
                    ) : (
                        <MessageSquare className="w-8 h-8 fill-current text-white scale-[1.5]" />
                    )}
                </Button>
            </motion.div>
        </div>
    )
}
