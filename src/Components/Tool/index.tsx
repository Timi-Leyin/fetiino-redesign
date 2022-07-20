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
    
<div className="flex gap-5 my-4 mx-auto items-center  p-3 justify-between  md:w-[80vw] ">
  <div className="text-2xl md:text-5xl gap-1 flex-center">
    <span className='text-xl'>{no}</span>
    <span className="mx-3">{name}</span>
  </div>
 <a href={to}>
    <Button className="">
    <span className="bg-black ml-auto h-10 w-10 md:w-16 block rotate-[-45deg] flex-center text-white rounded-full md:h-16  dark:bg-white dark:text-black">
    <FaArrowRight /> 
    </span>
    </Button>
 </a>
</div>

  )
}

export default Tool