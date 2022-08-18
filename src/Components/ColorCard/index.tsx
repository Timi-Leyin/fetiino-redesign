import React from 'react'
import { FaCopy, FaFileExport, FaHeart, FaTrash } from 'react-icons/fa'
import randomColor from '../../Utils/color'
interface ColorCardProps<T=string>{
    name:T,
    type:T,
    className?:T,
    color?:T,
}

const ColorCard = ({name,type,className, color=randomColor(200,100,250)}:ColorCardProps) => {
  return (
    <div style={{backgroundColor:color}} className={`${className} w-[250px] shadow-lg text-black cursor-pointer transition-all rounded-md relative h-[150px] bg-transparent after:w-[50px] after:absolute after:right-0  after:block after:h-[20px] after:top-[-10px] after:rounded-l-xl after:rounded-tr-md after:bg-inherit`}>
        <div className="p-4">
            <div className="flex justify-between">
            <h3 className='font-[300] text-sm y-[10px]'>Fetiino</h3>
            <h5 className='flex items-center gap-1 text-xs'><FaFileExport /> <span className=''>Export</span></h5>
            </div>


    <div className="py-3">
      <h2 className="font-[500] text-lg">{name}</h2>
      <div className="ring-1 ring-black my-2"></div>
    </div>


    <div className="text-xs flex justify-between items-center">
      <h4>{type}</h4>
      <span><FaTrash /></span>
    </div>

        </div>
    </div>
  )
}



export const ColorCard2  = ({color}:{color?:string})=>{
  return(
    <div className='_color_card p-2 flex justify-between items-center w-full font-bold text-xs' style={{background:color || 'transparent'}}>
    <span className='filter-invert-1'>{color && color}</span>
    <span className='icon transition-all cursor-pointer text-gray-700  inline-block shadow-sm'>
        <FaCopy />
    </span>
</div>
  )
}


export const  ColorPalette = ({colors}:{colors:string[]})=>{
  return(
    <div className="w-[250px]">
    <div className="">
    
    {
       colors.map((color)=> <ColorCard2 key={color} color={color} /> )
    }
    
    </div>
    
    
    <div className="p-3">
      <span className='text-red-600 cursor-pointer'>
        <FaHeart />
      </span>
    </div>
    </div>
    
  )
}


export default ColorCard