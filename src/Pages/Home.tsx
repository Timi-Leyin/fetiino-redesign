import "locomotive-scroll/dist/locomotive-scroll.min.css";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import Logo from "../Components/Logo";
const options = {
  smooth: true,
  direction: "horizontal",
  breakpoint: 0,
  multiplier:.6,
  inertial: 1.7,
};

const Home = () => {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={options}
      watch={[]}
      containerRef={containerRef}
    >
        
      <motion.main
        key="home"
        id="Home"
        className="h-screen relative dark:bg-black dark:text-white"
        ref={containerRef}
        data-scroll-container
      >
        <motion.div
          key="hero"
          className="bg-red-300 h_hero min-w-[70vw] h-full"
          data-scroll-section
        >
        <motion.header data-scroll className='fixed z-10 top-0 right-0 p-4'>
          <Logo />
        </motion.header>

        <div className="absolute bottom-0 left-0 p-3">
          <motion.h1 className="text-[5em] font-bold">
          
          <motion.span key='heading-one' initial={{opacity:0,y:-20}} whileInView={{opacity:1, y:0}} className="block">   Leaving Space</motion.span>
          <motion.span initial={{opacity:0,y:20}} key='heading-two' whileInView={{opacity:1, y:0}} className="block"> for Wildlife.</motion.span>
          </motion.h1>

          <div className="flex items-center gap-1  cursor-pointer text-xs">
            <span className="p-4 bg-gray-100 rounded-full text-xs transition-all hover:rotate-[-45deg] hover:scale-125"><FaPlay /></span>
            <span className="">SEE IT YOURSELF</span>
          </div>
        </div>
          
        </motion.div>

        <motion.div
          key="images"
          className="h_body w-screen h-full "
          data-scroll-section
        >
          <div className="p-12">
            <h2 className='text-[4em] font-bold relative  text-white' style={{textShadow:'0 0 1px black'}}>
              <span className="block">In Our</span>
              <span className="block mx-8 translate-y-[-20px]">Words</span>
            </h2>
            <p className='text-xs  break-before-all w-[250px]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, odio. Minima, corporis explicabo similique ipsa non, veniam reiciendis architecto velit ratione doloribus doloremque neque corrupti cumque esse nemo. Sequi, natus.
            </p>

            <div className="flex my-4 items-center gap-1  cursor-pointer text-xs">
            <span className="p-4 bg-gray-100 rounded-full text-xs transition-all hover:rotate-[-45deg] hover:scale-125"><FaArrowRight /></span>
            <span className="">KEEP SCROLLING</span>
          </div>
          </div>
        </motion.div>
      </motion.main>
    </LocomotiveScrollProvider>
  );
};

export default Home;
