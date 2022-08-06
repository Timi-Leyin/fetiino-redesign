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
    <li className={`${active && 'bg-gray-300 dark:bg-gray-800 opacity-100 text-primary' } transition-all hover:opacity-100 opacity-70  my-1 text-lg cursor-pointer p-3  rounded-full dark `} title={title}>
    <span className=''>{icon}</span>
  </li>
  )
}


const SideBar = () => {
  return (
   <aside className='w-[5%]'>
       <ul className='flex x-[30%] flex-col justify-center gap-y-4 items-center'>
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