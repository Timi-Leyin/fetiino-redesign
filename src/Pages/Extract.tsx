import { ReactNode, SyntheticEvent, useEffect, useState } from 'react'
import { FaCopy, FaFileExport, FaFileImage, FaFileImport, FaHeart } from 'react-icons/fa'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'
import Color, { Palette } from 'color-thief-react'
import { ReducerState, ArrayRGB } from 'color-thief-react/lib/types'
import { ColorCard2 } from '../Components/ColorCard'

const Extract = () => {
    const [image, setImage] = useState('')
    const [dominantColors, setDominantColors] = useState<any>();
    // const {data, loading, error} =  useColor(image, 'hex');
   
    // useEffect(()=>{
    //     setDominantColors(data)
    //     console.log(dominantColors)
    // },[image])

    const getDominant = (src:string)=>{
    //   console.log(data)
    }



    const browseImage = (e:any)=>{
        const src = URL.createObjectURL(e.target.files[0]);
        // URL.revokeObjectURL(src)
        setImage(src)
        getDominant(src)
        console.log(src)
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

   <Color src={image} format={'rgbString'}>
    {({ data, loading, error }) => ( <ColorCard2 color={data} />  )}
   </Color>

{/* ** */}
    {/* color card */}

    <div className='py-5'>
    <Palette src={image} colorCount={5} format={'rgbString'}>
  {({ data, loading, error }) => (
      data && data.map((c)=>  <ColorCard2 key={c} color={c && c} />)
  )}
</Palette>

    </div>

{/* ** */}

<div className="mt-12 flex flex-col gap-2">
    <button className='p-3 bg-primary text-white text-xs flex gap-x-2 items-center'><FaFileExport /> {' '} <span>Export Palette</span></button>
    <button className='p-3 bg-gray-900 text-white text-xs flex gap-x-2 items-center'><FaHeart /> {' '} <span>Save Palette</span></button>
</div>

    </div>



       </div>
    </DashboardLayout>
  )
}

export default Extract