import {motion} from 'framer-motion'
const Typography = () => {
  return (
    <div className="text-8xl select-none p-4 font-[500] translate-y-[-80%] overflow-hidden">
    <motion.div initial={{x:'-40%'}} animate={{x:'-80%'}} transition={{duration:5,repeat:Infinity,type:'tween',repeatType:'mirror'}} className="flex gap-7 ">
     <span className='text-transparent bg-clip-text gradient'>Development</span>
    <span>Design</span>
     <span className='text-transparent bg-clip-text gradient'>Development</span>
     <span>Result</span>
    <span>Design</span>
   </motion.div>
    </div>
  )
}

export default Typography