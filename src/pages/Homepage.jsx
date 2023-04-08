import React from 'react'
import styled from 'styled-components';
import BestGear from '../Components/BestGear';
import Categories from '../Components/Categories';
import HeroSection from '../Components/HeroSection';
import YxOneSection from '../Components/YxOneSection';
import ZxNineSection from '../Components/ZxNineSection';
import ZxSevenSection from "../Components/ZxSevenSection";

const Wrraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default function Homepage() {
  return (
    <Wrraper>
      <HeroSection />
      <Categories />
      <ZxNineSection />
      <ZxSevenSection />
      <YxOneSection />
      <BestGear />
    </Wrraper>
  );
}
