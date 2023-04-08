import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import cartImg from "../Assets/image-xx59.jpg";
import CartProductCard from "../Components/CartProductCard";
import { clearCart, removeFromCart } from "../rtk/slices/cartSlice";

const CartModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  display: flex;
  justify-content: center;

  @media (min-width: 300px) and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CartModalBody = styled.div`
  width: 370px;
  height: fit-content;
  max-height: 600px;
  margin-top: 100px;
  border-radius: 5px;
  background-color: #fff;
  margin-left: 40%;
  padding: 30px;

  h1 {
    color: #000;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    position: absolute;
    margin: 0 auto;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    position: absolute;
    margin: 0 auto;
  }
`;

const CartHeading = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 18px;
    border: none;
    border-bottom: 2px solid #d4cccc;
    background: transparent;
    cursor: pointer;
    opacity: 0.6;

    :hover {
      opacity: 1;
      border-bottom: 1px solid #c67d4a;
      color: #c67d4a;
    }
  }
`;
const CartProducts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const CartTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  h2 {
    font-size: 30px;
    opacity: 0.8;
  }

  span {
    font-size: 30px;
  }
`;

const CartCheckout = styled.div`
  width: 100%;

  button {
    width: 100%;
    margin-top: 20px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: none;
    background-color: #c67d4a;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      scale: 0.98;
    }
  }
`;

const AltMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
`;

export default function Cart({ showCart, setShowCart }) {
  const [quantityCount, setquantityCount] = useState(1);
  const dispatch = useDispatch();
  const cartProds = useSelector((store) => store.cart);

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
    <>
      {showCart && (
        <CartModalBackground onClick={() => setShowCart(false)}>
          <CartModalBody onClick={(e) => e.stopPropagation()}>
            {cartProds.length > 0 ? (
              <>
                <CartHeading>
                  <h1>Cart</h1>
                  <button onClick={() => dispatch(clearCart())}>
                    Remove All
                  </button>
                </CartHeading>
                <CartProducts>
                  {cartProds.map((product, idx) => (
                    <CartProductCard product={product} />
                  ))}
                </CartProducts>
                <CartTotal>
                  <h2>Total</h2>
                  <span>$552</span>
                </CartTotal>
                <CartCheckout>
                  <button>Checkout</button>
                </CartCheckout>
              </>
            ) : (
              <AltMessage>Cart is Empty</AltMessage>
            )}
          </CartModalBody>
        </CartModalBackground>
      )}
    </>
  );
}
