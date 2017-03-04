import React from 'react';
import { withTranslate } from 'react-redux-multilingual';
import { LegalBar, SocialBar } from '../commons';

const Footer = ({ translate }) => (
  <div className="footer">
    <SocialBar>
      <a
        className='icon'
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.facebook.com/masha.eltsova'
        title='facebook'
      >
          <i className="fa fa-facebook-square fa-2x"></i>
      </a>
      <a
        className='icon'
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.instagram.com/surffgirl/'
        title='instagram'
      >
          <i className="fa fa-instagram fa-2x"></i>
      </a>
      <a
        className='icon'
        rel='noreferrer noopener'
        href='mailto:mashaeltsova@mail.ru'
        title='email'
      >
          <i className="fa fa-envelope fa-2x"></i>
      </a>
    </SocialBar>
    <LegalBar>
      <span>
        <i className="fa fa-copyright"></i>
        {translate('copyright')}
      </span>

    </LegalBar>
  </div>
);

export default withTranslate(Footer);
