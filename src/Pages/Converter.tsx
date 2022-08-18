import { useState } from 'react';
import ColorCard from '../Components/ColorCard';
import Loading from '../Components/Loading';
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'

const Converter = () => {
  const [color, setColor] = useState('#ffe01');
  
  const InputChange = (e:any)=>{
    setColor(e.target.value)
    console.log(e)
  }

  return (
     <DashboardLayout title='Color Format Converter' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto.
    '> 
        <div className="flex items-center justify-center gap-2">
            <div className="relative h-10 w-10 rounded-lg cursor-pointer" style={{background:color}}>
              <input type="color"  onChange={InputChange} name="c" id="c" className='absolute cursor-pointer  w-full h-full opacity-0' />
            </div>
            <div>
                <label className='block absolute text-xs translate-x-2 -translate-y-2  px-[6px] rounded-full bg-gray-800 text-white' htmlFor="color">Color</label>
                <input type="text" onChange={InputChange} className='p-4 bg-gray-800 text-xs w-[500px] text-white rounded-full' placeholder={color} />
            </div>
        </div>


        <div className="relative  m-auto py-12">
     {/* <Loading /> */}
     <ColorCard name={'HEX'} type={''} />
     </div>
    </DashboardLayout>
  )
}

export default Converter