import { Fragment, lazy, Suspense } from "react";
import {AnimatePresence} from 'framer-motion'
import { Route, Routes, useLocation } from "react-router-dom";
import 'locomotive-scroll/dist/locomotive-scroll.min.css'
import Preloader from "./Components/Preloader";

const Home = lazy(()=> import('./Pages/Home'))
const _404 = lazy(()=> import("./Pages/_404"));

const App = () => {
  const storage = localStorage.getItem('theme')
    if(!storage) localStorage.setItem('theme','light');
    (document.querySelector('html') as HTMLElement).dataset.mode=(storage || 'light');
  const location= useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Suspense fallback={<Preloader />}>
          <Home />
        </Suspense>
          } />

        <Route path="*" element={<Suspense fallback={<Preloader />}>
          <_404 />
        </Suspense>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
