import React, { ReactNode } from 'react'
import { FaAirbnb, FaCampground, FaHome, FaPalette, FaUber, FaUbuntu } from 'react-icons/fa'
import { MdHdrAutoSelect } from 'react-icons/md'
import Logo from '../../Components/Logo'


interface SideBarItemProps{
  title: string,
  icon:ReactNode
}

const SideBarItem =({title,icon}:SideBarItemProps)=>{
  return(
    <li className="my-4 text-2xl" title={title}>
    <span>{icon}</span>
  </li>
  )
}


const SideBar = () => {
  return (
   <aside className='w-[5%]'>
       <ul className='flex x-[30%] flex-col justify-center gap-y-4 items-center'>
        <SideBarItem title='Color Generator' icon={<FaHome />} />
        <SideBarItem title='Color Generator' icon={<FaAirbnb />} />
        <SideBarItem title='Color Generator' icon={<FaCampground />} />
        <SideBarItem title='Color Generator' icon={<FaUber />} />
        <SideBarItem title='Color Generator' icon={<FaUbuntu />} />
       </ul>
   </aside>
  )
}

export default SideBar