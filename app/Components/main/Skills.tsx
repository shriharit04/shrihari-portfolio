import { Backend_skills, Frontend_skills, Full_stacks, Other_skills } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillsText from '../sub/SkillsText'

const Skills = () => {
  return (
    <section 
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
    id = 'skills'
    style={{transform: 'scale(0.9)'}}
    >
        <SkillsText/>
        <div className="flex flex-row justify-normal flex-wrap mt-4 gap-5 items-center">
            {Frontend_skills.map((image,index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} index={index} height={image.height}/>
            ))}
        </div>

        <div className="flex flex-row justify-normal flex-wrap mt-4 gap-5 items-center">
            {Backend_skills.map((image,index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} index={index} height={image.height}/>
            ))}
        </div>

        <div className="flex flex-row justify-normal flex-wrap mt-4 gap-5 items-center">
            {Full_stacks.map((image,index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} index={index} height={image.height}/>
            ))}
        </div>

        <div className="flex flex-row justify-normal flex-wrap mt-4 gap-5 items-center">
            {Other_skills.map((image,index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} index={index} height={image.height}/>
            ))}
        </div>


        <div className="w-full h-full absolute">
            <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                <video
                className='w-full h-auto'
                preload='false'
                playsInline
                loop
                muted
                autoPlay
                src='/cards-video.webm'></video>
            </div>
        </div>

    </section>
  )
}

export default Skills
