import React, { ReactNode } from 'react'
import Header from './Header'
import Navigation from './Navigation'

const DashboardLayout = ({children, title,paragraph}:{children:ReactNode, title:string,paragraph?:ReactNode | string}) => {
  return (
    <main className=''>
    <Header />
   
  <Navigation />

   <div className=" p-6 px-[5%] h-screen relative">
<div className="mb-3">
  
<div className="">
<h1 className='text-5xl font-[500]'>{title}</h1>
<p className="text-xs w-[350px]">{paragraph || ''}</p>
</div>


<div className=""></div>

</div>
     {children}
    </div>

  </main>
  )
}

export default DashboardLayout