import React from 'react';
import { withTranslate } from 'react-redux-multilingual';
import { Copyright, Icon, MailIcon } from '../commons';

const Footer = ({ translate }) => (
  <footer>
    <div className="social">
      <ul>
        <li>
          <Icon
            event='facebook'
            name='facebook-square'
            size='2x'
            url='https://www.facebook.com/masha.eltsova'
          />
        </li>
        <li>
          <Icon
            event='instagram'
            name='instagram'
            size='2x'
            url='https://www.instagram.com/surffgirl/'
          />
        </li>
        <li>
          <MailIcon
            name='envelope'
            url='mailto:mashaeltsova@mail.ru'
          />
        </li>
      </ul>
    </div>
    <div className="legal">
      <Copyright
        event='rcws-development'
        text={translate('copyright')}
        url='https://rockchalkwushock.github.io/rcws-development/'
      />
    </div>
  </footer>
);

export default withTranslate(Footer);
