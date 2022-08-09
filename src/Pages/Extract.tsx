import { FaCopy, FaFileExport, FaFileImage, FaFileImport, FaHeart } from 'react-icons/fa'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'

const Extract = () => {
  return (
    <DashboardLayout title='Color Extract' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto.
    '> 
       <div className="flex justify-between px-6 gap-10">

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
    <button className='bg-primary px-4 text-white py-2 my-2 text-xs'>Browse</button>

    <p className='text-xs py-2 w-[200px]'>
        Upload images only in (*.png .jpg .jpeg .gif) format.
    </p>
        </div>
    </div>






    <div className="">
        <div className="pb-3">
            <h3 className='text-3xl'>Dominant Color</h3>
        </div>

    {/* color card */}

    <div className='p-2 flex justify-between my-2 items-center bg-yellow-400 font-bold text-xs'>
        <span className='text-yellow-900'>#FFE001</span>
        <span className='cursor-pointer text-gray-700  inline-block shadow-sm'>
            <FaCopy />
        </span>
    </div>

{/* ** */}
    {/* color card */}

    <div className='p-2 flex justify-between my-2 items-center bg-green-400 font-bold text-xs'>
        <span className='text-green-900'>#EED001</span>
        <span className='cursor-pointer text-gray-700  inline-block shadow-sm'>
            <FaCopy />
        </span>
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