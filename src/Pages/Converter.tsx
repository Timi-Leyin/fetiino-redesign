import DashboardLayout from '../Layout/Dashboard/DashboardLayout'

const Converter = () => {
  return (
     <DashboardLayout title='Color Format Converter' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto.
    '> 
        <div className="flex items-center justify-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-yellow-400"></div>
            <div>
                <label className='block absolute text-xs translate-x-2 -translate-y-2  px-[6px] rounded-full bg-gray-800 text-white' htmlFor="color">Color</label>
                <input type="text" className='p-4 bg-gray-800 text-xs w-[500px] text-white rounded-full' placeholder="#FFF001" />
            </div>
        </div>
    </DashboardLayout>
  )
}

export default Converter