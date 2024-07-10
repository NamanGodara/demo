// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background :# yellow no-repeat center center;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #black;
  text-align: center;
`;

const HeroText = styled.div`
  max-width: 600px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroText>
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my work and projects</p>
      </HeroText>
    </HeroSection>
  );
};

export default Hero;
