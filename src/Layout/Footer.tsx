import { motion } from 'framer-motion';
import { BaseSyntheticEvent, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Logo from '../Components/Logo';

const Footer = () => {
  const [state, setState] = useState({error:false,msg:''})
  const pattern = /\w+@\w+\.\w+/ig;
  const sendData = (value:string, callback:(res?:string)=>void)=>{
// axios.post()
// call callback after request
  callback()
  }
  const RequestHandler = (e:BaseSyntheticEvent)=>{
    e.preventDefault();
    const value = e.target[0].value;
    if(value.match(pattern)){
      sendData(value,()=>{
        setState({...state,error:false,msg:"You've been added to our waitlist"});
      })
    return
  }
  setState({...state,error:true,msg:'Please, enter a valid email' })
  }

 return (<div className="gradient relative text-white p-12 h-[300px] md:h-[400px] rounded-t-[40px]">
    {/* newsletter */}
<div className="sm:p-12" id="newsletter">
<div className="">
  <h2 className="text-3xl font-[500]">
Join Waitlist
</h2>
<small className={`${state.error ? 'text-red-500': 'text-green-500'} font-bold translate-y-[-5px] block`}>{state.msg}</small>
</div>
<form  onSubmit={RequestHandler}  className='md:flex items-center'>
<input type="email"className='bg-transparent text-3xl sm:text-5xl px-3 w-full outline-none text-gray-300 ring-o placeholder:text-gray-300 my-6 block sm:my-0' placeholder='Your@gmail.com' />
{/* no component button */}
<button className='bg-black text-white w-16 h-16 p-4  flex items-center justify-center rounded-full rotate-[45deg]'>
<FaArrowRight />
</button>
</form>
</div>
  {/* footer */}
<div className="absolute text-xs flex justify-around items-center p-2 bottom-0 left-0 w-full">
<Logo />
<div className="">
  <span>&copy;</span> 2022 | All rights reserved
</div>
</div>

</div>
  )
}

export default Footer