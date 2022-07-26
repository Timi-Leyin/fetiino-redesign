import { Fragment, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import Preloader from "./Components/Preloader";
import Favourites from "./Pages/Favourites";
import ColorPicker from "./Pages/ColorPicker";
import Converter from "./Pages/Converter";
import Extract from "./Pages/Extract";
import GradientMaker from "./Pages/GradientMaker";

const Home = lazy(() => import("./Pages/Home"));
const _404 = lazy(() => import("./Pages/_404"));
const ColorGenerator = lazy(() => import("./Pages/ColorGenerator"));

const App = () => {
  const storage = localStorage.getItem("theme");
  if (!storage) localStorage.setItem("theme", "light");
  (document.querySelector("html") as HTMLElement).dataset.mode =
    storage || "light";
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Preloader />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/extract"
          element={
            <Suspense fallback={<Preloader />}>
              <Extract />
            </Suspense>
          }
        />
        <Route
          path="/converter"
          element={
            <Suspense fallback={<Preloader />}>
              <Converter />
            </Suspense>
          }
        />
        <Route
          path="/favourites"
          element={
            <Suspense fallback={<Preloader />}>
              <Favourites />
            </Suspense>
          }
        />
        
        <Route
          path="/colorPicker"
          element={
            <Suspense fallback={<Preloader />}>
              <ColorPicker />
            </Suspense>
          }
        />

        <Route
          path="/generate"
          element={
            <Suspense fallback={<Preloader />}>
              <ColorGenerator />
            </Suspense>
          }
        />

        <Route
          path="/gradient-maker"
          element={
            <Suspense fallback={<Preloader />}>
              <GradientMaker />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<Preloader />}>
              <_404 />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
