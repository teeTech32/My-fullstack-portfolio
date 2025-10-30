import React from 'react'
import Edit from '../assets/Edit.png'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { PiReadCvLogoFill } from "react-icons/pi";
import FDCV from '../assets/FDCV.pdf'
function About() {
  return (
    <div class="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <div class="w-full md:h-[290px] flex flex-col lg:w-1/3 rounded-md border border-gray-500 dark:bg-transparent items-center">
        <img src={Edit} alt='ProfileImage' class="h-[290px] p-1 ease-out duration-300 hover:scale-125 "/>
      </div>
      <div class="w-full flex flex-col">
        <p data-aos='flip-left'
        data-aos-offset='100'
        data-aos-delay='50'
        data-aos-duration='500'
        data-aos-easing='ease-in-out' class="text-3xl font-bold text-black dark:text-white">
          About Me
        </p>
        <p data-aos='flip-left'
        data-aos-offset='100'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out' class="text-lg text-black dark:text-gray-300 leading-10 justify-start">
          I am a highly skilled Fullstack Software Developer with 4 years of hands-on experience in developing robust websites and applications using React.js (JavaScript) and Python(FastAPI). My expertise extends to various JavaScript technologies, including jQuery, Node.js and Next.js. I have been an integral part of successful projects, contributing to their design, development, and deployment phases from conceptualization to implementation. 
        </p>
        <div class="flex flex-wrap gap-5 mt-5 2xl:mt-10"
          data-aos-offset='100'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'>
          <a  href={`${FDCV}`} download class="flex gap-3 px-4 py-2 items-center justify-center text-white bg-[#030a1c] rounded-full shadow-lg font-bold cursor-pointer"
          data-aos='zoom-in-left'>
            <PiReadCvLogoFill size={18}/>MY CV
          </a> 
          <p class="flex gap-3 px-4 py-2 items-center justify-center text-white bg-[#030a1c] rounded-full shadow-lg font-bold cursor-pointer" data-aos='zoom-in-right'>
            <MdOutlineAlternateEmail size={14} />timothyabidemi4618@gmail.com
          </p>
          <a href='https://wa.me/+234 703 2603814' class="flex gap-3 px-4 py-2 items-center justify-center text-white bg-[#030a1c] rounded-full shadow-lg font-bold cursor-pointer" data-aos='zoom-in-left'>
            <BsWhatsapp size={14} />+234 703 2603814
          </a> 
        </div>
      </div>
    </div>
  )
}

export default About
