import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Tools from "./components/Tools"
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Works from "./components/Works";
import Footer from "./components/Footer";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AOS from "aos";
import "aos/dist/aos.css" ;

AOS.init();

function App(){
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = ()=>{
    setIsOpen((prevState)=> !prevState);
  }

  const toggleTheme = () => {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <>
    <div class={`w-full h-full min-h-[100vh] bg-white ${darkMode && 'dark'}`}>
        <div class="w-full h-full min-h-[100vh] bg-white">
          <div class="dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e] ">
            <Navbar
              darkMode={darkMode}
              isOpen={isOpen}
              toggleMenu={toggleMenu}
              toggleTheme={toggleTheme}
            />
            <section id="home" class="px-0 lg:px-5 2xl:px-40 py-10 lg:py-0">
              <Header />
            </section>
          </div>
          <section id="tools" class="w-full py-20 dark:bg-[#061130]">
            <Tools />
          </section>
          <section id="about" class="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]">
            <About />
          </section>
          <section id="skills" class="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]" >
            <Skills />
          </section>
          <section id="services" class="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c]">
            <Services />
          </section>
          <section id="projects" class="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]">
            <Works />
          </section>
          <div class="w-full px-0  py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c]">
            <Footer />
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
      
    
  );
}

export default App;
