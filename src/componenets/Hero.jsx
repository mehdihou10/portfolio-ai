import React from 'react'
import BgAnimation from './BgAnimation';


const Hero = () => {
  return (
    <div id='home'>
      <div className="container relative md:pt-[40px]">
        <div className="text max-w-[700px] relative z-[10]">
          <h3 className='text-[28px] sm:text-[50px] lg:text-[63px] font-semibold text-gradient'>Welcome To <br />
My Personal Portfolio</h3>

       <p className='text-[rgba(255,255,255,0.5)] sm:text-[20px] lg:text-[24px] my-[30px] leading-[30px] sm:leading-[44px]'>
        Unlock the power of data with my AI engineering expertise. I design and deploy intelligent models and data-driven systems that turn raw information into actionable insights, smarter products, and real-world impact
      </p>

       <a href="mailto:mehdi5juillet@gmail.com" className='bg-blue-gradient sm:w-[260px] sm:h-[60px] h-[40px]
         flex justify-center items-center
         rounded-full font-semibold sm:text-[24px]'>Contact me</a>
        </div>
        <BgAnimation />

      </div>

    </div>
  )
}

export default Hero
