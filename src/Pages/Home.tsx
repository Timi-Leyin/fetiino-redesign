
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageAnimate = {

}

const Home = () => {
  return (
  <motion.main variants={pageAnimate} id='home'>
   <div className="">
     <h1>Create the sliky <span>Gradient</span> Nicely!</h1>
   </div>


   <div className=""></div>
  </motion.main>
  );
};

export default Home;
