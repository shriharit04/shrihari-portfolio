import Image from 'next/image'
import React from 'react'


interface Props {
    src: string,
    title: string,
    desc: string,
    githubLink: string,
    siteLink: string,
 
}

const ProjectCard = ({src,title,desc,githubLink,siteLink} : Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#20E61]'>
        <Image src={src} alt={title} width={1000} height={1000}
        className='w-full object-contain'/>

        <div className="relative p-4">
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p  className='mt-2 text-gray-300'>{desc}</p>
        </div>
    </div>
  )
}

export default ProjectCard
