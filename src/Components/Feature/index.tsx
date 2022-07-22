import React from 'react'
import {motion } from 'framer-motion'
interface FeatureProps{
    no:string | number,
    title:string,
    text:string,
}

const Feature = ({no, title,text}:FeatureProps) => {
  return (
    <motion.div key={no} className="feature py-4">
        <motion.span initial={{opacity:0,x:-50}} transition={{delay:.6}} whileInView={{opacity:1, x:0}} className="block font-[600] bg-clip-text text-transparent gradient">{no}</motion.span>
        <motion.h3 initial={{opacity:0,y:-100}} transition={{delay:.3}} whileInView={{opacity:1, y:0}} className="text-2xl font-[400]">{title}</motion.h3>
        <motion.p initial={{opacity:0,y:100}} transition={{delay:.3}} whileInView={{opacity:1, y:0}} className="text-xs w-[300px]">{text}</motion.p>
    </motion.div>
  )
}

export default Feature