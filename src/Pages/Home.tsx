import "locomotive-scroll/dist/locomotive-scroll.min.css";
import { useRef } from "react";
import {
  LocomotiveScrollProvider,
} from "react-locomotive-scroll";

const options = {
  smooth: true,
  inertial: 0.7,
};

const Home = () => {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider options={options} containerRef={containerRef}>
      <main id="Home" className="h-screen dark:bg-black dark:text-white p-12" ref={containerRef} data-scroll-container>
        Hey Buddy !!!
      </main>
    </LocomotiveScrollProvider>
  );
};

export default Home;
