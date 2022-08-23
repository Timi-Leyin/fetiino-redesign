import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { FaCopy, FaHeart } from 'react-icons/fa'
import { ColorCard2, ColorPalette } from '../Components/ColorCard'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'
import randomColors from '../Utils/color'



 
const ColorGenerator = () => {
  return (
    <Fragment>
    <Helmet>
      <title>Fetiino - Color Palette Generator</title>
    </Helmet>
   <DashboardLayout title='Palette Generator' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto.
'>


    
<div className="grid grid-cols-1 px-[5%] sm:grid-cols-3 lg:grid-cols-6 gap-4 flex-wrap">
{
  Array.from({length:10}).map((arr, i)=>{
   return <ColorPalette colors={[randomColors(), randomColors(), randomColors(), randomColors(), randomColors()]} />
  })
}

</div>







   </DashboardLayout>
    </Fragment>
  )
}

export default ColorGenerator