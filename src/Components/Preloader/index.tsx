import iro from '@jaames/iro';
import{motion} from 'framer-motion'
import { useRef, useState, useEffect } from 'react';
import Logo from '../Logo';

const ColoRange = () => {
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
              } ],
          // layoutDirection:'horizontal'
      })

      picker.on('color:change',(color: any)=>{
     if(color.index== 0) setColor1(color.hexString)
     if(color.index== 1) setColor2(color.hexString);
     console.log(color)
      })

     
  },[_ref])
  const cir = document.querySelector('#preloader .IroHandle.IroHandle--0.IroHandle--isActive');
  console.log(cir)
  useEffect(()=>{
    if(!cir) return 
    let pos = 0 ;
    // cir.style
  },[cir])
  // useEffect(() => {
  //     const gradient = document.querySelectorAll('.gradient') as NodeListOf<HTMLElement>
  //     gradient.forEach((grad:any)=>{
  //     //    tailwind 
  //         grad.style.setProperty('--tw-gradient-from', color1)
  //         grad.style.setProperty('--tw-gradient-to', color2)
  //     })
  // }, [color1, color2])
  
return (
  <div ref={_ref} id='color-picker'>

  </div>
)
}




const Preloader = () => {
  return (
    <motion.section key='preloader' exit={{opacity:0}} id='preloader' className='h-screen select-none pointer-events-none w-full flex justify-center  items-center'>
        <div className="text-5xl">
          <Logo />
        </div>

        <div className="absolute bottom-0 right-0 z-10 m-12">
          <span className='px-3'>Loading...</span>
      <ColoRange />
        </div>
    </motion.section>
  )
}

export default Preloader