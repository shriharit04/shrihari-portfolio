'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { languages, database_skills, frameWorks } from "@/constants/skills";

type PositionedSkill = {
  skill_name: string;
  Image: string;
  width: number;
  height: number;
  x: number;
  y: number;
  category: 'language' | 'framework' | 'tool';
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.5 
    }
  }
};

const checkCollision = (rect1: PositionedSkill, rect2: PositionedSkill) => {
  return !(
    rect1.x + rect1.width <= rect2.x ||
    rect2.x + rect2.width <= rect1.x ||
    rect1.y + rect1.height <= rect2.y ||
    rect2.y + rect2.height <= rect1.y
  );
};

const categoryButtons = [
  { displayName: 'View All', category: 'all' },
  { displayName: 'Languages', category: 'language' },
  { displayName: 'Frameworks', category: 'framework' },
  { displayName: 'Tools', category: 'tool' }
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positionedSkills, setPositionedSkills] = useState<PositionedSkill[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'language' | 'framework' | 'tool'>('all');
  const [isMobile, setIsMobile] = useState(false);

  const allSkills = [
    ...languages.map(skill => ({ ...skill, category: 'language' as const })),
    ...frameWorks.map(skill => ({ ...skill, category: 'framework' as const })),
    ...database_skills.map(skill => ({ ...skill, category: 'tool' as const }))
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const occupiedPositions: PositionedSkill[] = [];
    const skillW = isMobile ? 60 : 90;
    const skillH = isMobile ? 60 : 90;
    
    const initialSkills = allSkills.map(skill => {
      let attempts = 0;
      const maxAttempts = 500;
      let newPosition: PositionedSkill;

      do {
        newPosition = {
          ...skill,
          width: skillW,
          height: skillH,
          x: Math.random() * (container.width - skillW),
          y: Math.random() * (container.height - skillH),
        };
        
        const collision = occupiedPositions.some(pos => checkCollision(newPosition, pos));
        if (!collision || attempts >= maxAttempts) break;
        attempts++;
      } while (true);

      occupiedPositions.push(newPosition);
      return newPosition;
    });

    setPositionedSkills(initialSkills);
  }, [isMobile]);

  const randomizePositions = () => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const occupiedPositions: PositionedSkill[] = [];
    const skillW = isMobile ? 60 : 90;
    const skillH = isMobile ? 60 : 90;
    
    const newSkills = positionedSkills.map(skill => {
      let attempts = 0;
      const maxAttempts = 500;
      let newPosition: PositionedSkill = { ...skill };

      do {
        newPosition = {
          ...skill,
          width: skillW,
          height: skillH,
          x: Math.random() * (container.width - skillW),
          y: Math.random() * (container.height - skillH),
        };
        
        const collision = occupiedPositions.some(pos => checkCollision(newPosition, pos));
        if (!collision || attempts >= maxAttempts) break;
        attempts++;
      } while (true);

      occupiedPositions.push(newPosition);
      return newPosition;
    });

    setPositionedSkills(newSkills);
  };

  return (
    <div id="skills" className="md:pt-32 pt-16 md:snap-start min-h-screen relative  w-full flex flex-col items-center justify-center bg-transparent pb-10">
      <div className="flex flex-col items-center gap-6 z-10 mb-8 px-4">
        <motion.h1
          variants={itemVariants}
          className='font-mono font-extrabold text-center text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-cyan-500'
        >
          My Skills
        </motion.h1>
        
        <div className="flex flex-wrap gap-2 justify-center">
          {categoryButtons.map(({ displayName, category }) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as any)}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedCategory === category 
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white' 
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
              }`}
            >
              {displayName}
            </button>
          ))}
          <button
            onClick={randomizePositions}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Randomize
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative w-3/4  h-[90vh] md:h-[60vh] bg-transparent rounded-lg overflow-hidden border border-gray-600/30 backdrop-blur-sm"
      >
        {positionedSkills.map((skill, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              top: skill.y,
              left: skill.x,
            }}
            className={`flex flex-col items-center justify-center rounded-lg 
              bg-gray-800/30 shadow-md p-2 border border-slate-400/30
              w-[70px] h-[70px] md:w-[90px] md:h-[90px]
              transition-opacity duration-300 hover:bg-gradient-to-tr hover:from-purple-500/40 hover:to-cyan-500/40`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: selectedCategory === 'all' || skill.category === selectedCategory ? 1 : 0,
              top: skill.y,
              left: skill.x,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="relative w-4/5 h-4/5 mb-1">
              <Image
                src={skill.Image}
                alt={skill.skill_name}
                fill
                className="object-contain hover:filter hover:brightness-125 transition-all"
              />
            </div>
            {selectedCategory !== 'all' && (
              <p className="text-center text-xs text-gray-300 truncate w-full">
                {skill.skill_name}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;