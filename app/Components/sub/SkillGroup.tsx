'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillDataProvider from '../sub/SkillDataProvider';

interface SkillGroupProps {
    title: string;
    skills: { Image: string; width: number; height: number; skill_name: string }[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`group flex flex-col md:flex-row md:flex-wrap justify-center gap-6 items-center relative w-fit p-4 ${isHovered ? 'bg-black/30 border-black/30 rounded-2xl' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-10 text-white text-xl"
            >
                {title}
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4 w-full"> {/* Flex wrap for skills */}
                {skills.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-1/2 md:w-auto"> {/* 2 items per row on mobile */}
                        <SkillDataProvider
                            src={image.Image}
                            width={image.width}
                            index={index}
                            height={image.height}
                            name={image.skill_name}
                            isHovered={isHovered}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillGroup;
