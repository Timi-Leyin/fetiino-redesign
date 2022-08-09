import { FaFileImage, FaFileImport } from 'react-icons/fa'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'

const Extract = () => {
  return (
    <DashboardLayout title='Color Extract' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto.
    '> 
       <div className="flex gap-3">

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
        d
    </div>



       </div>
    </DashboardLayout>
  )
}

export default Extract