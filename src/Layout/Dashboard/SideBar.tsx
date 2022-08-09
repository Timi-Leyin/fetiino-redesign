import React, { ReactNode } from 'react'
import { FaAd, FaAirbnb, FaCampground, FaHome, FaPalette, FaUber, FaUbuntu } from 'react-icons/fa'
import { MdHdrAutoSelect } from 'react-icons/md'
import Logo from '../../Components/Logo'


interface SideBarItemProps{
  title: string,
  active?:boolean,
  icon:ReactNode
}

const SideBarItem =({title,icon,active=false}:SideBarItemProps)=>{
  return(
    <li className={`${active && 'bg-gray-300 overflow-x-auto dark:bg-gray-800 opacity-100 text-primary' } flex items-center justify-center transition-all hover:opacity-100 opacity-70  gap-2 my-1 text-lg cursor-pointer p-3  rounded-full dark `} title={title}>
    <span className=' flex-shrink-0'>{icon}</span>
    <span className="text-xs flex-shrink-0">{title}</span>
  </li>
  )
}


const SideBar = () => {
  return (
   <aside className=' relative '>
       <ul className='flex  justify-around w-[500px] mx-auto gap-4 items-center'>
        <SideBarItem title='Color Generator' active={true} icon={<FaHome />} />
        <SideBarItem title='Color Generator' icon={<FaAirbnb />} />
        <SideBarItem title='Color Generator' icon={<FaCampground />} />
        <SideBarItem title='Color Generator' icon={<FaUber />} />
        <SideBarItem title='Color Generator' icon={<FaAd />} />
        <SideBarItem title='Color Generator' icon={<FaUbuntu />} />
       </ul>
   </aside>
  )
}

export default SideBar