import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Importing icons from react-icons

interface Props {
  src: string,
  title: string,
  desc: string,
  githubLink: string,
  siteLink: string,
  shortDesc: string,
  tags: string[],
  index: number,
}

const ProjectCard = ({ src, title, shortDesc, tags, desc, githubLink, siteLink, index }: Props) => {
  const [isMoreInfo, setIsMoreInfo] = useState(false); // Updated to use setShowMore

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }} // Adjusts viewport options
      transition={{ duration: 0.3, delay: 0.1 * index }}
      className='bg-gray-900 h-[370px] md:h-[440px] m-7 flex flex-col justify-center items-center'
    >
      <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#20E61] w-full h-full'>
        {!isMoreInfo && <Image src={src} alt={title} width={1000} height={1000} className='w-full object-contain' />}

        <div className="relative p-4">
          <h1 className='text-2xl font-semibold text-white'>{title}</h1>
          <p className='mt-2 text-gray-500'>{shortDesc}</p>

          <div className='flex flex-wrap items-center gap-2 mt-2'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='rounded-full text-sm bg-gradient-to-tr opacity-90 from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:opacity-100'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='flex flex-col justify-between h-full my-4 absolute'>
            <div className='flex items-center justify-start gap-4 mb-2'>
              {/* GitHub Link */}
              {githubLink && (
                <a href={githubLink} target='_blank' rel='noopener noreferrer' className='flex items-center text-white hover:text-gray-400'>
                  <FaGithub size={20} className='mr-2' />
                  <span className='text-sm'>GitHub</span>
                </a>
              )}

              {/* Visit Site Link */}
              {siteLink && (
                <a href={siteLink} target='_blank' rel='noopener noreferrer' className='flex items-center text-white hover:text-gray-400'>
                  <FaExternalLinkAlt size={20} className='mr-2' />
                  <span className='text-sm'>Visit Site</span>
                </a>
              )}
            </div>

            {/* for later */}
            {/* <motion.button
              className='text-white text-sm bg-gradient-to-tr opacity-90 from-cyan-400 to-purple-400 bg-clip-border border border-transparent rounded-full mt-4 absolute bottom-2'
              onClick={() => setIsMoreInfo(!isMoreInfo)} // Toggle showMore
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Scale down on click
              transition={{ type: 'spring', stiffness: 300 }} // Smooth animation
            >
              <div className='bg-[#020114] rounded-full w-full h-full p-3'>
                {isMoreInfo ? 'Show Less' : 'Show More'}
              </div>
            </motion.button> */}
         
          </div>

          {/* Show More Content */}
          {/* {isMoreInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }} // Animation duration for showing more content
              className="mt-4 text-white"
            >
              <p>{desc}</p>
            </motion.div>
          )} */}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
