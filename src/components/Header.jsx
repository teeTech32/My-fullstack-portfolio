import {useEffect, useState} from 'react'
import Edit1 from '../assets/Edit2.png'
import reactjs from '../assets/reactjs.svg'
import javascript from '../assets/javascript.svg'
import nodejs from '../assets/nodejs-icon.svg'
import nextjs from '../assets/next-js.svg'
import {toast} from 'react-toastify'
import lenicle1 from '../assets/Me@Lenicle3.jpg'
import lenicle2 from '../assets/Me@Lenicle2.jpg'
import lenicle3 from '../assets/Me@Lenicle4.jpg'
import lenicle4 from '../assets/Me@Linecle1.jpg'
import lenicle5 from '../assets/Me@Linecle5.jpg'

const images = [
  {image: lenicle1, alt: 'Me@Lenicle3'},
  {image: lenicle2, alt: 'Me@Lenicle2'},
  {image: lenicle3, alt: 'Me@Lenicle4'},
  {image: lenicle4, alt: 'Me@Lenicle1'},
  {image: lenicle5, alt: 'Me@Lenicle5'}
]

function Header() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(()=>{
    const timetInterval = setInterval(()=>{
      setCurrentImageIndex((preIndex)=>(
        preIndex < images.length - 1 ? preIndex + 1 : 0
      ))
    }, 5000)
    return ()=> clearInterval(timetInterval)
  },[])
  
  return (
    <div class="w-full flex flex-col px-8 md:px-10 lg:flex-row py-20 gap-10 2xl:gap-20">
      <div class="flex flex-col mb-20 lg:mb-0"
            data-aos='fade-down'
            data-aos-offset='100'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out' >
        <span class="text-lg font-bold text-orange-700">
          FULLSTACK SOFTWARE DEVELOPER
        </span>
        <div class="gap-4 flex items-center my-4">
          <h1 class="text-gray-800 dark:text-neutral-100 text-5xl 2xl:text-7xl font-bold text-center">
           I'm a
          </h1>
          <div class="flex items-center shadow-lg justify-center text-white bg-blue-800 dark:bg-[#22c4ff10] dark:text-[#224cff] rounded-full">
            <p class="text-3xl 2xl:text-5xl font-bold text-center px-5 py-2 pb-2">
              Developer
            </p>
          </div>
        </div>
        <h1 class="text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wide">
          ATANDA TIMOTHY
        </h1>
        <p class="text-md text-black dark:text-gray-100 mt-5 2xl:mt-10">
          Fullstack Developer with the ability to learn and collaborate in a rapidly changing environments and compositions.
        </p>
        <div class="mt-10 flex gap-10">
          <a href="#about" onClick={()=>toast.success('Please, check the about section.')}>
            <button class="bg-orange-700 py-3 px-5 rounded-md text-lg font-semibold text-white">
            Hire me
            </button>
          </a>
          <a href='/#projects' >
            <button class="text-lg font-semibold text-white bg-black dark:bg-[#0000FF20] py-3 px-5 rounded-md">
              Projects
            </button>
          </a>
        </div>
      </div>
      <div class="w-[320px] h-[320px] md:w-[600px] md:h-[600px] 2xl:w-[700px] 2xl:h-[700px] border-gray-600 dark:border-gray-200 rounded-full  border lg:mt-0 relative md:mt-20 flex items-center justify-center ">
         {images.map((image, index)=>(
          <img key = {index} 
               src={image.image} 
               alt={image.alt} class={`w-[320px] h-[320px] md:w-[600px] md:h-[600px] 2xl:w-[700px] 2xl:h-[700px] rounded-full absolute object-cover transition-opacity ease-in-out duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div class="w-full h-full rounded-full relative"
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='500'
          data-aos-easing='ease-in-out'>
          <img src={reactjs} alt='React-logo' class="top-7 left-3 2xl:left-8 md:top-20 absolute w-16 h-16 md:w-20 md:h-20"/>
          <img src={nodejs} alt='Javascript-logo' class="bottom-7 md:bottom-20 left-3 2xl:left-12  absolute w-20 h-20 md:w-20 md:h-20" />
          <img src={javascript} alt='TailwindCSS-logo' class="top-3 md:top-20 right-3 2xl:right-8  absolute w-16 h-16 md:w-20 md:h-20" />
          <img src={nextjs} alt='Fastapi-logo' class="bottom-7 md:bottom-20 right-3 2xl:right-12  absolute w-16 h-16 md:w-20 md:h-20 bg-white" />
        </div>
      </div>

    </div>
  )
}

export default Header
