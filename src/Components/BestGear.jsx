import React from "react";
import styled from "styled-components";

import bestGearImg from "../Assets/image-best-gear.jpg";

const Wrraper = styled.div`
  width: 70%;
  height: 500px;
  margin-top: 80px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  /* overflow: hidden; */

  img {
    width: 48%;
    height: 100%;
    border-radius: 10px;
  }
  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    width: 90%;
    height: 600px;
    margin-top: 60px;
    flex-direction: column-reverse;


    img {
      width: 100%;
      height: 200px;
      object-fit: fill;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 90%;
  }
`;

const BestGearContent = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;

  h1 {
    font-size: 40px;
    color: #000;
    letter-spacing: 3px;
  }

  p {
    margin-top: 30px;
    color: #000;
    font-size: 16px;
    word-wrap: break-word;
    font-weight: 500;
    opacity: 0.7;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    width: 90%;
    margin-top: 40px;
    align-items: center;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 90%;
    align-items: center;
  }
`;

export default function BestGear() {
  return (
    <Wrraper>
      <BestGearContent>
        <h1>
          BRINGING YOU THE <span style={{ color: "#D87D4A" }}>BEST</span> AUDIO
          GEAR
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </BestGearContent>
      <img src={bestGearImg} alt="" />
    </Wrraper>
  );
}
