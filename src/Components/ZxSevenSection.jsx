import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import zxSevenImg from '../Assets/image-speaker-zx7.jpg'

const Wrraper = styled.div`
  width: 70%;
  height: 320px;
  margin-top: 50px;
  background-color: #e6e6e6;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    height: 200px;
    width: 90%;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 90%;
  }
`;

const ZxSevenContent = styled.div`
  width: 40%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  top: 100px;
  left: 100px;


  h1 {
    font-size: 28px;
    color: #000;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    height: 50%;
    top: 50px;
    left: 25px;

    h1 {
      font-size: 24px;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    top: 100px;
    left: 30px;

    h1 {
      font-size: 28px;
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
  /* font-size: 18px; */
  border-radius: 2px;
  text-transform: uppercase;

  :hover {
    background-color: #363636;
    scale: 0.99;
    color: #fff;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    font-size: 16px;
    padding: 10px 10px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

export default function ZxSevenSection() {
  return (
    <Wrraper>
      <ZxSevenContent>
        <h1>ZX7 SPEAKER</h1>
        <SeeProductBtn>See Product</SeeProductBtn>
      </ZxSevenContent>
      <img src={zxSevenImg} alt="" />
    </Wrraper>
  );
}
