import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { SiVercel } from "react-icons/si"
import { SiHeroku } from "react-icons/si";
import { FaFaceSmile } from 'react-icons/fa6';
import { MdLocationPin } from "react-icons/md";

function Footer() {
  const footerYear = new Date().getUTCFullYear()
  return (
    <footer>
      <div class="2xl:px-40 lg:px-5 text-black">
        <hr  class="hidden dark:block  "/>
        <div class="w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between">
          <p class="dark:text-white font-semibold text-lg">
           <MdLocationPin class="text-2xl xl:text-4xl"/> 
           Address: 10, Olafatia Street Lion Gate Junction Harmony State Langbasa Ajah-Lagos State Nigeria.
          </p>
          <div class="flex flex-col md:flex-row gap-5 md:gap-20 text-md dark:text-white ">
            <a href="/#home" class="hover:text-blue-500">Home</a>
            <a href="/#about" class="hover:text-blue-500">About</a>
            <a href="/#services" class="hover:text-blue-500">Services</a>
            <a href="/#projects" class="hover:text-blue-500">Projects</a>
            <a href="/#tools" class="hover:text-blue-500">Tools</a>
            <a href="/#skills" class="hover:text-blue-500">Skills</a>
          </div>
          <div class="flex flex-col gap-5 dark:text-white text-md">
            <p>@timothyabidemi4618</p>
            <p>+234 703 2603814</p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center pb-20 gap-10">
          <p class="tracking-wide text-black dark:text-white font-semibold">Social Media</p>
          <div class="flex text-black dark:text-white text-xl xl:text-4xl gap-10 mb-10"
            data-aos='zoom-in-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
            <a href="https://www.linkedin.com/in/timothy-atanda-55b36424a/"> <BsLinkedin class="hover:scale-125 ease-in-out duration-300" /></a>
            <a href="https://web.facebook.com/profile.php?id=100071325866199"><BsFacebook class="hover:scale-125" /></a>
            <a href="https://github.com/teeTech32?tab=repositories"><BsGithub class="hover:scale-125" /></a>
            <a href="https://x.com/TimothyAtanda"><BsTwitter class="hover:scale-125" /></a>
            <a href="https://vercel.com/teetech32s-projects"><SiVercel class="hover:scale-125" /> </a>
            <a href="https://dashboard.heroku.com/apps"><SiHeroku class="hover:scale-125" /></a>
          </div>
        </div>
      </div>
      <div class="footer bg-black dark:bg-[#0000FF20]  text-primary-content p-10 footer-center">
        <FaFaceSmile class='text-5xl text-white mb-none  ' />
        <p class='dark:text-white text-md tracking-wider'>All copy rights reserved &copy;teeTech {footerYear} </p>
      </div>
    </footer>
  )
}

export default Footer
