import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router/es';
import { withTranslate } from 'react-redux-multilingual';
import { Menu } from 'semantic-ui-react';


const NavBar = ({ translate }) => (
  <Menu borderless>
    <Menu.Menu>
      <Menu.Item
        onClick={() => browserHistory.push('/')}
      >
        {translate('home-btn')}
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position='right'>
      <Menu.Item
        onClick={() => browserHistory.push('/about')}
      >
        {translate('about-btn')}
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

NavBar.propTypes = {
  translate: PropTypes.func
};

export default withTranslate(NavBar);
