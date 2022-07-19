
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../Layout/Hero';

const pageAnimate = {

}

const Home = () => {
  return (
  <motion.main variants={pageAnimate} id='home'>
  <Hero />


   <div className=""></div>
  </motion.main>
  );
};

export default Home;
