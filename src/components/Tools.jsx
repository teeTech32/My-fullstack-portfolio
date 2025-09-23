import React from 'react'
import  {tools}  from '../data'

function Project() {
  return (
    <div>
      <h4 class="text-3xl text-black dark:text-white font-bold mt-5 mb-8 lg:mb-10 lg:mt-10 ml-10 gl:ml-20"
        data-aos='flip-left'
        data-aos-offset='100'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'>Tools</h4>
      <div class="w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 mt-16">
        {tools.map((t, index)=>(
          <div key={index} class="flex gap-2 px-5 py-1 bg-white items-center rounded-md shadow-lg"
            data-aos='zoom-in-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
            <img src={t.icon} alt='Icons' class="w-10 h-10"/>
            <p class="text-md text-black">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
