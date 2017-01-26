import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router/es';
import { Menu } from 'semantic-ui-react';


const NavBar = ({ path }) => (
  <Menu>
    <Menu.Menu>
      <Menu.Item
        active={path === '/'}
        onClick={() => browserHistory.push('/')}
      >
        Home
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position='right'>
      <Menu.Item
        active={path === '/about'}
        onClick={() => browserHistory.push('/about')}
      >
        About
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

NavBar.propTypes = {
  path: PropTypes.string.isRequired
};

export default NavBar;
