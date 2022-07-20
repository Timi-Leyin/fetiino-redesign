import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Logo from '../Components/Logo';

const Footer = () => {
  return (<div className="gradient relative p-12 min-h-[40vh] rounded-t-[20vh]">
    {/* newsletter */}
<div className="p-12">
<h2 className="text-3xl font-[500]">Our Newsletter</h2>
<div className='flex items-center ring-'>
<input type="email" className='bg-transparent text-5xl px-3 outline-none text-gray-300 ring-o placeholder:text-gray-300' placeholder='Your@gmail.com' />
{/* no component button */}
<button className='bg-black text-white w-16 h-16 p-4  flex items-center justify-center rounded-full rotate-[45deg]'>
<FaArrowRight />
</button>
</div>
</div>
  {/* footer */}
<div className="absolute text-xs flex justify-around items-center p-2 bottom-0 left-0 w-full">
<Logo />
<div className="">
  <span>&copy;</span> 2022 | All rights reserved
</div>
</div>

</div>
  )
}

export default Footer