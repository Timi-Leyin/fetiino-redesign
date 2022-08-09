import React, { ReactNode } from 'react'
import Header from './Header'
import Navigation from './Navigation'

const DashboardLayout = ({children, title}:{children:ReactNode, title:string}) => {
  return (
    <main className=''>
    <Header />
   
  <Navigation />

   <div className=" p-6 px-[5%] h-screen relative">

   <h1 className='text-5xl font-[500]'>{title}</h1>
     {children}
    </div>

  </main>
  )
}

export default DashboardLayout