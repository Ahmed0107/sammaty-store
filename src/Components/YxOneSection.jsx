import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import yxOneImg from "../Assets/image-earphones-yx1.jpg";

const Wrraper = styled.div`
  width: 70%;
  height: 320px;
  margin-top: 50px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  img {
    width: 48%;
    height: 100%;
    border-radius: 10px;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    width: 90%;
    height: 200px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 90%;
  }
`;

const YxOneContent = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #e6e6e6;
  border-radius: 10px;

  h1 {
    font-size: 28px;
    color: #000;
    margin-left: 80px;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    align-items: center;
    h1 {
      font-size: 22px;
      color: #000;
      margin-left: 0;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    align-items: center;
    h1 {
      color: #000;
      margin-left: 0;
    }
  }
`;

const SeeProductBtn = styled(Link)`
  /* width: 150px; */
  padding: 10px 20px;
  text-align: center;
  color: #000;
  background-color: transparent;
  border: 1px solid;
  text-decoration: none;
  border-radius: 2px;
  text-transform: uppercase;
  margin-top: 30px;
  margin-left: 80px;

  :hover {
    background-color: #363636;
    scale: 0.99;
    color: #fff;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    align-items: center;
    margin-left: 0;
    padding: 10px 20px;
    h1 {
      font-size: 22px;
      color: #000;
      margin-left: 0;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    align-items: center;
    margin-left: 0;
    padding: 10px 20px;
    h1 {
      font-size: 22px;
      color: #000;
      margin-left: 0;
    }
  }
`;

export default function YxOneSection() {
  return (
    <Wrraper>
      <img src={yxOneImg} alt="" />
      <YxOneContent>
        <h1>YX1 EARPHONES</h1>
        <SeeProductBtn>See Product</SeeProductBtn>
      </YxOneContent>
    </Wrraper>
  );
}
