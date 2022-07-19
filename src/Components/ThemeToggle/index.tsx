import React, { useContext, useState } from 'react'
import { FaMoon as DarkIcon, FaSun as LightIcon } from 'react-icons/fa'

const ThemeToggle = () => {
    const [state, setState] = useState(true)
    /* 
    true <=> light
    false <=> dark
    */
    const themeToggleHandler = ()=>{
        setState(!state);
        ( document.querySelector('html') as HTMLElement).dataset.mode=(state? 'light': 'dark')
    }
   
  return (
        <button onClick={themeToggleHandler} className='w-[50px] relative h-[30px] rounded-full bg-gray-400 dark:bg-gray-300 transition-colors'>
        <div className={`check w-[25px] h-[25px] text-xs flex justify-center items-center transition-transform rounded-full bg-black text-white dark:bg-white dark:text-black ${state ? 'translate-x-full': ' translate-x-0'}`}>
            {state ? <DarkIcon />: <LightIcon />}
        </div>
    </button>
  )
}

export default ThemeToggle