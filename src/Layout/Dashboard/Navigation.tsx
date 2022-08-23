import React, { ReactNode, useState } from 'react'
import { FaAd, FaAirbnb, FaBars, FaCampground, FaHome, FaTachometerAlt, FaUber, FaUbuntu } from 'react-icons/fa'
import { MdHdrAutoSelect } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from '../../Components/Logo'
import {motion} from 'framer-motion'

interface NavItemProps{
  title: string,
  active?:boolean,
  to:string,
  icon:ReactNode,
  delay:number,
  toggle:boolean
}

const NavItem =({title,icon,to,toggle,delay, active=false}:NavItemProps)=>{
  return(
  <Link to={to} className={`${!toggle && 'pointer-events-none'}`}>
      <motion.li animate={{opacity:toggle?1:0}} transition={{delay:delay}} className={`cursor-pointer select-none bg-gray-300/60 filter-bg-blur dark:bg-gray-800/60  flex-shrink-0  flex items-center justify-around transition-all hover:opacity-100  gap-2 my-1 text-lg p-3  rounded-full dark `} title={title}>
    <span className=''>{icon}</span>
    {/* <span className="text-xs">{title}</span> */}
  </motion.li>
  </Link>
  )
}


const Navigation = () => {
  const [menu, setMenu] = useState(false)
  return (
  <section className=''>

    <div onClick={()=> setMenu(!menu)} className='h-[70px] w-[70px] flex items-center justify-center hover:text-primary rounded-full bg-primary fixed bottom-0 right-0 m-7 z-10 shadow-lg cursor-pointer hover:bg-white transition-colors'>
    <FaBars />
      </div>



<motion.aside className=' fixed z-10 bottom-[10%] right-0 m-5  mx-[5%] '>
       <ul className='flex flex-col  relative mx-auto gap-4  overflow-x-auto  items-center'>
         <NavItem to='/generate' toggle={menu} delay={1} title='Explore Palette' active={true} icon={<FaTachometerAlt />} />

        <NavItem to='/colorPicker'  toggle={menu} delay={0.8} title='Color Picker' icon={<FaAirbnb />} />
        <NavItem to='/gradient-maker' toggle={menu} delay={0.6} title='Gradient Maker' icon={<FaCampground />} />
        <NavItem to='/converter' toggle={menu} delay={0.4} title='Explore Colors' icon={<FaUber />} />
        <NavItem to='/extract' toggle={menu} delay={0.2} title='Extract Colors' icon={<FaAd />} />
        <NavItem to='/favourites' toggle={menu} delay={0.1} title='Saved Palette' icon={<FaUbuntu />} />
       </ul>
   </motion.aside>

  </section>
  )
}

export default Navigation