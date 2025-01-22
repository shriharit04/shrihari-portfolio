'use client'
import React from 'react'
import HeroContent from '../sub/HeroContent'

interface SectionProps {
  className?: string;
}
function Hero({ className }: SectionProps) {
  return (
    <div id ="hero" className = {`${className} relative flex flex-col h-full w-full` }>
        <video
            autoPlay muted loop
            className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'>
                <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent/>

    </div>


  )
}

export default Hero
