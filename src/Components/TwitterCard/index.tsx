
import { FaTwitter } from 'react-icons/fa'
import { MdVerified} from 'react-icons/md'


interface TwitterProps{
username:string,
displayName:string,
comment:string,
}

const TwitterCard = ({username,displayName,comment}:TwitterProps) => {
  return (
    <div className='md:w-[400px] w-[300px] m-4 flex-shrink-0 bg-gray-900 text-white min-h-[100px] rounded-2xl'>
        <div className="p-6 ">
        <div className="flex justify-between px-1 item-center">
            <div className="">
            <h4 className='text-sm font-bold'>{displayName}</h4>
            <h6 className='text-xs opacity-80 flex items-center gap-1'>@{username}{username == 'xing0x' && <MdVerified className='text-blue-500' />}</h6>
            </div>

            <div className="text-2xl text-blue-500">
                <FaTwitter />
            </div>
        </div>
        <h3 className='py-6 text-bold md:text-2xl'>
            {comment}
        </h3>
        </div>
    </div>
  )
}

export default TwitterCard