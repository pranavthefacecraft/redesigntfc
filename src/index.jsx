import "./style.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home.jsx";
import Solit from "./pages/solit/Solit.jsx";
import Tanda from "./pages/Tanda/Tanda.jsx";
import Rafw from "./pages/rafw/Rafw.jsx";
import React, { useState } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// gsap.registerPlugin(ScrollTrigger);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solit" element={<Solit />} />
      <Route path="/Tanda" element={<Tanda />} />
      <Route path="/Rafw" element={<Rafw />} />
    </Routes>
  </BrowserRouter>,
);
