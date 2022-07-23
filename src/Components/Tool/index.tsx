
import { FaArrowRight } from 'react-icons/fa'
import Button from '../Button'
import {motion} from 'framer-motion'
interface ToolProps{
  name:string,
  no:string | number,
  to: string
}
const Tool = ({name, no, to}:ToolProps) => {
  return (
    
<motion.div key={'tools'} className="flex gap-5 my-4 mx-auto items-center  p-3 justify-between  md:w-[80vw] ">
  <div className="text-2xl md:text-5xl gap-1 flex-center">
    <motion.span className='text-xl' initial={{opacity:0, y:20}} transition={{delay:.3}} whileInView={{opacity:1,y:0}}>{no}</motion.span>
    <motion.span className="mx-3" initial={{opacity:0, y:-20}} transition={{delay:.3}} whileInView={{opacity:1,y:0}}>{name}</motion.span>
  </div>
 <motion.a href={to} initial={{opacity:0, x:-20}} whileInView={{opacity:1,x:0}} target="_blank">
    <Button className="">
    <span className="bg-black ml-auto h-10 w-10 md:w-16 block rotate-[-45deg] flex-center text-white rounded-full md:h-16  dark:bg-white dark:text-black">
    <FaArrowRight /> 
    </span>
    </Button>
 </motion.a>
</motion.div>

  )
}

export default Tool