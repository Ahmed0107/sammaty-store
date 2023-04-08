import React from "react";
import styled from "styled-components";
import Categories from "../Components/Categories";
import BestGear from "../Components/BestGear";

import earPhonesImg from "../Assets/image-yx1-earphones.jpg";
import ProductList from "../Components/ProductList";

const Wrrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const LandingSection = styled.div`
  width: 100%;
  height: 250px;
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
`;

export default function Earphones() {
  const products = [
    {
      title: "YX1 WIRELESS EARPHONES",
      image: earPhonesImg,
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
  ];

  return (
    <Wrrapper>
      <LandingSection>
        <h1>Earphones</h1>
      </LandingSection>
      <ProductList products={products} />
      <Categories />
      <BestGear />
    </Wrrapper>
  );
}
