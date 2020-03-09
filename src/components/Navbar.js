import React from 'react';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

const Nbar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: white;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid lightgray;
`;

const LogoText = styled.h1`
  font-size: 1.4rem;
  font-family: 'Pacifico', cursive;
`;
// const MenuIcon = styled.a`
//   padding: 0 0 0 1rem;
//   border: none;
//   background: none;
// `;

const Navbar = () => {
  return (
    <>
    <Nbar className="navbar is-inline-flex is-transparent">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <LogoText>Giselle Trithip</LogoText>
        </a>
      </div>
      <div className="navbar-item is-flex-touch">
        {/* <MenuIcon className="navbar-item"><i className="material-icons">explore</i></MenuIcon>
        <MenuIcon className="navbar-item">
          <i className="material-icons">favorite_border</i>
        </MenuIcon> */}
        <ButtonIcon className="navbar-item"><i className="material-icons">explore</i></ButtonIcon>
        <ButtonIcon className="navbar-item">
          <i className="material-icons">favorite_border</i>
        </ButtonIcon>
      </div>
    </Nbar>
    </>
  );
};

export default Navbar;
