"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Props {
    name: string;
    src: string;
    width: number;
    height: number;
    index: number;
    isHovered: boolean;
}

const SkillDataProvider = ({ name, src, width, height, index ,isHovered}: Props) => {
    const [ref, inView] = useInView({ triggerOnce: true });


    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -20 },  // Move text left initially
        visible: { opacity: 1, x: 0 },    // Move text to its original position
    };

    const animationDelay = 0.1;

    return (
        <motion.div 
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
            className='flex md:flex-col items-center justify-start gap-[20px] w-[100px]' // Align items horizontally with a gap
            layout
        >
            <motion.div 
                className='flex-shrink-0' 
                whileHover={{ scale: 1.1 }} // Expand logo on hover
                transition={{ type: 'spring', stiffness: 300 }}
                layout
            >
                <Image
                    src={src}
                    width={width    }
                    height={height}
                    alt='skill_img'
                />
            </motion.div>
            <motion.p 
                className = {`text-white text-left ${isHovered ? "span" : "hidden"} transition-all`} // Align text to the left
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                variants={textVariants}
                transition={{ delay: index * animationDelay}}
            >
                {name}
            </motion.p>
        </motion.div>
    );
};

export default SkillDataProvider;
