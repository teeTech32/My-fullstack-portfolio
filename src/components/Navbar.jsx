import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";

function Navbar({darkMode, isOpen, toggleMenu, toggleTheme}) {
  return (
    <div data-aos='zoom-in'
          data-aos-offset='200'
          data-aos-delay='100'
          data-aos-duration='1000'
          data-aos-easing='ease-in-sine' class="px-0 2xl:px-40 pt-10">
      <div class="w-full items-center justify-between py-4 px-10">
        <div class="flex w-full items-center justify-between">
          <a href='/' class="text-2xl font-bold cursor-pointer text-blue-500">
          teeTech
          </a>
          <ul class="hidden md:flex text-slate-800 dark:text-gray-200 gap-10 text-lg">
            <li class="hover:text-blue-500 cursor-pointer">
              <a href='/#home'>Home</a>
            </li>
            <li class="hover:text-blue-500 cursor-pointer">
              <a href='/#about'>About</a>
            </li>
            <li class="hover:text-blue-500 cursor-pointer">
              <a href='/#services'>Services</a>
            </li>
            <li class="hover:text-blue-500 cursor-pointer">
              <a href='/#projects'>Projects</a>
            </li>
            <li class="hover:text-blue-500 cursor-pointer">
              <a href='/#skills'>Skills</a>
            </li>
            <li class="hover:text-blue-500 cursor-pointer">
              <a href='/#tools'>Tools</a>
            </li>
          </ul>
          <button onClick={toggleTheme} class="p-2">
            {darkMode ? <FiSun size={24} color={"white"} /> : <MdOutlineNightlight size={24} color={"gray"} />}
          </button>
          <div class="md:hidden">
            <button type='button'
            class="" 
            aria-controls='mobile-menu'
            aria-expanded='false'
            onClick={toggleMenu}>
              <BiMenu size={28} class={`${isOpen ? 'hidden' : 'block'} text-gray-700 dark:text-gray-300`}/>
              <AiOutlineClose  class={`${isOpen ? 'block' : 'hidden'} dark:text-gray-400 h-6 w-6`}/>
            </button>
          </div>
        </div>
        {/* Mobile Menu*/ }
        <div class={`${isOpen ? 'block pt-4' : 'hidden'} md:hidden`}
        id='mobile-menu'>
          <div class="flex flex-col gap-4 text-gray-700 dark:text-neutral-200 text:md">
            <a href='/#home' onClick={toggleMenu} class="cursor-pointer hover:text-blue-500">
              Home
            </a>
            <a href='/#about' onClick={toggleMenu} class="cursor-pointer hover:text-blue-500">
              About
            </a>
            <a href='/#services' onClick={toggleMenu} class="cursor-pointer hover:text-blue-500">
              Services
            </a>
            <a href='/#projects' onClick={toggleMenu} class="cursor-pointer hover:text-blue-500">
              Projects
            </a>
            <a href='/#skills' class="hover:text-blue-500 cursor-pointer">
              Skills
            </a>
            <a href='/#tools' class="hover:text-blue-500 cursor-pointer">
             Tools
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar