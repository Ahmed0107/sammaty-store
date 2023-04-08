import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductCardWrraper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  color: #000;
  justify-content: space-between;

  img {
    width: 49%;
    height: 100%;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    height: 630px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    img {
      width: 100%;
      height: 300px;
      object-fit: fill;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    height: 730px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    img {
      width: 100%;
      height: 400px;
      object-fit: fill;
    }
  }
`;

const ProductContent = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    letter-spacing: 0.5em;
    opacity: 0.7;
  }

  h1 {
    font-size: 40px;
    line-height: 50px;
  }

  h6 {
    font-size: 16px;
    word-wrap: break-word;
    font-weight: 500;
    opacity: 0.7;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    height: 50%;
    width: 100%;
    align-items: center;

    p {
      letter-spacing: 0.5em;
      opacity: 0.7;
    }

    h1 {
      font-size: 30px;
      line-height: 30px;
      text-align: center;
    }

    h6 {
      font-size: 14px;
      text-align: center;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    height: 50%;
    width: 100%;
    align-items: center;

    p {
      letter-spacing: 0.5em;
      opacity: 0.7;
    }

    h1 {
      font-size: 30px;
      line-height: 30px;
      text-align: center;
    }

    h6 {
      font-size: 14px;
      text-align: center;
    }
  }
`;

const SeeProductLink = styled(Link)`
  width: 180px;
  padding: 8px 10px;
  font-size: 20px;
  color: #fff;
  background-color: #d87d4a;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-align: center;

  :hover {
    background-color: #e6804a;
    scale: 0.98;
  }
`;

export default function ProductCard({ product, index }) {
  const { title, description, image } = product;

  return (
    <ProductCardWrraper
    // style={{ flexDirection: index % 2 ? "row-reverse" : "row" }}
    >
      <img src={image} alt="" />
      <ProductContent>
        <p>New Product</p>
        <h1>{title}</h1>
        <h6>{description}</h6>
        <SeeProductLink to={`/product-details/${title}`}>
          See Product
        </SeeProductLink>
      </ProductContent>
    </ProductCardWrraper>
  );
}
