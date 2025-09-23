import React from 'react'
import { projects } from '../data'
import { FaLink } from "react-icons/fa";
function Works() {
  return (
    <div class="w-full flex flex-col px-8 md:px-10 py-20 lg:py-20 gap-10 lg:gap-20">
      <h4 data-aos='flip-left'
        data-aos-offset='100'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out' class="text-3xl font-bold text-black dark:text-white mt-8">
        Projects
      </h4>
      <div class="flex flex-wrap gap-10 lg:gap-20 justify-center">
        {projects.map((p, index)=>(
          <div key={index} class="w-[350px] h-[350px] shadow-xl cursor-pointer hover:scale-110 ease-in-out duration-300 rounded-md"
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
            <a href={p.url}>
              <img src={p.img} alt={p.name} class="w-full h-[250px] object-cover rounded-md " />
              <div class="w-full h-[100px] bg-blue-500 rounded-md dark:bg-[#04133e]">
                <h4 class="text-2xl font-semibold text-black dark:text-white py-2 px-1">{p.title}
                </h4>
                <div class="inline-flex">
                  <p class="align-middle text-sm uppercase text-white dark:text-orange-600 p-1">{p.cat}</p>
                  <FaLink color='white' class="mt-2" />
                </div>
              </div>
            </a>
          </div>
        ))

        }

      </div>
    </div>
  )
}

export default Works
