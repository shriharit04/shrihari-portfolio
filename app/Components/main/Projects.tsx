'use client';
import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projectsInfo } from '@/constants/projectsInfo'

interface CompProps{
    className? : string;
}

const Projects = ({className} : CompProps) => {
    const [ref, inView] = useInView({ triggerOnce: true })

    return (
        <div className= {className + ' flex flex-col items-center justify-center py-20' } id="projects">
            {/* Header */}
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                <motion.div>
                    <motion.h1
                        ref={ref}
                        className='font-mono font-extrabold text-center text-6xl mb-8 pb-4 bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-cyan-500'
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
                </motion.div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full max-w-7xl">
                {projectsInfo.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            src={project.src}
                            title={project.title}
                            shortDesc={project.shortDesc}
                            tags={project.tags}
                            desc={project.desc}
                            githubLink={project.githubLink}
                            siteLink={project.siteLink}
                            index={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
