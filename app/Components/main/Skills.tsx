"use client";

import { languages, frameWorks, database_skills, other } from '@/constants/skills'; // Import the correct skill arrays
import React from 'react';
import SkillsText from '../sub/SkillsText';
import SkillGroup from '../sub/SkillGroup'; // Import the SkillGroup component

const Skills = () => {
    return (
        <section 
            className='flex flex-col items-center justify-center gap-6 md:gap-8 h-full relative py-20 md:scale-100' 
            id='skills'
            style={{ transform: 'scale(0.8)' }}
        >
            {/* Skills Text Section */}
            <div className="flex-shrink-0 w-full">
                <SkillsText />
            </div>

            {/* Skills Section */}
            <div className="md:flex flex-wrap  gap-14 md:flex-col w-full justify-center grid grid-cols-2  "> {/* Use flex-wrap for mobile */}
                {/* Language Skills */}
                <SkillGroup title="Language Skills" skills={languages} />
                
                {/* Framework Skills */}
                <SkillGroup title="Framework Skills" skills={frameWorks} />

                {/* Other Skills */}
                <SkillGroup title="Other Skills" skills={other} />

                {/* Full Stack Skills */}
                <SkillGroup title="Full Stack Skills" skills={database_skills} />
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
