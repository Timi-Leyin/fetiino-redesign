import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { FaAngleDoubleRight, FaArrowCircleLeft, FaArrowCircleRight, FaArrowLeft, FaCode, FaHeart } from 'react-icons/fa'
import { MdOutlineRotateRight } from 'react-icons/md'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'
import randomNumber from '../Utils/number';
import randomColor from '../Utils/color'

const GradientMaker = () => {
  const [gradient, setGradient] = useState({
    deg:45, 
    color1:randomColor(),
    color2:randomColor()
  });


  const onGradient =()=>{
    setGradient({
      deg:randomNumber(0, 360),
      color1:randomColor(),
      color2:randomColor()
    })
  }


 
  window.addEventListener('keyup',(e:KeyboardEvent)=>{

    if(e.code == 'Space'){
     onGradient()
    } 
 })


  return (
    <Fragment>
    <Helmet>
      <title>Fetiino - Gradient Maker</title>
    </Helmet>
   <DashboardLayout title='Gradient Maker' hide={true} paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto.
'>

<div style={{
  backgroundImage:(`linear-gradient(${gradient.deg + 'deg'}, ${gradient.color1}, ${gradient.color2})`)
}} className="gradient-make h-[100vh] relative flex justify-center items-end">


<div className="controls w-[90%] my-4 rounded-full mx-auto flex justify-between  bg-gray-300/60 dark:bg-gray-700/60 filter-bg-blur items-center py-6 px-[5%]">

<div className="">
  <h3 className='font-bold text-xl'>Spider Material</h3>
  <h4 className='flex gap-1 items-center pb-1'><MdOutlineRotateRight/> {gradient.deg} deg</h4>
  <div className='flex items-center gap-1'>
    <div className="w-4 h-4 rounded-full" style={{backgroundColor:gradient.color1}}></div>
    <div className="w-4 h-4 rounded-full" style={{backgroundColor:gradient.color2}}></div>
  </div>
</div>


<div className="flex flex-col justify-center items-center">
  <h4 className='font-bold'>Tap <i>[ space bar ]</i> to generate new gradients</h4>
  <div className='flex justify-space-between gap-10'>
    <div className="cursor-pointer select-none flex gap-1 items-center"><FaArrowCircleLeft />{' '}Previous</div>
    <div className="cursor-pointer select-none flex gap-1 items-center" onClick={onGradient}>Next <FaArrowCircleRight/></div>
  </div>
</div>



<div className="flex items-center gap-4">
  <div className="cursor-pointer">
    <FaCode />
  </div>
  <div className="cursor-pointer">
    <FaHeart />
  </div>
</div>


</div>


</div>
  






   </DashboardLayout>
    </Fragment>
  )
}

export default GradientMaker