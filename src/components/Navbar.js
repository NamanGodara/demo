// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.li`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <h1>Portfolio</h1>
        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Contact</NavLink>
        </NavLinks>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
