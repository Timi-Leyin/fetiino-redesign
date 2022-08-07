import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'


const ColorGenerator = () => {
  return (
    <Fragment>
    <Helmet>
      <title>Fetiino - Color Generator</title>
    </Helmet>
   <DashboardLayout title='Color Generator'>
     <div className="h-5 p-3 w-5 bg-red-600"></div>
   </DashboardLayout>
    </Fragment>
  )
}

export default ColorGenerator