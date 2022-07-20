import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../Button'

interface ToolProps{
  name:string,
  no:string | number,
  to: string
}
const Tool = ({name, no, to}:ToolProps) => {
  return (
    
<div className="flex gap-5 my-4 mx-auto items-center w-[80vw] justify-between">
  <div className="text-5xl gap-1 flex-center">
    <span className='text-xl'>{no}</span>
    <span className="mx-3">{name}</span>
  </div>
 <a href={to}>
    <Button className="">
    <span className="bg-black w-16 block rotate-[-45deg] flex-center text-white rounded-full h-16">
    <FaArrowRight /> 
    </span>
    </Button>
 </a>
</div>

  )
}

export default Tool