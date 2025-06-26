import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { ContainerTextFlip } from './ui/ContainerTextFlip'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:top-20 h-screen ' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw] ' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100 dark:bg-grid-white/[0.05]" />

            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Web magic with next js </h2>
                    <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Transforming Concepts into Seamless User Experiences ' />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I&apos;m Sanket, a <ContainerTextFlip words={[
                            "Full Stack Developer",
                            "Flutter App Developer",
                            "Backend Developer",
                            "React & Next.js Enthusiast",
                            "AI & SaaS Application Builder",
                            "Cloud & DevOps Learner",
                        ]}
                            textClassName='text-xl' className='h-10 ' />
                    </p>
                    <a href="https://drive.google.com/file/d/1W9BbYFwrUkkMp7plCkan93mveHuGKpvc/view?usp=sharing" target='_blank'>
                        <MagicButton title="Get my Resume" icon={<FaLocationArrow />} position='right' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero