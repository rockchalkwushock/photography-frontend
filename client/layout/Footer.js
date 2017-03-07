import React from 'react';
import FontAwesome from 'react-fontawesome';
import { withTranslate } from 'react-redux-multilingual';
import { Icon, MailIcon } from '../commons';

const Footer = ({ translate }) => (
  <div className="footer">
    <div className="social">
      <Icon
        url='https://www.facebook.com/masha.eltsova'
        event='facebook'
        name='facebook-square'
        size='2x'
      />
      <Icon
        url='https://www.instagram.com/surffgirl/'
        event='instagram'
        name='instagram'
        size='2x'
      />
      <MailIcon
        url='mailto:mashaeltsova@mail.ru'
        name='envelope'
      />
    </div>
    <div className="legal">
      <span>
        <FontAwesome name='copyright' />
        {translate('copyright')}
      </span>
    </div>

  </div>
);

export default withTranslate(Footer);
