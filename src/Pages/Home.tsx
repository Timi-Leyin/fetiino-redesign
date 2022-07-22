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
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import { Fragment, useEffect, useRef, useState } from "react";
import scrollOptions from "../Config/scroll";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Preloader";

const Home = () => {
  const containerRef = useRef(null);
  const [loading, setLoad] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
    
  //   }, 5000);
  // }, []);
  return loading ? <Preloader onComplete={()=> setLoad(false) } />  : (
    <Fragment>
      <Helmet>
        <title>Fetiino - Home</title>
      </Helmet>

      <LocomotiveScrollProvider
        watch={[loading]}
        options={scrollOptions}
        containerRef={containerRef}
      >
        <motion.main
          key="home"
          data-scroll-container
          ref={containerRef}
          id="home"
        >
          <Header />
          <Hero />
          <Typography />
          <Tools />
          <Features />
          <Testimonials />
          <Footer />
        </motion.main>
      </LocomotiveScrollProvider>
    </Fragment>
  );
};

export default Home;
