// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 1rem;
  background: #fff;
  text-align: center;
`;

const AboutText = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <AboutSection>
      <AboutText>
        <h2>About Me</h2>
        <p> Today i will be telling about myself and about my skills and my experiences that i gain from other projects that i have made earlier .</p>
      </AboutText>
    </AboutSection>
  );
};

export default About;
