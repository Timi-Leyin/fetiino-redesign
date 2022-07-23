import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

interface PreloaderProps{
onComplete?:()=> void
}

const Preloader = ({onComplete}:PreloaderProps) => {
 return (
    <motion.section
      key="preloader"
      exit={{ opacity: 0 }}
      id="preloader"
      className="h-screen select-none pointer-events-none w-full flex-center"
    >
      <div className="self-end text-2xl justify-self-left p-12">
        <motion.div className="" initial={{rotate:0}} animate={{rotate:'360deg'}} transition={{repeat:Infinity, duration:0.9}}>
          <FaSpinner className='spinning' />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Preloader;
