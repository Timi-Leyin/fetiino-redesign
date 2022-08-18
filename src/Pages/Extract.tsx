import { ReactNode, SyntheticEvent, useEffect, useState } from 'react'
import { FaCopy, FaFileExport, FaFileImage, FaFileImport, FaHeart } from 'react-icons/fa'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'
import Color, { Palette } from 'color-thief-react'
import { ReducerState, ArrayRGB } from 'color-thief-react/lib/types'
import { ColorCard2 } from '../Components/ColorCard'
import Loading from '../Components/Loading'
import {v1 as uuid} from 'uuid'
import save from '../Actions/save'

interface StatusInterface{
    loading:boolean | null,
    error:any
}



const Extract = () => {
    const [image, setImage] = useState('')
    const [colors, setcolors] = useState<any[]>([]);
    const [saved, setStatus] = useState(false)

    const browseImage = (e:any)=>{
        setStatus(false)
        const src = URL.createObjectURL(e.target.files[0]);
          setImage(src)
        setcolors([''])
    }


  return (
    <DashboardLayout title='Color Extract' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto.
    '> 
       <div className="flex flex-col md:flex-row justify-between px-6 py-8 gap-10">

    <div className="">
        <h2 className='text-3xl'>Upload Image</h2>
        {/* <h2 className='text-3xl'>You Want to Extract Color From</h2> */}
        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, placeat?</p>


        <div className="p-12 ring-1 ring-gray-200 m-4 min-h-[300px] w-full flex items-center flex-col text-center">

    <span className='text-4xl opacity-50 block py-3'><FaFileImage /></span>
   <div className="text-xs py-1">
   <p>Drag & Drop Image</p>
    <p> or </p>
   </div>
    <button className='bg-primary px-4 relative text-white py-2 my-2 text-xs cursor-pointer'>Browse
    <input type="file" name="image" onChange={browseImage} accept='.png, .jpg' id="image" className='cursor-pointer absolute select-none w-full h-full top-0 left-0 opacity-0' />
    </button>

    <p className='text-xs py-2 w-[200px]'>
        <img src={image} alt="" />
        Upload images only in (*.png .jpg .jpeg .gif) format.
    </p>
        </div>
    </div>






    <div className="hidden md:block">
        <div className="pb-3">
            <h3 className='w-[250px] text-2xl'>Dominant Color</h3>
        </div>

    {/* color card */}

   <Color src={image} format={'hex'}>
    {({ data, loading, error }) => (loading? <Loading /> : <ColorCard2 color={data} />  )}
   </Color>

{/* ** */}
    {/* color card */}

   {
       colors.length > 0 &&(
        <div className='py-5'>
        <Palette src={image} colorCount={5} format={'hex'}>
      {({ data, loading, error }) => {
          console.log(error)
        data && setcolors(data);
        return  ( loading?  <Loading /> : data && data.map((c)=>  <ColorCard2 key={c} color={c} />)  )
    }}
    </Palette>
    
        </div>
       )
       
   }



{
    colors.length > 0 && (

<div className="mt-12 flex flex-col gap-2">
    <button className='p-3 bg-primary text-white text-xs flex gap-x-2 items-center'><FaFileExport /> {' '} <span>Export Palette</span></button>


    <button onClick={()=>{
        setStatus(true)
        save('favourites', {
       id:uuid(),
       type:'color',
       data:colors
     })
    }} className={`p-3  text-xs flex gap-x-2 items-center bg-gray-900  transition-colors  ${saved ? "text-red-600" : 'text-white'}`}><FaHeart /> {' '} <span>{saved ? 'Saved': 'Save Palette'}</span></button>
</div>
    )
}

    </div>



       </div>
    </DashboardLayout>
  )
}

export default Extract