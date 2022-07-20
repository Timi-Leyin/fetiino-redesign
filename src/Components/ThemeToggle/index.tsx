import React, { useContext, useEffect, useState } from 'react'
import { FaMoon as DarkIcon, FaSun as LightIcon } from 'react-icons/fa'

const ThemeToggle = () => {
    const [state, setState] = useState(true)
    /* 
    true <=> light
    false <=> dark
    */
    const themeToggleHandler = ()=>  setState(!state);
useEffect(()=>{
    ( document.querySelector('html') as HTMLElement).dataset.mode=(state? 'light': 'dark')
},[state])
  return (
        <button onClick={themeToggleHandler} className=' w-[40px] relative h-[40px] rounded-full bg-gray-400 flex justify-center items-center dark:bg-gray-300 transition-colors'>

        <div className='check w-[20px] h-[20px] text-[10px] flex justify-center items-center transition-colors rounded-full bg-black text-white dark:bg-white dark:text-black'>
            {state ? <DarkIcon />: <LightIcon />}
        </div>

    </button>
  )
}

export default ThemeToggle