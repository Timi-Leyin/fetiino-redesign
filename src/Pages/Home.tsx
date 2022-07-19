
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Hero from '../Layout/Hero';

const pageAnimate = {

}

const Home = () => {
  return (
  <motion.main variants={pageAnimate} key="home" id='home'>
  <Header />
  <Hero />


   <div className=""></div>
  </motion.main>
  );
};

export default Home;
