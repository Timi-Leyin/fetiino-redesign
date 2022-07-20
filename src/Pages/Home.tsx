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

const Home = () => {
  return (
    <motion.main key="home" id="home">
      <Header />
      <Hero />
      <Typography />
      <Tools />
      <Features />
      <Testimonials />
      <Footer />
    </motion.main>
  );
};

export default Home;
