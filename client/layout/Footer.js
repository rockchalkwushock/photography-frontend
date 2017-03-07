import React from 'react';
import { withTranslate } from 'react-redux-multilingual';
import { Icon, MailIcon } from '../commons';

const Footer = ({ translate }) => (
  <footer>
    <div className="social">
      <ul>
        <li>
          <Icon
            url='https://www.facebook.com/masha.eltsova'
            event='facebook'
            name='facebook-square'
            size='2x'
          />
        </li>
        <li>
          <Icon
            url='https://www.instagram.com/surffgirl/'
            event='instagram'
            name='instagram'
            size='2x'
          />
        </li>
        <li>
          <MailIcon
            url='mailto:mashaeltsova@mail.ru'
            name='envelope'
          />
        </li>
      </ul>
    </div>
    <div className="legal">
      {translate('copyright')}
    </div>
  </footer>
);

export default withTranslate(Footer);
