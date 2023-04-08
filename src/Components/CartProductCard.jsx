import React, { useState } from "react";
import styled from "styled-components";

import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../rtk/slices/cartSlice";

const CartProductCardS = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .cart-product-data {
    width: 50%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 5px;
    }

    .cart-product-title-price {
      margin-left: 16px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
    }
  }
  .cart-card-quantity {
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #f1f1f1;
    border-radius: 2px;

    button {
      width: 35%;
      height: 100%;
      font-size: 20px;
      /* margin: 0 10px; */
      cursor: pointer;
      border: none;

      :hover {
        background-color: #bbb8b8;
      }
    }
    span {
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
  }
  .cart-card-delete-btn {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    cursor: pointer;
  }
`;

const TrashIcon = styled(FaTrashAlt)`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  cursor: pointer;

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
  }
`;
export default function CartProductCard({ product }) {
  const [quantityCount, setquantityCount] = useState(1);
  const dispatch = useDispatch();
  const quantityCountIncrement = () => {
    setquantityCount(quantityCount + 1);
  };
  const quantityCountDecrement = () => {
    if (quantityCount === 1) {
      return 1;
    } else {
      setquantityCount(quantityCount - 1);
    }
  };
  return (
    <CartProductCardS>
      <div className="cart-product-data">
        <img src={product.image} alt="" />
        <div className="cart-product-title-price">
          <h3>{product.title.slice(0, 10)}</h3>
          <span>${product.price}</span>
        </div>
      </div>
      <div className="cart-card-quantity">
        <button
          onClick={() => {
            quantityCountIncrement();
          }}
        >
          +
        </button>
        <span>{quantityCount}</span>
        <button
          onClick={() => {
            quantityCountDecrement();
          }}
        >
          -
        </button>
      </div>
      <TrashIcon onClick={() => dispatch(removeFromCart (product))} />
    </CartProductCardS>
  );
}
