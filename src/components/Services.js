// src/components/Services.js
import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 4rem 1rem;
  background: #f9f9f9;
  text-align: center;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 250px;
  max-width: 300px;
`;

const Services = () => {
  return (
    <ServicesSection>
      <h2>My Projects</h2>
      <ServicesContainer>
        <ServiceCard>
          <h3>Web Development</h3>
          <p>Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet.</p>
        </ServiceCard>
        <ServiceCard>
          <h3>DSA</h3>
          <p>Data Science is a field about processes and systems to extract data from structured and semi-structured data.</p>
        </ServiceCard>
        <ServiceCard>
          <h3>Machine Learning </h3>
          <p> Machine Learning is a field of study that gives computers the capability to learn without being explicitly programmed..</p>
        </ServiceCard>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
