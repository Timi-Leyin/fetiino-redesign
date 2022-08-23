import React, { ReactNode } from 'react'
import { FaAd, FaAirbnb, FaCampground, FaHome, FaTachometerAlt, FaUber, FaUbuntu } from 'react-icons/fa'
import { MdHdrAutoSelect } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from '../../Components/Logo'


interface NavItemProps{
  title: string,
  active?:boolean,
  to:string,
  icon:ReactNode
}

const NavItem =({title,icon,to,active=false}:NavItemProps)=>{
  return(
  <Link to={to}>
      <li className={`${active && 'bg-gray-300 dark:bg-gray-800 opacity-100 text-primary' }  flex-shrink-0  flex items-center justify-center transition-all hover:opacity-100 opacity-70  gap-2 my-1 text-lg cursor-pointer p-3  rounded-full dark `} title={title}>
    <span className=''>{icon}</span>
    <span className="text-xs">{title}</span>
  </li>
  </Link>
  )
}


const Navigation = () => {
  return (
   <aside className=' relative translate-y-[6.8rem] mx-[5%] '>
       <ul className='flex  justify-around w-full mx-auto gap-4  overflow-x-auto  items-center'>
        <NavItem to='/explore' title='Explore Palette' active={true} icon={<FaTachometerAlt />} />
        <NavItem to='/explore' title='Color Picker' icon={<FaAirbnb />} />
        <NavItem to='/explore' title='Gradient Maker' icon={<FaCampground />} />
        <NavItem to='/explore' title='Explore Colors' icon={<FaUber />} />
        <NavItem to='/explore' title='Extract Colors' icon={<FaAd />} />
        <NavItem to='/explore' title='Saved Palette' icon={<FaUbuntu />} />
       </ul>
   </aside>
  )
}

export default Navigation