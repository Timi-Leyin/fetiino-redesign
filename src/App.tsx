import { Fragment } from "react";
import {AnimatePresence} from 'framer-motion'
import { Route, Routes, useLocation } from "react-router-dom";

import _404 from "./Pages/_404";
import Home from "./Pages/Home";

const App = () => {
  const location= useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<_404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
