import React from 'react'
import { FaTwitter } from 'react-icons/fa'


interface TwitterProps{
username:string,
displayName:string,
comment:string,
}

const TwitterCard = ({username,displayName,comment}:TwitterProps) => {
  return (
    <div className='w-[400px] m-4 flex-shrink-0 bg-gray-900 text-white min-h-[100px] rounded-2xl'>
        <div className="p-6 ">
        <div className="flex justify-between px-1 item-center">
            <div className="">
            <h4 className='text-sm font-bold'>{displayName}</h4>
            <h6 className='text-xs opacity-80'>@{username}</h6>
            </div>

            <div className="text-2xl text-blue-500">
                <FaTwitter />
            </div>
        </div>
        <h3 className='py-6 text-bold text-2xl'>
            {comment}
        </h3>
        </div>
    </div>
  )
}

export default TwitterCard