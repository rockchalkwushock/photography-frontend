import React from 'react';
import { browserHistory } from 'react-router/es';
import { Menu } from 'semantic-ui-react';


const NavBar = () => (
  <Menu borderless>
    <Menu.Menu>
      <Menu.Item
        onClick={() => browserHistory.push('/')}
      >
        Home
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position='right'>
      <Menu.Item
        onClick={() => browserHistory.push('/about')}
      >
        About
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default NavBar;
