import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { FaHeart } from 'react-icons/fa'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'

const GradientMaker = () => {
  return (
    <Fragment>
    <Helmet>
      <title>Fetiino - Gradient Maker</title>
    </Helmet>
   <DashboardLayout title='Gradient Maker' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto.
'>

<div className="gradient h-[60vh]">
<div className="gradient-controls p-6">
    <div className="flex justify-between items-center">
        <span><h4 className='text-4xl font-[500]'>Tools Panel</h4></span>
        <span className='text-3xl cursor-pointer'><FaHeart /></span>
    </div>
</div>
</div>
  






   </DashboardLayout>
    </Fragment>
  )
}

export default GradientMaker