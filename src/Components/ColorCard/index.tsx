import React, { useRef, useState } from 'react'
import { FaCopy, FaFileExport, FaHeart, FaTrash } from 'react-icons/fa'
import save from '../../Actions/save'
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
  const text = useRef<HTMLSpanElement>(null)
  const Copy = ()=>{
    if(text.current){
      navigator.clipboard.writeText(text.current.innerText);
    }
  }
  return(
    <div  onClick={Copy} className='_color_card p-2 flex justify-between items-center cursor-pointer w-full font-bold text-xs' style={{background:color || 'transparent'}}>
    <span className='filter-invert-1' ref={text}>{color && color}</span>
    <span className='icon transition-all  text-gray-700  inline-block shadow-sm'>
        <FaCopy />
    </span>
</div>
  )
}


export const  ColorPalette = ({colors}:{colors:string[]})=>{
  const [saved, setStatus] = useState(false)
  return(
    <div className="">
    <div className="">
    
    {
       colors.map((color)=> <ColorCard2 key={color} color={color} /> )
    }
    
    </div>
    
    
    <div className="p-3">
      <span onClick={()=>{
        setStatus(true)
         save('favourites', {
        type:'color',
        data:colors
      })
      }} className={` p-3 w-[100px] rounded-full  flex gap-1 transition-colors cursor-pointer ${saved ? " bg-red-600 " : 'text-red-600 bg-gray-800'} ` }>
        <FaHeart /> <span className="text-xs text-white">Save{saved ? 'd' : ''}</span>
      </span>
    </div>
    </div>
    
  )
}


export default ColorCard