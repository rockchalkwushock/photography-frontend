import React from 'react';
import { withTranslate } from 'react-redux-multilingual';
import { browserHistory } from 'react-router/es';
import {
  NavBar,
  NavItem,
  Title,
  SubTitle
} from '../commons';

const Header = ({ translate }) => (
  <div className="heading">
    <div className="titles">
      <Title>{translate('title')}</Title>
      <SubTitle>{translate('subtitle')}</SubTitle>
    </div>
    <div className="navigation">
      <NavBar>
        <NavItem onClick={() => browserHistory.push('/')}>{translate('home')}</NavItem>
        <NavItem onClick={() => browserHistory.push('/about')}>{translate('about')}</NavItem>
      </NavBar>
    </div>
  </div>
);

export default withTranslate(Header);
