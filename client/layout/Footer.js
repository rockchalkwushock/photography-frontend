import React from 'react';
import ReactGA from 'react-ga';
import { withTranslate } from 'react-redux-multilingual';
import { LegalBar, SocialBar } from '../commons';

const Footer = ({ translate }) => (
  <div className="footer">
    <SocialBar>
      <ReactGA.OutboundLink
        className='icon'
        rel='noreferrer noopener'
        eventLabel='facebook'
        to='https://www.facebook.com/masha.eltsova'
        target='_blank'
      >
        <i className="fa fa-facebook-square fa-2x"></i>
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        className='icon'
        rel='noreferrer noopener'
        eventLabel='instagram'
        to='https://www.instagram.com/surffgirl/'
        target='_blank'
      >
        <i className="fa fa-instagram fa-2x"></i>
      </ReactGA.OutboundLink>
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
