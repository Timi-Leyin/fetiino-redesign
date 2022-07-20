import React from 'react'
import Feature from '../Components/Feature'

const Features = () => {
  return (
   <section className='flex justify-around py-8'>
       <div className="w-[400px] h-[400px] gradient rounded-2xl"></div>
       <div className="">
          <Feature no='01' title='Brain Storming' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quo.' />
          <Feature no='01' title='Understandable' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quo.' />
          <Feature no='01' title='Exportable' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quo.' />
       </div>
   </section>
  )
}

export default Features