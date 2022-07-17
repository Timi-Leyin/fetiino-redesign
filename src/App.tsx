import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import _404 from "./Pages/_404";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<_404 />} />
      </Routes>
    </Fragment>
  );
};

export default App;
