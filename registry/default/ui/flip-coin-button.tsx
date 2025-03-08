"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/registry/default/lib/utils"

interface FlipCoinButtonProps {
  children: ReactNode
}

export default function FlipCoinButton({ children }: FlipCoinButtonProps) {
  const [clicked, setClicked] = useState(false)
  const [shrinkLanding, setShrinkLanding] = useState(false)
  const [coinLanded, setCoinLanded] = useState(false)
  const coinRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>()

  const handleClick = () => {
    if (clicked) return

    setClicked(true)

    // Wait to start flipping the coin because of the button tilt animation
    setTimeout(() => {
      if (coinRef.current) {
        // Randomize the flipping speeds just for fun
        coinRef.current.style.setProperty("--coin-side-rotation-count", `${Math.floor(Math.random() * 5) * 90}`)
        coinRef.current.style.setProperty("--coin-max-flip-angle", `${(Math.floor(Math.random() * 4) + 3) * Math.PI}`)
        flipCoin()
      }
    }, 50)
  }

  const flipCoin = () => {
    if (!coinRef.current) return

    let moveLoopCount = 0
    const maxMoveLoopCount = 90 // The larger the number, the slower the animation
    const sideRotationCount = Number.parseInt(
      coinRef.current.style.getPropertyValue("--coin-side-rotation-count") || "0",
    )
    const maxFlipAngle = Number.parseFloat(coinRef.current.style.getPropertyValue("--coin-max-flip-angle") || "0")

    const flipCoinLoop = () => {
      if (!coinRef.current) return

      moveLoopCount++
      const percentageCompleted = moveLoopCount / maxMoveLoopCount
      const angle = -maxFlipAngle * Math.pow(percentageCompleted - 1, 2) + maxFlipAngle

      // Calculate the scale and position of the coin moving through the air
      coinRef.current.style.setProperty("--coin-y-multiplier", `${-11 * Math.pow(percentageCompleted * 2 - 1, 4) + 11}`)
      coinRef.current.style.setProperty("--coin-x-multiplier", `${percentageCompleted}`)
      coinRef.current.style.setProperty("--coin-scale-multiplier", `${percentageCompleted * 0.6}`)
      coinRef.current.style.setProperty("--coin-rotation-multiplier", `${percentageCompleted * sideRotationCount}`)

      // Calculate the scale and position values for the different coin faces
      coinRef.current.style.setProperty("--front-scale-multiplier", `${Math.max(Math.cos(angle), 0)}`)
      coinRef.current.style.setProperty("--front-y-multiplier", `${Math.sin(angle)}`)

      coinRef.current.style.setProperty("--middle-scale-multiplier", `${Math.abs(Math.cos(angle))}`)
      coinRef.current.style.setProperty("--middle-y-multiplier", `${Math.cos((angle + Math.PI / 2) % Math.PI)}`)

      coinRef.current.style.setProperty("--back-scale-multiplier", `${Math.max(Math.cos(angle - Math.PI), 0)}`)
      coinRef.current.style.setProperty("--back-y-multiplier", `${Math.sin(angle - Math.PI)}`)

      coinRef.current.style.setProperty(
        "--shine-opacity-multiplier",
        `${4 * Math.sin((angle + Math.PI / 2) % Math.PI) - 3.2}`,
      )
      coinRef.current.style.setProperty(
        "--shine-bg-multiplier",
        `${-40 * (Math.cos((angle + Math.PI / 2) % Math.PI) - 0.5)}%`,
      )

      // Repeat animation loop
      if (moveLoopCount < maxMoveLoopCount) {
        if (moveLoopCount === maxMoveLoopCount - 6) {
          setShrinkLanding(true)
        }
        requestRef.current = requestAnimationFrame(flipCoinLoop)
      } else {
        setCoinLanded(true)
        if (coinRef.current) {
          coinRef.current.style.setProperty("opacity", "0")
        }
        setTimeout(() => {
          setClicked(false)
          setShrinkLanding(false)
          setCoinLanded(false)
          setTimeout(() => {
            resetCoin()
          }, 300)
        }, 1500)
      }
    }

    requestRef.current = requestAnimationFrame(flipCoinLoop)
  }

  const resetCoin = () => {
    if (!coinRef.current) return

    coinRef.current.style.setProperty("--coin-x-multiplier", "0")
    coinRef.current.style.setProperty("--coin-scale-multiplier", "0")
    coinRef.current.style.setProperty("--coin-rotation-multiplier", "0")
    coinRef.current.style.setProperty("--shine-opacity-multiplier", "0.4")
    coinRef.current.style.setProperty("--shine-bg-multiplier", "50%")
    coinRef.current.style.setProperty("opacity", "1")
  }

  useEffect(() => {
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  return (
    <button
      className={cn("flipCoinButton", {
        clicked: clicked,
        shrinkLanding: shrinkLanding,
        coinLanded: coinLanded,
      })}
      onClick={handleClick}
    >
      <span className="buttonText">{children}</span>
      <div className="coinWrapper">
        <div className="coin" ref={coinRef}>
          <div className="coinMiddle"></div>
          <div className="coinBack"></div>
          <div className="coinFront"></div>
        </div>
      </div>
    </button>
  )
}

// Define all CSS as a template string
const styles = `
.flipCoinButton {
  background: none;
  border: 0;
  border-radius: 0.25rem 0.25rem 0 0;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  height: 2.6rem;
  margin-bottom: -4rem;
  outline: 0;
  position: relative;
  top: 0;
  transform-origin: 0% 100%;
  transition: transform 50ms ease-in-out;
  width: 9.5rem;
  -webkit-tap-highlight-color: transparent;
}

.flipCoinButton:active {
  transform: rotate(4deg);
}

.flipCoinButton.clicked {
  animation: 150ms ease-in-out 1 shake;
  pointer-events: none;
}

.flipCoinButton.clicked .buttonText {
  opacity: 0;
  transition: opacity 100ms linear 200ms;
}

.flipCoinButton.clicked::before {
  height: 0.5rem;
  width: 60%;
}

.flipCoinButton.clicked .coin {
  transition: margin-bottom 1s linear 200ms;
  margin-bottom: 0;
}

.flipCoinButton.shrinkLanding::before {
  transition: width 200ms ease-in;
  width: 0;
}

.flipCoinButton.coinLanded::after {
  opacity: 1;
  transform: scale(1);
  transform-origin: 50% 100%;
}

.flipCoinButton.coinLanded .coinWrapper {
  background: radial-gradient(circle at 35% 97%, rgba(3, 16, 50, 0.4) 0.04rem, transparent 0.04rem),
    radial-gradient(circle at 45% 92%, rgba(3, 16, 50, 0.4) 0.04rem, transparent 0.02rem),
    radial-gradient(circle at 55% 98%, rgba(3, 16, 50, 0.4) 0.04rem, transparent 0.04rem),
    radial-gradient(circle at 65% 96%, rgba(3, 16, 50, 0.4) 0.06rem, transparent 0.06rem);
  background-position: center bottom;
  background-size: 100%;
  bottom: -1rem;
  opacity: 0;
  transform: scale(2) translateY(-10px);
}

.buttonText {
  color: #fff;
  margin-right: 1.8rem;
  opacity: 1;
  position: relative;
  transition: opacity 100ms linear 500ms;
  z-index: 3;
}

.flipCoinButton::before {
  background: #031032;
  border-radius: 0.25rem;
  bottom: 0;
  content: "";
  display: block;
  height: 100%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  transition: height 250ms ease-in-out 400ms, width 250ms ease-in-out 300ms;
  width: 100%;
  z-index: 2;
}

.flipCoinButton::after {
  bottom: -1rem;
  color: #808080;
  content: "Thank you!";
  height: 110%;
  left: 0;
  opacity: 0;
  position: absolute;
  pointer-events: none;
  text-align: center;
  transform: scale(0);
  transform-origin: 50% 20%;
  transition: transform 200ms cubic-bezier(0, 0, 0.35, 1.43);
  width: 100%;
  z-index: 1;
}

.coinWrapper {
  background: none;
  bottom: 0;
  height: 18rem;
  left: 0;
  opacity: 1;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  transform: none;
  transform-origin: 50% 100%;
  transition: opacity 200ms linear 100ms, transform 300ms ease-out;
  width: 100%;
}

.coin {
  --front-y-multiplier: 0;
  --back-y-multiplier: 0;
  --coin-y-multiplier: 0;
  --coin-x-multiplier: 0;
  --coin-scale-multiplier: 0;
  --coin-rotation-multiplier: 0;
  --shine-opacity-multiplier: 0.4;
  --shine-bg-multiplier: 50%;
  bottom: calc(var(--coin-y-multiplier) * 1rem - 3.5rem);
  height: 3.5rem;
  margin-bottom: 3.05rem;
  position: absolute;
  right: calc(var(--coin-x-multiplier) * 34% + 16%);
  transform: translateX(50%) scale(calc(0.4 + var(--coin-scale-multiplier)))
    rotate(calc(var(--coin-rotation-multiplier) * -1deg));
  transition: opacity 100ms linear 200ms;
  width: 3.5rem;
  z-index: 3;
}

.coinFront,
.coinMiddle,
.coinBack,
.coin::before,
.coinFront::after,
.coinBack::after {
  border-radius: 50%;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 3;
}

.coinFront {
  background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(115, 124, 153, 0.4) 54%, #c2cadf 54%),
    linear-gradient(210deg, #8590b3 32%, transparent 32%), linear-gradient(150deg, #8590b3 32%, transparent 32%),
    linear-gradient(to right, #8590b3 22%, transparent 22%, transparent 78%, #8590b3 78%),
    linear-gradient(to bottom, #fcfaf9 44%, transparent 44%, transparent 65%, #fcfaf9 65%, #fcfaf9 71%, #8590b3 71%),
    linear-gradient(
      to right,
      transparent 28%,
      #fcfaf9 28%,
      #fcfaf9 34%,
      #8590b3 34%,
      #8590b3 40%,
      #fcfaf9 40%,
      #fcfaf9 47%,
      #8590b3 47%,
      #8590b3 53%,
      #fcfaf9 53%,
      #fcfaf9 60%,
      #8590b3 60%,
      #8590b3 66%,
      #fcfaf9 66%,
      #fcfaf9 72%,
      transparent 72%
    );
  background-color: #8590b3;
  background-size: 100% 100%;
  transform: translateY(calc(var(--front-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--front-scale-multiplier));
}

.coinFront::after {
  background: rgba(0, 0, 0, 0.2);
  content: "";
  opacity: var(--front-y-multiplier);
}

.coinMiddle {
  background: #737c99;
  transform: translateY(calc(var(--middle-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--middle-scale-multiplier));
}

.coinBack {
  background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(115, 124, 153, 0.4) 54%, #c2cadf 54%),
    radial-gradient(circle at 50% 40%, #fcfaf9 23%, transparent 23%),
    radial-gradient(circle at 50% 100%, #fcfaf9 35%, transparent 35%);
  background-color: #8590b3;
  background-size: 100% 100%;
  transform: translateY(calc(var(--back-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--back-scale-multiplier));
}

.coinBack::after {
  background: rgba(0, 0, 0, 0.2);
  content: "";
  opacity: var(--back-y-multiplier);
}

.coin::before {
  background: radial-gradient(circle at 25% 65%, transparent 50%, rgba(255, 255, 255, 0.9) 90%),
    linear-gradient(
      55deg,
      transparent calc(var(--shine-bg-multiplier) + 0%),
      #e9f4ff calc(var(--shine-bg-multiplier) + 0%),
      transparent calc(var(--shine-bg-multiplier) + 50%)
    );
  content: "";
  opacity: var(--shine-opacity-multiplier);
  transform: translateY(calc(var(--middle-y-multiplier) * 0.3181818182rem / -2)) scaleY(var(--middle-scale-multiplier))
    rotate(calc(var(--coin-rotation-multiplier) * 1deg));
  z-index: 10;
}

.coin::after {
  background: #737c99;
  content: "";
  height: 0.3181818182rem;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 2;
}

@keyframes shake {
  0% {
    transform: rotate(4deg);
  }
  66% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate();
  }
}
`

// Function to inject styles into the document head
const injectStyles = () => {
  if (typeof document !== "undefined") {
    const styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
  }
}

// Inject styles
injectStyles()
