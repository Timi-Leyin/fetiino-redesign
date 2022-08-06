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
   </DashboardLayout>
    </Fragment>
  )
}

export default ColorGenerator