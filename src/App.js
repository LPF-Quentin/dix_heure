import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllClocks from "./pages/AllClocks/AllClocks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AllClocks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
