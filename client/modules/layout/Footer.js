import React, { PropTypes } from 'react';
import { Icon } from 'semantic-ui-react';
import { withTranslate } from 'react-redux-multilingual';
import SocialBar from './SocialBar';

const Footer = ({ translate }) => (
  <div className="footer">
    <SocialBar />
    <Icon name='copyright' />2017 {translate('copyright')}.
  </div>
);

Footer.propTypes = {
  translate: PropTypes.func
};

export default withTranslate(Footer);
