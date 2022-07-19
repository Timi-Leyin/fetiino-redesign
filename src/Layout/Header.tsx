import React from 'react'
import {motion} from 'framer-motion';
import Logo from '../Components/Logo';
import NavLinks from '../Components/NavLinks';
import Button from '../Components/Button';
import ThemeToggle from '../Components/ThemeToggle';

const Header = () => {
  return (
    <motion.header className='flex z-10 p-6 absolute w-full justify-around items-center'>
        <Logo />
       <div className='flex items-center gap-1'>
       <NavLinks />
        <Button className='rounded-full mx-2 p-3'>Try it</Button>
       <ThemeToggle />
       </div>
    </motion.header>
  )
}

export default Header