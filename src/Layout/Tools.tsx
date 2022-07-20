import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../Components/Button'
import Tool from '../Components/Tool'

const Tools = () => {
  return (
    <section className='flex-center py-4 flex-col'>
 <Tool name='Color Extrator' no='01' to='' />
 <Tool name='Palette Generator' no='02' to='' />
 <Tool name='Gradient Maker' no='03' to='' />
 <Tool name='Color Picker' no='04' to='' />
 <Tool name='Color Converter' no='05' to='' />
 

</section>
  )
}

export default Tools