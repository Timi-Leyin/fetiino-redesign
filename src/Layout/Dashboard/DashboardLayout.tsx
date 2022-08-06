import React, { ReactNode } from 'react'
import Header from './Header'
import SideBar from './SideBar'

const DashboardLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className=''>
    <div className="panel w-full relative">
    <Header />
    </div>
   
   <div className=" p-6 h-screen relative flex">

  <SideBar />

   <div className="px-6">
     {children}
    </div>
   </div>
  </main>
  )
}

export default DashboardLayout