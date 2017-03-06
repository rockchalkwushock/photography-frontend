import React from 'react';
import FontAwesome from 'react-fontawesome';
import { withTranslate } from 'react-redux-multilingual';
import { Icon, LegalBar, MailIcon, SocialBar } from '../commons';

const Footer = ({ translate }) => (
  <div className="footer">
    <SocialBar>
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
    </SocialBar>
    <LegalBar>
      <span>
        <FontAwesome name='copyright' />
        {translate('copyright')}
      </span>

    </LegalBar>
  </div>
);

export default withTranslate(Footer);
