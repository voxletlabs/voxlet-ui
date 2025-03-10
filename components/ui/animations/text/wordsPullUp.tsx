"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/registry/default/lib/utils";

interface WordPullUpProps {
    words: string;
    delayMultiple?: number;
    wrapperFramerProps?: Variants;
    framerProps?: Variants;
    className?: string;
    inView?: boolean;
}

export function WordPullUp({
    words,
    wrapperFramerProps = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    },
    framerProps = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    },
    className,
    inView = true,
}: WordPullUpProps) {
    const ref = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px" });

    const shouldAnimate = !inView || isInView;

    return (
        <motion.h1
            ref={ref}
            variants={wrapperFramerProps}
            initial="hidden"
            animate={shouldAnimate ? "show" : "hidden"}
            className={cn(className)}
        >
            {words.split(" ").map((word, i) => (
                <motion.span
                    key={i}
                    variants={framerProps}
                    style={{ display: "inline-block", paddingRight: "8px" }}
                >
                    {word === "" ? <span>&nbsp;</span> : word}
                </motion.span>
            ))}
        </motion.h1>
    );
}