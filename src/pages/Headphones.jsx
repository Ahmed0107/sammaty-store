import React from "react";
import styled from "styled-components";

import prodHeadphoneOne from "../Assets/image-xx99-mark-two.jpg";
import prodHeadphoneTwo from "../Assets/image-xx59.jpg";
import prodHeadphoneThree from "../Assets/image-xx99-mark-one.jpg";


import Categories from "../Components/Categories";
import BestGear from "../Components/BestGear";
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

export default function Headphones() {
  const products = [
    {
      title: "XX99 MARK II HEADPHONES",
      image: prodHeadphoneOne,
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio.It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound",
    },
    {
      title: "XX99 MARK I HEADPHONES",
      image: prodHeadphoneTwo,
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      title: "XX59 HEADPHONES",
      image: prodHeadphoneThree,
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
  ];

  return (
    <Wrrapper>
      <LandingSection>
        <h1>Headphones</h1>
      </LandingSection>
      <ProductList products={products} />
      <Categories />
      <BestGear />
    </Wrrapper>
  );
}
