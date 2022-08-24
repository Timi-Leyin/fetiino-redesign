import React, { ReactNode } from 'react'
import Header from './Header'
import Navigation from './Navigation'

const DashboardLayout = ({children, title,paragraph, hide=false}:{children:ReactNode, title:string,paragraph?:ReactNode | string, hide?:boolean}) => {
  return (
    <main className=''>
    <Header />
   
  <Navigation />
  {/* px-[5%] */}
   <div className="h-screen relative">
    {
      !hide && (
        <div className="mt-[7rem] text-center">
  
<div className="py-4">
<h1 className='text-5xl font-[500]'>{title}</h1>
<p className="text-xs max-w-[350px] mx-auto">{paragraph || ''}</p>
</div>


<div className=""></div>

</div>
      )
    }
     {children}
    </div>

  </main>
  )
}

export default DashboardLayout
