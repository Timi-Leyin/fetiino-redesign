import React, { useEffect, useRef, useState } from 'react'
import iro from '@jaames/iro';
import { motion } from 'framer-motion'
const ColorPicker = () => {
    const _ref= useRef(null);
    const [color1, setColor1] = useState('#c084fc')
    const [color2, setColor2] = useState('#db2777')
    useEffect(()=>{
        if(!_ref) return

        const picker:any =  iro.ColorPicker('#color-picker',{
            width:200,
            colors:[color1,color2],
            borderColor:"#fff",
            layout:[
             {
                    component:iro.ui.Slider,
                    options:{
                        sliderType:'hue',

                    }
                },
             {
                    component:iro.ui.Slider,
                    options:{
                        sliderType:'kelvin'
                    }
                },
                {
                    component:iro.ui.Box,
                    options:{
                        boxHeight:300,
                    }
                }
            ],
            layoutDirection:'horizontal'
        })

        picker.on('color:change',(color: any)=>{
       if(color.index== 0) setColor1(color.hexString)
       if(color.index== 1) setColor2(color.hexString)
        })


    },[_ref])

    useEffect(() => {
        const gradient = document.querySelectorAll('.gradient') as NodeListOf<HTMLElement>
        gradient.forEach((grad:any)=>{
        //    tailwind 
            grad.style.setProperty('--tw-gradient-from', color1)
            grad.style.setProperty('--tw-gradient-to', color2)
        })
    }, [color1, color2])
    
  return (
    <div ref={_ref} id='color-picker'>

    </div>
  )
}

export default ColorPicker