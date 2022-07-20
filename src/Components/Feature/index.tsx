import React from 'react'

interface FeatureProps{
    no:string | number,
    title:string,
    text:string
}

const Feature = ({no, title,text}:FeatureProps) => {
  return (
    <div className="feature py-4">
        <span className="block font-[600] bg-clip-text text-transparent gradient">{no}</span>
        <h3 className="text-2xl font-[400]">{title}</h3>
        <p className="text-xs w-[300px]">{text}</p>
    </div>
  )
}

export default Feature