import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { MdClose, MdShoppingCart } from "react-icons/md";
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";

const Wrraper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #191919;
  position: fixed;
z-index: 2500;
`;

const NavWrraper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #191919;
  color: #fff;
  padding: 20px 0px;
  border-bottom: 1px solid #474747;
  z-index: 10;
  position: relative;

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    width: 90%;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 90%;
  }
`;

const Brand = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 30px;
  font-weight: bold;

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    font-size: 26px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
  }
`;

const NavUlLinks = styled.div`
  width: 45%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Mobile */
  @media (min-width: 300px) and (max-width: 1100px) {
    width: 100%;
    height: 200px;
    position: absolute;
    top: 70px;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #000000;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.125em;
  font-weight: 500;

  :hover {
    color: #c67d4a;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    font-size: 20px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
  }
`;

const CartIcon = styled.div`
  cursor: pointer;
  position: relative;

  .cart-count {
    width: 20px;
    height: 20px;
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: 50%;
    background-color: #c67d4a;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :hover {
    scale: 0.96;
  }
`;

const MenuIcon = styled(FaBars)`
  font-size: 30px;
  display: none;
  cursor: pointer;

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    display: block;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    display: block;
  }
`;

const CloseMenuIcon = styled(MdClose)`
  font-size: 30px;
  display: none;
  cursor: pointer;

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    display: block;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    display: block;
  }
`;

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((store) => store.cart);

  const [showMenuBar, setShowMenuBar] = useState(false);

  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDeviceWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    if (deviceWidth > 1100) {
      setShowMenuBar(true);
    } else if (deviceWidth < 1100) {
      setShowMenuBar(false);
    }
  }, [deviceWidth]);

  return (
    <Wrraper>
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      <NavWrraper>
        {!showMenuBar && <MenuIcon onClick={() => setShowMenuBar(true)} />}
        {showMenuBar && <CloseMenuIcon onClick={() => setShowMenuBar(false)} />}
        <Brand to={"/"}>Sammaty</Brand>
        {showMenuBar && (
          <NavUlLinks>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/headphones"}>HeadPhones</NavLink>
            <NavLink to={"/speakers"}>Speakers</NavLink>
            <NavLink to={"/earphones"}>Earphones</NavLink>
          </NavUlLinks>
        )}

        <CartIcon onClick={() => setShowCart(true)}>
          <MdShoppingCart fontSize={30} />
          {cart.length > 0 && <div className="cart-count">{cart.length}</div>}
        </CartIcon>
      </NavWrraper>
    </Wrraper>
  );
}
