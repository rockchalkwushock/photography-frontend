import React from 'react';
import { withTranslate } from 'react-redux-multilingual';
import { browserHistory } from 'react-router/es';

const Header = ({ translate }) => (
  <header>
    <div className="site-branding">
      <h1 className="site-title">
        {translate('title')}
      </h1>
    </div>
    <nav>
      <div className="menu-container">
        <ul>
          <li>
            <a onClick={() => browserHistory.push('/')}>
              {translate('home')}
            </a>
          </li>
          <li>
            <a onClick={() => browserHistory.push('/about')}>
              {translate('about')}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default withTranslate(Header);
