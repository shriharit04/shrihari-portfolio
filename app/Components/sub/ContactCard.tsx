import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  txt: string;
  link: string;
  src: string;
}

const ContactCard = ({ txt, link, src }: Props) => {
  return (
    <motion.div
      className="flex items-center relative p-4 m-2 gap-2"
    >
      {/* Div 1: Main Content */}
      <h2 className="bg-blue-300 z-10 relative cursor-pointer">{txt}</h2>
      
      {/* Div 2: Hover Text (Initially Hidden) */}
      <motion.p
        className="absolute bg-green-300 opacity-0 transform -translate-x-full transition-opacity transition-transform duration-300 ease-in-out z-0"
        whileHover={{ opacity: 1, translateX: 0 }} // Slide in effect on hover
      >
        Click to visit {txt}
      </motion.p>

      {/* Div 3: Link */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-300 transition-all duration-300 ease-in-out ml-6 hover:ml-[140px]"
      >
        Visit {txt}
      </motion.a>
    </motion.div>
  );
}

export default ContactCard;
