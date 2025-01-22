"use client"
import React from 'react'
import {motion} from 'framer-motion'
import ContactCard from '../sub/ContactCard'

const ContactMe = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center relative'>
      <motion.h1
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.7, delay:0.2}}
      className='bg-gradient-to-tr from-purple-500 to-cyan-500 bg-clip-text text-transparent text-7xl font-mono font-extrabold p-8 m-8'>
        Lets Work Together
      </motion.h1>
      
      <div
      className='flex md:flex-row flex-col flex-wrap text-white mb-8 mt-20 gap-64'>
       <div className=''>
      <h1>Contact Info</h1>
      <div className='flex flex-col'>
        <ContactCard 
          txt="Instagram"
          link="https://www.instagram.com"
          src="/path/to/instagram-logo.png"
        />
        <ContactCard 
          txt="LinkedIn"
          link="https://www.linkedin.com"
          src="/path/to/linkedin-logo.png"
        />
        <ContactCard 
          txt="Gmail"
          link="mailto:your.email@gmail.com"
          src="/path/to/gmail-logo.png"
        />
      </div>
    </div>

       <div>
        Site Info
       </div>

       <div>
        Coding PlatformLinks
       </div>

      </div>
      <footer className='absolute bottom-0 w-full text-white text-sm  text-center'>
        © 2024 Shrihari. All Rights Reserved.
      </footer>
    </div>
  )
}

export default ContactMe
