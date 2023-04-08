import React from "react";
import styled from "styled-components";

import headphonesCatImg from "../Assets/image-headphones.png";
import speakersCatImg from "../Assets/image-speakers.png";
import earphonesCatImg from "../Assets/image-earphones.png";
import { Link } from "react-router-dom";

const Wrraper = styled.div`
  width: 70%;
  height: 250px;
  margin-top: 140px;
  display: flex;
  justify-content: space-between;

  /* Mobile */
  @media (min-width: 300px) and (max-width: 1100px) {
    width: 90%;
    margin-top: 70px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
        width: 90%;
    margin-top: 70px;
  }
`;

const CategoryCard = styled(Link)`
  width: 30%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: #000;
  border-radius: 10px;
  position: relative;
  background-color: #f1f1f1;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    top: -40%;
  }
  p {
    font-size: 20px;
    letter-spacing: 0.125em;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
  }

  span {
    margin-bottom: 20px;
    opacity: 0.7;
  }
  :hover {
    span {
      color: #db692c;
    }
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    height: 140px;
    img {
      width: 100px;
      height: 100px;
      top: -30%;
    }
    p {
      font-size: 14px;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    /* height: 140px;
    img {
      width: 100px;
      height: 100px;
      top: -30%;
    }
    p {
      font-size: 14px;
    } */
  }
`;

export default function Categories() {
  const categoriesData = [
    {
      title: "Headphones",
      img: headphonesCatImg,
      distination: "/headphones",
    },

    {
      title: "Speakers",
      img: speakersCatImg,
      distination: "/speakers",
    },

    {
      title: "Earphones",
      img: earphonesCatImg,
      distination: "/earphones",
    },
  ];

  return (
    <Wrraper>
      {categoriesData.map((category, idx) => (
        <CategoryCard key={idx} to={`${category.distination}`}>
          <img src={category.img} alt="" />
          <p>{category.title}</p>
          <span>Shop {">"}</span>
        </CategoryCard>
      ))}
    </Wrraper>
  );
}
