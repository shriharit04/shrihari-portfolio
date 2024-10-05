"use client"
import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from "react";
import { projectsInfo } from '@/constants/projectsInfo'


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

               {projectsInfo.map( (project,index) => {
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
