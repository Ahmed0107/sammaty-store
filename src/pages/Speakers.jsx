import React from "react";
import styled from "styled-components";
import Categories from "../Components/Categories";
import BestGear from "../Components/BestGear";

import spaeakerOne from "../Assets/image-zx9.jpg";
import spaeakerTwo from "../Assets/image-zx7.jpg";

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

export default function Speakers() {
  const products = [
    {
      title: "ZX9 SPEAKER",
      image: spaeakerOne,
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    {
      title: "ZX7 SPEAKER",
      image: spaeakerTwo,
      description:
        "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
  ];

  return (
    <Wrrapper>
      <LandingSection>
        <h1>Speakers</h1>
      </LandingSection>
      <ProductList products={products} />
      <Categories />
      <BestGear />
    </Wrrapper>
  );
}
