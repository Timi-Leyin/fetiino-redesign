import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Layout/Dashboard/Header'
import SideBar from '../Layout/Dashboard/SideBar'

const ColorGenerator = () => {
  return (
    <Fragment>
    <Helmet>
      <title>Fetiino - Color Generator</title>
    </Helmet>
    <main className=''>
      <div className="panel w-full relative">
      <Header />
      </div>
     
     <div className=" p-6 h-screen relative flex">

    <SideBar />

     <div className="px-6">
        <h1 className='text-5xl font-[700]'>Color Generator</h1>
      </div>
     </div>
    </main>
    </Fragment>
  )
}

export default ColorGenerator