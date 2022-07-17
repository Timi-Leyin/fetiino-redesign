import {ButtonHTMLAttributes, ReactNode, useState} from 'react'

interface ButtonProps{
    children?: ReactNode
}

const Button = ({children}:ButtonProps,...props:ButtonHTMLAttributes<HTMLElement>[]) => {
  return (
    <button {...props} className='p-4 transition-all text-xs ring-none'>
        {children}
    </button>
  )
}

export default Button