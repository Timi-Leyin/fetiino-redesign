import iro from '@jaames/iro';
import React, { useEffect, useRef } from 'react'
import ColorFolder from '../Components/ColorFolder';
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'

const ColorPicker = () => {
  const _ref= useRef<HTMLDivElement>(null!);
  useEffect(()=>{
      if(!_ref) return

      const picker:any =  iro.ColorPicker(_ref.current,{
          width:350,
          colors:['#fff'],
          borderColor:"#fff",
          layout:[
               {
                  component:iro.ui.Wheel,
                  options:{
                      // boxHeight:'60%',
                  }
              }
          ],
          layoutDirection:'horizontal'
      })

      picker.on('color:change',(color: any)=>{
    
      })


  },[_ref])

  return (
   <DashboardLayout title='Color Picker'>
       <section className="flex p-6 jutify-between items-center min-h-[50vh] gap-[10%] w-full">

    <div className="" ref={_ref}></div>


    <div className="flex ">
    <ColorFolder name='#FFE001' type='Hex' className='relative shadow-xl hover:translate-x-[-50px]'/>
    <ColorFolder name='#FFE001' type='Hex' className='relative shadow-xl left-[-100px] hover:translate-x-[-50px]'/>
    <ColorFolder name='#FFE001' type='Hex' className='relative shadow-xl left-[-200px] hover:translate-x-[-50px]'/>
    </div>



       </section>
   </DashboardLayout>
  )
}

export default ColorPicker