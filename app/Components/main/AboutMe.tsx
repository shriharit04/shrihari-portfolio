'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FaUser, FaGraduationCap, FaGamepad, FaCode } from 'react-icons/fa'
import Image from "next/image"
import { sections } from '@/constants/about'

interface Icons {
  [key: string]: React.ReactNode; 
}

const icons: Icons = {
  about_me: <FaUser size={20} />,
  education: <FaGraduationCap size={20} />,
  // hobbies: <FaGamepad size={20} />, 
  domains: <FaCode size={20} />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.5
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const contentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.3 }
  }
}

const AboutMe = ({className}: {className?: string}) => {
  const [activeSection, setActiveSection] = useState('about_me')
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  const renderContent = (section: string) => {
    switch(section) {
      case 'about_me':
        return (
          <div className="text-gray-300">
            {sections.about_me.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="mb-4 text-justify">
                  {paragraph}
                </p>
              )
            ))}
          </div>
        );
      case 'education':
        return (
          <div className="space-y-4 overflow-y-auto max-h-[400px] pr-2">
            {sections.education.map((edu, index) => (
              <div key={index} className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="font-semibold text-white">{edu.name}</h3>
                <p className="text-gray-400 text-sm">{edu.year}</p>
                <p className="text-gray-300 mt-1">{edu.grade}</p>
              </div>
            ))}
          </div>
        );
      // case 'hobbies':
      //   return (
      //     <div className="flex flex-wrap gap-3">
      //       {sections.hobbies.map((hobby, index) => (
      //         <span key={index} className="px-4 py-2 bg-gray-700/30 rounded-full text-gray-300">
      //           {hobby}
      //         </span>
      //       ))}
      //     </div>
      //   );
      case 'domains':
        return (
          <div className="space-y-6 flex flex-col gap-1 justify-center">
            {sections.domains.map((domain, index) => (
              <div key={index} className="space-y-2 md:flex gap-2 flex-row md:mb-4">
                <div className="text-gray-300 text-xl bold mb-2 md:w-1/3">{domain.name}</div>
                <div className="w-full bg-gray-700/30 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full"
                    style={{ width: `${domain.skill_level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <motion.div 
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={'w-full h-auto ' + className}
    >
      <motion.div className="w-[90%] md:w-[80%] mx-auto pb-4 md:pb-8 md:pt-2 text-white min-h-[500px]">
        <motion.h1
          variants={itemVariants}
          className='font-mono font-extrabold text-center text-6xl mb-16 bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-cyan-500'
        >
          About Me
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            variants={itemVariants}
            className="md:w-1/3 flex justify-center items-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-r from-purple-500 to-cyan-500">
              <Image
                src="/about_me_profile.jpg"
                className="rounded-full w-full h-full object-cover"
                width={650}
                height={650}
                alt="Profile"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="md:w-2/3 w-full"
          >
            <motion.div 
              variants={itemVariants}
              className="flex justify-between md:justify-center flex-wrap gap-4 mb-6"
            >
              {Object.keys(sections).map((section) => (
                <motion.button
                  key={section}
                  variants={itemVariants}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                      : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300'
                  }`}
                >
                  <span className="md:hidden">{icons[section]}</span>
                  <span className="hidden md:block capitalize">
                    {section.replace('_', ' ')}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:bg-transparent bg-gray-800 rounded-lg p-6 h-[450px] overflow-hidden"
              >
                <div className="h-[400px] overflow-y-auto custom-scrollbar">
                  {renderContent(activeSection)}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AboutMe