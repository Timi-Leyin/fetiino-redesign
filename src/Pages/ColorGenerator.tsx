import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'


const ColorGenerator = () => {
  return (
    <Fragment>
    <Helmet>
      <title>Fetiino - Color Generator</title>
    </Helmet>
   <DashboardLayout>
   <h1 className='text-5xl font-[700]'>Color Generator</h1>
   </DashboardLayout>
    </Fragment>
  )
}

export default ColorGenerator