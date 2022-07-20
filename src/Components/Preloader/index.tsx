import{motion} from 'framer-motion'
import Logo from '../Logo'
const Preloader = () => {
  return (
    <motion.section key='preloader' className='bg-gray-400 h-screen w-full flex justify-center  itrms-center'>
        <div className="">
            <Logo />
        </div>
    </motion.section>
  )
}

export default Preloader