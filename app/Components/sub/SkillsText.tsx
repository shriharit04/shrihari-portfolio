"use client";
import React from 'react'
import {motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const SkillsText = () => {
    const [ref, inView] = useInView({ triggerOnce: true })
  
  return (
    <div className='w-auto h-full flex flex-col items-center justify-center pr-10 mr-[40px] text-center'>
      <motion.div>
        <motion.h1 
        ref = {ref}
        className=' font-mono font-extrabold text-center text-6xl mb-4  bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-cyan-500'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        >
            My Skills
        </motion.h1>
        {/* <p className='text-lg text-white'>
          
        </p> */}
      </motion.div>
    </div>
  )

}

export default SkillsText
