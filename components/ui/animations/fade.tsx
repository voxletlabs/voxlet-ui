"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/registry/default/lib/utils";
import { useInView } from "framer-motion";

interface FadeAnimationProps {
    children: ReactNode;
    direction: "fade" | "fadeIn" | "fadeOut" | "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight";
    inView?: boolean;
    duration?: number;
    className?: string;
    once?: boolean;
    blur?: string;
    yOffset?: number;
    xOffset?: number;
    inViewMargin?: string; // Accepting string type
    delay?: number; // Add delay here
}

const FadeAnimation = ({
    children,
    direction,
    inView = true,
    duration = 1,
    className,
    once = true,
    blur = "6px",
    yOffset = 50,
    xOffset = 50,
    inViewMargin = "-50px", // Default margin value
    delay = 0, // Default delay value
}: FadeAnimationProps) => {
    const ref = useRef(null);
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const inViewResult = useInView(ref, { once, margin: inViewMargin as any });
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const isInView = !inView || inViewResult;

    const directionVariants = {
        fade: { hidden: { opacity: 0, filter: `blur(${blur})` }, visible: { opacity: 1, filter: "blur(0px)" } },
        fadeIn: { hidden: { opacity: 0, filter: `blur(${blur})` }, visible: { opacity: 1, filter: "blur(0px)" } },
        fadeOut: { hidden: { opacity: 1, filter: "blur(0px)" }, visible: { opacity: 0, filter: `blur(${blur})` } },
        fadeUp: { hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` }, visible: { y: 0, opacity: 1, filter: "blur(0px)" } },
        fadeDown: { hidden: { y: -yOffset, opacity: 0, filter: `blur(${blur})` }, visible: { y: 0, opacity: 1, filter: "blur(0px)" } },
        fadeLeft: { hidden: { x: -xOffset, opacity: 0, filter: `blur(${blur})` }, visible: { x: 0, opacity: 1, filter: "blur(0px)" } },
        fadeRight: { hidden: { x: xOffset, opacity: 0, filter: `blur(${blur})` }, visible: { x: 0, opacity: 1, filter: "blur(0px)" } },
    };

    const variants = directionVariants[direction] || directionVariants.fade;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileInView={inView ? "visible" : undefined}
            viewport={inView ? { once, amount: 0.5 } : undefined}
            transition={{ duration, delay }} // Add the delay here
            variants={variants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};

export default FadeAnimation;