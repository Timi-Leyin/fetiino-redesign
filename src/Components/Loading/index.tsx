import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className='text-lg p-2 relative'>
         <motion.div className="spinning" initial={{rotate:0}} animate={{rotate:'360deg'}} transition={{repeat:Infinity, duration:0.9}}>
          <FaSpinner className='' />
        </motion.div>
    </div>
  )
}

export default Loading