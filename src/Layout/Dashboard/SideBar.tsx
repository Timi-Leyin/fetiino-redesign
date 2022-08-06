import React, { ReactNode } from 'react'
import { FaPalette } from 'react-icons/fa'
import Logo from '../../Components/Logo'


interface SideBarItemProps{
  title: string,
  icon:ReactNode
}

const SideBarItem =({title,icon}:SideBarItemProps)=>{
  return(
    <li className="my-5" title={title}>
    <span>{icon}</span>
  </li>
  )
}


const SideBar = () => {
  return (
   <aside className='w-[auto] py-1'>
       <Logo />

       <ul className='flex flex-col justify-centerr items-center'>
        <SideBarItem title='Color Generator' icon={<FaPalette />} />
        <SideBarItem title='Color Generator' icon={<FaPalette />} />
        <SideBarItem title='Color Generator' icon={<FaPalette />} />
        <SideBarItem title='Color Generator' icon={<FaPalette />} />
       </ul>
   </aside>
  )
}

export default SideBar