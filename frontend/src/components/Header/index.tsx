import React from 'react';
import logo from '../../assets/logo.png'
import { HeaderWrapper } from "../Header/styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt="logo" style={{ width: '350px'}}/>
      {/* <Title>Street Car Club</Title>
      <Subtitle>Calculadora Penal</Subtitle> */}
    </HeaderWrapper>
  );
};

export default Header;

