
import Link from "next/link";
import BlocksExplorer from "@/components/blocks-explorer";
import FadeAnimation from "@/components/ui/animations/fade";
import { Button } from "@/registry/default/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { BorderTrail } from "@/components/ui/borderTrail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Voxlet UI Blocks - Accelerate Development with Pre-built React Components',
  description: 'Discover Voxlet UI Blocks—a comprehensive collection of pre-built, animated React and Tailwind CSS components designed to streamline your web development process and enhance user experiences.',
};

export default function BlocksPage() {
  return (
    <>
      <div className='relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
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

        <div className="absolute bottom-[7rem] left-[50%] -translate-x-[50%] w-[200%] sm:w-full sm:max-w-[85rem] mx-auto">
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

        <div className='pt-[6rem] max-2xl:min-h-screen sm:min-h-screen flex flex-col items-center jusity-center gap-5 z-[50] max-w-7xl mx-auto px-4'>
          <FadeAnimation direction='fadeIn'>
            <div className='relative border rounded-full'>
              <BorderTrail
                style={{
                  boxShadow:
                    "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
                }}
                size={100}
                className="hidden dark:block"
              />
              <p className='px-4 py-1 text-center'>🚀 Voxlet UI Blocks</p>
            </div>
          </FadeAnimation>
          <FadeAnimation direction='fadeIn'>
            <h1 className="text-4xl md:text-6xl max-w-2xl leading-snug font-semibold text-center">
              Build Faster with Voxlet Blocks
            </h1>
          </FadeAnimation>
          <FadeAnimation direction='fadeIn'>
            <p className='text-md md:text-lg max-w-xl text-muted-foreground text-center'>
              Pre-built, flexible UI blocks to speed up your workflow.
            </p>
          </FadeAnimation>
          <FadeAnimation direction='fadeUp'>
            <Link href={'#blocks'}>
              <Button className='rounded-lg md:scale-[1.1] my-1' size={'lg'}>
                Browse Blocks
              </Button>
            </Link>
          </FadeAnimation>
        </div>
      </div>
      <div id="blocks" className="p-4 max-w-[85rem] mx-auto pb-40">
        <BlocksExplorer />
      </div>
    </>
  );
}
