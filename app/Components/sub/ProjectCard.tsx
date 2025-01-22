import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  src: string;
  title: string;
  desc: string[];
  githubLink: string;
  siteLink: string;
  shortDesc: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ src, title, shortDesc, tags, desc, githubLink, siteLink, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Project Card */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.1 * index }}
        className="relative h-[370px] md:h-[440px] m-4 md:m-7 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-lg w-full h-full bg-transparent"
          style={{
            border: "2px solid transparent",
            backgroundClip: "padding-box, border-box",
            backgroundOrigin: "border-box",
            backgroundImage: `linear-gradient(to bottom, rgba(34, 34, 34, 0.9), rgba(17, 24, 39, 0.9)),
                  linear-gradient(45deg, #000000, #9333EA, #06B6D4)`,

          }}
        >
          {/* Card Image */}
          <div className="relative w-full h-1/2 rounded-t-lg overflow-hidden">
            <img src={src} alt={title} className="w-full h-full object-cover rounded-t-lg" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"
              animate={{
                opacity: isHovered ? 0.9 : 0.7,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Card Content */}
          <div className="relative p-4">
            <h1 className="text-xl md:text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-sm md:text-base text-gray-400">{shortDesc}</p>

            <div className="flex flex-wrap items-center gap-2 mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full text-xs md:text-sm bg-gradient-to-tr from-cyan-400 to-purple-400 
                           bg-clip-text text-transparent"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-4">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-gray-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="text-sm md:text-base">GitHub</span>
                </a>
              )}

              {siteLink && (
                <a
                  href={siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-gray-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3" />
                  </svg>
                  <span className="text-sm md:text-base">Visit Site</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Modal Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80"
              onClick={() => setIsModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-[90%] md:max-w-[60%] max-h-[80vh] bg-gray-900 rounded-lg overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <img src={src} alt={title} className="w-full h-48 md:h-64 object-cover rounded-lg mb-4" />

                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full text-sm bg-gradient-to-tr from-cyan-400 to-purple-400 
                               bg-clip-text text-transparent"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* <p className="">{desc}</p> */}
                <ul>
                  {desc.map((point, index) => (
                    <li key={index} className="text-sm md:text-base text-gray-300 mb-6 whitespace-pre-line">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
