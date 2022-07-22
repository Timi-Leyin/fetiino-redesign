import React from 'react'
import Feature from '../Components/Feature'
import { motion } from 'framer-motion'
const Features = () => {
  return (
   <motion.section key='features' className='flex md:justify-around justify-center items-center py-8 flex-col md:flex-row'>
       <motion.div initial={{y:50,opacity:0}} key="feature-box" transition={{delay:.4}} whileInView={{opacity:1,y:0}} className="w-[400px] h-[400px] gradient rounded-2xl"></motion.div>
       <div className="">
          <Feature no='01' title='Brain Storming' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quo.' />
          <Feature no='02' title='Understandable' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quo.' />
          <Feature no='03' title='Exportable' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quo.' />
       </div>
   </motion.section>
  )
}

export default Features