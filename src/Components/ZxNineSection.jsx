import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import zxNineImg from "../Assets/image-speaker-zx9.png";


const Wrraper = styled.div`
  width: 70%;
  height: 600px;
  margin-top: 40px;
  border-radius: 10px;
  background-color: #d87d4a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  overflow: hidden;

  img {
    width: 35%;
    height: 80%;
    position: relative;
    top: 80px;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    width: 90%;
    height: 550px;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: -40px;

    img {
      width: 40%;
      height: 40%;
      position: relative;
      top: 0px;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 90%;
  }
`;

const ZxNineContent = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-size: 60px;
  }

  p {
    max-width: 80%;
    letter-spacing: 0.05em;
    word-wrap: break-word;
    opacity: 0.7;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    height: 40%;
    width: 80%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h1 {
      font-size: 40px;
    }

    p {
      max-width: 80%;
      letter-spacing: 0.05em;
      word-wrap: break-word;
      opacity: 0.7;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
  }
`;

const SeeProductBtn = styled(Link)`
  width: 200px;
  padding: 10px 20px;
  text-align: center;
  color: #fff;
  background-color: #272727;
  text-decoration: none;
  font-size: 20px;
  border-radius: 5px;

  :hover {
    background-color: #363636;
    scale: 0.99;
  }
`;

export default function ZxNineSection() {
  return (
    <Wrraper data-asos="fade-in" datsa-aos-duration="2000">
      <img src={zxNineImg} alt="" />
      <ZxNineContent>
        <h1>ZX9 SPEAKER</h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <SeeProductBtn>See Product</SeeProductBtn>
      </ZxNineContent>
    </Wrraper>
  );
}
