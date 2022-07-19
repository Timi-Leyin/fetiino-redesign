import React from 'react'
import {motion} from 'framer-motion';
import Logo from '../Components/Logo';
import NavLinks from '../Components/NavLinks';
import Button from '../Components/Button';

const Header = () => {
  return (
    <motion.header className='flex p-6 absolute w-full justify-around items-center'>
        <Logo />
       <div className='flex items-center gap-1'>
       <NavLinks />
        <Button className='rounded-full mx-2 p-3'>Try it</Button>
       </div>
    </motion.header>
  )
}

export default Header