'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { languages, database_skills, frameWorks } from "@/constants/skills";

const skillsData = [...languages, ...database_skills, ...frameWorks];

const SkillShuffle = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the container div
  const [skills, setSkills] = useState(
    skillsData.map((skill) => ({
      ...skill,
      x: 0,
      y: 0,
    }))
  );

  useEffect(() => {
    // Initialize skill positions inside the container
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const initialSkills = skills.map((skill) => ({
        ...skill,
        x: Math.random() * (container.width - skill.width),
        y: Math.random() * (container.height - skill.height),
      }));
      setSkills(initialSkills);
    }
  }, []);

  const randomizePositions = () => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const randomizedSkills = skills.map((skill) => ({
        ...skill,
        x: Math.random() * (container.width - skill.width),
        y: Math.random() * (container.height - skill.height),
      }));
      setSkills(randomizedSkills);
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
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              top: skill.y,
              left: skill.x,
              width: skill.width,
              height: skill.height,
            }}
            className="flex justify-center items-center rounded-lg 
            bg-transparent shadow-md p-2 border border-slate-400"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              top: skill.y,
              left: skill.x,
            }}
            exit={{ opacity: 0 }}
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
