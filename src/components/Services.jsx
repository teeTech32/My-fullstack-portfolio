import { Player } from '@lottiefiles/react-lottie-player';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const services = [
  {
    id: 1,
    header: 'Backend Development',
    img: 'https://lottie.host/8d9aefef-94da-4a59-bce9-d83cda1696c4/B4Kx5x5DWj.json',
    h1: 'Power your applications with seamless, scalable, and secure backend solutions!',
    h2: 'Optimize performance and reliability with cutting-edge backend architecture.',
    h3: 'From APIs to databases, we build the backbone of your digital success!',
    h4: 'Transform ideas into reality with robust backend development—fast, efficient, and future-ready!'
  },
  // ... add others here
];

const Services = () => {
  var settings = {
      dots:true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToScrolls: 1,
      autoplay: true,
      autoplaySpeed:2000,
      cssEase:'linear',
      pauseOnHover: true,
      pauseFocus: true,
      responsive:[
        {
          breakpoint: 10000,
          settings:{
            slidesToShow:3,
            slidesToScroll:1,
            infinite: true,
          },
        },
        {
          breakpoint:1024,
          settings:{
            slidesToShow:2,
            slidesToScroll:1,
            initialSlide:2,
          },
        },
        {
          breakpoint: 640,
            settings:{
            slidesToShow:1,
            slidesToScroll:1
          }
        }
      ]
    }

  return (
    <div className="pt-20">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="text-center mb-10 max-w-[600px] mx-auto space-y-3"
      >
        <p className="font-semibold text-black dark:text-white text-xl lg:font-bold lg:text-3xl">
          My Services
        </p>
        <p className="font-semibold lg:text-xl text-black dark:text-white">
          Full-stack expertise for websites, apps, and maintenance—let’s create, innovate, and keep your digital presence thriving!
        </p>
      </div>

      <Slider {...settings}>
        {services.map((data) => (
          <div key={data.id} data-aos="flip-left" className="my-6 lg:my-8">
            <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-black dark:bg-blue-900 text-white relative">
              <h1 className="text-xs lg:text-sm font-bold text-center">{data.header}</h1>
              <Player autoplay loop src={data.img} style={{ height: '100px', width: '100px', display: 'block', margin: 'auto' }} />
              <div className="flex flex-col items-center pt-2 lg:pt-4 space-y-2">
                <p className="text-xs text-white">{data.h1}</p>
                <p className="text-xs text-white">{data.h2}</p>
                <p className="text-xs text-white">{data.h3}</p>
                <p className="text-xs text-white">{data.h4}</p>
              </div>
              <p className="text-5xl font-serif absolute top-0 right-2">;</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
