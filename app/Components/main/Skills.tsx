import { Backend_skills, Frontend_skills, Full_stacks, Other_skills } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillsText from '../sub/SkillsText'

const Skills = () => {
  return (
    <section 
    className='flex flex-row items-center justify-center gap-[30px] h-full relative overflow-hidden py-20'
    id = 'skills'
    style={{transform: 'scale(0.9)'}}
    >
        <SkillsText/>
        <div className="group flex flex-col justify-normal flex-wrap mt-4 gap-5 items-center">
            <h1 className='text-white hidden group-hover:block'>FrontEnd Skills</h1>
            {Frontend_skills.map((image,index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} index={index} height={image.height} name={image.skill_name}/>
            ))}
        </div>  

        <div className="flex flex-col justify-normal flex-wrap mt-4 gap-5 items-center">
            {Backend_skills.map((image,index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} index={index} height={image.height} name={image.skill_name}/>
            ))}
        </div>

        <div className="flex flex-col justify-normal flex-wrap mt-4 gap-5 items-center">
            {Full_stacks.map((image,index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} index={index} height={image.height} name={image.skill_name}/>
            ))}
        </div>

        <div className="flex flex-col justify-normal flex-wrap mt-4 gap-5 items-center">
            {Other_skills.map((image,index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} index={index} height={image.height}/>
            ))}
        </div>


        <div className="w-full h-full absolute pointer-events-none">
            <div className="w-full h-full z-[-15] opacity-30 absolute flex items-center justify-center bg-cover">
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
