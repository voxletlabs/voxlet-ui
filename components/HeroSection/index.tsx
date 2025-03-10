"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { BorderTrail } from '@/components/ui/borderTrail'
import { Spotlight } from '@/components/ui/spotlight'
import FadeAnimation from '@/components/ui/animations/fade'
import Image from 'next/image'
import { SparklesCore } from "@/registry/default/ui/sparkles";
import { FlipWords } from "../ui/animations/text/flip-words";
import { WordPullUp } from "../ui/animations/text/wordsPullUp";
import { customers } from "../Cta";

const HeroSection = () => {
  const words = ["Components", "Blocks", "Templates"];

  return (
    <>
      <div className='relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
        <div className="w-full absolute inset-0 h-[200vh]">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="white"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] scale-x-[-1]" fill="white" />
        </div>

        <div className="absolute top-[3rem] sm:top-[50%] left-[50%] -translate-x-[50%] sm:-translate-y-[50%] w-[200%] sm:w-full sm:max-w-[80rem] mx-auto">
          <div className='relative w-full h-full rounded-full border-4 pointer-events-none aspect-square'>
            <BorderTrail
              style={{
                boxShadow:
                  "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
              }}
              size={100}
              className="hidden dark:block"
            />
          </div>
        </div>

        <div className='absolute bottom-0 w-full h-16 bg-gradient-to-t from-background to-transperant pointer-events-none' />

        <div className="max-w-7xl mx-auto md:mt-[4rem] relative flex flex-col items-center justify-center overflow-hidden px-4 pb-0 pt-20">
          <h1 className="tracking-tight  relative z-20 mx-auto max-w-7xl py-6 text-center text-4xl font-semibold [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)] md:text-4xl lg:text-7xl">
            <span
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
                textWrap: "balance",
              }}
              className="space-y-2 sm:space-y-7"
            >
              <WordPullUp words="Supercharge Your Projects" className="max-sm:leading-snug" />
              <FlipWords words={words} />
            </span>
          </h1>
          <FadeAnimation direction="fadeIn">
            <h2 className="my-4 font-normal text-neutral-600 dark:text-neutral-200 relative z-20 mx-auto mt-2 max-w-5xl text-center text-base md:mt-4 md:text-xl">
              <span
                style={{
                  display: "inline-block",
                  verticalAlign: "top",
                  textDecoration: "inherit",
                  textWrap: "balance",
                }}
              >
                Speed up your workflow with ready-to-use components, blocks, and templates designed for seamless integration and customization.
              </span>
            </h2>
          </FadeAnimation>

          <FadeAnimation direction="fadeUp" blur="false" className="w-full">
            <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 px-8 sm:flex-row">
              <Link href={"/components"} className="w-full sm:w-max">
                <Button className="no-underline flex space-x-2 group cursor-pointer transition duration-200 p-px font-semibold px-4 py-2 bg-primary hover:bg-primary/90 dark:text-black text-white relative z-20 h-10 w-full items-center justify-center rounded-lg text-center text-sm sm:w-52 ">
                  Browse Components
                </Button>
              </Link>
              <Link href={"/blocks"} className="w-full sm:w-max">
                <Button className="no-underline space-x-2 group cursor-pointer transition duration-200 p-px font-semibold px-4 py-2 relative z-20 text-sm bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-900 shadow-input text-black dark:text-white h-10 flex items-center justify-center rounded-lg text-center sm:w-52 w-full">
                  Browse Blocks
                </Button>
              </Link>
            </div>
          </FadeAnimation>
          <div className="flex flex-col items-center my-[3rem]">
            <div className="flex flex-col sm:flex-row mb-2 lg:justify-start justify-center items-center">
              <div className="sm:-ml-4">
                <div className="flex flex-row items-center justify-center w-full">
                  {customers.slice(0, 6).map((image, idx) => (
                    <FadeAnimation
                      key={idx}
                      direction="fadeUp"
                      blur="false"
                      delay={idx * 0.1}
                      inView={false}
                    >
                      <div className="-mr-4 relative group" key={idx}>
                        <Image
                          height={100}
                          width={100}
                          src={image}
                          alt={`image ${idx}`}
                          className="object-cover !m-0 !p-0 object-top rounded-full h-12 w-12 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
                        />
                      </div>
                    </FadeAnimation>
                  ))}
                </div>
              </div>
              <div className="flex justify-center ml-6 mt-4 sm:mt-0">
                {[...Array(5)].map((_, index) => (
                  <FadeAnimation
                    key={index}
                    direction="fadeUp"
                    blur="false"
                    delay={index * 0.1}
                    inView={false}
                  >
                    <svg
                      key={index}
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="h-4 w-4 text-yellow-400 mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  </FadeAnimation>
                ))}
              </div>
            </div>
            <FadeAnimation direction="fadeUp" inView={false}>
              <p className="text-muted-foreground mt-3 text-sm relative z-40 lg:text-left text-center">
                Used by Hundreds of Developers
              </p>
            </FadeAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;