import React, { ReactNode } from 'react'
import Header from './Header'
import SideBar from './SideBar'

const DashboardLayout = ({children, title}:{children:ReactNode, title:string}) => {
  return (
    <main className=''>
    <Header />
   
  <SideBar />

   <div className=" p-6 h-screen relative flex">

   <h1 className='text-5xl mt-2 font-[700]'>{title}</h1>
     {children}
    </div>

  </main>
  )
}

export default DashboardLayout