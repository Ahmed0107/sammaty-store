import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Earphones from "../pages/Earphones";
import Headphones from "../pages/Headphones";
import Homepage from "../pages/Homepage";
import Speakers from "../pages/Speakers";

import AOS from "aos";
import "aos/dist/aos.css";
import ProductDetails from "../pages/ProductDetails";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
`;

export default function App() {

  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/product-details/:prodTitle" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}
