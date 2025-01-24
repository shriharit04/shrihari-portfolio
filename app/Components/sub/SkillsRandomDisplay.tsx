'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type PositionedSkill = {
  skill_name: string;
  Image: string;
  width: number;
  height: number;
  x: number;
  y: number;
};

type SkillShuffleProps = {
  skills: Omit<PositionedSkill, 'x' | 'y'>[]; // Receive skills as prop
};

const checkCollision = (rect1: PositionedSkill, rect2: PositionedSkill) => {
  return !(
    rect1.x + rect1.width <= rect2.x ||
    rect2.x + rect2.width <= rect1.x ||
    rect1.y + rect1.height <= rect2.y ||
    rect2.y + rect2.height <= rect1.y
  );
};

const SkillShuffle = ({ skills }: SkillShuffleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positionedSkills, setPositionedSkills] = useState<PositionedSkill[]>([]);

  // Initialize positions with collision detection
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const occupiedPositions: PositionedSkill[] = [];
      
      const initialSkills = skills.map(skill => {
        let attempts = 0;
        const maxAttempts = 500;
        let newPosition: PositionedSkill;

        do {
          newPosition = {
            ...skill,
            x: Math.random() * (container.width - skill.width),
            y: Math.random() * (container.height - skill.height),
          };
          
          const collision = occupiedPositions.some(pos => 
            checkCollision(newPosition, pos)
          );
          
          if (!collision || attempts >= maxAttempts) break;
          attempts++;
        } while (true);

        occupiedPositions.push(newPosition);
        return newPosition;
      });

      setPositionedSkills(initialSkills);
    }
  }, [skills]);

  const randomizePositions = () => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const occupiedPositions: PositionedSkill[] = [];
      
      const newSkills = positionedSkills.map(skill => {
        let attempts = 0;
        const maxAttempts = 500;
        let newPosition: PositionedSkill = { ...skill };

        do {
          newPosition = {
            ...skill,
            x: Math.random() * (container.width - skill.width),
            y: Math.random() * (container.height - skill.height),
          };
          
          const collision = occupiedPositions.some(pos => 
            checkCollision(newPosition, pos)
          );
          
          if (!collision || attempts >= maxAttempts) break;
          attempts++;
        } while (true);

        occupiedPositions.push(newPosition);
        return newPosition;
      });

      setPositionedSkills(newSkills);
    }
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-transparent">
      <button
        onClick={randomizePositions}
        className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-2 
        bg-blue-500 text-white rounded-md hover:bg-blue-600 
        transition-colors z-10"
      >
        Randomize
      </button>

      <div
        ref={containerRef}
        className="relative w-3/4 h-3/4 bg-gray-900 rounded-lg overflow-hidden border border-gray-600"
      >
        {positionedSkills.map((skill, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              top: skill.y,
              left: skill.x,
            }}
            className="flex justify-center items-center rounded-lg 
            bg-transparent shadow-md p-2 border border-slate-400
            w-[35px] h-[35px] md:w-[70px] md:h-[70px]" // Responsive sizing
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              top: skill.y,
              left: skill.x,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="relative w-4/5 h-4/5">
              <Image
                src={skill.Image}
                alt={skill.skill_name}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillShuffle;