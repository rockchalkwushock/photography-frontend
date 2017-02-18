import React from 'react';
import { LegalBar, SocialBar } from '../commons';

const Footer = () => (
  <div className="footer">
    <SocialBar>
      <a
        className='icon'
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.facebook.com/'
        title='facebook'
      >
          <i className="fa fa-facebook-square fa-2x"></i>
      </a>
      <a
        className='icon'
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.instagram.com/?hl=ru'
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
        2017 RCWS Development.
      </span>

    </LegalBar>
  </div>
);

export default Footer;
