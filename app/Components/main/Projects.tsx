"use client"
import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from "react";


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

                <ProjectCard
                    src="/NextWebsite.png"
                    title="AI-Powered Chatbot"
                    shortDesc="An AI-driven chatbot for legal assistance."
                    tags={['AI', 'Chatbot', 'LegalTech']}
                    desc="A chatbot designed to provide legal assistance by answering queries using natural language processing and machine learning."
                    githubLink='https://github.com/dummy-link'
                    siteLink='https://legalbot.example.com'
                    index={1}
                />
                <ProjectCard
                    src="/CardImage.png"
                    title="E-Commerce Website"
                    shortDesc="A modern and responsive e-commerce platform."
                    tags={['React', 'Node.js', 'eCommerce']}
                    desc="An e-commerce platform with integrated payment gateway, product listings, and user authentication."
                    githubLink='https://github.com/dummy-link2'
                    siteLink='https://ecommerce.example.com'
                    index={2}
                />
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Portfolio Website"
                    shortDesc="A portfolio site showcasing projects and blogs."
                    tags={['Next.js', 'Portfolio', 'Web Development']}
                    desc="A modern portfolio website featuring projects, blogs, and contact information, built using Next.js and styled with SCSS."
                    githubLink='https://github.com/dummy-link3'
                    siteLink='https://portfolio.example.com'
                    index={3}
                />

            </div>

        </div>
    )
}



export default Projects
