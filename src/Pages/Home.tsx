import { motion } from "framer-motion";
import Header from "../Layout/Header";
import Hero from "../Layout/Hero";
import Footer from "../Layout/Footer";
import Typography from "../Layout/Typography";
import Tools from "../Layout/Tools";
import Features from "../Layout/Features";
import Testimonials from "../Layout/Testimonials";
import {
  LocomotiveScrollProvider,
} from "react-locomotive-scroll";
import { Fragment, useRef } from "react";
import scrollOptions from "../Config/scroll";
import { Helmet } from "react-helmet";

const Home = () => {
  const containerRef = useRef(null);

  return(
    <Fragment>
      <Helmet>
        <title>Fetiino - Home</title>
      </Helmet>

      <LocomotiveScrollProvider
        watch={[]}
        options={scrollOptions}
        containerRef={containerRef}
      >
        <motion.main
        exit={{opacity:0}}
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
