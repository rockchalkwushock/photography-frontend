import React from 'react';
import { Icon } from 'semantic-ui-react';
import SocialBar from './SocialBar';

const Footer = () => (
  <div className="footer">
    <SocialBar />
    <Icon name='copyright' />2017 RCWS Development.
  </div>
);

export default Footer;
