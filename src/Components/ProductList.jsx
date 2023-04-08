import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const ProductListWrraper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  margin-top: 50px;

  /* Mobile */
  @media (min-width: 300px) and (max-width: 1100px) {
    width: 90%;
    gap: 50px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 90%;
    gap: 50px;
  }
`;

export default function ProductList({ products }) {
  return (
    <ProductListWrraper>
      {products.map((product, idx) => (
        <ProductCard
          product={product}
          key={idx}
          index={idx}
        />
      ))}
    </ProductListWrraper>
  );
}
