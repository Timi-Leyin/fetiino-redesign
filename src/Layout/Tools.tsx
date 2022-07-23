import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../Components/Button'
import Tool from '../Components/Tool'

const Tools = () => {
  return (
    <section className='flex-center py-4 flex-col'>
 <Tool name='Color Extrator' no='01' to='https://fetiino.netlify.app/extract/' />
 <Tool name='Palette Generator' no='02' to='https://fetiino.netlify.app/generate/' />
 <Tool name='Gradient Maker' no='03' to='https://fetiino.netlify.app/gradient-maker/' />
 <Tool name='Color Picker' no='04' to='https://fetiino.netlify.app/color-picker/' />
 <Tool name='Color Converter' no='05' to='https://fetiino.netlify.app/converter/' />
 

</section>
  )
}

export default Tools