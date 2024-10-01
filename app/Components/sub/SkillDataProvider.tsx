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
}

const SkillDataProvider = ({ name, src, width, height, index }: Props) => {
    const [ref, inView] = useInView({ triggerOnce: true });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
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
            className='group'
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt='skill_img'
            />
            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{name}</p>
        </motion.div>
    );
};

export default SkillDataProvider;
