import React, { ReactNode } from 'react'
import Header from './Header'
import SideBar from './SideBar'

const DashboardLayout = ({children, title}:{children:ReactNode, title:string}) => {
  return (
    <main className=''>
    <div className="panel w-full relative">
    <Header />
    </div>
   
   <div className=" p-6 h-screen relative flex">

  <SideBar />

   <div className="px-6">
   <h1 className='text-5xl font-[700]'>{title}</h1>
     {children}
    </div>
   </div>
  </main>
  )
}

export default DashboardLayout