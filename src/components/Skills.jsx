import React from 'react'
import { skills } from '../data'
import { softskills } from '../data'
import { BsCheck2All } from 'react-icons/bs'

function Skills() {
  return (
    <div class="w-full flex flex-col py-20">
      <h4 class="text-3xl font-bold text-black dark:text-white mb-10 text-center">
        Technical Skills
      </h4>
      <div class="w-full flex flex-wrap items-center justify-center gap-10"
        >
        {skills.map((skill, index)=>(
          <div key={index} class="flex gap-4 py-2 px-6 shadow-lg items-center rounded-full bg-[#04133e] hover:animate-bounce ease-in-out duration-300"
            data-aos='zoom-in-down'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
            <div class="w-10 h-10">
              <img src={skill.icon} alt='SkillsIcon' class="w-full h-full rounded-full"/>
            </div>
            <div class="flex flex-col gap-1">
              <div class="flex items-center justify-between">
                <p class="text-md font-semibold text-white">{skill.name}</p>
                <p class="text-md font-semibold text-white">{skill.value + "%"}</p>
              </div>
              <div class="w-[200px] h-[10px] bg-slate-800 rounded-lg mb-1 ">
                <div class="bg-neutral-300 h-full" style={{width: skill.value + "%"}}/>
              </div>
            </div>
          </div>
        ))}
      </div> 
      <div class="mt-[10rem]">
        <h4 class="text-3xl text-black dark:text-white text-center mb-14 font-bold">
          Soft Skills
        </h4>
        <div class="flex flex-col md:flex-row gap-16 justify-center items-center">
          <div class="flex flex-col rounded-xl shadow-xl mb-10 md:mb-0 p-6  hover:scale-125 ease-in-out duration-500 bg-[#000000] dark:bg-[#224cff10] ">
            {softskills.slice(0, 2).map((s, index)=>(
              <div key={index + s} class="flex gap-3 items-center p-4">
                <BsCheck2All size={22} color='white'/>
                <p class="text-white">{s}</p>
              </div>
            ))
            }
          </div>
          <div class="flex flex-col rounded-xl shadow-xl mb-10 md:mb-0 p-6 scale-110 hover:scale-125 ease-in-out duration-500 bg-[#000000] dark:bg-[#224cff10] ">
            {softskills.slice(2, 6).map((s, index) => (
              <div key={index + s} class="flex gap-3 items-center p-4">
                <BsCheck2All size={22} color='white' />
                <p class="text-white">{s}</p>
              </div>
            ))
            }
          </div>
          <div class="flex flex-col rounded-xl shadow-xl mb-10 md:mb-0 p-6  hover:scale-125 ease-in-out duration-500 bg-[#000000] dark:bg-[#224cff10] ">
            {softskills.slice(6, 8).map((s, index) => (
              <div key={index + s} class="flex gap-3 items-center p-4">
                <BsCheck2All size={22} color='white' />
                <p class="text-white">{s}</p>
              </div>
            ))
            }
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Skills
