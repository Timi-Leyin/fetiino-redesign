import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Header from "../Layout/Header";
import Hero from "../Layout/Hero";
import Footer from "../Layout/Footer";
import Typography from "../Layout/Typography";
import Tools from "../Layout/Tools";
import Features from "../Layout/Features";
import Testimonials from "../Layout/Testimonials";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import scrollOptions from '../Config/scroll'



const Home = () => {
  const containerRef=useRef(null)
  return (
   <LocomotiveScrollProvider watch={[]} options={scrollOptions} containerRef={containerRef}>
      <motion.main key="home" data-scroll-container ref={containerRef} id="home">
      <Header />
      <Hero />
      <Typography />
      <Tools />
      <Features />
      <Testimonials />
      <Footer />
    </motion.main>
   </LocomotiveScrollProvider>
  );
};

export default Home;
