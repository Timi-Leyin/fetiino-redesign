import React from 'react'

interface ColorCardProps<T=string>{
    name:T,
    type:T,
    className?:T
}

const ColorCard = ({name,type,className}:ColorCardProps) => {
  return (
    <div className={`${className} w-[200px] cursor-pointer transition-all rounded-md relative h-[250px] bg-yellow-400 after:w-[50px] after:absolute after:right-0  after:block after:h-[20px] after:top-[-10px] after:rounded-l-xl after:rounded-tr-md after:bg-inherit`}>
        <div className="">
            <div className="p-4">
            <h3 className='font-[300] text-1xl y-[10px] filter-invert-1'>Type: {type}</h3>
            <h5 className='font-[200] text-2xl filter-invert-1'>{name}</h5>
            </div>
        </div>
    </div>
  )
}

export default ColorCard