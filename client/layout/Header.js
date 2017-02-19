import React from 'react';
import { browserHistory } from 'react-router/es';
import {
  NavBar,
  NavItem,
  Title,
  SubTitle
} from '../commons';

const Header = () => (
  <div className="heading">
    <div className="titles">
      <Title>Masha Eltsova</Title>
      <SubTitle>Photography</SubTitle>
    </div>
    <div className="navigation">
      <NavBar>
        <NavItem onClick={() => browserHistory.push('/')}>Home</NavItem>
        <NavItem onClick={() => browserHistory.push('/about')}>About</NavItem>
      </NavBar>
    </div>
  </div>
);

export default Header;
