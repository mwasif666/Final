import React from 'react'
import Nav_Bar from "./Components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Categories from './Components/Categories';
import Products from './Components/Products';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav_Bar />
        <Routes>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Categories />
      <Products />
    </>
  );
}

export default App