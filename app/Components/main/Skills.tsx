"use client";

import { Backend_skills, Frontend_skills, Full_stacks, Other_skills } from '@/constants';
import React, { useState } from 'react';
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillsText from '../sub/SkillsText';
import { motion } from 'framer-motion';

const Skills = () => {
    // State for hover effects on each skill section
    const [isFrontendHover, setIsFrontendHover] = useState(false);
    const [isBackendHover, setIsBackendHover] = useState(false);
    const [isFullStackHover, setIsFullStackHover] = useState(false);
    const [isOtherHover, setIsOtherHover] = useState(false);

    return (
        <section 
            className='flex flex-col items-center justify-center gap-6 md:gap-8 h-full relative  py-20 md:scale-100 ' 
            id='skills'
            style={{ transform: 'scale(0.8)' }}
        >
            {/* Skills Text Section */}
            <div className="flex-shrink-0 w-full">
                <SkillsText />
            </div>

            {/* Skills Section */}
            <div className="flex flex-row md:flex-col gap-10 mt-4 w-full justify-center">
                {/* Frontend Skills */}
                <div 
                    className={`group flex flex-col md:flex-row md:flex-wrap justify-center gap-6 items-center relative ${isFrontendHover ? 'bg-black/30 border-black/30 rounded-2xl' : ''}`}
                    onMouseEnter={() => setIsFrontendHover(true)}
                    onMouseLeave={() => setIsFrontendHover(false)}
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        animate={isFrontendHover ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -top-10 text-white text-xl"
                    >
                        Frontend Skill
                    </motion.h2>
                    {Frontend_skills.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            index={index}
                            height={image.height}
                            name={image.skill_name}
                            isHovered={isFrontendHover}
                        />
                    ))}
                </div>

                {/* Backend Skills */}
                <div 
                    className={`group flex flex-col md:flex-row md:flex-wrap justify-center gap-6 items-center relative mt-4 ${isBackendHover ? 'bg-black/30 border-black/30 rounded-2xl' : ''}`}
                    onMouseEnter={() => setIsBackendHover(true)}
                    onMouseLeave={() => setIsBackendHover(false)}
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        animate={isBackendHover ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -top-10 text-white text-xl"
                    >
                        Backend Skills
                    </motion.h2>
                    {Backend_skills.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            index={index}
                            height={image.height}
                            name={image.skill_name}
                            isHovered={isBackendHover}
                        />
                    ))}
                </div>

                {/* Full Stack Skills */}
                <div 
                    className={`group flex flex-col md:flex-row md:flex-wrap justify-center gap-6 items-center relative mt-4 ${isFullStackHover ? 'bg-black/30 border-black/30 rounded-2xl' : ''}`}
                    onMouseEnter={() => setIsFullStackHover(true)}
                    onMouseLeave={() => setIsFullStackHover(false)}
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        animate={isFullStackHover ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -top-10 text-white text-xl"
                    >
                        Full Stack Skills
                    </motion.h2>
                    {Full_stacks.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            index={index}
                            height={image.height}
                            name={image.skill_name}
                            isHovered={isFullStackHover}
                        />
                    ))}
                </div>

                {/* Other Skills */}
                <div 
                    className={`group flex flex-col md:flex-row md:flex-wrap justify-center gap-6 items-center relative mt-4 ${isOtherHover ? 'bg-black/30 border-black/30 rounded-2xl' : ''}`}
                    onMouseEnter={() => setIsOtherHover(true)}
                    onMouseLeave={() => setIsOtherHover(false)}
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        animate={isOtherHover ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -top-10 text-white text-xl"
                    >
                        Other Skills
                    </motion.h2>
                    {Other_skills.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            index={index}
                            height={image.height}
                            name={image.skill_name}
                            isHovered={isOtherHover}
                        />
                    ))}
                </div>
            </div>

            {/* Background Video */}
            <div className="w-full h-full absolute pointer-events-none">
                <div className="w-full h-full z-[-15] opacity-30 absolute flex items-center justify-center bg-cover object-cover">
                    <video
                        className='w-full h-auto'
                        preload='false'
                        playsInline
                        loop
                        muted
                        autoPlay
                        src='/cards-video.webm'
                    ></video>
                </div>
            </div>
        </section>
    );
};

export default Skills;
