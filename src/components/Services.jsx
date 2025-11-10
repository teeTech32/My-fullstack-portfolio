import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import frontDevelopment from '../assets/loper.lottie';
import backDevelopment from '../assets/backend.lottie';
import fullDevelopment from '../assets/fullstack.lottie';
import webMaintenance from '../assets/wedmainte.lottie';
import softDevelopment from '../assets/software.lottie';
import appDevelopment from '../assets/application.lottie';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const services = [
  {
    id: 1,
    header: 'Backend Development',
    img: `${backDevelopment}`,
    h1: 'Power your applications with seamless, scalable, and secure backend solutions!',
    h2: 'Optimize performance and reliability with cutting-edge backend architecture.',
    h3: 'From APIs to databases, we build the backbone of your digital success!',
    h4: 'Transform ideas into reality with robust backend development—fast, efficient, and future-ready!',
  },
  {
    id: 2,
    header: 'Fullstack Web Development',
    img: `${fullDevelopment}`,
    h1: 'Build powerful, end-to-end web solutions with our full-stack expertise!',
    h2: 'From stunning frontends to rock-solid backends, we bring your vision to life.',
    h3: 'Seamless, scalable, and secure—our full-stack development covers it all!',
    h4: 'Transform your ideas into dynamic web experiences with expert full-stack development!',
  },
  {
    id: 3,
    header: 'Front-end Web Development',
    img: `${frontDevelopment}`,
    h1: 'Boost Your Brand with Stunning Frontend Development!',
    h2: '🚀 Sleek, responsive, and high-performance websites.',
    h3: '🎨 Pixel-perfect UI/UX tailored to your vision.',
    h4: "⚡ Fast, modern, and built for success! Let's create something amazing.",
  },
  {
    id: 4,
    header: 'Software Development',
    img: `${softDevelopment}`,
    h1: 'Innovative software solutions tailored to your business needs—fast, secure, and scalable!',
    h2: 'From concept to deployment, we turn ideas into powerful software solutions.',
    h3: 'Custom-built software to streamline your workflow and elevate your success!',
    h4: 'Boost efficiency and drive growth with cutting-edge software development!',
  },
  {
    id: 5,
    header: 'Website Maintenance',
    img: `${webMaintenance}`,
    h1: 'Keep your website running smoothly with our expert maintenance services!',
    h2: 'Ensure your website stays fast, secure, and error-free—24/7 support available!',
    h3: 'From security updates to performance optimization, we’ve got you covered.',
    h4: 'Don’t let downtime hurt your business—reliable website maintenance starts here!',
  },
  {
    id: 6,
    header: 'Application Development',
    img: `${appDevelopment}`,
    h1: 'Turn your ideas into powerful apps—fast, scalable, and built to impress!',
    h2: 'From concept to code, we create seamless, high-performance applications.',
    h3: 'Custom apps tailored to your business—innovate, automate, and grow!',
    h4: 'Your vision, our expertise—let’s build the future together.',
  },
];

const Services = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1, // ✅ fixed typo
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-20">
      <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        className="text-center mb-10 max-w-[600px] mx-auto space-y-3"
      >
        <p className="font-semibold dark:text-white text-black text-xl lg:font-bold lg:text-3xl">
          My Services
        </p>
        <p className="font-semibold lg:text-xl dark:text-white text-black">
          Full-stack expertise for websites, apps, and maintenance—let’s create,
          innovate, and keep your digital presence thriving!
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {services.map((data) => (
            <div
              data-aos="flip-left"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
              key={data.id}
              className="my-6 lg:my-8"
            >
              <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-black dark:bg-blue-900 text-white relative">
                <div>
                  <h1 className="text-xs lg:text-sm font-bold text-center">
                    {data.header}
                  </h1>
                </div>
                 <DotLottieReact
                    autoplay
                    loop
                    src={data.img}
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      height: '300px',
                    }}
                  />
                <div className="flex flex-col items-center pt-2 lg:pt-4">
                  <div className="space-y-1 lg:space-y-2">
                    <p className="text-xs text-white">{data.h1}</p>
                    <p className="text-xs text-white">{data.h2}</p>
                    <p className="text-xs text-white">{data.h3}</p>
                    <p className="text-xs text-white">{data.h4}</p>
                  </div>
                </div>
                <p className="dark:text-white text-5xl font-serif absolute top-0 right-2">
                  ;
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
