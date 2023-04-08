import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrraper = styled.footer`
  width: 100%;
  height: 280px;
  margin-top: 50px;
  background-color: #191919;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  overflow: hidden;

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {

  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {

  }
`;

const NavWrraper = styled.div`
  width: 70%;
  height: 20%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #191919;
  color: #fff;
  padding: 20px 0;
  z-index: 10;

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
  @media (min-width: 300px) and (max-width: 600px) {
    font-size: 20px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 70%;
  }
`;

const NavUlLinks = styled.div`
  width: 45%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    width: 70%;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 70%;
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
    font-size: 12px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    font-size: 12px;
  }
`;

const FooterContent = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: space-between;

  p {
    max-width: 50%;
    font-size: 16px;
    opacity: 0.7;
    align-self: flex-start;
  }

  ul {
    width: 30%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20%;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    width: 90%;

    p {
      max-width: 50%;
      font-size: 12px;
      opacity: 0.7;
      align-self: flex-start;
    }

    ul {
      width: 40%;
      gap: 15%;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 90%;

    p {
      max-width: 50%;
      font-size: 14px;
    }

    ul {
      width: 40%;
    }
  }
`;

const SocialLink = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 45px;

  :hover {
    color: #c67d4a;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    font-size: 30px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    font-size: 30px;
  }
`;

const CopyWrite = styled.div`
  width: 70%;
  margin-bottom: 20px;

  span {
    align-self: flex-start;
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 600px) {
    width: 90%;

    span {
      font-size: 12px;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 90%;
    span {
      font-size: 14px;
    }
  }
`;

export default function Footer() {
  return (
    <Wrraper>
      <NavWrraper>
        <Brand to={"/"}>Sammaty</Brand>
        <NavUlLinks>
          <NavLink>Home</NavLink>
          <NavLink>HeadPhones</NavLink>
          <NavLink>Speakers</NavLink>
          <NavLink>Earphones</NavLink>
        </NavUlLinks>
      </NavWrraper>

      <FooterContent>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <ul>
          <SocialLink>
            <MdFacebook />
          </SocialLink>

          <SocialLink>
            <FaTwitter />
          </SocialLink>

          <SocialLink>
            <FaInstagram />
          </SocialLink>
        </ul>
      </FooterContent>
      <CopyWrite>
        <span>Copyright 2021. All Rights Reserved</span>
      </CopyWrite>
    </Wrraper>
  );
}
