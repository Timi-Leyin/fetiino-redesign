import { motion } from "framer-motion";
import Button from "../Components/Button";
import { FaBook as ReadIcon, FaLevelDownAlt as GetIcon } from 'react-icons/fa'
const Hero = () => {
  return (
    <motion.section id="hero" className='flex min-h-screen justify-around items-center relative'>
      <div className="">
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
                <GetIcon /> <span className="mx-1">Get it Now</span> 
                </Button>
                <Button className='rounded-full ring-black text-black ring-1 mx-2 flex align-center justify-center dark:ring-white dark:text-white'> <ReadIcon /> <span className="mx-1">Read Article</span> </Button>
            </div>
            {/* tools extension */}
        </div>
      </div>

      {/* hero visual */}
      <div className="">
          visual
      </div>
    </motion.section>
  );
};

export default Hero;
