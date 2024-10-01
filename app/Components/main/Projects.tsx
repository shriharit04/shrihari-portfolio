"use client"
import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
    const [ref, inView] = useInView({ triggerOnce: true })

    return (
        <div className='flex flex-col items-center justify-center py-20' id="projects">

            <div className='w-full h-auto flex flex-col items-center justify-center'>
                <motion.div>
                    <motion.h1
                        ref={ref}
                        className=' font-mono font-extrabold text-center text-6xl mb-8 pb-4  bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-cyan-500'
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        My Projects
                    </motion.h1>
                    {/* <p className='text-lg text-white'>
          
        </p> */}
                </motion.div>
            </div>
            

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                >
                <ProjectCard
                    src="/NextWebsite.png"
                    title="Modern Next.js Portfolio"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    githubLink='something.github'
                    siteLink=''
                />
                <ProjectCard
                    src="/CardImage.png"
                    title="Interactive Website Cards"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    githubLink='something.github'
                    siteLink=''
                />
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Space Themed Website"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    githubLink='something.github'
                    siteLink=''
                />
            </div>

        </div>
    )
}

export default Projects
