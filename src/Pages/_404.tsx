import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import Button from "../Components/Button";

const _404 = () => (
  <motion.section initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className=" h-screen dark:bg-black dark:text-white">
    <div className="p-12">
      <h1 className="text-[5rem] font-[500] text-transparent bg-clip-text gradient">
        404
      </h1>
      <p className="py-1 max-w-[300px] text-xs">
        Oops, looks like the page you requested is missing...
      </p>
      <Link to="/">
        {" "}
        <Button className="gradient p-3 text-white my-4 rounded-[50px]">
          Go Back Home
        </Button>
      </Link>
    </div>
  </motion.section>
);
export default _404;
