import { motion } from "framer-motion";
import Button from "../Components/Button";
import { FaBook as ReadIcon, FaFigma, FaHeart, FaLevelDownAlt as GetIcon } from 'react-icons/fa';
import {Helmet} from 'react-helmet';
import GradientBlur  from '../Components/GradientBlur'
import { Fragment, useEffect, useState } from "react";
import ColorPicker from "../Components/ColorPicker";
// import ColorPicker from 'irojs-react';

const animation={
    initial:{
        opacity:0,
        transition:{when:'afterChildren'}
    },
    active:{
        opacity:1,
        
     transition:{staggerChildren:.08,when:'beforeChildren'}
    }
}
const item ={
initial:{opacity:0,y:-30},
active:{opacity:1,y:0},
}

const Hero = () => {
  
  return (
   <Fragment>
    <GradientBlur />
       <motion.section id="hero"  variants={animation} initial={'initial'}  animate={'active'} className='pt-[80px] sm:pt-[150px]  flex  justify-around  relative flex-col text-center md:text-left md:flex-row'>

<motion.div className="" key='hero-info'>
    {/* heading */}
  <motion.h1  className='text-[2.6rem] font-[400] py-1 sm:text-5xl md:text-6xl'>
    <motion.span  variants={item} className="block">Create the</motion.span> 
    <motion.span  variants={item} className="block">sliky <span className='underline decoration-wavy font-[300] text-transparent bg-clip-text gradient'>Gradient</span> </motion.span>
  <motion.span variants={item}  className="block"> Nicely!</motion.span>
  </motion.h1>
  {/* sub heading */}
  <motion.p  variants={item} className='max-w-[400px] mx-auto md:text-sm text-xs my-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos corrupti numquam quasi necessitatibus.</motion.p>
  {/* cta */}
  <motion.div  variants={item} className="">
      {/* buttons */}
      <div className="sm:flex sm:w-[300px] sm:mx-auto md:mx-0 gap-2 justify-unset">
          <Button className=" my-4 mx-auto md:mx-0 rounded-full flex align-center justify-center gradient">
          <GetIcon className='text-white' /> <span className="mx-1 text-white">Get it Now</span> 
          </Button>
          <Button className=' my-4 mx-auto md:mx-0 rounded-full ring-black text-black ring-1 flex align-center justify-center dark:ring-white dark:text-white'> <ReadIcon /> <span className="mx-1">Read Article</span> </Button>
      </div>
      {/* tools extension */}
      <div className="flex my-4 justify-center md:justify-start text-sm items-center ">
          <span>Available On</span>
          <div className="flex mx-3 gap-2">
              <FaFigma />
              <FaHeart />
          </div>
      </div>
  </motion.div>
</motion.div>

{/* hero visual */}
<motion.div className="" variants={item}>
    <ColorPicker />
</motion.div>
</motion.section>
   </Fragment>
  );
};

export default Hero;
