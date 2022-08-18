import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { FaCopy, FaHeart } from 'react-icons/fa'
import { ColorCard2, ColorPalette } from '../Components/ColorCard'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'




const ColorGenerator = () => {
  return (
    <Fragment>
    <Helmet>
      <title>Fetiino - Color Palette Generator</title>
    </Helmet>
   <DashboardLayout title='Palette Generator' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto.
'>


    
<div className="flex gap-5 mt-8 flex-wrap">

<ColorPalette colors={["#FFE001", "#F5EAD5", "#FFEFFF", "#EEEEEE"]} />
<ColorPalette colors={["#FFE001", "#F5EAD5", "#FFEFFF", "#EEEEEE"]} />
<ColorPalette colors={["#FFE001", "#F5EAD5", "#FFEFFF", "#EEEEEE"]} />
<ColorPalette colors={["#FFE001", "#F5EAD5", "#FFEFFF", "#EEEEEE"]} />
<ColorPalette colors={["#FFE001", "#F5EAD5", "#FFEFFF", "#EEEEEE"]} />


</div>







   </DashboardLayout>
    </Fragment>
  )
}

export default ColorGenerator