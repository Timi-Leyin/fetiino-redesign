import { motion } from "framer-motion";
import Button from "../Components/Button";
import { FaBook as ReadIcon, FaFigma, FaHeart, FaLevelDownAlt as GetIcon } from 'react-icons/fa';
import {Helmet} from 'react-helmet';
import { Fragment } from "react";
import ColorPicker from "../Components/ColorPicker";
// import ColorPicker from 'irojs-react';

const animation={
    initial:{
        opacity:0
    },
    active:{
        opacity:1,
        transition:{staggerChildren:0.9}
    }
}

const Hero = () => {
  return (
   <Fragment>
       <Helmet>
           <title>Fetiino - Home</title>
       </Helmet>

       <motion.section id="hero" className='flex min-h-screen justify-around items-center relative'>

<motion.div className="" key='hero-info' variants={animation} initial={'initial'} whileInView={'active'}>
    {/* heading */}
  <h1 className='text-6xl font-[400]'>
    <span className="block">Create the</span> 
    <span className="block">sliky <span className='underline decoration-wavy font-[300] text-transparent bg-clip-text gradient'>Gradient</span> </span>
  <span className="block"> Nicely!</span>
  </h1>
  {/* sub heading */}
  <p className='w-[400px] my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos corrupti numquam quasi necessitatibus.</p>
  {/* cta */}
  <div className="">
      {/* buttons */}
      <div className="flex gap-2">
          <Button className="rounded-full flex align-center justify-center gradient">
          <GetIcon className='text-white' /> <span className="mx-1 text-white">Get it Now</span> 
          </Button>
          <Button className='rounded-full ring-black text-black ring-1 mx-2 flex align-center justify-center dark:ring-white dark:text-white'> <ReadIcon /> <span className="mx-1">Read Article</span> </Button>
      </div>
      {/* tools extension */}
      <div className="flex my-4 text-sm items-center">
          <span>Available On</span>
          <div className="flex mx-3 gap-2">
              <FaFigma />
              <FaHeart />
          </div>
      </div>
  </div>
</motion.div>

{/* hero visual */}
<div className="">
    <ColorPicker />
</div>
</motion.section>
   </Fragment>
  );
};

export default Hero;
