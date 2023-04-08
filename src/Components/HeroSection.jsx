import React from "react";
import styled, { keyframes } from "styled-components";
import heroImg from "../Assets/image-hero.jpg";
import heroImgTablet from "../Assets/image-hero-tablrt.jpg";

const HeroSectionS = styled.div`
  width: 100%;
  height: 700px;
  background: url(${heroImg}) center center / contain no-repeat;
  background-color: #191919;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -20px;
  /* margin-bottom: 80px; */

  /* Mobile */
  @media (min-width: 300px) and (max-width: 1100px) {
    background: url(${heroImgTablet}) center center / contain no-repeat;
    background-color: #191919;
    height: 650px;
    margin-bottom: 80px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
  }
`;

const HeroContent = styled.div`
  width: 70%;
  height: 80%;
  display: flex;

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
  }
`;

const FadeIn = keyframes`
from {
  opacity: 0.1;
  scale: 0.9;
}

to {
  opacity: 1;
  scale: 1;
}
`;

const HeroProdData = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #fff;
  margin-top: 200px;
  /* animation: ${FadeIn} 2s ease-out; */

  p {
    letter-spacing: 0.5em;
    opacity: 0.7;
  }

  h1 {
    font-size: 60px;
    line-height: 70px;
  }

  h6 {
    width: 70%;
    font-size: 16px;
    word-wrap: break-word;
    font-weight: 500;
    opacity: 0.7;
  }

  button {
    width: 180px;
    padding: 8px 10px;
    font-size: 20px;
    color: #fff;
    background-color: #d87d4a;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    :hover {
      background-color: #e6804a;
      scale: 0.98;
    }
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    width: 100%;
    align-items: center;

    h1 {
      font-size: 40px;
      line-height: 40px;
      text-align: center;
    }

    h6 {
      width: 100%;
      text-align: center;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 100%;
    align-items: center;

    h1 {
      font-size: 45px;
      line-height: 45px;
      text-align: center;
    }

    p {
      letter-spacing: 0.5em;
      opacity: 0.7;
      text-align: center;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionS>
      <HeroContent>
        <HeroProdData data-os="zoom-in" data-aos-durtion="2000">
          <p>New Product</p>
          <h1>XX99 MARK II HEADPHONES</h1>
          <h6>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </h6>
          <button>See Product</button>
        </HeroProdData>
      </HeroContent>
    </HeroSectionS>
  );
}
