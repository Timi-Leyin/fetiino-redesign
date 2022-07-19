
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <motion.main initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    motion
    <Link to='/2j'>Link</Link>
  </motion.main>
  );
};

export default Home;
